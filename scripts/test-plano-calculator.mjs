import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

function load(file, imports = {}) {
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
  const context = { exports: {}, require: name => { if (!(name in imports)) throw Error(name); return imports[name] } }
  vm.runInNewContext(js, context)
  return context.exports
}
const calculator = load('app/utils/planoCalculator.ts')
const { calculatePlano } = calculator
const { buildPlanoSvg } = load('app/utils/planoSvg.ts')
const { manualFormFromResult, buildManualPaperLayout } = load('app/utils/manualPaperLayout.ts', { './planoCalculator': calculator })
const fixture = JSON.parse(fs.readFileSync('scripts/fixtures/plano-excel.json', 'utf8'))
const golden = calculatePlano(fixture.input)

test('all 18 patterns match the saved final workbook, including trim and selected three groups', () => {
  golden.candidates.forEach((actual, i) => {
    const expected = fixture.patterns[i]
    assert.equal(actual.pattern, expected.D)
    assert.equal(actual.count, expected.S)
    assert.equal(actual.trimArea, expected.X * 100)
    for (const [key, col] of [['trimX', 'Z'], ['trimY', 'AA'], ['maxCutX', 'AC'], ['maxCutY', 'AD']]) assert.ok(Math.abs(actual[key] - expected[col] * 10) < 1e-8, `${i + 1}: ${key}`)
    actual.groups.forEach((group, index) => {
      const [x, y] = [['F', 'G'], ['K', 'L'], ['P', 'Q']][index]
      assert.equal(group.columns * group.rows, expected[x] * expected[y])
    })
  })
  assert.equal(golden.pattern, 11); assert.equal(golden.count, 20); assert.equal(golden.layoutCount, 6)
  assert.deepEqual(Array.from(golden.groups, g => [g.columns, g.rows, g.x, g.y]), [[3, 4, 0, 0], [1, 6, 510, 0], [2, 1, 0, 920]])
})

test('Universal SVG matches every saved SVG_Output line of the final Excel', () => {
  assert.equal(buildPlanoSvg({ ...golden, displayUnit: 'cm' }, { mode: 'Universal' }).svg, fixture.svg)
})

test('CorelDRAW export preserves physical mm, plain attributes and all boxes above the old 400 limit', () => {
  const output = buildPlanoSvg(golden)
  assert.match(output.svg, /width='948mm' height='1534.72mm'/)
  assert.doesNotMatch(output.svg, /style=|<style|<foreignObject|<use|<script|NaN|Infinity/)
  const many = calculatePlano({ width: 1000, height: 1000, cutWidth: 20, cutHeight: 20 })
  const svg = buildPlanoSvg(many).svg
  assert.equal(many.count, 2500)
  assert.match(svg, />2500<\/text>/)
  assert.equal((svg.match(/fill='#F0FDF4'/g) ?? []).length, 2500)
})

test('square cuts, rotated cuts, exact fit, no-fit and decimal boundaries', () => {
  assert.equal(calculatePlano({ width: 610, height: 860, cutWidth: 100, cutHeight: 100 }).count, 48)
  assert.equal(calculatePlano({ width: 100, height: 200, cutWidth: 200, cutHeight: 100 }).count, 1)
  assert.equal(calculatePlano({ width: 100, height: 200, cutWidth: 201, cutHeight: 101 }).count, 0)
  assert.equal(calculatePlano({ width: .3, height: .6, cutWidth: .1, cutHeight: .2 }).count, 9)
  assert.equal(calculatePlano({ ...fixture.input, cutWidth: 230, cutHeight: 170 }).count, 20)
  for (const n of [0, -1, NaN, Infinity, 10001]) assert.throws(() => calculatePlano({ ...fixture.input, cutWidth: n }), /Ukuran/)
  assert.throws(() => calculatePlano({ ...fixture.input, gap: -1 }), /Jarak/)
  assert.throws(() => calculatePlano({ width: 1000, height: 1000, cutWidth: 1, cutHeight: 1 }), /5.000/)
})

test('manual controls round-trip all three groups and keep row-major numbering and gaps', () => {
  const original = { ...golden, name: 'Plano', sizeId: null }
  const manual = buildManualPaperLayout(manualFormFromResult(original), original)
  assert.equal(JSON.stringify(manual.placements), JSON.stringify(golden.placements))
  assert.equal(buildPlanoSvg(manual).svg, buildPlanoSvg(golden).svg)
  const spaced = { ...calculatePlano({ width: 103, height: 103, cutWidth: 25, cutHeight: 25, gap: 1 }), name: 'Gap', sizeId: null }
  assert.equal(spaced.count, 16)
  assert.equal(buildManualPaperLayout(manualFormFromResult(spaced), spaced).placements[1].x, 26)
  const bad = manualFormFromResult(original)
  assert.throws(() => buildManualPaperLayout({ ...bad, columns: 9999 }, original), /5.000/)
  assert.throws(() => buildManualPaperLayout({ ...bad, canvasX: 100 }, original), /batas/)
  assert.throws(() => buildManualPaperLayout({ ...bad, remainderDirection: '-' }, original), /arah/)
  assert.throws(() => buildManualPaperLayout({ ...bad, secondDirection: 'Kanan', secondColumns: 1 }, original), /bertumpuk/)
})

test('varied dimensions and gaps stay within the sheet with no overlaps or missing pieces', () => {
  for (let width = 20; width <= 140; width += 7) for (let height = 20; height <= 150; height += 11) for (const gap of [0, .5, 2]) {
    const result = calculatePlano({ width, height, cutWidth: 13.5, cutHeight: 27, gap })
    assert.equal(result.count, result.placements.length)
    assert.ok(result.utilization <= 100)
    const pieces = result.placements
    pieces.forEach((p, i) => {
      assert.ok(p.x >= 0 && p.y >= 0 && p.x + p.width <= width + 1e-7 && p.y + p.height <= height + 1e-7)
      for (const q of pieces.slice(i + 1)) assert.ok(p.x + p.width + gap <= q.x + 1e-7 || q.x + q.width + gap <= p.x + 1e-7 || p.y + p.height + gap <= q.y + 1e-7 || q.y + q.height + gap <= p.y + 1e-7)
    })
  }
})

test('mm and cm labels do not change geometry or physical export size', () => {
  const cm = buildPlanoSvg({ ...golden, displayUnit: 'cm' })
  const mm = buildPlanoSvg({ ...golden, displayUnit: 'mm' })
  assert.equal(cm.viewBox, mm.viewBox)
  assert.match(cm.svg, />79 x 109 cm</)
  assert.match(mm.svg, />790 x 1090 mm</)
  const plain = buildPlanoSvg(golden, { dimensions: false, table: false })
  assert.doesNotMatch(plain.svg, /<line|Ukuran Plano/)
})

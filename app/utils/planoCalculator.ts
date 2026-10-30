/** Port of Sheet1!D2:AD19 in Kalkulator_SVG_OK_Potongan_Plano.xlsx.
 * Geometry is in mm. The workbook's row order and tie breakers are intentional.
 */
export type PaperOrientation = 'Portrait' | 'Landscape'
export type RemainderDirection = '-' | 'Kanan' | 'Bawah'
export interface PaperGroup {
  orientation: PaperOrientation; direction: RemainderDirection
  columns: number; rows: number; x: number; y: number; width: number; height: number
}
export interface PaperPlacement { x: number; y: number; width: number; height: number; group?: number; isRemainder?: boolean; orientation?: PaperOrientation }
export interface PlanoPattern {
  pattern: number; count: number; groups: PaperGroup[]; trimArea: number
  trimX: number; trimY: number; maxCutX: number; maxCutY: number
}
export interface PlanoInput { width: number; height: number; cutWidth: number; cutHeight: number; gap?: number; displayUnit?: 'mm' | 'cm' }
const floor = (value: number) => Math.max(0, Math.floor(value + 1e-10))
const span = (count: number, size: number, gap: number) => count ? count * (size + gap) - gap : 0

export function validatePaperDimensions(input: PlanoInput) {
  if ([input.width, input.height, input.cutWidth, input.cutHeight].some(n => !Number.isFinite(n) || n <= 0 || n > 10000)) throw new Error('Ukuran harus lebih dari nol dan maksimal 10.000 mm.')
  if (!Number.isFinite(input.gap ?? 0) || (input.gap ?? 0) < 0 || (input.gap ?? 0) > 10000) throw new Error('Jarak potongan harus antara 0 dan 10.000 mm.')
}

export function placementsFromGroups(groups: PaperGroup[], width: number, height: number, gap = 0): PaperPlacement[] {
  if (groups.some(g => !Number.isInteger(g.columns) || !Number.isInteger(g.rows) || g.columns < 0 || g.rows < 0)
      || groups.reduce((sum, g) => sum + g.columns * g.rows, 0) > 5000) throw new Error('Jumlah baris/kolom harus bulat; maksimal 5.000 potongan.')
  const active = groups.filter(g => g.columns * g.rows > 0)
  for (const g of active) {
    if (g.x < 0 || g.y < 0 || g.x + span(g.columns, g.width, gap) > width + 1e-7 || g.y + span(g.rows, g.height, gap) > height + 1e-7) throw new Error('Potongan melewati batas ukuran plano.')
  }
  for (let i = 0; i < active.length; i++) for (let j = i + 1; j < active.length; j++) {
    const a = active[i]!, b = active[j]!
    if (a.x < b.x + span(b.columns, b.width, gap) - 1e-7 && b.x < a.x + span(a.columns, a.width, gap) - 1e-7
        && a.y < b.y + span(b.rows, b.height, gap) - 1e-7 && b.y < a.y + span(a.rows, a.height, gap) - 1e-7) throw new Error('Kelompok potongan saling bertumpuk. Periksa arah dan jumlah sisa.')
  }
  const placements: PaperPlacement[] = []
  groups.forEach((g, group) => {
    if (!g.columns || !g.rows) return
    // Kotak!D:E: number across columns first, then down rows.
    for (let row = 0; row < g.rows; row++) for (let col = 0; col < g.columns; col++) {
      placements.push({ x: g.x + col * (g.width + gap), y: g.y + row * (g.height + gap), width: g.width, height: g.height, group, isRemainder: group > 0, orientation: g.orientation })
    }
  })
  return placements
}

export function calculatePlano(input: PlanoInput) {
  validatePaperDimensions(input)
  const { width, height } = input
  const gap = input.gap ?? 0
  const short = Math.min(input.cutWidth, input.cutHeight), long = Math.max(input.cutWidth, input.cutHeight)
  // Inflated dimensions extend the workbook to the existing inter-piece gap input.
  const W = width + gap, H = height + gap
  const definitions: [PaperOrientation, 'Kanan' | 'Bawah', number, number, boolean][] = [
    ['Portrait', 'Bawah', 0, 0, false], ['Portrait', 'Bawah', 0, 1, false],
    ['Landscape', 'Kanan', 0, 0, false], ['Landscape', 'Kanan', 1, 0, false],
    ['Portrait', 'Kanan', 1, 0, false], ['Landscape', 'Bawah', 0, 1, false],
    ['Portrait', 'Bawah', 0, 2, false], ['Landscape', 'Kanan', 2, 0, false],
    ['Portrait', 'Kanan', 2, 0, false], ['Landscape', 'Bawah', 0, 2, false],
    ['Portrait', 'Kanan', 1, 0, true], ['Portrait', 'Bawah', 0, 1, true],
    ['Landscape', 'Kanan', 1, 0, true], ['Landscape', 'Bawah', 0, 1, true],
    ['Portrait', 'Kanan', 2, 1, true], ['Portrait', 'Bawah', 1, 2, true],
    ['Landscape', 'Kanan', 2, 1, true], ['Landscape', 'Bawah', 1, 2, true],
  ]
  const candidates: PlanoPattern[] = definitions.map(([orientation, direction, reduceX, reduceY, dual], index) => {
    const a = (orientation === 'Portrait' ? short : long) + gap
    const b = (orientation === 'Portrait' ? long : short) + gap
    const F = floor(W / a - reduceX), G = floor(H / b - reduceY)
    let K = 0, L = 0, P = 0, Q = 0
    if (direction === 'Kanan') {
      K = floor((W - F * a) / b); L = floor(H / a)
      if (dual) {
        Q = floor((H - G * b) / a)
        const fullRows = floor(H / a), shortRows = floor(G * b / a)
        const shortCols = floor(F * a / b), fullCols = floor(W / b)
        const rightFirst = (K * fullRows + shortCols * Q) * 10000 + fullRows + shortCols >= (K * shortRows + fullCols * Q) * 10000 + shortRows + fullCols
        L = rightFirst ? fullRows : shortRows; P = rightFirst ? shortCols : fullCols
      }
    } else {
      K = floor(W / b); L = floor((H - G * b) / a)
      if (dual) {
        P = floor((W - F * a) / b)
        const fullCols = floor(W / b), shortCols = floor(F * a / b)
        const shortRows = floor(G * b / a), fullRows = floor(H / a)
        const bottomFirst = (fullCols * L + P * shortRows) * 10000 + fullCols + shortRows >= (shortCols * L + P * fullRows) * 10000 + shortCols + fullRows
        K = bottomFirst ? fullCols : shortCols; Q = bottomFirst ? shortRows : fullRows
      }
    }
    const primary = F * G, remainder = K * L, second = P * Q
    const T = primary ? F * a : 0, V = primary ? G * b : 0
    const rightCount = direction === 'Kanan' ? remainder : second
    const bottomCount = direction === 'Bawah' ? remainder : second
    const rightCols = direction === 'Kanan' ? K : P, bottomRows = direction === 'Bawah' ? L : Q
    // Preserve Sheet1!T:X, including its preference for the primary block extent.
    const U = primary ? (rightCount ? T + rightCols * b : 0) : remainder ? K * b : second ? P * b : 0
    const Y = primary ? (bottomCount ? V + bottomRows * a : 0) : remainder ? L * a : second ? Q * a : 0
    const other: PaperOrientation = orientation === 'Portrait' ? 'Landscape' : 'Portrait'
    const group = (columns: number, rows: number, position: PaperOrientation, dir: RemainderDirection): PaperGroup => ({
      columns: columns * rows ? columns : 0, rows: columns * rows ? rows : 0, orientation: position, direction: dir,
      x: dir === 'Kanan' ? T : 0, y: dir === 'Bawah' ? V : 0,
      width: position === 'Portrait' ? short : long, height: position === 'Portrait' ? long : short,
    })
    const groups = [group(F, G, orientation, '-'), group(K, L, other, direction), group(P, Q, other, dual ? direction === 'Kanan' ? 'Bawah' : 'Kanan' : '-')]
    const division = (left: number, count: number, fallback: number) => count ? left / count : fallback
    const rc = rightCount ? rightCols : 0, br = bottomCount ? bottomRows : 0
    const bc = bottomCount ? (direction === 'Bawah' ? K : P) : 0, rr = rightCount ? (direction === 'Kanan' ? L : Q) : 0
    const rawX = Math.min(division(W - F * a - rc * b, F + rc, 1000000), bc ? division(W - bc * b, bc, 1000000) : 1000000)
    const rawY = Math.min(division(H - G * b - br * a, G + br, 1000000), rr ? division(H - rr * a, rr, 1000000) : 1000000)
    const precision = input.displayUnit === 'cm' ? 1 : .1
    const truncate = (value: number) => Math.trunc((value === 1000000 ? 0 : value) / precision + 1e-9) * precision
    const count = primary + remainder + second
    const trimX = count ? truncate(rawX) : 0, trimY = count ? truncate(rawY) : 0
    const proportional = primary > 0 && (remainder > 0 || second > 0)
    return { pattern: index + 1, count, groups, trimArea: Math.max(T, U) * Math.max(V, Y), trimX, trimY,
      maxCutX: proportional ? Math.min(trimX, trimY) : trimX, maxCutY: proportional ? Math.min(trimX, trimY) : trimY }
  })
  // Sheet1!Y: largest count, prefer M=0, then smallest X, then first row.
  const sorted = [...candidates].sort((a, b) => b.count - a.count
    || Number(b.groups[1]!.columns * b.groups[1]!.rows === 0) - Number(a.groups[1]!.columns * a.groups[1]!.rows === 0)
    || a.trimArea - b.trimArea || a.pattern - b.pattern)
  const best = sorted[0]!
  const placements = placementsFromGroups(best.groups, width, height, gap)
  return { ...best, width, height, cutWidth: short, cutHeight: long, gap, placements, candidates, displayUnit: input.displayUnit ?? 'mm',
    layoutCount: new Set(candidates.filter(c => c.count > 0).map(c => c.count)).size,
    utilization: Number((best.count * short * long / (width * height) * 100).toFixed(2)), method: 'excel-18-patterns' }
}

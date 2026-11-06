import type { PaperGroup, PaperPlacement } from './planoCalculator'

export interface PlanoSvgLayout {
  width: number; height: number; cutWidth?: number; cutHeight?: number
  count: number; placements: PaperPlacement[]; groups?: PaperGroup[]; displayUnit?: 'mm' | 'cm'
}
export interface PlanoSvgOptions { mode?: 'Universal' | 'CorelDRAW'; dimensions?: boolean; table?: boolean }
const number = (value: number) => String(Number((value + Number.EPSILON * Math.abs(value)).toFixed(2)))
const escape = (value: unknown) => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]!)

/** Kalkulator_SVG!B66:B149 and Kotak!N:O. One SVG unit = one physical mm. */
export function buildPlanoSvg(layout: PlanoSvgLayout, options: PlanoSvgOptions = {}) {
  const { width: w, height: h, placements } = layout
  if (![w, h].every(n => Number.isFinite(n) && n > 0) || layout.count !== placements.length) throw new Error('Ukuran atau jumlah potongan SVG tidak valid.')
  if (placements.some(p => [p.x, p.y, p.width, p.height].some(n => !Number.isFinite(n)) || p.width <= 0 || p.height <= 0)) throw new Error('Koordinat SVG tidak valid.')
  const unit = layout.displayUnit ?? 'mm', unitScale = unit === 'cm' ? 10 : 1
  const cutX = layout.cutWidth ?? placements[0]?.width ?? 0, cutY = layout.cutHeight ?? placements[0]?.height ?? 0
  const longest = Math.max(w, h), stroke = .0014 * longest, thin = .6 * stroke
  const marginX = Math.max(.1 * w, .07 * longest), marginY = Math.max(.14 * h, .07 * longest)
  const offset = .028 * longest, tick = .008 * longest
  const boxFont = Math.min(.2075 * Math.min(cutX, cutY), .04 * longest)
  const dimensionFont = .019 * longest, tableFont = .0155 * longest
  const labels = ['Ukuran Plano', 'Ukuran Potongan', 'Jumlah Potongan']
  const values = [`${number(w / unitScale)} x ${number(h / unitScale)} ${unit}`, `${number(cutX / unitScale)} x ${number(cutY / unitScale)} ${unit}`, String(layout.count)]
  const rowHeight = 2 * tableFont, padding = .9 * tableFont, radius = .55 * tableFont
  const labelWidth = tableFont * (.58 * Math.max(...labels.map(s => s.length)) + 1.8)
  const valueWidth = tableFont * (.64 * Math.max(...values.map(s => s.length)) + 1.8)
  const tableWidth = labelWidth + valueWidth, tableHeight = 3 * rowHeight, tableY = .02 * longest
  const header = options.table === false ? 0 : tableY + tableHeight + .015 * longest
  // Very narrow canvases still need room for the information table.
  const extraLeft = options.table === false ? 0 : Math.max(0, tableWidth - w - marginX)
  const x = marginX + extraLeft, y = header + marginY
  const areaWidth = w + 2 * marginX + extraLeft, areaHeight = header + h + 2 * marginY
  const tableX = x + w - tableWidth
  const elements: string[] = []
  const attrs = (attributes: Record<string, string | number>) => Object.entries(attributes).map(([key, value]) => `${key}='${escape(typeof value === 'number' ? number(value) : value)}'`).join(' ')
  const element = (tag: string, attributes: Record<string, string | number>, content?: string) => `<${tag} ${attrs(attributes)}${content === undefined ? '/>' : `>${escape(content)}</${tag}>`}`
  const rect = (px: number, py: number, width: number, height: number, fill: string, color?: string, weight = thin, rx?: number) => element('rect', { fill, ...(color ? { stroke: color, 'stroke-width': weight } : {}), x: px, y: py, width, height, ...(rx !== undefined ? { rx } : {}) })
  const line = (x1: number, y1: number, x2: number, y2: number, color = '#64748B', round = true) => element('line', { stroke: color, 'stroke-width': thin, ...(round ? { 'stroke-linecap': 'round' } : {}), x1, y1, x2, y2 })
  const text = (px: number, py: number, value: string, font: number, color: string, centered = true, bold = true, transform?: string) => element('text', { x: px, y: py, ...(centered ? { 'text-anchor': 'middle' } : {}), 'font-family': 'Segoe UI', 'font-weight': bold ? 'bold' : 'normal', 'font-size': font, fill: color, ...(transform ? { transform } : {}) }, value)
  elements.push(rect(0, 0, areaWidth, areaHeight, '#F8FAFC'), rect(x, y, w, h, '#FFFFFF', '#334155', stroke * 1.6))
  const landscape = (p: PaperPlacement) => p.orientation ? p.orientation === 'Landscape' : p.width > p.height
  for (const p of placements) elements.push(rect(x + p.x, y + p.y, p.width, p.height, landscape(p) ? '#EFF6FF' : '#F0FDF4', landscape(p) ? '#2563EB' : '#16A34A', stroke))
  placements.forEach((p, i) => elements.push(text(x + p.x + p.width / 2, y + p.y + p.height / 2 + .35 * boxFont, String(i + 1), boxFont, landscape(p) ? '#1D4ED8' : '#15803D')))
  if (options.dimensions !== false) {
    const primary = placements.filter(p => p.group !== undefined ? p.group === 0 : !p.isRemainder)
    const centerW = Math.max(0, ...primary.map(p => p.x + p.width)), centerH = Math.max(0, ...primary.map(p => p.y + p.height))
    const dimension = (px: number, py: number, length: number, vertical: boolean) => {
      const label = number(length / unitScale), labelW = dimensionFont * (.62 * label.length + 1.8), labelH = dimensionFont * 1.7
      const cx = px + (vertical ? 0 : length / 2), cy = py + (vertical ? length / 2 : 0)
      if (vertical) elements.push(line(px - tick, py, px + tick, py), line(px - tick, py + length, px + tick, py + length), line(px, py, px, py + length))
      else elements.push(line(px, py - tick, px, py + tick), line(px + length, py - tick, px + length, py + tick), line(px, py, px + length, py))
      elements.push(rect(cx - (vertical ? labelH : labelW) / 2, cy - (vertical ? labelW : labelH) / 2, vertical ? labelH : labelW, vertical ? labelW : labelH, '#F8FAFC', '#64748B', thin, (vertical ? labelW : labelH) / 2))
      elements.push(text(cx, cy + .35 * dimensionFont, label, dimensionFont, '#64748B', true, true, vertical ? `rotate(-90 ${number(cx)} ${number(cy)})` : undefined))
    }
    dimension(x, y - offset, centerW, false)
    dimension(x, y + h + offset, w, false)
    dimension(x - offset, y, centerH, true)
    dimension(x + w + offset, y, h, true)
  }
  if (options.table !== false) {
    const n = number, tx = tableX, ty = tableY, r = radius, bottom = ty + tableHeight
    elements.push(rect(tx, ty, tableWidth, tableHeight, '#FFFFFF', undefined, thin, r))
    elements.push(element('path', { fill: '#F1F5F9', d: `M ${n(tx + r)} ${n(ty)} L ${n(tx + labelWidth)} ${n(ty)} L ${n(tx + labelWidth)} ${n(bottom)} L ${n(tx + r)} ${n(bottom)} A ${n(r)} ${n(r)} 0 0 1 ${n(tx)} ${n(bottom - r)} L ${n(tx)} ${n(ty + r)} A ${n(r)} ${n(r)} 0 0 1 ${n(tx + r)} ${n(ty)} Z` }))
    elements.push(rect(tx, ty, tableWidth, tableHeight, 'none', '#CBD5E1', thin, r))
    elements.push(line(tx, ty + rowHeight, tx + tableWidth, ty + rowHeight, '#CBD5E1', false), line(tx, ty + rowHeight * 2, tx + tableWidth, ty + rowHeight * 2, '#CBD5E1', false), line(tx + labelWidth, ty, tx + labelWidth, bottom, '#CBD5E1', false))
    labels.forEach((label, i) => elements.push(text(tx + padding, ty + rowHeight * (i + .5) + .35 * tableFont, label, tableFont, '#64748B', false, false)))
    values.forEach((value, i) => elements.push(text(tx + labelWidth + padding, ty + rowHeight * (i + .5) + .35 * tableFont, value, tableFont, '#0F172A', false)))
  }
  const viewBox = `0 0 ${number(areaWidth)} ${number(areaHeight)}`
  const body = elements.join('\n')
  const root = attrs({ xmlns: 'http://www.w3.org/2000/svg', width: `${number(areaWidth)}mm`, height: `${number(areaHeight)}mm`, viewBox, ...(options.mode === 'Universal' ? { style: 'max-width:60vw;max-height:95vh' } : {}) })
  return { width: areaWidth, height: areaHeight, viewBox, body, svg: `<svg ${root}>\n${body}\n</svg>` }
}

export function downloadPlanoSvg(layout: PlanoSvgLayout, options: PlanoSvgOptions = {}) {
  const blob = new Blob([buildPlanoSvg(layout, options).svg], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob), link = document.createElement('a')
  link.href = url; link.download = 'layout-plano.svg'
  document.body.appendChild(link); link.click(); link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

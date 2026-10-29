import type { CuttingResult } from '~/composables/usePaperCutting'
export interface ManualPaperLayout { canvasX: number; canvasY: number; cutX: number; cutY: number; position: string; columns: number; rows: number; remainderDirection: string; remainderPosition: string; remainderColumns: number; remainderRows: number }
export function buildManualPaperLayout(form: ManualPaperLayout, original: CuttingResult): CuttingResult {
 const dimensions = [form.canvasX, form.canvasY, form.cutX, form.cutY]
 if (dimensions.some(value => !Number.isFinite(value) || value <= 0 || value > 10000)) throw new Error('Ukuran harus lebih dari nol dan maksimal 10.000 mm.')
 const counts = [form.columns, form.rows, form.remainderColumns, form.remainderRows]
 if (counts.some(value => !Number.isInteger(value) || value < 0) || form.columns * form.rows + form.remainderColumns * form.remainderRows > 5000) throw new Error('Jumlah baris/kolom harus bulat; maksimal 5.000 potongan.')
 const a = form.position === 'Landscape' ? form.cutY : form.cutX
 const b = form.position === 'Landscape' ? form.cutX : form.cutY
 const rw = form.remainderPosition === 'Landscape' ? form.cutY : form.cutX
 const rh = form.remainderPosition === 'Landscape' ? form.cutX : form.cutY
 // Original generate-plano.js: adjacent boxes, no added gap or Qty clipping.
 const gap = 0
 const placements: CuttingResult['placements'] = []
 function grid(x: number, y: number, columns: number, rows: number, width: number, height: number, isRemainder = false) {
   for (let i = 0; i < columns; i++) for (let j = 0; j < rows; j++) placements.push({ x: x + i * (width + gap), y: y + j * (height + gap), width, height, isRemainder })
 }
 grid(0, 0, form.columns, form.rows, a, b)
 grid(form.remainderDirection === 'Kanan' ? form.columns * (a + gap) : 0, form.remainderDirection === 'Bawah' ? form.rows * (b + gap) : 0, form.remainderColumns, form.remainderRows, rw, rh, true)
 return { ...original, gap: 0, cutWidth: form.cutX, cutHeight: form.cutY, name: `${original.name} (manual)`, width: form.canvasX, height: form.canvasY, count: placements.length, utilization: Number((placements.length * form.cutX * form.cutY / (form.canvasX * form.canvasY) * 100).toFixed(2)), placements }
}


export function manualFormFromResult(result: CuttingResult): ManualPaperLayout {
 const first = result.placements[0]
 const cutX = result.cutWidth ?? first?.width ?? 1
 const cutY = result.cutHeight ?? first?.height ?? 1
 const hasGroups = result.placements.some(piece => piece.isRemainder !== undefined)
 const primary = result.placements.filter(piece => hasGroups ? !piece.isRemainder : piece.width === first?.width && piece.height === first?.height)
 const remainder = result.placements.filter(piece => hasGroups ? piece.isRemainder : piece.width !== first?.width || piece.height !== first?.height)
 const countAxis = (pieces: CuttingResult['placements'], key: 'x' | 'y') => new Set(pieces.map(piece => piece[key])).size
 const remainderX = Math.min(...remainder.map(piece => piece.x))
 const right = Math.max(...primary.map(piece => piece.x + piece.width))
 return { canvasX: result.width, canvasY: result.height, cutX, cutY, position: first?.width === cutX ? 'Portrait' : 'Landscape', columns: countAxis(primary, 'x'), rows: countAxis(primary, 'y'), remainderDirection: remainder.length ? (remainderX >= right ? 'Kanan' : 'Bawah') : '-', remainderPosition: remainder.length ? (remainder[0]!.width === cutX ? 'Portrait' : 'Landscape') : '-', remainderColumns: countAxis(remainder, 'x'), remainderRows: countAxis(remainder, 'y') }
}

// Geometry stays in millimetres; both sets of inputs use the unit chosen on the page.
export function paperDimensionFields(form: ManualPaperLayout, unit: () => 'mm' | 'cm') {
 const fields = {} as Pick<ManualPaperLayout, 'canvasX' | 'canvasY' | 'cutX' | 'cutY'>
 for (const key of ['canvasX', 'canvasY', 'cutX', 'cutY'] as const) {
  Object.defineProperty(fields, key, {
   enumerable: true,
   get: () => Number((form[key] / (unit() === 'cm' ? 10 : 1)).toFixed(6)),
   set: (value: number) => { form[key] = Number(value) * (unit() === 'cm' ? 10 : 1) },
  })
 }
 return fields
}

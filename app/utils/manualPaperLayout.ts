import type { CuttingResult } from '~/composables/usePaperCutting'
import { placementsFromGroups, validatePaperDimensions, type PaperGroup, type PaperOrientation, type RemainderDirection } from './planoCalculator'
export interface ManualPaperLayout { canvasX: number; canvasY: number; cutX: number; cutY: number; position: string; columns: number; rows: number; remainderDirection: string; remainderPosition: string; remainderColumns: number; remainderRows: number; secondDirection?: string; secondPosition?: string; secondColumns?: number; secondRows?: number }
export function buildManualPaperLayout(form: ManualPaperLayout, original: CuttingResult): CuttingResult {
 const gap = original.gap ?? 0
 validatePaperDimensions({ width: form.canvasX, height: form.canvasY, cutWidth: form.cutX, cutHeight: form.cutY, gap })
 const short = Math.min(form.cutX, form.cutY), long = Math.max(form.cutX, form.cutY)
 const a = form.position === 'Landscape' ? long : short, b = form.position === 'Landscape' ? short : long
 const active = form.columns * form.rows > 0
 function group(columns: number, rows: number, position: string, direction: string, primary = false): PaperGroup {
   if (columns * rows > 0 && ((!primary && !['Kanan', 'Bawah'].includes(direction)) || !['Portrait', 'Landscape'].includes(position))) throw new Error('Pilih posisi dan arah untuk kelompok potongan yang diisi.')
   return { columns, rows, orientation: position as PaperOrientation, direction: direction as RemainderDirection,
     x: active && direction === 'Kanan' ? form.columns * (a + gap) : 0, y: active && direction === 'Bawah' ? form.rows * (b + gap) : 0,
     width: position === 'Landscape' ? long : short, height: position === 'Landscape' ? short : long }
 }
 const groups = [group(form.columns, form.rows, form.position, '-', true), group(form.remainderColumns, form.remainderRows, form.remainderPosition, form.remainderDirection), group(form.secondColumns ?? 0, form.secondRows ?? 0, form.secondPosition ?? '-', form.secondDirection ?? '-')]
 const placements = placementsFromGroups(groups, form.canvasX, form.canvasY, gap)
 return { ...original, pattern: undefined, gap, cutWidth: short, cutHeight: long, name: `${original.name.replace(/ \(manual\)$/, '')} (manual)`, width: form.canvasX, height: form.canvasY, count: placements.length, utilization: Number((placements.length * short * long / (form.canvasX * form.canvasY) * 100).toFixed(2)), placements, groups }
}


export function manualFormFromResult(result: CuttingResult): ManualPaperLayout {
 if (result.groups?.length) {
  const [primary, remainder, second] = result.groups
  return { canvasX: result.width, canvasY: result.height, cutX: result.cutWidth ?? 1, cutY: result.cutHeight ?? 1,
    position: primary!.orientation, columns: primary!.columns, rows: primary!.rows,
    remainderDirection: remainder?.direction ?? '-', remainderPosition: remainder?.orientation ?? '-', remainderColumns: remainder?.columns ?? 0, remainderRows: remainder?.rows ?? 0,
    secondDirection: second?.direction ?? '-', secondPosition: second?.orientation ?? '-', secondColumns: second?.columns ?? 0, secondRows: second?.rows ?? 0 }
 }
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

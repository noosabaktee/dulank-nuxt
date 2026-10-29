export type ActionToastTone = 'success' | 'error' | 'info'
export interface ActionToastNotice { message: string; tone: ActionToastTone; source?: 'request' | 'page' }
export const ACTION_TOAST_EVENT = 'dulank:action-toast'
/** Client event avoids storing per-user notifications in SSR module state. */
export function showActionToast(message: string, tone: ActionToastTone = 'success', source: 'request' | 'page' = 'page') {
  if (import.meta.client && message.trim()) window.dispatchEvent(new CustomEvent<ActionToastNotice>(ACTION_TOAST_EVENT, { detail: { message, tone, source } }))
}

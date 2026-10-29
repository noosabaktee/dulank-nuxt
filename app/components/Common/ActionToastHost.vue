<script setup lang="ts">
import { ACTION_TOAST_EVENT, type ActionToastNotice } from '~/utils/actionToast'
const notice = ref<ActionToastNotice | null>(null)
let timer: ReturnType<typeof setTimeout> | undefined
let receivedAt = 0
function dismiss() { notice.value = null; if (timer) clearTimeout(timer) }
function receive(event: Event) {
  const next = (event as CustomEvent<ActionToastNotice>).detail
  const now = Date.now()
  // A page's precise feedback replaces the generic request notification.
  if (notice.value?.source === 'page' && next.source === 'request' && next.tone === notice.value.tone && now - receivedAt < 900) return
  notice.value = next
  receivedAt = now
  if (timer) clearTimeout(timer)
  timer = setTimeout(dismiss, next.tone === 'error' ? 7000 : 4500)
}
onMounted(() => window.addEventListener(ACTION_TOAST_EVENT, receive))
onBeforeUnmount(() => { window.removeEventListener(ACTION_TOAST_EVENT, receive); if (timer) clearTimeout(timer) })
</script>
<template>
  <Teleport to="body">
    <Transition name="action-toast">
      <div v-if="notice" :role="notice.tone === 'error' ? 'alert' : 'status'" :aria-live="notice.tone === 'error' ? 'assertive' : 'polite'" class="action-toast" :class="`action-toast--${notice.tone}`">
        <span class="action-toast__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path v-if="notice.tone === 'success'" d="m8 12 3 3 5-6" />
            <path v-else-if="notice.tone === 'error'" d="m9 9 6 6m0-6-6 6" />
            <path v-else d="M12 11v6m0-10v.1" />
          </svg>
        </span>
        <div class="action-toast__content">
          <strong>{{ notice.tone === 'success' ? 'Berhasil' : notice.tone === 'error' ? 'Belum berhasil' : 'Informasi' }}</strong>
          <p>{{ notice.message }}</p>
        </div>
        <button type="button" aria-label="Tutup notifikasi" class="action-toast__close" @click="dismiss">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18" /></svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.action-toast { position: fixed; right: 24px; bottom: 24px; z-index: 10000; display: flex; align-items: flex-start; gap: 12px; width: 360px; max-width: calc(100vw - 32px); box-sizing: border-box; padding: 16px; border: 1px solid rgba(255,255,255,.18); border-radius: 12px; background: #15803d; color: #fff; box-shadow: 0 8px 28px rgba(0,0,0,.18); font-family: inherit; }
.action-toast--error { background: #b91c1c; }
.action-toast--info { background: #1d4ed8; }
.action-toast__icon { display: flex; flex-shrink: 0; margin-top: 1px; }
.action-toast__content { flex: 1; min-width: 0; }
.action-toast__content strong { display: block; margin: 0 0 3px; color: #fff; font-size: 14px; font-weight: 600; line-height: 1.4; }
.action-toast__content p { margin: 0; color: #fff; opacity: .95; font-size: 13px; font-weight: 400; line-height: 1.5; overflow-wrap: anywhere; }
.action-toast__close { display: flex; flex-shrink: 0; padding: 4px; margin: -3px -3px 0 0; border: 0; border-radius: 5px; background: transparent; color: #fff; cursor: pointer; }
.action-toast__close:hover { background: rgba(255,255,255,.15); }
.action-toast__close:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.action-toast-enter-active, .action-toast-leave-active { transition: opacity .18s ease, transform .18s ease; }
.action-toast-enter-from, .action-toast-leave-to { opacity: 0; transform: translateY(10px); }
@media (max-width: 480px) { .action-toast { right: 16px; bottom: 16px; } }
@media (prefers-reduced-motion: reduce) { .action-toast-enter-active, .action-toast-leave-active { transition: none; } }
@media print { .action-toast { display: none; } }
</style>

<script setup lang="ts">
import type { SupportTicket } from "#server/types/ticket";

const props = defineProps<{ ticket: SupportTicket | null }>();
const emit = defineEmits<{ submitted: [] }>();
const message = ref("");
const close = ref(false);
const submitting = ref(false);
const error = ref("");

async function submit() {
  if (!props.ticket || !message.value.trim()) return;
  submitting.value = true;
  error.value = "";
  try {
    await $fetch(`/api/tickets/${props.ticket.id}/replies`, {
      method: "POST",
      body: { message: message.value.trim(), close: close.value },
    });
    message.value = "";
    close.value = false;
    emit("submitted");
  } catch {
    error.value = "Pesan tidak dapat dikirim. Silakan coba lagi.";
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <div class="mb-4">
    <p v-if="!ticket" class="text-muted">Tiket tidak ditemukan.</p>
    <template v-else>
      <div class="mb-3">
        <div class="d-flex mb-2">
          <img
            alt="Avatar"
            class="object-fit-cover rounded-circle me-2"
            src="/images/profile.png"
            width="48"
            height="48"
          />
          <div>
            <div class="fw-semibold small">{{ ticket.id }}</div>
            <div class="small my-1">{{ ticket.subject }}</div>
            <div class="text-secondary text-standard mb-2">
              {{ ticket.date }}
            </div>
          </div>
        </div>
        <p class="text-standard">{{ ticket.message }}</p>
        <hr class="my-3" />
        <div
          v-for="(reply, index) in ticket.replies"
          :key="`${reply.date}-${index}`"
          class="d-flex mb-2"
        >
          <img
            alt="Avatar"
            class="object-fit-cover rounded-circle me-2"
            src="/images/profile.png"
            width="48"
            height="48"
          />
          <div>
            <div class="fw-semibold small">
              {{ reply.from === "support" ? "Support" : "Anda" }}
            </div>
            <div class="small my-1">{{ reply.message }}</div>
            <div class="text-secondary text-standard">{{ reply.date }}</div>
          </div>
        </div>
        <hr class="my-3" />
      </div>
      <template v-if="ticket.status !== 'closed'">
        <div class="mb-2 fw-semibold small">Leave a Message</div>
        <form @submit.prevent="submit">
          <div class="mb-3">
            <textarea
              v-model="message"
              class="form-control text-standard"
              placeholder="Write your message here..."
              rows="4"
              required
            ></textarea>
          </div>
          <div class="mb-3 form-check">
            <input
              id="closeTicket"
              v-model="close"
              class="form-check-input"
              type="checkbox"
            /><label class="form-check-label text-standard" for="closeTicket"
              >Submit and close the ticket</label
            >
          </div>
          <p v-if="error" class="text-danger">{{ error }}</p>
          <div class="d-flex justify-content-end">
            <button
              class="btn my-btn-primary px-4"
              type="submit"
              :disabled="submitting"
            >
              {{ submitting ? "Mengirim..." : "Submit message" }}
            </button>
          </div>
        </form>
      </template>
    </template>
  </div>
</template>

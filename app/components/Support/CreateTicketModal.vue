<script setup lang="ts">
const emit = defineEmits<{ created: [] }>();
const subject = ref("");
const type = ref("");
const priority = ref("");
const message = ref("");
const submitting = ref(false);
const error = ref("");

async function submit() {
  submitting.value = true;
  error.value = "";
  try {
    await $fetch("/api/tickets", {
      method: "POST",
      body: {
        userId: 1,
        subject: subject.value,
        type: type.value,
        priority: priority.value,
        message: message.value,
      },
    });
    subject.value = "";
    type.value = "";
    priority.value = "";
    message.value = "";
    emit("created");
    const modal = document.getElementById("addNewTicketModal");
    if (modal)
      (window as any).bootstrap?.Modal.getOrCreateInstance(modal).hide();
  } catch {
    error.value = "Tiket tidak dapat dibuat. Silakan coba lagi.";
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <div
    id="addNewTicketModal"
    class="modal fade text-standard"
    tabindex="-1"
    aria-labelledby="addNewTicketModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 id="addNewTicketModalLabel" class="modal-title">
            Submit New Ticket
          </h5>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="text-secondary mb-4">
            We normally respond tickets within 2 business days.
          </p>
          <form @submit.prevent="submit">
            <div class="mb-3">
              <label class="form-label small" for="ticket-subject"
                >Subject</label
              ><input
                id="ticket-subject"
                v-model="subject"
                class="form-control"
                placeholder="Enter subject"
                required
              />
            </div>
            <div class="row g-3 mb-3">
              <div class="col-md-6">
                <label class="form-label small" for="ticket-type">Type</label
                ><select
                  id="ticket-type"
                  v-model="type"
                  class="form-select text-standard"
                  required
                >
                  <option disabled value="">Choose Type</option>
                  <option>Website Problem</option>
                  <option>Partner Request</option>
                  <option>Complaint</option>
                  <option>Info Inquiry</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label small" for="ticket-priority"
                  >Priority</label
                ><select
                  id="ticket-priority"
                  v-model="priority"
                  class="form-select text-standard"
                  required
                >
                  <option disabled value="">How urgent is your issue?</option>
                  <option>Urgent</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label small" for="ticket-message"
                >Describe your issue</label
              ><textarea
                id="ticket-message"
                v-model="message"
                class="form-control text-standard"
                placeholder="Describe your issue"
                rows="4"
                required
              ></textarea>
            </div>
            <p v-if="error" class="text-danger">{{ error }}</p>
            <div class="d-flex justify-content-end gap-2">
              <button
                class="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close</button
              ><button
                class="btn my-btn-primary"
                type="submit"
                :disabled="submitting"
              >
                {{ submitting ? "Mengirim..." : "Submit Ticket" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

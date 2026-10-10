<template>
  <div class="col-md-6">
    <p class="fs-6">Contact Us</p>
    <form>
      <div class="form-group my-4">
        <label class="my-1" for="name">Name</label>
        <input
          class="form-control"
          id="name"
          placeholder="Your Name"
          type="text"
        />
      </div>
      <div class="form-group my-4">
        <label class="my-1" for="email">Email</label>
        <input
          class="form-control"
          id="email"
          placeholder="Your Email"
          type="text"
        />
      </div>
      <div class="form-group my-4">
        <label class="my-1" for="phone">Phone</label>
        <input
          class="form-control"
          id="phone"
          placeholder="Your Phone"
          type="text"
        />
      </div>
      <div class="form-group my-4">
        <label class="my-1" for="message">Message</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
      </div>
      <small class="d-none text-standard text-danger" id="info-selected-all"
        ><i class="fa-solid fa-circle-info"></i> please input your message<br
      /></small>
      <div class="d-flex justify-content-end">
        <button class="btn my-btn-primary my-4 w-50" id="send" type="submit">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

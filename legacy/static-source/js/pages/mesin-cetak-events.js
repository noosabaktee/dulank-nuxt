(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initMesinCetakEvents = () => {
    document.querySelectorAll("[data-js-click=\"mesin-cetak-001\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          formSearch.classList.toggle('d-none')
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"mesin-cetak-002\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"mesin-cetak-003\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"mesin-cetak-004\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"mesin-cetak-005\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"mesin-cetak-006\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMesinCetakEvents);
  } else {
    initMesinCetakEvents();
  }
})();

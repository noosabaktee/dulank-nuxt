(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initMesinLaminasiEvents = () => {
    document.querySelectorAll("[data-js-click=\"mesin-laminasi-001\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"mesin-laminasi-002\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"mesin-laminasi-003\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"mesin-laminasi-004\"]").forEach((element) => {
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
    document.addEventListener('DOMContentLoaded', initMesinLaminasiEvents);
  } else {
    initMesinLaminasiEvents();
  }
})();

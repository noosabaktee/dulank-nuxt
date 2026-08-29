(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initMesinPondEvents = () => {
    document.querySelectorAll("[data-js-click=\"mesin-pond-001\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"mesin-pond-002\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"mesin-pond-003\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"mesin-pond-004\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"mesin-pond-005\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          formSearchPisau.classList.toggle('d-none')
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"mesin-pond-006\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"mesin-pond-007\"]").forEach((element) => {
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
    document.addEventListener('DOMContentLoaded', initMesinPondEvents);
  } else {
    initMesinPondEvents();
  }
})();

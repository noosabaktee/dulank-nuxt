(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initKalkulatorPercetakanEvents = () => {
    document.querySelectorAll("[data-js-click=\"kalkulator-percetakan-001\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          clearSelection(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"kalkulator-percetakan-002\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          clearSelection(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"kalkulator-percetakan-003\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          clearSelection(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"kalkulator-percetakan-004\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          clearSelection(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"kalkulator-percetakan-005\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          clearSelection(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKalkulatorPercetakanEvents);
  } else {
    initKalkulatorPercetakanEvents();
  }
})();

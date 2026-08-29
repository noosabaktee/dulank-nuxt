(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initKalenderEvents = () => {
    document.querySelectorAll("[data-js-input=\"kalender-001\"]").forEach((element) => {
      element.addEventListener("input", function (event) {
        const result = (function (event) {
          deleteMin(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-input=\"kalender-002\"]").forEach((element) => {
      element.addEventListener("input", function (event) {
        const result = (function (event) {
          deleteMin(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-input=\"kalender-003\"]").forEach((element) => {
      element.addEventListener("input", function (event) {
        const result = (function (event) {
          deleteMin(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-change=\"kalender-004\"]").forEach((element) => {
      element.addEventListener("change", function (event) {
        const result = (function (event) {
          convertUnit(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKalenderEvents);
  } else {
    initKalenderEvents();
  }
})();

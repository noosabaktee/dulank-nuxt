(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initStoreEvents = () => {
    document.querySelectorAll("[data-js-click=\"store-001\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          updateTabKertas(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"store-002\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          updateTabKertas(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"store-003\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          updateTabKertas(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"store-004\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          updateTabKertas(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"store-005\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          updateTabKertas(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStoreEvents);
  } else {
    initStoreEvents();
  }
})();

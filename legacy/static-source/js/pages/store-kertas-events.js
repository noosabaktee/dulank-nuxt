(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initStoreKertasEvents = () => {
    document.querySelectorAll("[data-js-click=\"store-kertas-001\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"store-kertas-002\"]").forEach((element) => {
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
    document.addEventListener('DOMContentLoaded', initStoreKertasEvents);
  } else {
    initStoreKertasEvents();
  }
})();

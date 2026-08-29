(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initKalkulatorPotongKertasEvents = () => {
    document.querySelectorAll("[data-js-click=\"kalkulator-potong-kertas-001\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          size.classList.toggle('d-none')
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-submit=\"kalkulator-potong-kertas-002\"]").forEach((element) => {
      element.addEventListener("submit", function (event) {
        const result = (function (event) {
          return false;
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKalkulatorPotongKertasEvents);
  } else {
    initKalkulatorPotongKertasEvents();
  }
})();

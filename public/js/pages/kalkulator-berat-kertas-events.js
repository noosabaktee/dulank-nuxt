(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initKalkulatorBeratKertasEvents = () => {
    document.querySelectorAll("[data-js-click=\"kalkulator-berat-kertas-001\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"kalkulator-berat-kertas-002\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          setUnit('cm')
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"kalkulator-berat-kertas-003\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          setUnit('mm')
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKalkulatorBeratKertasEvents);
  } else {
    initKalkulatorBeratKertasEvents();
  }
})();

(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initQuotationAddEvents = () => {
    document.querySelectorAll("[data-js-click=\"quotation-add-001\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          displayShipping(true)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"quotation-add-002\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          displayShipping(false)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuotationAddEvents);
  } else {
    initQuotationAddEvents();
  }
})();

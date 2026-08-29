(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initCheckoutEvents = () => {
    document.querySelectorAll("[data-js-click=\"checkout-001\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"checkout-002\"]").forEach((element) => {
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
    document.addEventListener('DOMContentLoaded', initCheckoutEvents);
  } else {
    initCheckoutEvents();
  }
})();

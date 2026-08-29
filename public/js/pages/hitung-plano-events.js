(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initHitungPlanoEvents = () => {
    document.querySelectorAll("[data-js-submit=\"hitung-plano-001\"]").forEach((element) => {
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
    document.addEventListener('DOMContentLoaded', initHitungPlanoEvents);
  } else {
    initHitungPlanoEvents();
  }
})();

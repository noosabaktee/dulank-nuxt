(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initSuccessEvents = () => {
    document.querySelectorAll("[data-js-click=\"success-001\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          navigator.clipboard.writeText('109-2993242')
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSuccessEvents);
  } else {
    initSuccessEvents();
  }
})();

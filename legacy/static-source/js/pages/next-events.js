(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initNextEvents = () => {
    document.querySelectorAll("[data-js-click=\"next-001\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          hideEl(this.closest('.save-item').querySelector('.design-link-input'))
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"next-002\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          showEl(this.closest('.save-item').querySelector('.design-link-input'))
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"next-003\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          hideEl(this.closest('.save-item').querySelector('.design-link-input'))
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"next-004\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          showEl(this.closest('.save-item').querySelector('.design-link-input'))
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNextEvents);
  } else {
    initNextEvents();
  }
})();

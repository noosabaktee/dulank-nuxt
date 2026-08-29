(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initSidebarKalkulatorEvents = () => {
    document.querySelectorAll("[data-js-click=\"sidebar-kalkulator-001\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          this.classList.toggle('flip-vertical')
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"sidebar-kalkulator-002\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          this.classList.toggle('flip-vertical')
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"sidebar-kalkulator-003\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"sidebar-kalkulator-004\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"sidebar-kalkulator-005\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"sidebar-kalkulator-006\"]").forEach((element) => {
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
    document.addEventListener('DOMContentLoaded', initSidebarKalkulatorEvents);
  } else {
    initSidebarKalkulatorEvents();
  }
})();

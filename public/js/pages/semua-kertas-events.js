(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initSemuaKertasEvents = () => {
    document.querySelectorAll("[data-js-click=\"semua-kertas-001\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"semua-kertas-002\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"semua-kertas-003\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"semua-kertas-004\"]").forEach((element) => {
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
    document.querySelectorAll("[data-js-click=\"semua-kertas-005\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          formSearch.classList.toggle('d-none')
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"semua-kertas-006\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"semua-kertas-007\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"semua-kertas-008\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"semua-kertas-009\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"semua-kertas-010\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"semua-kertas-011\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"semua-kertas-012\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-click=\"semua-kertas-013\"]").forEach((element) => {
      element.addEventListener("click", function (event) {
        const result = (function (event) {
          sweetDelete()
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSemuaKertasEvents);
  } else {
    initSemuaKertasEvents();
  }
})();

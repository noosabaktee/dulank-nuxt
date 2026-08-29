(() => {
  /* Event listeners extracted from former inline HTML handlers. */
  const initCetakBukuEvents = () => {
    document.querySelectorAll("[data-js-input=\"cetak-buku-001\"]").forEach((element) => {
      element.addEventListener("input", function (event) {
        const result = (function (event) {
          deleteMin(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-input=\"cetak-buku-002\"]").forEach((element) => {
      element.addEventListener("input", function (event) {
        const result = (function (event) {
          deleteMin(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-change=\"cetak-buku-003\"]").forEach((element) => {
      element.addEventListener("change", function (event) {
        const result = (function (event) {
          convertUnit(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-input=\"cetak-buku-004\"]").forEach((element) => {
      element.addEventListener("input", function (event) {
        const result = (function (event) {
          deleteMin(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });
    document.querySelectorAll("[data-js-input=\"cetak-buku-005\"]").forEach((element) => {
      element.addEventListener("input", function (event) {
        const result = (function (event) {
          deleteMin(this)
        }).call(this, event);
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    });

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCetakBukuEvents);
  } else {
    initCetakBukuEvents();
  }
})();

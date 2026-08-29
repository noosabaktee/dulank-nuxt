      function updateBookPageRows() {
        const activeNav = document.querySelector('.nav-product.fw-bold')?.textContent.trim();
        const colorRow = document.querySelector('.page-color-row');
        const pageLabel = document.querySelector('#pageBwLabel');
        if (!colorRow || !pageLabel) return;

        const isWritingBook = activeNav === 'Buku Tulis Custom';
        colorRow.classList.toggle('d-none', isWritingBook);
        pageLabel.textContent = isWritingBook ? 'Jumlah Halaman' : 'Jumlah Halaman 1 Warna';
      }

      function orderBookSpecRows() {
        const form = document.querySelector('#specForm');
        if (!form) return;
        form.style.display = 'flex';
        form.style.flexDirection = 'column';

        ['orientation', 'size', 'cover', 'lamination', 'type', 'binding', 'side'].forEach((id, index) => {
          document.getElementById(id)?.closest('.mb-3')?.style.setProperty('order', index + 1);
        });
        document.querySelector('.page-bw-row')?.style.setProperty('order', 8);
        document.querySelector('.page-color-row')?.style.setProperty('order', 9);
        document.querySelector('#info-selected-all')?.style.setProperty('order', 10);
        document.querySelector('#btnHitung')?.style.setProperty('order', 11);
      }

      document.querySelectorAll('.nav-product').forEach(nav => {
        nav.addEventListener('click', updateBookPageRows);
      });
      orderBookSpecRows();
      updateBookPageRows();

      window.productPageConfig = {
        selectedNav: 'Buku Bacaan / Buku Paket',
        summaryPrefix: 'Cetak Buku',
        summaryFields: {
          'Buku Bacaan / Buku Paket': ['orientation', 'size', 'cover', 'lamination', 'type', 'binding', 'side'],
          'Buku Tulis Custom': ['orientation', 'size', 'cover', 'lamination', 'type', 'binding', 'side']
        },
        result: {
          orientation: 'Portrait (Berdiri)',
          size: 'A4 (210x297mm)',
          cover: 'Softcover',
          lamination: 'Glossy',
          type: 'HVS 70gr',
          binding: 'Lem Panas',
          side: '1 Warna'
        },
        spec: {
          'Buku Bacaan / Buku Paket': {
            text: 'Cetak buku bacaan, buku paket, modul, atau naskah tebal dengan pilihan cover, isi buku, jilid, dan kombinasi cetak satu warna maupun full color.',
            input: ['orientation', 'size', 'cover', 'lamination', 'type', 'binding', 'side'],
            options: {
              orientation: ['Portrait (Berdiri)', 'Landscape (Tidur)'],
              size: ['A4 (210x297mm)', 'A5 (148x210mm)', 'B4 (250x353mm)', 'B5 (250x176mm)'],
              cover: ['Softcover', 'HardCover'],
              lamination: ['Glossy', 'Doff', 'Spot UV'],
              type: ['HVS 70gr', 'Bookpaper 70gr', 'Art Paper 100gr'],
              binding: ['Lem Panas', 'Spiral', 'Steples', 'Perfect Binding'],
              side: ['1 Warna', 'Full Color', '1 Warna & Full Color']
            }
          },
          'Buku Tulis Custom': {
            text: 'Cetak buku tulis custom untuk sekolah, kantor, promosi, dan komunitas dengan pilihan cover, ukuran, isi, laminasi, serta finishing jilid.',
            input: ['orientation', 'size', 'cover', 'lamination', 'type', 'binding', 'side'],
            options: {
              orientation: ['Portrait (Berdiri)'],
              size: ['A4 (210x297mm)', 'A5 (148x210mm)', 'B4 (250x353mm)', 'B5 (250x176mm)'],
              cover: ['Softcover', 'HardCover'],
              lamination: ['Glossy', 'Doff', 'Spot UV'],
              type: ['HVS 70gr', 'Bookpaper 70gr', 'Art Paper 100gr'],
              binding: ['Steples'],
              side: ['1 Warna']
            }
          }
        }
      };

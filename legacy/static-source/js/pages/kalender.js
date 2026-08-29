      window.productPageConfig = {
        selectedNav: 'Kalender Dinding',
        summaryPrefix: 'Kalender 2027',
        summaryFields: {
          'Kalender Dinding': ['content', 'size', 'hanger', 'type', 'lamination', 'side'],
          'Kalender Meja': ['content', 'size', 'type', 'lamination', 'cover', 'position'],
          'Kalender Bolak Balik Sprial Tengah': ['content', 'size', 'type', 'lamination']
        },
        result: {
          content: '1 Lembar',
          size: 'Kecil 31x43',
          hanger: 'Spiral',
          type: 'Art Paper',
          lamination: 'Tanpa Laminasi',
          side: 'Cetak Full Color',
          cover: 'Tanpa Cover Amplop',
          position: 'Landscape (Tidur)'
        },
        spec: {
          'Kalender Dinding': {
            text: 'Ini text brosur amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!',
            input: ['content', 'size', 'hanger', 'type', 'lamination', 'side'],
            options: {
              content: ['1 Lembar', '2 Lembar', '3 Lembar', '4 Lembar', '6 Lembar', '7 Lembar', '12 Lembar', '13 Lembar'],
              size: ['Kecil 31x43', 'Kecil 31x48', { label: 'Sedang 35x50', selected: true }, 'Sedang 38x54', 'Besar 43x64'],
              hanger: ['Spiral', { label: 'Jepit Kaleng', selected: true }, 'Mata Ayam'],
              type: ['Art Paper', 'Art Carton', 'Karton BW', { label: 'Karton Duplex', selected: true }],
              lamination: ['Tanpa Laminasi', 'Glossy', 'Doff', 'UV Vernish', 'Spot UV'],
              side: ['Cetak Full Color', 'Cetak 2 Warna']
            }
          },
          'Kalender Meja': {
            text: 'Ini text brosur amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!',
            input: ['content', 'size', 'type', 'lamination', 'cover', 'position'],
            options: {
              content: ['4 Lembar', '6 Lembar', '7 Lembar', '12 Lembar', '13 Lembar'],
              size: ['Kecil 15x21cm'],
              type: ['Karton BC TIK', 'Art Carton', 'Karton BW'],
              lamination: ['Tanpa Laminasi', 'Glossy', 'Doff', 'UV Vernish', 'Spot UV'],
              cover: ['Tanpa Cover Amplop', 'Pakai Amplop Kertas', 'Pakai Amplop Plastik'],
              position: ['Landscape (Tidur)', 'Portrait (Berdiri)']
            }
          },
          'Kalender Bolak Balik Sprial Tengah': {
            text: 'Ini text brosur amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!',
            input: ['content', 'size', 'type', 'lamination'],
            options: {
              content: ['3 Lembar', '4 Lembar', '5 Lembar', { label: '6 Lembar', selected: true }, '7 Lembar'],
              size: ['Kecil 31x43', 'Kecil 31x48', { label: 'Sedang 35x50', selected: true }],
              type: ['Art Carton', 'Karton BW', 'Karton TIK'],
              lamination: ['Tanpa Laminasi', 'Glossy', { label: 'Doff', selected: true }, 'UV Vernish', 'Spot UV']
            }
          }
        }
      };

            
    function drawPlanoManual() {
      // Ambil semua input
      const canvas_x = parseFloat(document.getElementById('canvas_x').value) || 0;
      const canvas_y = parseFloat(document.getElementById('canvas_y').value) || 0;
      const cetak_x = parseFloat(document.getElementById('cetak_x').value) || 0;
      const cetak_y = parseFloat(document.getElementById('cetak_y').value) || 0;
      const posisi_awal = document.getElementById('posisi_awal').value;
      const dup_x = parseInt(document.getElementById('dup_x').value) || 0;
      const dup_y = parseInt(document.getElementById('dup_y').value) || 0;
      const arah_sisa = document.getElementById('arah_sisa').value;
      const posisi_sisa = document.getElementById('posisi_sisa').value;
      const sisa_x = parseInt(document.getElementById('sisa_x').value) || 0;
      const sisa_y = parseInt(document.getElementById('sisa_y').value) || 0;
    
      // SVG setup
      const svg = document.getElementById('planoSVG');
      let scale = Math.min(540 / canvas_x, 540 / canvas_y);
      let margin = 30;
      let width = canvas_x * scale, height = canvas_y * scale;
      svg.setAttribute('width', width + margin * 2);
      svg.setAttribute('height', height + margin * 2);
      svg.innerHTML = '';
    
      // Draw canvas border
      let planoRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      planoRect.setAttribute('x', margin);
      planoRect.setAttribute('y', margin);
      planoRect.setAttribute('width', width);
      planoRect.setAttribute('height', height);
      planoRect.setAttribute('fill', '#fff');
      planoRect.setAttribute('stroke', '#111');
      planoRect.setAttribute('stroke-width', 3);
      svg.appendChild(planoRect);
    
      // Kotak utama
      let kotak_w = posisi_awal === "Landscape" ? cetak_y : cetak_x;
      let kotak_h = posisi_awal === "Landscape" ? cetak_x : cetak_y;
    
      let total_qty = 0;
      for (let i = 0; i < dup_x; i++) {
        for (let j = 0; j < dup_y; j++) {
          let x = margin + i * kotak_w * scale;
          let y = margin + j * kotak_h * scale;
          let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute('x', x);
          rect.setAttribute('y', y);
          rect.setAttribute('width', kotak_w * scale);
          rect.setAttribute('height', kotak_h * scale);
          rect.setAttribute('fill', '#fff');
          rect.setAttribute('stroke', '#111');
          rect.setAttribute('stroke-width', 2);
          svg.appendChild(rect);
          total_qty++;
        }
      }
    
      // Kotak sisa
      if (sisa_x > 0 && sisa_y > 0) {
        let sisa_w = posisi_sisa === "Landscape" ? cetak_y : cetak_x;
        let sisa_h = posisi_sisa === "Landscape" ? cetak_x : cetak_y;
        let startX = margin;
        let startY = margin;
        if (arah_sisa === "Kanan") {
          startX = margin + dup_x * kotak_w * scale;
          startY = margin;
        } else if (arah_sisa === "Bawah") {
          startX = margin;
          startY = margin + dup_y * kotak_h * scale;
        }
        for (let i = 0; i < sisa_x; i++) {
          for (let j = 0; j < sisa_y; j++) {
            let x = startX + i * sisa_w * scale;
            let y = startY + j * sisa_h * scale;
            let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute('x', x);
            rect.setAttribute('y', y);
            rect.setAttribute('width', sisa_w * scale);
            rect.setAttribute('height', sisa_h * scale);
            rect.setAttribute('fill', '#fff7e6');
            rect.setAttribute('stroke', '#e67e22');
            rect.setAttribute('stroke-width', 2);
            svg.appendChild(rect);
            total_qty++;
          }
        }
      }
    
      // Update qty sesuai total kotak yang digambar
      document.getElementById('qty').value = total_qty;
    }
    
    function updatePlano() {
      document.querySelector('.svg-wrap').classList.remove('d-none');
      drawPlanoManual();
    }
    
        document.getElementById('generateBtn').addEventListener('click', updatePlano);
    
    document.getElementById('downloadSVG').addEventListener('click', function () {
      let svg = document.getElementById('planoSVG');
      let serializer = new XMLSerializer();
      let source = serializer.serializeToString(svg);
      let blob = new Blob([source], {type: "image/svg+xml;charset=utf-8"});
      let url = URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = "layout-plano.svg";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    });

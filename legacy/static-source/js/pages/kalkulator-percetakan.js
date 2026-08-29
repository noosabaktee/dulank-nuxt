        function checkValue(){
            // Ambil semua input yang wajib diisi
            const requiredInputs = document.querySelectorAll('input')
    
            let isValid = true;
            requiredInputs.forEach(input => {
                if (input && (input.value === '' || input.value == null)) {
                    isValid = false;
                }else{
                    isValid = true
                }
            });
            return isValid
        }

        function clearSelection(el){
            const parent = el.closest('.form-selection')
            const selected = parent.querySelectorAll('.selected')
            selected.forEach(select => {
                select.querySelector('.ribbon').classList.add('d-none')
                select.classList.remove('selected')
            })
        }
        
        document.addEventListener('DOMContentLoaded', function () {
            const btnHitung = document.querySelector('#hitung');
            const infoSelectedAll = document.getElementById('info-selected-all');
        
            btnHitung.addEventListener('click', function (e) {
                
        
                e.preventDefault();
                btnHitung.classList.add('disabled');

                if (!checkValue()) {
                    infoSelectedAll.classList.remove('d-none');
                } 
            });

            const btnAddAreaPoli = document.getElementById('addAreaPoli');
            btnAddAreaPoli.addEventListener('click', function(e) {
                e.preventDefault();
                // Ambil elemen poli-area terakhir
                const lastPoliArea = document.querySelectorAll('.poli-area');
                if (lastPoliArea.length > 0) {
                    // Clone node poli-area terakhir
                    const newPoliArea = lastPoliArea[lastPoliArea.length - 1].cloneNode(true);
                    // Reset input di dalamnya
                    const inputs = newPoliArea.querySelectorAll('input');
                    inputs.forEach(input => {
                        input.value = '';
                    });
                    // Sisipkan setelah poli-area terakhir
                    lastPoliArea[lastPoliArea.length - 1].after(newPoliArea);
                }
            });

            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('input',()=>{
                    if(checkValue()){
                        infoSelectedAll.classList.add('d-none')
                        btnHitung.classList.remove('disabled')
                    }
                })
            })

            const btn_input = document.querySelectorAll('.btn-spec');
            btn_input.forEach(btns => {
                btns.addEventListener('click',()=>{
                    if(checkValue()){
                        infoSelectedAll.classList.add('d-none')
                        btnHitung.classList.remove('disabled')
                    }
                })
            })
            document.querySelectorAll('.satuan-btn').forEach(btns => {
                btns.addEventListener('click',()=>{
                    document.querySelectorAll('.satuan').forEach(i => {
                        i.textContent = btns.textContent
                    })
                })
            })
        });

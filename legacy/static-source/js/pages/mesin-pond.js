        function checkValue(tab){
            // Ambil semua input yang wajib diisi
            const tab1 = [
                document.getElementById('name'),
                document.getElementById('width-add'),
                document.getElementById('height-add'),
                document.getElementById('price-jasa-standard'),
                document.getElementById('price-min-standard'),
                document.getElementById('price-jasa-setengah'),
                document.getElementById('price-min-setengah')
            ]
            const tab2 = [
                document.getElementById('knife-name'),
                document.getElementById('price-per-cm')
            ]
            let requiredInputs = []
            if(tab == 1){
                requiredInputs = tab1
            }else{
                requiredInputs = tab2
            }
    
            let isValid = true;
            requiredInputs.forEach(input => {
                if (input && (input.value === '' || input.value == null)) {
                    isValid = false;
                }
            });
            return isValid
        }
        
        document.addEventListener('DOMContentLoaded', function () {
            const btnSimpan = document.querySelector('#save-btn');
            const btnUpdate = document.querySelector('#update-btn');
            const infoSelectedAll = document.getElementById('info-selected-all');
            const infoSelectedAll2 = document.getElementById('info-selected-all-2');
        
            btnSimpan.addEventListener('click', function (e) {
                
        
                e.preventDefault();
                btnSimpan.classList.add('disabled');

                if (!checkValue(1)) {
                    infoSelectedAll.classList.remove('d-none');
                } 
            });

            btnUpdate.addEventListener('click', function (e) {
                
        
                e.preventDefault();
                btnUpdate.classList.add('disabled');

                if (!checkValue(2)) {
                    infoSelectedAll2.classList.remove('d-none');
                } 
            });

            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('input',()=>{
                    if(checkValue(1)){
                        infoSelectedAll.classList.add('d-none')
                        btnSimpan.classList.remove('disabled')
                    }
                    if(checkValue(2)){
                        infoSelectedAll2.classList.add('d-none')
                        btnUpdate.classList.remove('disabled')
                    }
                })
            })

        });

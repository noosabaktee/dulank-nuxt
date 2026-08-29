        function checkValue(){
            // Ambil semua input yang wajib diisi
            const modalAdd = document.querySelector('#addNewLaminateModal')
            const requiredInputs = modalAdd.querySelectorAll('input')
    
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
        
        document.addEventListener('DOMContentLoaded', function () {
            const btnSimpan = document.querySelector('#save-btn');
            const infoSelectedAll = document.getElementById('info-selected-all');
        
            btnSimpan.addEventListener('click', function (e) {
                
        
                e.preventDefault();
                btnSimpan.classList.add('disabled');

                if (!checkValue()) {
                    infoSelectedAll.classList.remove('d-none');
                } 
            });

            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('input',()=>{
                    if(checkValue()){
                        infoSelectedAll.classList.add('d-none')
                        btnSimpan.classList.remove('disabled')
                    }
                })
            })
        });

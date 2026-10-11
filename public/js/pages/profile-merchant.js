        // Call the initialization functions
        setupAvatarUpload();

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
        
        document.addEventListener('DOMContentLoaded', function () {
            const btnUpdate = document.querySelector('#update-btn');
            const infoSelectedAll = document.getElementById('info-selected-all');
        
            btnUpdate.addEventListener('click', function (e) {
                
        
                e.preventDefault();
                btnUpdate.classList.add('disabled');

                if (!checkValue()) {
                    infoSelectedAll.classList.remove('d-none');
                } 
            });

            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('input',()=>{
                    if(checkValue()){
                        infoSelectedAll.classList.add('d-none')
                        btnUpdate.classList.remove('disabled')
                    }
                })
            })

            const btn_input = document.querySelectorAll('.btn-spec');
            btn_input.forEach(btns => {
                btns.addEventListener('click',()=>{        
                    if(checkValue()){
                        infoSelectedAll.classList.add('d-none')
                        btnUpdate.classList.remove('disabled')
                    }
                })
            })
        });

        updateTotal(isOngkir = false)
        const btnView = document.getElementById('view-btn')
        const infoSelectedAll = document.getElementById('info-selected-all');

        function checkValue(){
            // Ambil semua input yang wajib diisi
            const requiredInputs = document.querySelector(".quotation-for-form").querySelectorAll('input')

            let isValid = true
    
            requiredInputs.forEach(input => {
                if (input && (input.value === '' || input.value == null)) {
                    isValid = false;
                }
            });
            
            return isValid
        }

        btnView.addEventListener('click', function (e) {
                
        
            e.preventDefault();
            btnView.classList.add('disabled');

            if (!checkValue()) {
                infoSelectedAll.classList.remove('d-none');
            } else{
                window.location.href = "/quotation-view"
            }
        });

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input',()=>{
                if(checkValue()){
                    infoSelectedAll.classList.add('d-none')
                    btnView.classList.remove('disabled')
                }
            })
        })

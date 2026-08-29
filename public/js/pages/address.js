        function checkValue(){
            // Ambil semua input yang wajib diisi
            const requiredInputs = document.querySelectorAll('input')
            const detail = document.querySelector('#detail')
            const address = document.querySelector('#alamat-lengkap')
            
            let isValid = true;
            requiredInputs.forEach(input => {
                if (input && (input.value == '' || input.value == null) || detail.value == "" || address.value == "") {
                    isValid = false;
                }else{
                    isValid = true
                }
            });
            return isValid
        }

        var myModal = new bootstrap.Modal(document.getElementById('addAddressModal'))
        // Functionality for Edit/Remove buttons
        const editButtons = document.querySelectorAll('.address-item a.text-primary');
        const removeButtons = document.querySelectorAll('.address-item a.text-danger');
        const saveButton = document.querySelector('#save-address');
        
        editButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // Add edit functionality here
                myModal.show()
            });
        });
        
        removeButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('Are you sure you want to remove this address?')) {
                    // Add remove functionality here
                    this.closest('.address-item').remove();
                    if(document.querySelectorAll('.address-item').length <= 0){
                        document.querySelector('.profile-content').classList.toggle("d-none");
                        document.querySelector('.empty').classList.toggle("d-none");
                    }
                }
            });
        });

        saveButton.addEventListener('click', function(){
            if(!checkValue()){
                document.querySelector('#info-selected-all').classList.remove('d-none')
                saveButton.classList.add('disabled')
                return
            }
            myModal.hide()
        })

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input',()=>{
                if(checkValue()){
                    document.querySelector('#info-selected-all').classList.add('d-none')
                    saveButton.classList.remove('disabled')
                }
            })
        })
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(input => {
            input.addEventListener('input',()=>{
                if(checkValue()){
                    document.querySelector('#info-selected-all').classList.add('d-none')
                    saveButton.classList.remove('disabled')
                }
            })
        })

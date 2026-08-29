        const btn_hitung = document.querySelector('#btn-hitung')
        const empty_form = document.querySelector('.empty-form')
        const btn_custom = document.querySelector('#custom-btn')
        const btn_select_all = document.querySelector('#select-all-btn')
        const form = document.querySelector('.form')


        function checkValue(){
            const width_potong = document.querySelector('#width-potong').value
            const height_potong = document.querySelector('#height-potong').value
            const width_plano = document.querySelector('#width-plano').value
            const height_plano = document.querySelector('#height-plano').value
            let isCustomSize = btn_custom.textContent == 'Cancel' ? true : false;
            if(width_potong > 0 && height_potong > 0) {
                if(isCustomSize && (width_plano <= 0 || height_plano <= 0)){
                    return false
                }
                return true
            }else{
                return false
            }
        }

        btn_select_all.addEventListener('click', () => {
            const siblings = btn_select_all.parentElement.childNodes;
            for (let i = 0; i < siblings.length; i++) {
                if(siblings[i].nodeName == 'BUTTON'){
                    siblings[i].classList.add('selected')
                    // Set all siblings ribbon display none
                    siblings[i].childNodes[1].classList.remove('d-none')
                }
            }
        })

        btn_hitung.addEventListener('click', () => {
            btn_hitung.classList.add('disabled')
            if(!checkValue()){
                document.querySelector('#info-selected-all').classList.remove('d-none')
                return
            }
            form.classList.remove('d-none')
            empty_form.classList.add('d-none')
        })



        const btn_input = document.querySelectorAll('.btn-spec');
        btn_input.forEach(btns => {
            btns.addEventListener('click',()=>{
                if(checkValue()){
                    document.querySelector('#info-selected-all').classList.add('d-none')
                    btn_hitung.classList.remove('disabled')
                    form.classList.add('d-none')
                    empty_form.classList.remove('d-none')
                }
            })
        })

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input',()=>{
                if(checkValue()){
                    document.querySelector('#info-selected-all').classList.add('d-none')
                    btn_hitung.classList.remove('disabled')
                    form.classList.add('d-none')
                    empty_form.classList.remove('d-none')
                }
            })
        })

         btn_custom.addEventListener('click',() => {
            btn_hitung.classList.add('disabled')
            let value_btn = btn_custom.textContent == "Custom" ? "Cancel" : "Custom"
            btn_custom.innerHTML = value_btn
            if(value_btn == "Custom"){
                document.querySelector('#info-selected-all').classList.add('d-none')
                btn_hitung.classList.remove('disabled')
                form.classList.add('d-none')
                empty_form.classList.remove('d-none')
            }
            document.querySelector('#ukuran-plano').classList.toggle('d-none')
            document.querySelector('#ukuran-plano-custom').classList.toggle('d-none')
        })

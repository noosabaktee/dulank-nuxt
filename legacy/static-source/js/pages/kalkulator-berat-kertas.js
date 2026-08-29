        // Get input values
        let satuan = {
            "unit" : "Centimeter",
            "qty" : "Lembar"
        }
        const btn_hitung = document.getElementById('calculate');
        const btn_clear = document.getElementById('clear-form');
        const btnModal = document.querySelector('#save-btn-2');
        const btn_add_calculate = document.getElementById('add-calculate');
        const btn_copy = document.getElementById('copy-clipboard');
        const result_list_el = document.getElementById('result-list')
        let result_list = []
        let result_list_copy = []
        let result_total = 0

        function clearForm(){
            document.getElementById('panjang').value = ""
            document.getElementById('lebar').value = ""
            document.getElementById('jumlah').value = ""
            document.getElementById('gramatur').value = ""
            const requiredInputs = document.querySelectorAll('.number-separator')
            requiredInputs.forEach(input => {
                input.value = ""
            });
            document.getElementById('kg-berat').textContent = "0 kg"
            window.location.href = "#calculator"
        }

        btn_add_calculate.addEventListener('click', function(){
            clearForm()
        })

        btn_clear.addEventListener('click', function(){
            clearForm()
            result_list = []
            result_list_copy = []
            result_total = 0
            result_list_el.innerHTML = ""
        })

        btn_copy.addEventListener('click', function(){
            let copy_text = ""
            result_list_copy.forEach(i => {
                    copy_text += i + "\n"
                })
            copy_text += `\nTotal Berat: ${result_total} kg` 
            navigator.clipboard.writeText(copy_text);
        })

        function setUnit(unit){
            const el = document.querySelector('#unit').children
            const cm_el = Array.from(el).find(el => el.textContent === "Centimeter");
            const mm_el = Array.from(el).find(el => el.textContent === "Milimeter");
            if(unit == "cm"){
                cm_el.classList.add('selected');
                cm_el.childNodes[1].classList.remove('d-none');
                mm_el.classList.remove('selected');
                mm_el.childNodes[1].classList.add('d-none');
                satuan["unit"] = "Centimeter"
            }else{
                mm_el.classList.add('selected');
                mm_el.childNodes[1].classList.remove('d-none');
                cm_el.classList.remove('selected');
                cm_el.childNodes[1].classList.add('d-none');
                satuan["unit"] = "Milimeter"
            }
        }

        function checkValue(info){
            let isValid = true
            let requiredInputs = document.querySelector('.calculator-container').querySelectorAll('input');
            if(info == 2){
                requiredInputs = document.querySelector('#addNewPaperModal').querySelectorAll('input');
            }
            requiredInputs.forEach(input => {
                if (input && (input.value === '' || input.value == null)) {
                    isValid = false;
                }else{
                    isValid = true
                }
            });
            return isValid
        }

        function deleteResult(index){
            if (index > -1) { // only splice array when item is found
                result_list.splice(index, 1); // 2nd parameter means remove one item only
            }
            updateElementResult()
        }

        result_list_el.addEventListener('click', event => {
            const trigger = event.target.closest('.delete-result');
            if (!trigger) return;
            deleteResult(Number(trigger.dataset.resultIndex));
        });

        function digitComma(number){
            if(number.toString().split(".")[0].length > 1){
                return number.toFixed(0)
            }
            return number.toFixed(1)
        }

        function updateElementResult(){
            result_total = 0.0
            result_list_el.innerHTML = ""
            result_list_copy = []
            let result_list_html = []
            result_list.forEach((i,index) => {
                result_list_copy.push(`Ukuran kertas ${i["panjang"]}x${i["lebar"]} ${i["unit"]} ${i["gramatur"]} gsm sebanyak ${i["satuan_text"]} ${i["satuan_list"]} ${digitComma(i["total_weight"])} kg`)
                result_list_html.push(`<span role="button" class="delete-result" data-result-index="${index}"><i class="bi bi-archive"></i></span> Ukuran kertas ${i["panjang"]}x${i["lebar"]} ${i["unit"]} ${i["gramatur"]} gsm sebanyak ${i["satuan_text"]} ${i["satuan_list"]} <span class="float-end text-standard">${digitComma(i["total_weight"])} kg</span>`)
                // result_list_el.innerHTML += `<p class="text-standard">${i}</p>`
                result_total += parseFloat(digitComma(i["total_weight"]))
            })
            result_list_html.forEach(i => {
                result_list_el.innerHTML += `<p class="text-standard">${i}</p>`
            })
            // Update the result display
            document.getElementById('total-berat').textContent = `Total Berat`;
            document.getElementById('kg-berat').textContent = `${result_total} kg`;
        }
            
        // Add event listener to the calculate button
        document.getElementById('calculate').addEventListener('click', () => {
            calculateWeight()
        });
        
        // Function to calculate paper weight
        function calculateWeight() {    
            const panjang = parseFloat(document.getElementById('panjang').value);
            const lebar = parseFloat(document.getElementById('lebar').value);
            let jumlah = parseInt(document.getElementById('jumlah').value);
            const gramatur = parseFloat(document.getElementById('gramatur').value);

            if(!checkValue(1)){
                document.querySelector('#info-selected-all').classList.remove('d-none')
                btn_hitung.classList.add('disabled')
                return
            }

            let satuan_list = "Lembar"
            let satuan_text = jumlah
            // Convert to meters if necessary
            if(satuan["qty"] == "Rim"){
                jumlah *= 500
                satuan_list = "Rim"
            }
            let totalWeightKg 
            if(satuan["unit"] == "Centimeter"){
                totalWeightKg = ((panjang * lebar * gramatur / 10000) * jumlah)/1000
            }else{
                totalWeightKg = (((panjang/10) * (lebar/10) * gramatur / 10000) * jumlah)/1000
            }
            let result_dict = {};
            result_dict["panjang"] = panjang 
            result_dict["lebar"] = lebar 
            result_dict["unit"] = satuan["unit"]
            result_dict["gramatur"] = gramatur 
            result_dict["satuan_text"] = satuan_text 
            result_dict["satuan_list"] = satuan_list 
            result_dict["total_weight"] = totalWeightKg
            result_list.push(result_dict)
            updateElementResult()
            btn_hitung.classList.add('disabled')
            window.location.href = "#scrollTo"
        }

        const btn_input = document.querySelectorAll('.btn-spec');
        btn_input.forEach(btns => {
            btns.addEventListener('click',()=>{
                satuan[btns.parentElement.id] = btns.textContent
                const panjang = parseFloat(document.getElementById('panjang').value);
                const lebar = parseFloat(document.getElementById('lebar').value);
                let jumlah = parseInt(document.getElementById('jumlah').value);
                const gramatur = parseFloat(document.getElementById('gramatur').value);
                if(checkValue(1)){
                    document.querySelector('#info-selected-all').classList.add('d-none')
                    btn_hitung.classList.remove('disabled')
                    document.getElementById('kg-berat').textContent = `0 kg`;
                }
            })
        })
        const inputs = document.querySelector('.calculator-container').querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input',()=>{
                if(checkValue(1)){
                    document.querySelector('#info-selected-all').classList.add('d-none')
                    btn_hitung.classList.remove('disabled')
                }
            })
        }
    )
        const inputsModal = document.querySelector('#addNewPaperModal').querySelectorAll('input');
        inputsModal.forEach(input => {
            input.addEventListener('input',()=>{
                if(checkValue(2)){
                    document.querySelector('#info-selected-all-2').classList.add('d-none')
                    btnModal.classList.remove('disabled')
                }
            })
        })
        
        // Click availabel sixe
        const size_btn = document.querySelector("#size").querySelectorAll('.btn-spec')
        size_btn.forEach(btn => {
            btn.addEventListener('click', () => {
                const width = btn.getAttribute("data-width")
                const height = btn.getAttribute("data-height")
                const gram = btn.getAttribute("data-gram")
                document.querySelector("#width").value = width
                document.querySelector("#height").value = height
                document.querySelector("#gram").value = gram
                document.querySelector("#lebar").value = width
                document.querySelector("#panjang").value = height
                document.querySelector("#gramatur").value = gram
                document.querySelector("#amount").focus()
                sizeList.classList.toggle('d-none');
            })
        })

        btnModal.addEventListener('click', function (e) {
            e.preventDefault();
            btnModal.classList.add('disabled');
            if (!checkValue(2)) {
                document.getElementById('info-selected-all-2').classList.remove('d-none');
            } 
        });

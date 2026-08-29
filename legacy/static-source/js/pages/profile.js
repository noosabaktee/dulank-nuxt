        const settingFormFakturValue = document.getElementById('settingFormFakturValue');

        function displayFormValue(display){
            if(display){
                settingFormFakturValue.classList.remove('d-none')
            }else{
                settingFormFakturValue.classList.add('d-none')
            }
        }
        
        let selectedMethod = '';
        let currentStep = 1;

        document.querySelector("#npwp").addEventListener("input", (e) => {
            let r = new RegExp(`[0-9]{1,${e.target.dataset.grouplength}}`, "g");
            e.target.value = (e.target.value.match(r)) ? e.target.value.match(r).join(" "): "";
        });


        // Method selection
        document.querySelectorAll('.method-card').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.method-card').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                selectedMethod = this.dataset.method;
                document.getElementById('nextStep1').disabled = false;
            });
        });

        // Step 1 to Step 2
        document.getElementById('nextStep1').addEventListener('click', function() {
            document.getElementById('step1').style.display = 'none'; 
            document.getElementById('step2-app').style.display = 'block';  
        });

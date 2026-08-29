        // updateTotal()

        const jobNameEditInput = document.querySelectorAll('.input-edit')
        const jobNameBtn = document.querySelectorAll('.job-name-btn')
        let jobInputValue = ""

        const checkboxes = document.querySelectorAll('.save-item input[type="checkbox"]');
        const updateCartBtn = document.getElementById('update-cart-btn');
        const checkoutBtn = document.getElementById('checkout-btn');
        const quotationBtn = document.getElementById('quotation-btn');
        const dueDates = document.querySelectorAll('#due-date');



        function isAllJobNameFilled() {
            // Cek semua .job-name pada cart, harus terisi (bukan kosong)
            return Array.from(document.querySelectorAll('.job-name')).every(jn => jn.textContent.trim() !== "");
        }

        function updateCheckoutAndQuotationBtn() {
            if (isAllJobNameFilled()) {
                checkoutBtn.classList.remove('disabled');
                quotationBtn.classList.remove('disabled');
                document.getElementById('job-name-info').classList.add('d-none');
            } else {
                checkoutBtn.classList.add('disabled');
                quotationBtn.classList.add('disabled');
                document.getElementById('job-name-info').classList.remove('d-none');
            }
        }

        // Validasi sebelum lanjut ke halaman berikutnya
        function handleCheckoutOrQuotation(e, url) {
            if (!isAllJobNameFilled()) {
                e.preventDefault();
                document.getElementById('job-name-info').classList.remove('d-none');
                checkoutBtn.classList.add('disabled');
                quotationBtn.classList.add('disabled');
                // focus to empty job name
                const jobName = document.querySelectorAll('.job-name')
                for (let i = 0; i < jobName.length; i++) {
                    if (jobName[i].textContent == "") {
                        editJobName(jobName[i])
                        break
                    }
                }
            } else {
                document.getElementById('job-name-info').classList.add('d-none');
                window.location.href = url;
            }
        }

        // Pasang event listener pada tombol checkout & quotation
        checkoutBtn.addEventListener('click', function (e) {
            handleCheckoutOrQuotation(e, 'checkout.html');
        });
        quotationBtn.addEventListener('click', function (e) {
            handleCheckoutOrQuotation(e, 'quotation-add.html');
        });

        function generateJobName(input) {
            const jobName = input.parentElement.querySelector('.job-name')
            const jobNameBtnThis = input.parentElement.querySelector('.job-name-btn')
            jobName.innerHTML = input.value
            input.classList.add('d-none')
            jobNameBtnThis.classList.remove('d-none')
            jobName.classList.remove('d-none')
            jobNameBtnThis.innerHTML = (jobName.innerHTML.trim() !== "")
                ? 'Edit <i class="fa-solid fa-pen-to-square ms-1"></i>'
                : 'Job Title <i class="fa-solid fa-pen-to-square ms-1"></i>';
            updateCheckoutAndQuotationBtn();
        }

        function editJobName(el) {
            const parent = el.parentElement
            const jobName = parent.querySelector('.job-name')
            const btn = parent.querySelector('.job-name-btn')
            const inputEdit = parent.querySelector('.input-edit')
            inputEdit.value = jobName.innerHTML
            jobName.classList.add('d-none')
            btn.classList.add('d-none')
            inputEdit.classList.remove('d-none')
            inputEdit.focus()
        }

        jobNameBtn.forEach(btn => {
            btn.addEventListener('click', function () {
                editJobName(btn)
            })
        })

        jobNameEditInput.forEach(input => {
            input.addEventListener('focusout', function () {
                generateJobName(input)
            })
            input.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    generateJobName(input)
                }
            });
        })

        const btn_input = document.querySelectorAll('.btn-spec');
        btn_input.forEach(btns => {
            btns.addEventListener('click', () => {
                // Delete all selected class from siblings element
                const siblings = btns.parentElement.childNodes;
                for (let i = 0; i < siblings.length; i++) {
                    if (siblings[i].nodeName == 'BUTTON') {
                        // Delete
                        siblings[i].classList.remove('selected')
                        // Set all siblings ribbon display none
                        siblings[i].childNodes[1].classList.add('d-none')
                    }
                }
                btns.childNodes[1].classList.remove('d-none')
                // Add class to clicked variant
                btns.classList.add('selected')
            })
        })

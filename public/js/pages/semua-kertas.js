        function checkValue(tab) {
            // Ambil semua input yang wajib diisi
            const tab1 = [
                document.getElementById('name-group'),
            ]
            const tab2 = [
                document.getElementById('name-paper'),
                document.getElementById('width-plano'),
                document.getElementById('height-plano')
            ]
            const tab3 = [
                document.getElementById('name-paper-item'),
                document.getElementById('gramatur-paper-item')
            ]
            const tab4 = [
                document.getElementById('name-paper-price'),
                document.getElementById('width-paper-price'),
                document.getElementById('height-paper-price'),
                document.getElementById('gramatur-paper-price'),
                document.getElementById('paper-price'),
                document.getElementById('min-order'),
                document.getElementById('multiple-order')
            ]
            let requiredInputs = []
            switch (tab) {
                case 1:
                    requiredInputs = tab1
                    break
                case 2:
                    requiredInputs = tab2
                    break
                case 3:
                    requiredInputs = tab3
                    break
                case 4:
                    requiredInputs = tab4
                    break
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
            // Aktifkan tab sesuai hash di URL
            if (window.location.hash) {
                const hash = window.location.hash;
                const tabLink = document.querySelector(`a.nav-link[href="${hash}"]`);
                if (tabLink) {
                    const tabTrigger = new bootstrap.Tab(tabLink);
                    tabTrigger.show();
                }
            }

            const btnSimpan1 = document.querySelector('#save-btn-1');
            const btnSimpan2 = document.querySelector('#save-btn-2');
            const btnSimpan3 = document.querySelector('#save-btn-3');
            const btnSimpan4 = document.querySelector('#save-btn-4');
            const infoSelectedAll1 = document.getElementById('info-selected-all-1');
            const infoSelectedAll2 = document.getElementById('info-selected-all-2');
            const infoSelectedAll3 = document.getElementById('info-selected-all-3');
            const infoSelectedAll4 = document.getElementById('info-selected-all-4');



            btnSimpan1.addEventListener('click', function (e) {
                e.preventDefault();
                btnSimpan1.classList.add('disabled');
                if (!checkValue(1)) {
                    infoSelectedAll1.classList.remove('d-none');
                }
            });

            btnSimpan2.addEventListener('click', function (e) {
                e.preventDefault();
                btnSimpan2.classList.add('disabled');
                if (!checkValue(2)) {
                    infoSelectedAll2.classList.remove('d-none');
                }
            });

            btnSimpan3.addEventListener('click', function (e) {
                e.preventDefault();
                btnSimpan3.classList.add('disabled');
                if (!checkValue(3)) {
                    infoSelectedAll3.classList.remove('d-none');
                }
            });

            btnSimpan4.addEventListener('click', function (e) {
                e.preventDefault();
                btnSimpan4.classList.add('disabled');
                if (!checkValue(4)) {
                    infoSelectedAll4.classList.remove('d-none');
                }
            });


            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    if (checkValue(1)) {
                        infoSelectedAll1.classList.add('d-none')
                        btnSimpan1.classList.remove('disabled')
                    }
                    if (checkValue(2)) {
                        infoSelectedAll2.classList.add('d-none')
                        btnSimpan2.classList.remove('disabled')
                    }
                    if (checkValue(3)) {
                        infoSelectedAll3.classList.add('d-none')
                        btnSimpan3.classList.remove('disabled')
                    }
                    if (checkValue(4)) {
                        infoSelectedAll4.classList.add('d-none')
                        btnSimpan4.classList.remove('disabled')
                    }
                })
            })

            const btn_input = document.querySelectorAll('.btn-spec');
            btn_input.forEach(btns => {
                btns.addEventListener('click', () => {
                    if (checkValue(2)) {
                        infoSelectedAll2.classList.add('d-none')
                        btnSimpan2.classList.remove('disabled')
                    }
                    if (checkValue(3)) {
                        infoSelectedAll3.classList.add('d-none')
                        btnSimpan3.classList.remove('disabled')
                    }
                    if (checkValue(4)) {
                        infoSelectedAll4.classList.add('d-none')
                        btnSimpan4.classList.remove('disabled')
                    }
                })
            })

        });

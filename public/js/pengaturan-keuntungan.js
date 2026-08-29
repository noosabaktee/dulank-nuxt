let selected = "select-1";

function checkValue(){
    // Ambil semua input yang wajib diisi
    const requiredInputsTambahan = document.querySelector(".tambahan-form").querySelectorAll('input')
    const requiredInputsPajak = document.querySelector(".pajak-form").querySelectorAll('input')
    const requiredInputsPersentase = document.querySelector(".persentase-form").querySelectorAll('input')
    const requiredInputsProduksi = document.querySelector(".produksi-form").querySelectorAll('input')
    const requiredInputsRange = document.querySelector(".range-form").querySelectorAll('input')

    let requiredInputsSelected;

    if(selected == "select-1"){
        requiredInputsSelected = requiredInputsPersentase
    }else if(selected == "select-2"){
        requiredInputsSelected = requiredInputsProduksi
    }else if(selected == "select-3"){
        requiredInputsSelected = requiredInputsRange
    }

    let pajakValid = true
    let tambahanValid = true
    let selectedValid = true
    let isValid = true

    requiredInputsSelected.forEach(input => {
        if (input && (input.value === '' || input.value == null)) {
            selectedValid = false;
        }
    });
    requiredInputsTambahan.forEach(input => {
        if (input && (input.value === '' || input.value == null)) {
            tambahanValid = false;
        }
    });
    requiredInputsPajak.forEach(input => {
        if (input && (input.value === '' || input.value == null)) {
            pajakValid = false;
        }
    });
    if(!pajakValid || !tambahanValid || !selectedValid){
        isValid = false
    }else{
        isValid = true
    }
    return isValid
}

function disabledInput(select){
    parent = document.getElementById(select).parentElement
    requiredInputs = parent.querySelectorAll('input')    
    parentInputs = parent.querySelector('.input-select')
    requiredInputs.forEach(input => {
        input.disabled = true
        parentInputs.classList.add('d-none')
    });
}

disabledInput("select-2")
disabledInput("select-3")

function display(select){
    disabledInput("select-1")
    disabledInput("select-2")
    disabledInput("select-3")
    parent = document.getElementById(select).parentElement
    parentInputs = parent.querySelector('.input-select')
    requiredInputs = parent.querySelectorAll('input')
    requiredInputs.forEach(input => {
        input.disabled = false
        parentInputs.classList.remove('d-none')
    });
}

function initNumberSeparator(){
    const input_number = document.querySelectorAll('.number-separator');
    input_number.forEach(input => {
        easyNumberSeparator({
            selector: input,
            separator: '.',
            decimalSeparator: ',',
            resultInput: input.parentElement.querySelector('.result-input'),
        })
    })  
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
        // Show Ribbon
        // Add class to clicked variant
        btns.addEventListener('click',()=>{
            // Delete all 
            btn_input.forEach(all_button => {
                all_button.childNodes[1].classList.add('d-none')
                all_button.classList.remove('selected')
            })
            // Show Ribbon
            btns.childNodes[1].classList.remove('d-none')
            // Add class to clicked variant
            btns.classList.add('selected')
            selected = btns.getAttribute('id')
            display(selected)
            infoSelectedAll.classList.add('d-none')
            btnUpdate.classList.remove('disabled')
        })
    })

    // --- Auto-fill "dari" pada row berikutnya berdasarkan "ke" sebelumnya ---
    document.querySelectorAll('.range-form').forEach(function(rangeForm) {
        rangeForm.addEventListener('focusout', function(e) {
            if (e.target && e.target.classList.contains('input-ke')) {
                const keInput = e.target;
                const keValue = parseInt(e.target.parentElement.querySelector(".result-input").value)
                if (!isNaN(keValue)) {
                    // Cari row berikutnya
                    const currentRow = keInput.closest('.row');
                    if (currentRow && currentRow.nextElementSibling && currentRow.nextElementSibling.classList.contains('row')) {
                        const nextRow = currentRow.nextElementSibling;
                        const dariInput = nextRow.querySelector('.input-dari');
                        if (dariInput) {
                            dariInput.value = formatRupiah(keValue + 1);
                        }
                    }
                }
            }
        });

        rangeForm.addEventListener('keydown', function(e) {
            if (e.target && e.target.classList.contains('input-ke') && e.key === 'Enter') {
                e.preventDefault();
                e.target.blur(); // Trigger blur event
            }
        });
    });

    // Handler tombol add-range
    document.querySelectorAll('.range-form').forEach(function(rangeForm) {
        rangeForm.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('add-range')) {
                e.preventDefault();
                const row = e.target.closest('.row');
                if (row) {
                    const newRow = row.cloneNode(true);
                    if(row.classList.contains("first")){
                        newRow.querySelector('.delete-range').classList.remove("d-none")
                    }
                    newRow.querySelectorAll('input').forEach(input => input.value = '');
                    row.parentNode.insertBefore(newRow, row.nextSibling);
                    initNumberSeparator()
                }
            }
        });
    });

    // Handler tombol delete-range
    document.querySelectorAll('.range-form').forEach(function(rangeForm) {
        rangeForm.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('delete-range')) {
                e.preventDefault();
                const row = e.target.closest('.row');
                if (row) {
                    const allRows = row.parentNode.querySelectorAll('.row');
                    if (allRows.length > 1) {
                        row.remove();
                    }
                }
            }
        });
    });

    // Handler tombol addOther
    const btnAddOther = document.getElementById('addOther');
    const tambahanForm = document.querySelector('.tambahan-form');

    // Fungsi membuat row final biaya tambahan
    function createFinalRow(label, satuan, nilai) {
        const finalRow = document.createElement('div');
        finalRow.className = 'row align-items-center';
        finalRow.innerHTML = `
            <div class="col-md-3 mt-3">
                <span class="text-standard label-biaya">${label}</span>
            </div>
            <div class="d-flex col-md-5 align-items-center mt-3">
                <input type="text" class="form-control me-2 w-50 number-separator price-input" inputmode="numeric" pattern="[0-9]*" value="${nilai}">
                <input type="hidden" class="result-input">
                <span class="text-standard satuan-biaya">${satuan}</span>
            </div>
            <div class="d-flex mt-3 col-md-3">
                <button class="btn btn-edit">Ubah</button>
                <button class="btn btn-hapus">Hapus</button>
            </div>
        `;
        return finalRow;
    }

    // Handler selesai (untuk row baru dan edit)
    function handleSelesai(row, labelInput, satuanInput, nilaiInput) {
        const label = labelInput.value.trim();
        const satuan = satuanInput.value.trim();
        const nilai = nilaiInput.value;
        if (!label || !satuan) {
            labelInput.classList.add('is-invalid');
            labelInput.focus()
            return;
        }
        const finalRow = createFinalRow(label, satuan, nilai);
        // Sisipkan finalRow di posisi row yang sedang diedit, bukan di paling bawah
        row.parentNode.insertBefore(finalRow, row.nextSibling);
        row.remove();
        attachEditDeleteHandler(finalRow);
        btnAddOther.classList.remove("disabled")
        initNumberSeparator()
    }

    // Handler edit & hapus untuk row final
    function attachEditDeleteHandler(row) {
        // Hapus
        row.querySelector('.btn-hapus').addEventListener('click', function(e) {
            e.preventDefault();
            row.remove();
        });
        // Ubah
        row.querySelector('.btn-edit').addEventListener('click', function(e) {
            e.preventDefault();
            // Ambil nilai label, satuan, nilai
            const label = row.querySelector('.label-biaya').textContent;
            const satuan = row.querySelector('.satuan-biaya').textContent;
            const nilai = row.querySelector('input[type="text"].number-separator').value;
            // Buat row edit
            const editRow = document.createElement('div');
            editRow.className = 'row align-items-center other-temp-row';
            editRow.innerHTML = `
                <div class="col-md-3 mt-3">
                    <input type="text" class="form-control w-100 input-add-other p-2 rounded bg-info-subtle border-0" placeholder="Label Biaya" value="${label}">
                </div>
                <div class="d-flex col-md-5 align-items-center mt-3">
                    <input type="text" class="form-control w-100 number-separator price-input" inputmode="numeric" pattern="[0-9]*" value="${nilai}">
                    <input type="hidden" class="result-input">
                    <select class="form-select text-standard ms-2" id="satuan_input">
                        <option value="Per Pekerjaan/Job">Per Pekerjaan/Job</option>
                        <option value="Per Lembar">Per Lembar</option>
                    </select>
                </div>
                <div class="d-flex mt-3 col-md-3">
                    <button class="btn btn-selesai">Selesai</button>
                </div>
            `;
            tambahanForm.insertBefore(editRow, row.nextSibling);
            row.remove();
            initNumberSeparator()
            satuan_input.value = satuan;
            
            // Autofocus ke label pada edit
            const labelInput = editRow.querySelector('input[placeholder="Label Biaya"]');
            if (labelInput) labelInput.focus();

            // Handler selesai pada edit
            editRow.querySelector('.btn-selesai').addEventListener('click', function(ev2) {
                ev2.preventDefault();
                const labelInput = editRow.querySelector('input[placeholder="Label Biaya"]');
                const satuanInput = editRow.querySelector('#satuan_input');
                const nilaiInput = editRow.querySelector('input[type="text"].number-separator');
                handleSelesai(editRow, labelInput, satuanInput, nilaiInput);
            });
        });
    }

    // Handler tombol addOther
    btnAddOther.addEventListener('click', function(e) {
        e.preventDefault();
        // Buat form input label & satuan
        const row = document.createElement('div');
        row.className = 'row align-items-center other-temp-row';
        row.innerHTML = `
            <div class="col-md-3 mt-3">
                <input type="text" class="form-control w-100 input-add-other p-2 rounded bg-info-subtle border-0" placeholder="Label Biaya">
            </div>
            <div class="d-flex col-md-5 align-items-center mt-3">
                <input type="text" class="form-control w-100 number-separator" inputmode="numeric" pattern="[0-9]*">
                <input type="hidden" class="result-input">
                <select class="form-select text-standard ms-2" id="satuan_input">
                    <option value="Per Pekerjaan/Job">Per Pekerjaan/Job</option>
                    <option value="Per Lembar">Per Lembar</option>
                </select>
            </div>
            <div class="d-flex mt-3 col-md-3">
                <button class="btn btn-selesai">Selesai</button>
                <button class="btn btn-batal">Batal</button>
            </div>
        `;
        tambahanForm.appendChild(row);
        initNumberSeparator()
        // Autofocus ke label
        const labelInput = row.querySelector('input[placeholder="Label Biaya"]');
        if (labelInput) labelInput.focus();

        // Handler tombol selesai
        row.querySelector('.btn-selesai').addEventListener('click', function(ev) {
            ev.preventDefault();
            const labelInput = row.querySelector('input[placeholder="Label Biaya"]');
            const satuanInput = row.querySelector('#satuan_input');
            const nilaiInput = row.querySelector('input[type="text"].number-separator');
            handleSelesai(row, labelInput, satuanInput, nilaiInput);
        });
        // Handler tombol batal
        row.querySelector('.btn-batal').addEventListener('click', function(ev) {
            ev.preventDefault();
            row.remove();
            btnAddOther.classList.remove("disabled");
        });
        btnAddOther.classList.add("disabled")
    });

    // Aktifkan tombol Ubah & Hapus pada biaya tambahan default (yang sudah ada di HTML)
    tambahanForm.querySelectorAll('.row.align-items-center').forEach(function(row) {
        // Cari tombol Ubah dan Hapus dengan cara yang kompatibel
        let btnEdit = row.querySelector('.btn-edit');
        let btnHapus = row.querySelector('.btn-hapus');
        if (!btnEdit) {
            btnEdit = Array.from(row.querySelectorAll('button')).find(btn => btn.textContent.trim().toLowerCase() === 'ubah');
            if (btnEdit) btnEdit.classList.add('btn-edit');
        }
        if (!btnHapus) {
            btnHapus = Array.from(row.querySelectorAll('button')).find(btn => btn.textContent.trim().toLowerCase() === 'hapus');
            if (btnHapus) btnHapus.classList.add('btn-hapus');
        }
        attachEditDeleteHandler(row);
    });
    
    // ----------------------------------------------------------

    // Handler tombol addTax
    const btnAddTax = document.getElementById('addTax');
    const pajakForm = document.querySelector('.pajak-form');

    // Fungsi membuat row final pajak
    function createFinalTaxRow(label, nilai) {
        const finalRow = document.createElement('div');
        finalRow.className = 'row align-items-center mt-3 pajak-row';
        finalRow.innerHTML = `
            <div class="col-3">
                <label class="text-standard label-pajak">${label}</label>
            </div>
            <div class="col-5 input-group input-group-sm w-25 me-3">
                <input type="text" class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" value="${nilai}">
                <input type="hidden" class="result-input">
                <span class="input-group-text">%</span>
            </div>
            <div class="d-flex col-3">
                <button class="btn btn-edit">Ubah</button>
                <button class="btn btn-hapus">Hapus</button>
            </div>
        `;
        return finalRow;
    }

    // Handler selesai (untuk row baru dan edit pajak)
    function handleSelesaiTax(row, labelInput, nilaiInput) {
        const label = labelInput.value.trim();
        const nilai = nilaiInput.value;
        if (!label) {
            labelInput.classList.add('is-invalid');
            labelInput.focus()
            return;
        }
        const finalRow = createFinalTaxRow(label, nilai);
        row.parentNode.insertBefore(finalRow, row.nextSibling);
        row.remove();
        attachEditDeleteHandlerTax(finalRow);
        btnAddTax.classList.remove("disabled")
    }

    // Handler edit & hapus untuk row final pajak
    function attachEditDeleteHandlerTax(row) {
        // Hapus
        row.querySelector('.btn-hapus').addEventListener('click', function(e) {
            e.preventDefault();
            row.remove();
        });
        // Ubah
        row.querySelector('.btn-edit').addEventListener('click', function(e) {
            e.preventDefault();
            // Ambil nilai label dan nilai
            const label = row.querySelector('.label-pajak').textContent;
            const nilai = row.querySelector('input[type="text"].number-separator').value;
            // Buat row edit
            const editRow = document.createElement('div');
            editRow.className = 'row align-items-center mt-3 pajak-row pajak-temp-row';
            editRow.innerHTML = `
                <div class="col-3">
                    <input type="text" class="form-control input-add-other w-100 p-2 bg-info-subtle" placeholder="Nama Pajak" value="${label}">
                </div>
                <div class="col-5 input-group input-group-sm w-25 me-3">
                    <input type="text" class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" value="${nilai}">
                    <input type="hidden" class="result-input">
                    <span class="input-group-text">%</span>
                </div>
                <div class="d-flex col-3">
                    <button class="btn btn-selesai">Selesai</button>
                </div>
            `;
            row.parentNode.insertBefore(editRow, row.nextSibling);
            row.remove();
            initNumberSeparator()

            // Autofocus ke label pada edit
            const labelInput = editRow.querySelector('input[placeholder="Nama Pajak"]');
            if (labelInput) labelInput.focus();

            // Handler selesai pada edit
            editRow.querySelector('.btn-selesai').addEventListener('click', function(ev2) {
                ev2.preventDefault();
                const labelInput = editRow.querySelector('input[placeholder="Nama Pajak"]');
                const nilaiInput = editRow.querySelector('input[type="text"].number-separator');
                handleSelesaiTax(editRow, labelInput, nilaiInput);
            });
        });
    }

    // Handler tombol addTax
    btnAddTax.addEventListener('click', function(e) {
        e.preventDefault();
        // Buat form input label & nilai pajak
        const row = document.createElement('div');
        row.className = 'row align-items-center mt-3 pajak-row pajak-temp-row';
        row.innerHTML = `
            <div class="col-3">
                <input type="text" class="form-control input-add-other w-100 p-2 bg-info-subtle" placeholder="Nama Pajak">
            </div>
            <div class="col-5 input-group input-group-sm w-25 me-3">
                <input type="text" class="form-control number-separator" inputmode="numeric" pattern="[0-9]*">
                <input type="hidden" class="result-input">
                <span class="input-group-text">%</span>
            </div>
            <div class="d-flex col-3">
                <button class="btn btn-selesai">Selesai</button>
                <button class="btn btn-batal">Batal</button>
            </div>
        `;
        pajakForm.appendChild(row);
        initNumberSeparator()

        // Autofocus ke label
        const labelInput = row.querySelector('input[placeholder="Nama Pajak"]');
        if (labelInput) labelInput.focus();

        // Handler tombol selesai
        row.querySelector('.btn-selesai').addEventListener('click', function(ev) {
            ev.preventDefault();
            const labelInput = row.querySelector('input[placeholder="Nama Pajak"]');
            const nilaiInput = row.querySelector('input[type="text"].number-separator');
            handleSelesaiTax(row, labelInput, nilaiInput);
        });
        // Handler tombol batal
        row.querySelector('.btn-batal').addEventListener('click', function(ev) {
            ev.preventDefault();
            row.remove();
            btnAddTax.classList.remove("disabled");
        });
        btnAddTax.classList.add("disabled")
    });

    // Aktifkan tombol Ubah & Hapus pada pajak default (yang sudah ada di HTML)
    pajakForm.querySelectorAll('.row.align-items-center').forEach(function(row) {
        // Cari tombol Ubah dan Hapus dengan cara yang kompatibel
        let btnEdit = row.querySelector('.btn-edit');
        let btnHapus = row.querySelector('.btn-hapus');
        if (!btnEdit) {
            btnEdit = Array.from(row.querySelectorAll('button')).find(btn => btn.textContent.trim().toLowerCase() === 'ubah');
            if (btnEdit) btnEdit.classList.add('btn-edit');
        }
        if (!btnHapus) {
            btnHapus = Array.from(row.querySelectorAll('button')).find(btn => btn.textContent.trim().toLowerCase() === 'hapus');
            if (btnHapus) btnHapus.classList.add('btn-hapus');
        }
        attachEditDeleteHandlerTax(row);
    });

});
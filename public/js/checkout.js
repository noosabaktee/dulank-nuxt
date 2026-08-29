let shippingMethod = document.querySelector('#shipping-method')
let pickupMethod = document.querySelector('#pickup-method')
const pickupList = document.getElementById('pickup-list');
function displayShipping(display){
    if(display){
        shippingMethod.classList.remove('d-none')
        pickupMethod.classList.add('d-none')
        pickupList.classList.add('d-none');
        }else{
        shippingMethod.classList.add('d-none')
        pickupMethod.classList.remove('d-none')
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const pickupBtnSelect = document.getElementById('pickup-btn-select');
    const pickupMethodAddress = document.getElementById('pickup-method-address');

    // Toggle show/hide pickup list
    pickupBtnSelect.addEventListener('click', function() {
        pickupList.classList.toggle('d-none');
    });
    

    // Pilih alamat pickup
    document.querySelectorAll('.select-pickup-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Ubah semua button jadi "Pilih"
            document.querySelectorAll('.select-pickup-btn').forEach(function(b) {
                b.textContent = 'Pilih';
                b.classList.remove('my-btn-primary');
                b.classList.add('my-btn-outline-primary');
            });
            // Ubah button ini jadi "Dipilih"
            btn.textContent = 'Dipilih';
            btn.classList.remove('my-btn-outline-primary');
            btn.classList.add('my-btn-primary');

            // Ambil value alamat dari .pickup-list-value terdekat
            const valueDiv = btn.closest('.border-bottom').querySelector('.pickup-list-value');
            if (valueDiv && pickupMethodAddress) {
                pickupMethodAddress.innerHTML = valueDiv.innerHTML;
            }

            // Sembunyikan daftar pickup
            pickupList.classList.add('d-none');
        });
    });

    function selectRadio(div){
        const radio = div.parentElement.querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = true;
        }
    }

    
    document.querySelectorAll('.address-bill-to-list-value').forEach(function(div) {
        div.addEventListener('click', function() {
            selectRadio(div)
        });
    });

    document.querySelectorAll('.address-shipping-list-value').forEach(function(div) {
        div.addEventListener('click', function() {
            selectRadio(div)
        });
    });

    document.getElementById('save-bill-to-address').addEventListener('click', function() {
        // Cari radio yang checked
        const checkedRadio = document.querySelector('.address-bill-to-list input[type="radio"]:checked');
        if (checkedRadio) {
            // Ambil .address-bill-to-list-value terkait radio yang dipilih
            const selectedAddress = checkedRadio.parentElement.querySelector('.address-bill-to-list-value');
            const billTo = document.querySelector('.bill-to-address');
            if (selectedAddress && billTo) {
                billTo.innerHTML = selectedAddress.innerHTML;
            }
        }
    });

    document.getElementById('save-shipping-address').addEventListener('click', function() {
        // Cari radio yang checked
        const checkedRadio = document.querySelector('.address-shipping-list input[type="radio"]:checked');
        if (checkedRadio) {
            // Ambil .address-shipping-list-value terkait radio yang dipilih
            const selectedAddress = checkedRadio.parentElement.querySelector('.address-shipping-list-value');
            const billTo = document.querySelector('.shipping-address');
            if (selectedAddress && billTo) {
                billTo.innerHTML = selectedAddress.innerHTML;
            }
        }
    });

    // Copy voucher ke input
    document.querySelectorAll('.copy-voucher').forEach(function(btn) {
        btn.addEventListener('click', function() {
        // Ambil kode voucher dari tombol
        const voucherCode = this.previousElementSibling.querySelector('.voucher-value').textContent.trim();
        // Masukkan ke input voucher
        document.getElementById('voucher-input').value = voucherCode;
        });
    });

    // Tampilkan info jika voucher diapply
    const applyBtn = document.getElementById('voucher-apply');
    const voucherInput = document.getElementById('voucher-input');
    const voucherInfo = document.getElementById('voucher-info');
    if (applyBtn && voucherInput && voucherInfo) {
        applyBtn.addEventListener('click', function() {
        if (voucherInput.value.trim() !== '') {
            voucherInfo.classList.remove('d-none');
        } else {
            voucherInfo.classList.add('d-none');
        }
        });
    }    

    document.querySelector('.nomor-po-input').addEventListener('input', function() {
        const originalValue = this.value;

        // Keep only letters and numbers
        const cleanedValue = originalValue.replace(/[^a-zA-Z0-9\s\-_/().]/g, '');

        // Update the input field
        this.value = cleanedValue;
    });
});


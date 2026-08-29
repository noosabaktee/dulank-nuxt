// Initialize variables
const minusButtons = document.querySelectorAll('.card-product-list .quantity-minus');
const plusButtons = document.querySelectorAll('.card-product-list .quantity-plus');
const removeButtons = document.querySelectorAll('.btn-remove-save');
const grandTotalPrice = document.querySelector('#grandTotal')

// Add event listeners to quantity minus buttons
minusButtons.forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('.quantity-input');
        let deletedComma = input.value.replace(/,/g, "");
        let value = parseInt(deletedComma);
        if (value > 1) {
            value--;
            input.value = value;
            input.dispatchEvent(new Event('input'));
            updateTotal()
        }
    });
});

// Add event listeners to quantity plus buttons
plusButtons.forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('.quantity-input');
        let deletedComma = input.value.replace(/,/g, "");
        let value = parseInt(deletedComma);
        value++;
        input.value = value;
        input.dispatchEvent(new Event('input'));
        updateTotal()
    });
});



// Add event listeners to remove buttons
removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const saveItem = this.closest('.card-product-list');

        // Add a fade-out animation
        saveItem.style.transition = 'opacity 0.3s ease';
        saveItem.style.opacity = '0';

        // Remove the item after animation completes
        setTimeout(() => {
            saveItem.remove();

            // Check if save is empty after removal
            const saveItems = document.querySelectorAll('.card-product-list');
            if (saveItems.length === 0) {
                document.querySelector('.save').classList.add('d-none');
                document.querySelector('.empty-save-container').classList.remove('d-none');
                document.querySelector('.mt-4').classList.add('d-none');
            } 
            updateTotal()
        }, 300);
        sweetDelete()
    });
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            input.blur()
        }
    });
});

function updateTotal() {
    // isOngkir false for quotation page
    let subtotal = 0;
    // Calculate subtotal based on items in cart
    document.querySelectorAll('.card-product-list').forEach(item => {
        const price = parseRupiah(item.querySelector('.price').textContent);
        const quantity = parseRupiah(item.querySelector('.quantity').value);
        total_item = price * quantity
        item.querySelector('.total-item').textContent = "Rp"+formatRupiah(total_item.toString());
        subtotal += total_item
    })
    let grand_total = subtotal;
    grandTotalPrice.textContent = "Rp"+formatRupiah(grand_total.toString());
}

function add_to(btn){
    const navbar = document.getElementById('navbar-placeholder');

    setTimeout(() => {
        // Cari badge wishlist di navbar
        // Pastikan navbar sudah di-load (jika pakai komponen async, bisa perlu tweak)
        let badge;
        if(btn == "wishlist"){
            badge = document.querySelector('.navbar .bi-heart ~ .icon-badge');
        }else{
            badge = document.querySelector('.navbar .bi-cart3 ~ .icon-badge');
        }
        if (badge) {
            // Tambah angka badge
            let count = parseInt(badge.textContent) || 0;
            badge.textContent = count + 1;

            // Tambah animasi bubble
            badge.classList.remove('badge-bubble-animate'); // reset jika sebelumnya ada
            // Trigger reflow supaya animasi bisa diulang
            void badge.offsetWidth;
            badge.classList.add('badge-bubble-animate');

            // Hapus class animasi setelah selesai (optional, biar bisa diulang)
            setTimeout(() => {
                badge.classList.remove('badge-bubble-animate');
            }, 400);
        }
    }, 400);

    if (navbar) {
        // --- ANIMASI NAVBAR ---
        const rect = navbar.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top < 0) {
            // Simpan posisi dan style awal
            const originalPosition = navbar.style.position;
            const originalZ = navbar.style.zIndex;
            const originalWidth = navbar.style.width;
            const originalTop = navbar.style.top;
            const originalBg = navbar.style.backgroundColor;
            const originalBorder = navbar.style.borderBottom;

            // Placeholder agar konten tidak naik
            let navbarHeight = navbar.offsetHeight;
            let placeholder = document.createElement('div');
            placeholder.style.height = navbarHeight + 'px';
            placeholder.style.display = 'none';
            placeholder.id = 'navbar-temp-placeholder';
            if (!document.getElementById('navbar-temp-placeholder')) {
                navbar.parentNode.insertBefore(placeholder, navbar);
            }
            placeholder = document.getElementById('navbar-temp-placeholder');
            placeholder.style.display = 'block';

            // Style agar tidak transparan/melayang
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.left = '0';
            navbar.style.right = '0';
            navbar.style.zIndex = '9999';
            navbar.style.width = '100%';
            navbar.style.backgroundColor = '#fff';
            navbar.style.borderBottom = '1px solid #eee';
            navbar.style.transition = 'box-shadow 0.3s, transform 0.5s';
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            navbar.style.transformOrigin = 'top';
            navbar.style.transform = 'scaleY(1.05)';

            setTimeout(() => {
                navbar.style.transform = 'scaleY(1)';
            }, 350);

            setTimeout(() => {
                navbar.style.boxShadow = '';
                navbar.style.transition = '';
                navbar.style.position = originalPosition;
                navbar.style.zIndex = originalZ;
                navbar.style.width = originalWidth;
                navbar.style.top = originalTop;
                navbar.style.backgroundColor = originalBg;
                navbar.style.borderBottom = originalBorder;
                if (placeholder) placeholder.style.display = 'none';
            }, 1000);
        }

    }
}

// Efek navbar "turun" sementara jika tidak terlihat saat add-wishlist diklik (tanpa scroll, pakai scaleY)
// dan animasi icon love melayang ke navbar
document.querySelectorAll('.add-wishlist-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        add_to("wishlist");
    });
});
document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        add_to("cart");
    });
});
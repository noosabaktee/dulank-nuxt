        
        updateTotal()

        const jobNameEditInput = document.querySelectorAll('.input-edit')
        const jobNameBtn = document.querySelectorAll('.job-name-btn')
        let jobInputValue = ""

        const checkboxes = document.querySelectorAll('.save-item input[type="checkbox"]');
        const updateCartBtn = document.getElementById('update-cart-btn');
        const checkoutBtn = document.getElementById('checkout-btn');
        const quotationBtn = document.getElementById('quotation-btn');
        const dueDates = document.querySelectorAll('#due-date');
                        
        function handleCartCheckbox() {
            const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
            if (anyChecked) {
                updateCartBtn.classList.remove('d-none');
                updateInfo.classList.remove('d-none');
                // Hanya ubah due-date pada item yang dicentang
                checkboxes.forEach(cb => {
                    const dueDate = cb.closest('.card-product-list').querySelector('#due-date');
                    if (cb.checked && dueDate) {
                        dueDate.textContent = 'Need to be update';
                    }
                });
            } else {
                // updateCartBtn.classList.add('d-none');
                // updateInfo.classList.add('d-none');
                // Reset semua due-date ke default
                checkboxes.forEach(cb => {
                    const dueDate = cb.closest('.card-product-list').querySelector('#due-date');
                    if (dueDate) dueDate.textContent = 'Need to be update';
                });
            }
        }
        
        // Event listener untuk tombol update cart
        updateCartBtn.addEventListener('click', function() {
            // Enable tombol checkout & quotation
            checkoutBtn.classList.remove('disabled');
            quotationBtn.classList.remove('disabled');
            // Hanya ubah due-date pada item yang dicentang
            checkboxes.forEach(cb => {
                const dueDate = cb.closest('.card-product-list').querySelector('#due-date');
                if (cb.checked && dueDate) {
                    dueDate.textContent = 'expire until 25/25/2025';
                }
            });
            updateCartBtn.classList.add('d-none');
            updateInfo.classList.add('d-none');
            // Uncheck semua checkbox setelah update cart
            checkboxes.forEach(cb => cb.checked = false);
        });
                        
        // Pasang event listener ke semua checkbox
        checkboxes.forEach(cb => {
            cb.addEventListener('change', handleCartCheckbox);
        });
        
        // Jalankan sekali saat load
        handleCartCheckbox();


        const input_number = document.querySelectorAll('.number-separator');
        input_number.forEach(input => {
            easyNumberSeparator({
                selector: input,
                separator: '.',
                resultInput: input.parentElement.querySelector('.quantity'),
            })
            input.addEventListener('input', () => {
                updateTotal()
            })
        })

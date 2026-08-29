        document.addEventListener("DOMContentLoaded", function() {
            const myCarouselElement = document.querySelector('#myCarousel')
    
            const carousel = new bootstrap.Carousel(myCarouselElement, {
                interval: 2000,
                touch: false
            })
        });
        // Show Offer modal after 3 seconds
        const showOfferModal = () => {
            // Check if modal should be shown (not opted out via checkbox)
            if (!localStorage.getItem('dontShowOfferModal')) {
                const OfferModal = new bootstrap.Modal(document.getElementById('offerModal'));
                OfferModal.show();
            }
        };

        // Show product toast notification after 1 second
        const showProductToast = () => {
            const productToast = document.getElementById('newProductToast');
            if (productToast) {
                const toast = new bootstrap.Toast(productToast, {
                    autohide: true,
                    delay: 8000
                });
                toast.show();
            }
        };

        // Handle Offer modal's "Don't show again" checkbox
        const dontShowAgainCheckbox = document.getElementById('dontShowAgain');
        if (dontShowAgainCheckbox) {
            dontShowAgainCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    localStorage.setItem('dontShowOfferModal', 'true');
                } else {
                    localStorage.removeItem('dontShowOfferModal');
                }
            });
        }
        // Delay modal and toast appearance
        setTimeout(() => {
            showOfferModal();
        }, 1000);

        setTimeout(() => {
            showProductToast();
        }, 1000);

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
        })

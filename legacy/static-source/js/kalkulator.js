 // Highlight active sidebar item based on URL path
function highlightActiveSidebar() {
    const currentUrl = window.location.pathname;
    const sidebarItems = document.querySelectorAll('.profile-nav-item');

    sidebarItems.forEach(item => {
        // Remove active class from all items
        item.classList.remove('active');

        // Get the link and check if it's in the current URL
        const link = item.querySelector('a');
        if (link && link.getAttribute('href')) {
            const href = link.getAttribute('href');
            if (currentUrl.includes(href) && href !== '#') {
                item.classList.add('active');
            }
        }
    });

    const semuaPercetakan = ["semua-percetakan", "mesin-cetak", "mesin-laminasi","mesin-pond","mesin-poli"]
    const semuaTokoKertas = ["semua-toko-kertas", "semua-kertas"]

    if(semuaPercetakan.includes(currentUrl.split(".")[0].slice(1))){
        document.querySelector('#collapseSemuaPercetakan').classList.add("show")
        document.querySelector('[aria-controls="collapseSemuaPercetakan"]').classList.remove('flip-vertical')
    }
    if(semuaTokoKertas.includes(currentUrl.split(".")[0].slice(1))){
        document.querySelector('#collapseSemuaTokoKertas').classList.add("show")
        document.querySelector('[aria-controls="collapseSemuaTokoKertas"]').classList.remove('flip-vertical')
    }

    // If no item is active, highlight the overview by default
    if (!document.querySelector('.profile-nav-item.active')) {
        const overviewItem = document.querySelector('.profile-nav-item:first-child');
        if (overviewItem) {
            overviewItem.classList.add('active');
        }
    }
}

// Update hash saat tab diklik
function updateTabKertas(e){
    const target = e.getAttribute('href').split("#")[1]
    const tabLink = document.querySelector(`a.nav-link[href="#${target}"]`);
    if (tabLink) {
        const tabTrigger = new bootstrap.Tab(tabLink);
        tabTrigger.show();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Muat Sidebar-profile
    loadHTML('templates/navbar-kalkulator.html', 'navbar-kalkulator-placeholder')
    loadHTML('templates/header-kalkulator.html', 'header-kalkulator-placeholder')
    
    loadHTML('templates/sidebar-kalkulator.html', 'sidebar-kalkulator-placeholder').then(() => {
        highlightActiveSidebar();
    })
});
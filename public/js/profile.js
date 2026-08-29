

// loadHTML('account.html', 'content-profile-placeholder').then();
document.addEventListener("DOMContentLoaded", function() {
    // Muat Sidebar-profile
    loadHTML('templates/sidebar-profile.html', 'sidebar-profile-placeholder')

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

        // If no item is active, highlight the overview by default
        if (!document.querySelector('.profile-nav-item.active')) {
            const overviewItem = document.querySelector('.profile-nav-item:first-child');
            if (overviewItem) {
                overviewItem.classList.add('active');
            }
        }
    }

    // Call the initialization functions
    setupAvatarUpload();
    highlightActiveSidebar();

    // Handle profile nav item clicks for single page application behavior
    document.querySelectorAll('.profile-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process links that point to sections (not external links)
            if (this.getAttribute('href') === '#') {
                e.preventDefault();

                // Remove active class from all items
                document.querySelectorAll('.profile-nav-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Add active class to clicked item
                this.parentElement.classList.add('active');

                // In a real implementation, you would load different content
                // based on which nav item was clicked
                const navText = this.textContent.trim();
            }
        });
    });


    const tabBtn = document.querySelectorAll('.tab-btn');
    const tabForm = document.querySelectorAll('.tab-form');

    tabBtn.forEach(btn => {
        btn.addEventListener('click', function(){
            tabForm.forEach(tf => tf.style.display = "none");
            const target = btn.getAttribute('target-form')
            document.getElementById(target).style.display = "block"
            tabBtn.forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
        })
    })
});
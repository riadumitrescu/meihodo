// Mobile Navigation Handler
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const body = document.body;
    
    if (!mobileMenuToggle || !mainNav) return;
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        const isOpen = mainNav.classList.contains('nav--open');
        
        if (isOpen) {
            // Close menu
            mainNav.classList.remove('nav--open');
            mobileMenuToggle.classList.remove('mobile-menu-toggle--open');
            body.classList.remove('nav-open');
        } else {
            // Open menu
            mainNav.classList.add('nav--open');
            mobileMenuToggle.classList.add('mobile-menu-toggle--open');
            body.classList.add('nav-open');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mainNav.classList.remove('nav--open');
            mobileMenuToggle.classList.remove('mobile-menu-toggle--open');
            body.classList.remove('nav-open');
        }
    });
    
    // Handle dropdown toggles on mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.closest('.dropdown');
                const isOpen = dropdown.classList.contains('dropdown--open');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown').forEach(d => {
                    d.classList.remove('dropdown--open');
                });
                
                // Toggle current dropdown
                if (!isOpen) {
                    dropdown.classList.add('dropdown--open');
                }
            }
        });
    });
    
    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('nav--open');
            mobileMenuToggle.classList.remove('mobile-menu-toggle--open');
            body.classList.remove('nav-open');
            document.querySelectorAll('.dropdown').forEach(d => {
                d.classList.remove('dropdown--open');
            });
        }
    });
});

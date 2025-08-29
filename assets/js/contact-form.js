// Contact Form Handler for Meihodo with Netlify
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[name="contact"]');
    const submitBtn = document.getElementById('submit-btn');
    const messagesDiv = document.getElementById('form-messages');
    
    if (!form) return;
    
    // Show loading state
    function showLoading() {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
    }
    
    // Reset button state
    function resetButton() {
        submitBtn.textContent = 'Send Inquiry';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }
    
    // Show message
    function showMessage(message, type) {
        messagesDiv.innerHTML = `<div class="alert alert--${type}">${message}</div>`;
        messagesDiv.style.display = 'block';
        
        // Scroll to message
        messagesDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messagesDiv.style.display = 'none';
        }, 5000);
    }
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        // Basic validation
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
        
        if (!name || !email || !message) {
            e.preventDefault();
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        showLoading();
        
        // Let Netlify handle the form submission
        // The form will submit automatically and redirect to success page
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error') && this.value.trim()) {
                this.classList.remove('error');
            }
        });
    });
});

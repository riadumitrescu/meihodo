// Contact Form Handler for Meihodo with Formspree
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
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
        
        // Hide message after 8 seconds for success, 5 seconds for errors
        const timeout = type === 'success' ? 8000 : 5000;
        setTimeout(() => {
            messagesDiv.style.display = 'none';
        }, timeout);
    }
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
        
        if (!name || !email || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        showLoading();
        
        // Prepare form data
        const formData = new FormData(form);
        
        // Submit to Formspree
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Sorry, there was an error sending your message. Please try again or contact us directly via email.', 'error');
        })
        .finally(() => {
            resetButton();
        });
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

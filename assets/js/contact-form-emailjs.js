// Alternative Contact Form Handler using EmailJS
// This is a backup option if you prefer EmailJS over Formspree

// First, add this to your HTML head section:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
// <script>emailjs.init("YOUR_USER_ID");</script>

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
        
        // Prepare email template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            phone: form.querySelector('#phone')?.value || 'Not provided',
            topic: form.querySelector('#topic')?.value || 'General inquiry',
            message: message,
            to_email: 'meihodoliving@gmail.com'
        };
        
        // Send email using EmailJS
        emailjs.send(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            templateParams
        )
        .then(function(response) {
            showMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
            form.reset();
        })
        .catch(function(error) {
            console.error('EmailJS Error:', error);
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

/*
EmailJS Setup Instructions:

1. Sign up at emailjs.com
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your User ID, Service ID, and Template ID
5. Replace the placeholders in this code:
   - YOUR_USER_ID
   - YOUR_SERVICE_ID  
   - YOUR_TEMPLATE_ID

EmailJS Template Example:
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Topic: {{topic}}
Message: {{message}}

This email was sent from the Meihodo website contact form.
*/


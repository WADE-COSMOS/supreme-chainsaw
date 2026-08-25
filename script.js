// ================================================
// SUPREME CHAINSAW - INTERACTIVE FUNCTIONALITY
// ================================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
});

// ================================================
// CONTACT FORM HANDLING WITH FORMSPREE
// ================================================

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = this;
    const submitBtn = form.querySelector('.submit-btn');
    const formMessage = document.getElementById('formMessage');
    
    // Get form data
    const formData = new FormData(form);
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formMessage.classList.remove('show', 'success', 'error');

    try {
        // Using Formspree service for email handling
        const response = await fetch('https://formspree.io/f/mzepnbln', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success
            formMessage.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
            formMessage.classList.add('show', 'success');
            form.reset();
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.remove('show');
            }, 5000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        // Error
        formMessage.textContent = '✗ Error sending message. Please try again or contact us directly.';
        formMessage.classList.add('show', 'error');
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }
});

// ================================================
// CLIENT-SIDE FORM VALIDATION
// ================================================

const form = document.getElementById('contactForm');

form.addEventListener('input', function(e) {
    const field = e.target;
    const errorElement = field.nextElementSibling;

    // Email validation
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value) && field.value !== '') {
            field.style.borderColor = '#ff6b6b';
        } else {
            field.style.borderColor = '';
        }
    }

    // Name validation (at least 2 characters)
    if (field.id === 'name' && field.value.length < 2 && field.value !== '') {
        field.style.borderColor = '#ff6b6b';
    } else if (field.id === 'name') {
        field.style.borderColor = '';
    }

    // Message validation (at least 10 characters)
    if (field.id === 'message' && field.value.length < 10 && field.value !== '') {
        field.style.borderColor = '#ff6b6b';
    } else if (field.id === 'message') {
        field.style.borderColor = '';
    }
});

// ================================================
// SMOOTH SCROLL BEHAVIOR ENHANCEMENT
// ================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================================
// SCROLL ANIMATIONS - Fade in elements on scroll
// ================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and portfolio cards
document.querySelectorAll('.service-card, .portfolio-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ================================================
// NAVBAR SCROLL EFFECT - Add shadow on scroll
// ================================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 229, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ================================================
// PORTFOLIO CARD HOVER EFFECT
// ================================================

document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ================================================
// ALTERNATIVE: LOCAL STORAGE FORM SAVE
// ================================================

// Auto-save form data to local storage
const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');

formInputs.forEach(input => {
    // Load saved data
    if (localStorage.getItem(input.id)) {
        input.value = localStorage.getItem(input.id);
    }

    // Save data on input
    input.addEventListener('change', function() {
        localStorage.setItem(this.id, this.value);
    });
});

// Clear local storage after successful submission
form.addEventListener('submit', function() {
    formInputs.forEach(input => {
        localStorage.removeItem(input.id);
    });
});

// ================================================
// PARALLAX EFFECT (Optional Enhancement)
// ================================================

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ================================================
// NEWSLETTER/EMAIL CAPTURE (Optional)
// ================================================

// Email validation utility
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ================================================
// LAZY LOADING FOR IFRAMES (Performance)
// ================================================

if ('IntersectionObserver' in window) {
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // iframe will load when scrolled into view
                    observer.unobserve(iframe);
                }
            });
        });
        observer.observe(iframe);
    });
}

// ================================================
// ANALYTICS & TRACKING (Optional)
// ================================================

// Track CTA clicks
document.querySelectorAll('.cta-button, .hero-btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log('CTA Button Clicked:', this.textContent);
        // You can send this to analytics service like Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                'button_text': this.textContent
            });
        }
    });
});

// ================================================
// SERVICE INTERACTION
// ================================================

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        // Could open a modal or navigate to service details
        console.log('Service clicked:', this.querySelector('h3').textContent);
    });
});

// ================================================
// KEYBOARD NAVIGATION
// ================================================

document.addEventListener('keydown', function(e) {
    // Press 'C' to scroll to contact section
    if (e.key === 'c' || e.key === 'C') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Press 'H' to scroll to home
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ================================================
// PERFORMANCE OPTIMIZATION
// ================================================

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll handler
window.addEventListener('scroll', debounce(function() {
    // Scroll-related operations here
}, 100));

// ================================================
// SETUP INSTRUCTIONS
// ================================================

console.log('%cSupreme Chainsaw Website Loaded', 'color: #00e5ff; font-size: 16px; font-weight: bold;');
console.log('%c✓ Formspree Email Service ACTIVE', 'color: #00e5ff; font-weight: bold;');
console.log('Form ID: mzepnbln');
console.log('All contact form submissions will be sent to your Formspree inbox');

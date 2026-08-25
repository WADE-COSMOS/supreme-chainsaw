// ================================================
// SUPREME CHAINSAW - INTERACTIVE FUNCTIONALITY
// ================================================

let currentRole = null;

// ================================================
// ROLE SELECTION SYSTEM
// ================================================

function setRole(role) {
    currentRole = role;
    localStorage.setItem('userRole', role);
    
    // Hide modal
    document.getElementById('roleModal').classList.remove('show');
    
    // Show appropriate form
    if (role === 'client') {
        document.getElementById('clientForm').style.display = 'block';
        document.getElementById('editorForm').style.display = 'none';
    } else if (role === 'editor') {
        document.getElementById('editorForm').style.display = 'block';
        document.getElementById('clientForm').style.display = 'none';
    }
}

function changeRole() {
    document.getElementById('roleModal').classList.add('show');
    currentRole = null;
}

// Check if user already selected a role
document.addEventListener('DOMContentLoaded', function() {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
        setRole(savedRole);
    }

    // Mobile Menu Toggle
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

    // Setup contact forms
    setupClientForm();
    setupEditorForm();
});

// ================================================
// CLIENT CONTACT FORM HANDLING
// ================================================

function setupClientForm() {
    const form = document.getElementById('contactFormClient');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const formMessage = document.getElementById('formMessage');
        
        // Get form data
        const formData = new FormData(form);
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formMessage.classList.remove('show', 'success', 'error');

        try {
            // Using Formspree service for client submissions
            const response = await fetch('https://formspree.io/f/xrpzybbb', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formMessage.textContent = '✓ Message sent successfully! We\'ll review your project and get back to you within 24 hours.';
                formMessage.classList.add('show', 'success');
                form.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;

                // Hide message after 7 seconds
                setTimeout(() => {
                    formMessage.classList.remove('show');
                }, 7000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Error
            formMessage.textContent = '✗ Error sending message. Please try again or contact us directly at info@supremechainsaw.com';
            formMessage.classList.add('show', 'error');
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }
    });

    // Client form validation
    form.addEventListener('input', function(e) {
        const field = e.target;

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

    // Auto-save form data to local storage
    const clientInputs = form.querySelectorAll('input, select, textarea');
    clientInputs.forEach(input => {
        // Load saved data
        if (localStorage.getItem('client_' + input.id)) {
            input.value = localStorage.getItem('client_' + input.id);
        }

        // Save data on input
        input.addEventListener('change', function() {
            localStorage.setItem('client_' + this.id, this.value);
        });
    });

    // Clear local storage after successful submission
    form.addEventListener('submit', function() {
        clientInputs.forEach(input => {
            localStorage.removeItem('client_' + input.id);
        });
    });
}

// ================================================
// EDITOR CONTACT FORM HANDLING
// ================================================

function setupEditorForm() {
    const form = document.getElementById('contactFormEditor');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const formMessage = document.getElementById('formMessageEditor');
        
        // Get form data
        const formData = new FormData(form);
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting Application...';
        formMessage.classList.remove('show', 'success', 'error');

        try {
            // Using Formspree service for editor submissions - Different form ID
            const response = await fetch('https://formspree.io/f/xrpznbae', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formMessage.textContent = '✓ Application submitted successfully! We\'ll review your profile and contact you within 2-3 business days.';
                formMessage.classList.add('show', 'success');
                form.reset();
                submitBtn.textContent = 'Submit Application';
                submitBtn.disabled = false;

                // Hide message after 7 seconds
                setTimeout(() => {
                    formMessage.classList.remove('show');
                }, 7000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Error
            formMessage.textContent = '✗ Error submitting application. Please try again or email us at careers@supremechainsaw.com';
            formMessage.classList.add('show', 'error');
            submitBtn.textContent = 'Submit Application';
            submitBtn.disabled = false;
        }
    });

    // Editor form validation
    form.addEventListener('input', function(e) {
        const field = e.target;

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
        if (field.id === 'editorName' && field.value.length < 2 && field.value !== '') {
            field.style.borderColor = '#ff6b6b';
        } else if (field.id === 'editorName') {
            field.style.borderColor = '';
        }

        // Message validation (at least 20 characters)
        if (field.id === 'editorMessage' && field.value.length < 20 && field.value !== '') {
            field.style.borderColor = '#ff6b6b';
        } else if (field.id === 'editorMessage') {
            field.style.borderColor = '';
        }
    });

    // Auto-save form data to local storage
    const editorInputs = form.querySelectorAll('input, select, textarea');
    editorInputs.forEach(input => {
        // Load saved data
        if (localStorage.getItem('editor_' + input.id)) {
            input.value = localStorage.getItem('editor_' + input.id);
        }

        // Save data on input
        input.addEventListener('change', function() {
            localStorage.setItem('editor_' + this.id, this.value);
        });
    });

    // Clear local storage after successful submission
    form.addEventListener('submit', function() {
        editorInputs.forEach(input => {
            localStorage.removeItem('editor_' + input.id);
        });
    });
}

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

// Observe service cards, portfolio cards, and other elements
document.querySelectorAll('.service-card, .portfolio-card, .process-card, .testimonial-card, .pricing-card, .faq-item').forEach(el => {
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
// PARALLAX EFFECT
// ================================================

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
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

    // Press 'P' to scroll to portfolio
    if (e.key === 'p' || e.key === 'P') {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
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
console.log('%cTo setup email functionality:', 'color: #8a2be2; font-weight: bold;');
console.log('✓ Client Form ID: xrpzybbb');
console.log('✓ Editor Form ID: xrpznbae');
console.log('Both forms are configured and ready to receive submissions!');

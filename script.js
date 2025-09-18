// DOM Elements
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillBars = document.querySelectorAll('.skill-progress');
const contactForm = document.querySelector('.contact-form');
const typingText = document.querySelector('.typing-text');
const scrollArrow = document.querySelector('.scroll-arrow');

// Typing Animation
const roles = [
    'Junior Backend Developer',
    'ASP.NET MVC Developer', 
    'Python Developer',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed /= 2;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Wait before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeAnimation, typeSpeed);
}

// Mobile Navigation Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth scroll to section
function scrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    closeMobileMenu();
}

// Update active navigation link
function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Animate skill bars when in view
function animateSkillBars() {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const barBottom = bar.getBoundingClientRect().bottom;
        
        // Check if skill bar is in view
        if (barTop < window.innerHeight && barBottom > 0) {
            const width = bar.getAttribute('data-width');
            if (width && !bar.style.width) {
                // Add a small delay for staggered animation
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, Math.random() * 500);
            }
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
function observeElements() {
    const animateElements = document.querySelectorAll(
        '.hero-content, .hero-image, .about-content, .skill-category, .timeline-item, .project-card, .contact-content'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Form validation and submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Lütfen tüm alanları doldurun.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Geçerli bir e-mail adresi girin.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.', 'success');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--gradient-primary)' : type === 'error' ? 'var(--gradient-secondary)' : 'var(--bg-card)'};
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius-md);
        box-shadow: var(--shadow-primary);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll to top functionality
function createScrollToTopButton() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        color: var(--text-primary);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: var(--shadow-primary);
        transform: translateY(100px);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide based on scroll position
    function toggleScrollTopButton() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollTopBtn.style.transform = 'translateY(100px)';
        }
    }
    
    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect
    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'translateY(0) scale(1.1)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'translateY(0) scale(1)';
    });
    
    window.addEventListener('scroll', toggleScrollTopButton);
}

// Parallax effect for hero section - DISABLED
function handleParallax() {
    // Parallax effect disabled to keep hero image fixed
    return;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
}

// Add loading animation
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">MB</div>
            <div class="loader-progress">
                <div class="loader-bar"></div>
            </div>
            <div class="loader-text">Portfolio Yükleniyor...</div>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .loader-content {
            text-align: center;
        }
        .loader-logo {
            font-size: 3rem;
            font-weight: var(--font-weight-bold);
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 2rem;
            animation: pulse 2s ease-in-out infinite;
        }
        .loader-progress {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin: 0 auto 1rem;
        }
        .loader-bar {
            height: 100%;
            background: var(--gradient-primary);
            border-radius: 2px;
            animation: loadingBar 2s ease-in-out infinite;
        }
        .loader-text {
            color: var(--text-secondary);
            font-weight: var(--font-weight-medium);
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        @keyframes loadingBar {
            0% { width: 0; transform: translateX(-100%); }
            50% { width: 100%; transform: translateX(0); }
            100% { width: 100%; transform: translateX(100%); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(loader);
    
    // Remove loader after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
                style.remove();
            }, 500);
        }, 1000);
    });
}

// Add custom cursor effect
function createCustomCursor() {
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorDot.className = 'cursor-dot';
    
    cursor.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
        opacity: 0;
    `;
    
    cursorDot.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
        opacity: 0;
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
        
        requestAnimationFrame(updateCursor);
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });
    
    // Add hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .social-link');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.borderColor = 'var(--accent-color)';
            cursorDot.style.background = 'var(--accent-color)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.borderColor = 'var(--primary-color)';
            cursorDot.style.background = 'var(--primary-color)';
        });
    });
    
    updateCursor();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show loading animation
    showLoadingAnimation();
    
    // Initialize typing animation
    setTimeout(() => {
        typeAnimation();
    }, 1500);
    
    // Create scroll to top button
    createScrollToTopButton();
    
    // Create custom cursor (only on desktop)
    if (window.innerWidth > 768) {
        createCustomCursor();
    }
    
    // Observe elements for animations
    observeElements();
    
    // Event listeners
    navToggle.addEventListener('click', toggleMobileMenu);
    
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Scroll event listeners
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        updateActiveNavLink();
        animateSkillBars();
        
        // Throttle parallax for performance
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                if (window.innerWidth > 768) {
                    handleParallax();
                }
                scrollTimeout = null;
            }, 16); // ~60fps
        }
    });
    
    // Resize event listener
    window.addEventListener('resize', () => {
        // Close mobile menu on resize
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
        
        // Navigate with arrow keys (when not in form fields)
        if (!['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
            if (e.key === 'ArrowDown') {
                window.scrollBy({ top: 100, behavior: 'smooth' });
            } else if (e.key === 'ArrowUp') {
                window.scrollBy({ top: -100, behavior: 'smooth' });
            }
        }
    });
});

// Service Worker for offline functionality (Progressive Web App)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add some interactive Easter eggs
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated!
        showNotification('🎉 Konami Code bulundu! Gizli geliştirici modu etkinleştirildi!', 'success');
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        konamiCode = [];
    }
});

// Performance monitoring
function performanceMonitor() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                console.log(`Portfolio site loaded in ${loadTime}ms`);
                
                // Show performance notification if load time is good
                if (loadTime < 1000) {
                    setTimeout(() => {
                        showNotification('⚡ Site hızlı yüklendi! Performans: Mükemmel', 'success');
                    }, 2000);
                }
            }, 0);
        });
    }
}

// Initialize performance monitoring
performanceMonitor();
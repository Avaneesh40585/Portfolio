// Configuration object for easy customization
const appConfig = {
    navbarOffset: 60,
    scrollDuration: 'smooth',
    observerThreshold: 0.1,
    observerMargin: '0px 0px -100px 0px',
    animationDuration: '0.6s',
    elementsToAnimate: '.project-card, .skill-category, .stat'
};

// Initialize smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - appConfig.navbarOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: appConfig.scrollDuration
                });
            }
        });
    });
}

// Initialize scroll animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: appConfig.observerThreshold,
        rootMargin: appConfig.observerMargin
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Set initial state and observe elements
    document.querySelectorAll(appConfig.elementsToAnimate).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all ${appConfig.animationDuration} ease`;
        observer.observe(el);
    });
}

// Close mobile menu when clicking outside
function initMenuCloseOnOutside() {
    document.addEventListener('click', (e) => {
        const navMenu = document.getElementById('navMenu');
        const navWrapper = document.querySelector('.nav-wrapper');
        
        if (navMenu && navWrapper && !navWrapper.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollAnimations();
    initMenuCloseOnOutside();
});


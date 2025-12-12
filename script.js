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

// Initialize theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', currentTheme);
  
  // Update icon based on current theme
  updateThemeIcon(currentTheme);
  
  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

// Update theme toggle icon
function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  }
}

// Initialize hamburger menu toggle
function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
}

// Close mobile menu when clicking outside
function initMenuCloseOnOutside() {
  document.addEventListener('click', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    if (navMenu && navWrapper && !navWrapper.contains(e.target)) {
      navMenu.classList.remove('active');
      if (hamburger) {
        hamburger.classList.remove('active');
      }
    }
  });
}

// Initialize timeline animations
function initTimelineAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.2 });
  
  timelineItems.forEach(item => observer.observe(item));
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initScrollAnimations();
  initThemeToggle();
  initHamburgerMenu();
  initMenuCloseOnOutside();
  initTimelineAnimations();
});



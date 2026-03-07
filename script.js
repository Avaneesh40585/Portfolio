const appConfig = {
  navbarOffset: 60,
  scrollDuration: 'smooth',
  observerThreshold: 0.1,
  observerMargin: '0px 0px -100px 0px',
  animationDuration: '0.4s', // Made slightly snappier
  elementsToAnimate: '.project-card, .skill-category'
};

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

  document.querySelectorAll(appConfig.elementsToAnimate).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(15px)';
    el.style.transition = `all ${appConfig.animationDuration} ease-out`;
    observer.observe(el);
  });
}

function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
}

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

// Initialize hero background interactive parallax effect
function initHeroParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  hero.addEventListener('mousemove', (e) => {
    // Get dimensions of the hero section
    const rect = hero.getBoundingClientRect();
    
    // Calculate mouse position relative to the element
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  

    // Calculate percentage from center (-1 to 1)
    // We use this multiplier to determine how intensely the grid tilts
    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    // Pass the coordinates dynamically to CSS variables
    hero.style.setProperty('--mouse-x', xPercent);
    hero.style.setProperty('--mouse-y', yPercent);
  });

  // Smoothly snap back to center when the mouse leaves the section
  hero.addEventListener('mouseleave', () => {
    hero.style.setProperty('--mouse-x', 0);
    hero.style.setProperty('--mouse-y', 0);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initScrollAnimations();
  initHamburgerMenu();
  initMenuCloseOnOutside();
  initTimelineAnimations();
  initHeroParallax();
});
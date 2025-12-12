const navbarData = {
  logo: 'Avaneesh40585',
  links: [
    { text: 'Home', href: '#hero' },
    { text: 'About', href: '#about' },
    { text: 'Skills', href: '#skills' },
    { text: 'Courses', href: '#courses' },
    { text: 'Experience', href: '#timeline' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' }
  ]
};

function renderNavLinks() {
  return navbarData.links.map(link => `
    <li><a href="${link.href}">${link.text}</a></li>
  `).join('');
}

function renderNavbar() {
  const navHTML = `
    <div class="container">
      <div class="nav-wrapper">
        <div class="logo">${navbarData.logo}</div>
        <ul class="nav-menu">
          ${renderNavLinks()}
        </ul>
        <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle theme">
          <i class="fas fa-moon"></i>
        </button>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `;
  
  const navbar = document.getElementById('navbar');
  navbar.className = 'navbar';
  navbar.innerHTML = navHTML;
}

renderNavbar();


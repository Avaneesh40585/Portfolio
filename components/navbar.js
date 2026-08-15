const navbarData = {
  logo: 'Avaneesh',
  logoTag: '/40585',
  themeLabel: 'Theme',
  // Labels match each section's kicker exactly, so a visitor always lands
  // on the heading they clicked.
  links: [
    { text: 'Home', href: '#hero' },
    { text: 'Manifesto', href: '#about' },
    { text: 'Specimens', href: '#projects' },
    { text: 'Stack', href: '#skills' },
    { text: 'Coursework', href: '#courses' },
    { text: 'Record', href: '#timeline' },
    { text: 'Elsewhere', href: '#contact' }
  ],
  themes: [
    { class: 'th-b', theme: 't-bone', label: 'Bone theme' },
    { class: 'th-a', theme: 't-acid', label: 'Acid theme' },
    { class: 'th-d', theme: 't-dark', label: 'Dark theme' }
  ]
};

function renderNavLinks() {
  return navbarData.links.map(link => `
    <li><a href="${link.href}">${link.text}</a></li>
  `).join('');
}

function renderThemeButtons() {
  return navbarData.themes.map(t => `
    <button class="${t.class}" data-theme="${t.theme}" aria-label="${t.label}"></button>
  `).join('');
}

function renderNavbar() {
  const navHTML = `
    <div class="wrap bar">
      <a class="logo" href="#hero">${navbarData.logo}<span>${navbarData.logoTag}</span></a>
      <ul class="nav-menu">
        ${renderNavLinks()}
      </ul>
      <div class="themes" title="Flip the world">
        <span class="themes-label">${navbarData.themeLabel}</span>
        ${renderThemeButtons()}
      </div>
      <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `;

  const navbar = document.getElementById('navbar');
  navbar.className = 'navbar';
  navbar.innerHTML = navHTML;
}

renderNavbar();

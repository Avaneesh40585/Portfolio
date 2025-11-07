const navbarData = {
    logo: 'Avaneesh40585',
    links: [
        { text: 'Home', href: '#hero' },
        { text: 'About', href: '#about' },
        { text: 'Skills', href: '#skills' },
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
    const navbarHTML = `
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">${navbarData.logo}</div>
                <ul class="nav-menu" id="navMenu">
                    ${renderNavLinks()}
                </ul>
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('navbar').innerHTML = navbarHTML;
    document.getElementById('navbar').classList.add('navbar');
    
    initNavbarEvents();
}

function initNavbarEvents() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

renderNavbar();

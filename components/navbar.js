function renderNavbar() {
    const navbarHTML = `
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">Avaneesh</div>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
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

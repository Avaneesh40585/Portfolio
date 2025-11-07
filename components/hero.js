const heroData = {
    name: 'Avaneesh',
    subtitle: 'Full Stack Developer | AI/ML Enthusiast | B.Tech CSE @ IIT Indore',
    description: 'Building responsive web applications and exploring machine learning with Python. Passionate about creating elegant solutions to complex problems.',
    profileImage: 'assets/images/profile.jpeg',
    buttons: [
        { text: 'View My Work', href: '#projects', class: 'btn-primary' },
        { text: 'Get In Touch', href: '#contact', class: 'btn-secondary' }
    ],
    socials: [
        { icon: 'fab fa-github', link: 'https://github.com/Avaneesh40585' },
        { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/avaneesh-muskula/' },
        { icon: 'fas fa-envelope', link: 'mailto:avaneesh40585@gmail.com' }
    ]
};

function renderButtons() {
    return heroData.buttons.map(btn => `
        <a href="${btn.href}" class="btn ${btn.class}">${btn.text}</a>
    `).join('');
}

function renderSocials() {
    return heroData.socials.map(social => `
        <a href="${social.link}" target="_blank" rel="noopener noreferrer">
            <i class="${social.icon}"></i>
        </a>
    `).join('');
}

function renderHero() {
    const heroHTML = `
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">Hi, I'm <span class="gradient-text">${heroData.name}</span></h1>
                    <p class="hero-subtitle">${heroData.subtitle}</p>
                    <p class="hero-description">${heroData.description}</p>
                    <div class="hero-buttons">
                        ${renderButtons()}
                    </div>
                    <div class="social-links">
                        ${renderSocials()}
                    </div>
                </div>
                <div class="hero-image">
                    <img src="${heroData.profileImage}" alt="${heroData.name}" class="avatar-image">
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('hero').innerHTML = heroHTML;
    document.getElementById('hero').classList.add('hero');
}

renderHero();

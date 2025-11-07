function renderHero() {
    const heroHTML = `
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">Hi, I'm <span class="gradient-text">Avaneesh</span></h1>
                    <p class="hero-subtitle">Full Stack Developer | AI/ML Enthusiast | B.Tech CSE @ IIT Indore</p>
                    <p class="hero-description">Building responsive web applications and exploring machine learning with Python. Passionate about creating elegant solutions to complex problems.</p>
                    <div class="hero-buttons">
                        <a href="#projects" class="btn btn-primary">View My Work</a>
                        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
                    </div>
                    <div class="social-links">
                        <a href="https://github.com/Avaneesh40585" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/avaneesh-muskula/" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:avaneesh40585@gmail.com">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="avatar-placeholder">
                        <i class="fas fa-user"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('hero').innerHTML = heroHTML;
    document.getElementById('hero').classList.add('hero');
}

renderHero();

function renderAbout() {
    const aboutHTML = `
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>I'm a passionate developer currently pursuing B.Tech in Computer Science and Engineering at IIT Indore. With a strong foundation in web development and machine learning, I love building projects that combine both creativity and technical excellence.</p>
                    <p>With <strong>223 contributions</strong> on GitHub in the last year, I'm committed to continuous learning and collaborative development. I specialize in creating full-stack applications with modern technologies and exploring AI/ML applications.</p>
                    <div class="stats">
                        ${renderStats()}
                    </div>
                </div>
                <div class="about-image">
                    <div class="about-placeholder">
                        <i class="fas fa-code"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('about').innerHTML = aboutHTML;
    document.getElementById('about').classList.add('about');
}

function renderStats() {
    const stats = [
        { number: '223+', label: 'GitHub Contributions' },
        { number: '3+', label: 'Major Projects' },
        { number: '8+', label: 'Technologies' }
    ];
    
    return stats.map(stat => `
        <div class="stat">
            <h3>${stat.number}</h3>
            <p>${stat.label}</p>
        </div>
    `).join('');
}

renderAbout();

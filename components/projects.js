const projectsData = {
    title: 'Central Repositories',
    projects: [
        {
            icon: 'fas fa-brain',
            title: 'ML Projects',
            description: 'A central repository for the collection of ML projects I built while learning and experimenting with various models, techniques & libraries.',
            tech: ['CV', 'NLP', 'Data Analysis'],
            link: 'https://github.com/Avaneesh40585/AI-Projects'
        },
        {
            icon: 'fas fa-code',
            title: 'Python Projects',
            description: 'A collection of projects built while working through the 100 Days of Code challenge.',
            tech: ['Scripting', 'GUI', 'Automation'],
            link: 'https://github.com/Avaneesh40585/Python-Projects'
        },
        {
            icon: 'fas fa-globe',
            title: 'WebDev Projects',
            description: 'I’m learning to build for the web by doing. This portfolio contains my coursework and personal projects, which range from static pages to full-stack apps.',
            tech: ['REST API', 'CRUD', 'Responsive UI'],
            link: 'https://github.com/Avaneesh40585/WebDev-Projects'
        }
    ]
};

function renderProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                View Projects <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
}

function renderProjects() {
    const projectsHTML = `
        <div class="container">
            <h2 class="section-title">${projectsData.title}</h2>
            <div class="projects-grid">
                ${projectsData.projects.map(project => renderProjectCard(project)).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('projects').innerHTML = projectsHTML;
    document.getElementById('projects').classList.add('projects');
}

renderProjects();


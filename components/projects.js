const projectsData = {
    title: 'Featured Repositories',
    projects: [
        {
            icon: 'fas fa-brain',
            title: 'AI/ML Projects',
            description: 'Exploring machine learning, NLP, and computer vision through hands-on implementations and real-world applications.',
            tech: ['Python', 'TensorFlow', 'Scikit-learn'],
            link: 'https://github.com/Avaneesh40585/AI-Projects'
        },
        {
            icon: 'fas fa-code',
            title: 'Python Projects',
            description: 'A comprehensive collection of Python projects built for learning, practice, and problem-solving across various domains.',
            tech: ['Python', 'Algorithms', 'Data Structures'],
            link: 'https://github.com/Avaneesh40585/Python-Projects'
        },
        {
            icon: 'fas fa-globe',
            title: 'Web Development Projects',
            description: 'Modern full-stack web applications showcasing responsive design, frontend frameworks, and backend technologies.',
            tech: ['React', 'Node.js', 'Tailwind CSS'],
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


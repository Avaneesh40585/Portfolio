const projectsData = {
    title: 'Selected Works',
    projects: [
        {
            icon: 'ph ph-terminal-window',
            title: 'T.A.R.S.',
            description: 'Built a terminal-native AI agent capable of autonomous reasoning and secure tool-use. Features a custom TUI, sandboxed file operations, and support for multi-provider LLMs including OpenAI, Anthropic, and local models.',
            tech: ['Python', 'LLMs', 'CLI/TUI', 'AI Agents'],
            link: 'https://github.com/Avaneesh40585/T.A.R.S.'
        },
        {
            icon: 'ph ph-open-ai-logo',
            title: 'GPT2-From-Scratch',
            description: 'Built a custom GPT-2 model from scratch using PyTorch. Supports full LLM training pipelines, inference with official OpenAI weights, and task-specific fine-tuning for text classification and instruction',
            tech: ['PyTorch', 'Transformers', 'LLMs', 'NLP'],
            link: 'https://github.com/Avaneesh40585/GPT2-From-Scratch'
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
                View Project <i class="ph ph-arrow-up-right"></i>
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


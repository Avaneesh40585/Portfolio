const projectsData = {
    title: 'Selected Works',
    projects: [
        {
            icon: 'ph ph-house-line',
            title: 'Nestoria',
            description: 'A full-stack boutique-hotel booking platform for independent Indian stays. Features a 3-step booking wizard, a host dashboard, concurrency-safe reservations, and Bayesian-smoothed reviews.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
            link: 'https://github.com/Avaneesh40585/Nestoria'
        },
        {
            icon: 'ph ph-sparkle',
            title: 'GemX',
            description: 'A local multimodal AI chat app for Apple Silicon Macs running Gemma 4 via MLX. Features on-device Whisper voice input, document attachments, and an agentic web-research loop with inline citations.',
            tech: ['Electron', 'React', 'TypeScript', 'MLX'],
            link: 'https://github.com/Avaneesh40585/GemX'
        },
        {
            icon: 'ph ph-open-ai-logo',
            title: 'GPT2-From-Scratch',
            description: 'Implemented a GPT-2 decoder-only transformer from scratch in PyTorch. Features a full pre-training pipeline, official OpenAI weight inference, and task-specific fine-tuning with a Chainlit UI.',
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


const projectsData = {
    title: 'Selected Works',
    projects: [
        {
            icon: 'ph ph-bed',
            title: 'Nestoria',
            description: 'A boutique-hotel booking platform for independent Indian stays. Features an editorial design system, a 3-step booking wizard, a dedicated host workspace, and Bayesian-smoothed reviews.',
            tech: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'Supabase'],
            link: 'https://github.com/Avaneesh40585/Nestoria'
        },
        {
            icon: 'ph ph-sparkle',
            title: 'GemX',
            description: 'A complete, 100% local multimodal AI chat app for Apple Silicon Macs. Wraps Gemma 4 via MLX with features like voice input, document attachments, and an agentic web research loop with citations.',
            tech: ['Electron', 'React', 'Vite', 'MLX', 'LLMs'],
            link: 'https://github.com/Avaneesh40585/GemX'
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


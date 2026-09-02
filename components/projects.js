const projectsData = {
    kicker: 'Projects',
    number: '02',
    projects: [
        {
            title: 'Nestoria',
            description: 'A full-stack boutique-hotel booking platform for independent Indian stays. Features a 3-step booking wizard, a host dashboard, concurrency-safe reservations, and Bayesian-smoothed reviews.',
            tech: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'Supabase'],
            link: 'https://github.com/Avaneesh40585/Nestoria',
            cta: 'View Project ↗'
        },
        {
            title: 'GemX',
            description: 'Local multimodal AI for Apple Silicon: chat with Gemma 4 via MLX, serve it over an OpenAI-compatible API, or run your own mlx-community model. On-device voice, documents, and agentic web research with citations.',
            tech: ['Electron', 'Vite', 'React', 'TypeScript', 'MLX'],
            link: 'https://github.com/Avaneesh40585/GemX',
            cta: 'View Project ↗'
        },
        {
            title: 'GPT2-From-Scratch',
            description: 'Implemented a GPT-2 decoder-only transformer from scratch in PyTorch. Features a full pre-training pipeline, official OpenAI weight inference, and task-specific fine-tuning with a Chainlit UI.',
            tech: ['PyTorch', 'Transformers', 'LLMs', 'NLP'],
            link: 'https://github.com/Avaneesh40585/GPT2-From-Scratch',
            cta: 'View Project ↗'
        },
    ]
};

function renderProjectCard(project, index) {
    const num = String(index + 1).padStart(2, '0');
    return `
        <a class="spec reveal" href="${project.link}" target="_blank" rel="noopener noreferrer">
            <div class="num" aria-hidden="true">${num}</div>
            <h3>${project.title}</h3>
            <div class="meta">${project.tech.join(' · ')}</div>
            <p>${project.description}</p>
            <span class="go">${project.cta}</span>
        </a>
    `;
}

function renderProjects() {
    const projectsHTML = `
        <div class="wrap">
            <h2 class="kicker"><i>${projectsData.number}</i> — ${projectsData.kicker}</h2>
            <div class="grid cols-3">
                ${projectsData.projects.map((project, i) => renderProjectCard(project, i)).join('')}
            </div>
        </div>
    `;

    document.getElementById('projects').innerHTML = projectsHTML;
    document.getElementById('projects').classList.add('projects');
}

renderProjects();

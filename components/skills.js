const skillsData = {
    kicker: 'Stack',
    number: '03',
    categories: [
        {
            name: 'Languages',
            skills: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']
        },
        {
            name: 'Full-Stack Web',
            skills: ['React', 'Electron', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'REST APIs', 'JWT', 'Google OAuth']
        },
        {
            name: 'AI/ML & LLMs',
            skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Transformers', 'Hugging Face', 'LLM fine-tuning', 'MLX']
        },
        {
            name: 'Databases & Tools',
            skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Git', 'GitHub', 'Jupyter', 'Postman', 'Render']
        }
    ]
};

function renderSkillCategory(category) {
    return `
        <div class="skill-category reveal">
            <h3>${category.name}</h3>
            <div class="skill-tags">
                ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `;
}

function renderSkills() {
    const skillsHTML = `
        <div class="wrap">
            <h2 class="kicker"><i>${skillsData.number}</i> — ${skillsData.kicker} · ${skillsData.categories.length} Categories</h2>
            <div class="grid">
                ${skillsData.categories.map(category => renderSkillCategory(category)).join('')}
            </div>
        </div>
    `;

    document.getElementById('skills').innerHTML = skillsHTML;
    document.getElementById('skills').classList.add('skills');
}

renderSkills();

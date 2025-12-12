const skillsData = {
    title: 'Technical Skills',
    categories: [
        {
            name: 'Languages',
            skills: ['Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS', 'Markdown']
        },
        {
            name: 'Web Development',
            skills: ['React', 'Bootstrap', 'Material UI', 'Node.js', 'Express.js', 'PostgreSQL', 'MySQL']
        },
        {
            name: 'Machine Learning',
            skills: ['TensorFlow', 'PyTorch', 'Scikit-learn']
        },
        {
            name: 'Tools & Platforms',
            skills: ['Git', 'GitHub', 'VS Code', 'Sublime Text', 'Postman', 'npm']
        }
    ]
};

function renderSkillCategory(category) {
    return `
        <div class="skill-category">
            <h3>${category.name}</h3>
            <div class="skill-tags">
                ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `;
}

function renderSkills() {
    const skillsHTML = `
        <div class="container">
            <h2 class="section-title">${skillsData.title}</h2>
            <div class="skills-grid">
                ${skillsData.categories.map(category => renderSkillCategory(category)).join('')}
            </div>
        </div>
    `;

    document.getElementById('skills').innerHTML = skillsHTML;
    document.getElementById('skills').classList.add('skills');
}

renderSkills();

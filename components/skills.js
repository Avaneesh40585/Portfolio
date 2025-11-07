const skillsData = {
    title: 'Technical Skills',
    categories: [
        {
            name: 'Programming Languages',
            skills: ['Python', 'JavaScript', 'C', 'C++', 'SQL', 'HTML/CSS']
        },
        {
            name: 'Web Development',
            skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'PostgreSQL', 'MySQL']
        },
        {
            name: 'Machine Learning',
            skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Keras']
        },
        {
            name: 'Tools & Utilities',
            skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'EJS']
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

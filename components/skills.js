function renderSkills() {
    const skillsData = {
        'Programming Languages': ['Python', 'JavaScript', 'C', 'C++', 'SQL', 'HTML/CSS'],
        'Web Development': ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'PostgreSQL', 'MySQL'],
        'Machine Learning & Data': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Keras'],
        'Tools & Utilities': ['Git', 'GitHub', 'Postman', 'VS Code', 'EJS']
    };
    
    const skillsHTML = `
        <div class="container">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-grid">
                ${Object.entries(skillsData).map(([category, skills]) => `
                    <div class="skill-category">
                        <h3>${category}</h3>
                        <div class="skill-tags">
                            ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('skills').innerHTML = skillsHTML;
    document.getElementById('skills').classList.add('skills');
}

renderSkills();

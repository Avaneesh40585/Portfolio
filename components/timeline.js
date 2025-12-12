const timelineData = [
  {
    year: '2024 - Present',
    title: 'B.Tech in CSE',
    organization: 'IIT Indore',
    type: 'education',
    status: 'present',
    grade: 'CPI: 9.21/10',
    description: 'Undergraduate studies in Computer Science.'
  },
  {
    year: '2022 - 2024',
    title: 'Senior Secondary Education (11th & 12th)',
    organization: 'Narayana Junior College',
    type: 'education',
    status: 'past',
    grade: 'Percentage: 98%',
    description: 'Completed Higher Secondary Education (Science Stream)'
  },
  {
    year: '2021 - 2022',
    title: 'Secondary Education (10th)',
    organization: 'Narayana High School',
    type: 'education',
    status: 'past',
    grade: 'CGPA: 10/10',
    description: 'Completed Standard Secondary Schooling'
  }

  // {
    //   year: '202x',
    //   title: 'Internship',
    //   organization: 'fill-this',
    //   type: 'experience'
    //   status: 'present',
    //   description: 'fill-this',
  // }

];

function renderTimeline() {
  const timelineHTML = `
    <div class="container">
      <h2 class="section-title">Experience & Education</h2>
      <div class="timeline">
        ${timelineData.map(item => `
          <div class="timeline-item">
            <div class="timeline-marker ${item.type} ${item.status}"></div>
            <div class="timeline-content">
              <span class="timeline-year">${item.year}</span>
              <h3>${item.title}</h3>
              <h4><i class="fas fa-building"></i> ${item.organization}</h4>
              ${item.grade ? `<div class="timeline-grade"><i class="fas fa-award"></i> ${item.grade}</div>` : ''}
              <p>${item.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.getElementById('timeline').innerHTML = timelineHTML;
  document.getElementById('timeline').classList.add('timeline-section');
}

renderTimeline();
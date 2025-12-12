const coursesData = {
  categories: [
    {
      title: 'Mathematics',
      courses: [
        'Linear Algebra',
        'Real Analysis',
        'Multivariable Calculus',
        'Differential Equations',
        'Complex Analysis',
        'Mathematics for ML'
      ]
    },
    {
      title: 'Computer Science',
      courses: [
        'Introduction to Programming with C/C++',
        '100 Days of Code™: Python',
        'Data Structures & Algorithms',
        'Git & Github',
        'Full-Stack Web Development',
        'Database & Information Systems',
        'Discrete Mathematical Structures',
        'Logic Design',
        'Machine Learning A-Z',
        'MIT 6.S191 - Introduction to Deep Learning'
      ]
    }
  ]
};

function renderCourses() {
  const coursesHTML = `
    <div class="container">
      <h2 class="section-title">Key Courses Taken</h2>
      <div class="courses-grid">
        ${coursesData.categories.map(category => `
          <div class="course-category">
            <h3><i class="fas fa-book"></i> ${category.title}</h3>
            <ul class="course-list">
              ${category.courses.map(course => `
                <li>${course}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('courses').innerHTML = coursesHTML;
  document.getElementById('courses').classList.add('courses');
}

renderCourses();

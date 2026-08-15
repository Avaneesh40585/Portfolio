const coursesData = {
  kicker: 'Coursework',
  number: '04',
  categories: [
    {
      title: 'Mathematics',
      tag: 'MATH',
      courses: [
        'Linear Algebra',
        'Real Analysis',
        'Multivariable Calculus',
        'Differential Equations',
        'Complex Analysis',
        'Mathematics for ML',
        'Numerical Methods',
        'Statistical Distribution Theory',
        'Optimization Algorithms'
      ]
    },
    {
      title: 'Computer Science',
      tag: 'CS',
      courses: [
        'Introduction to Programming with C/C++',
        '100 Days of Code™: Python',
        'Data Structures & Algorithms',
        'Git & Github',
        'Full-Stack Web Development',
        'Database & Information Systems',
        'Discrete Mathematical Structures',
        'Digital Logic Design',
        'ML with Pytorch and Scikit-Learn',
        'MIT 6.S191 - Introduction to Deep Learning',
        'LLM’s from Scratch',
        'Reasoning from Scratch',
        'Design & Analysis of Algorithms',
        'Computer Architecture',
        'Theory of Computation',
        'Algebraic Graph Theory',
        'Parallel Computing',
        'Computer Networks',
        'Operating Systems'
      ]
    }
  ]
};

// Both categories collapse into one continuously numbered index; the badge on
// the right is what still distinguishes them. The full category title rides
// along on the row so the click toast can spell it out.
function flattenCourses() {
  return coursesData.categories.flatMap(category =>
    category.courses
      // Skip blanks so a stray empty entry can't render an empty numbered row.
      .filter(course => course && course.trim())
      .map(course => ({
        course: course.trim(),
        tag: category.tag,
        category: category.title
      }))
  );
}

function renderCourses() {
  const rows = flattenCourses();

  const coursesHTML = `
    <div class="wrap">
      <h2 class="kicker"><i>${coursesData.number}</i> — ${coursesData.kicker} · ${rows.length} Entries</h2>
      <ul class="index-list" id="courseList">
        ${rows.map((row, i) => `
          <li data-course="${row.course}" data-category="${row.category}">
            <span class="no">${String(i + 1).padStart(3, '0')}</span>
            ${row.course}
            <span class="pts">${row.tag}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  document.getElementById('courses').innerHTML = coursesHTML;
  document.getElementById('courses').classList.add('courses');
}

renderCourses();

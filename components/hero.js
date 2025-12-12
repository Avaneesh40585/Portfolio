const heroData = {
  name: 'Avaneesh',
  subtitle: 'IIT Indore CSE \'28',
  description: 'For me, the reason I code is that I love the process of taking an idea—just a thought—and turning it into something real and interactive on a screen. I think that\'s the best way to learn as well. That\'s why I focus on making things that are easy to use and maybe even a little bit fun. You can see what I\'ve been working on below.',
  profileImage: 'assets/images/profile.jpeg',
  buttons: [
    { text: 'View My Work', href: '#projects', class: 'btn-primary' },
    { text: 'Get In Touch', href: '#contact', class: 'btn-secondary' }
  ]
};

function renderButtons() {
  return heroData.buttons.map(btn => `
    <a href="${btn.href}" class="btn ${btn.class}">${btn.text}</a>
  `).join('');
}

function renderHero() {
  const heroHTML = `
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Hi, I'm <span class="gradient-text">${heroData.name}</span></h1>
          <p class="hero-subtitle">${heroData.subtitle}</p>
          <p class="hero-description">${heroData.description}</p>
          <div class="hero-buttons">
            ${renderButtons()}
          </div>
        </div>
        <div class="hero-image">
          <img src="${heroData.profileImage}" alt="${heroData.name}" class="avatar-image">
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('hero').innerHTML = heroHTML;
  document.getElementById('hero').classList.add('hero');
}

renderHero();

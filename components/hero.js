const heroData = {
  name: 'Avaneesh',
  role: 'Full-stack engineering & machine learning',
  credential: "B.Tech Computer Science · IIT Indore · Class of 2028",
  stamp: '↯ Copy Email',
  email: 'avaneesh40585@gmail.com',
  description: 'For me, the reason I code is that I love the process of taking an idea—just a thought—and turning it into something real and interactive on a screen. I think that\'s the best way to learn as well. That\'s why I focus on making things that are easy to use and maybe even a little bit fun. You can see what I\'ve been working on below.',
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
    <div class="wrap">
      <h1 class="hero-title">
        <span class="glitch" id="glitchWord" data-txt="${heroData.name}">${heroData.name}</span>
      </h1>
      <p class="hero-role">${heroData.role}</p>
      <div class="hero-meta">
        <span class="tag">${heroData.credential}</span>
        <button class="tag2" id="stampBtn" data-email="${heroData.email}">${heroData.stamp}</button>
      </div>
      <p class="hero-description">${heroData.description}</p>
      <div class="hero-buttons">
        ${renderButtons()}
      </div>
    </div>
    <div class="hero-art" aria-hidden="true">
      <span class="ha-outer"></span>
      <span class="ha-inner"></span>
      <span class="ha-core"></span>
      <span class="ha-rule"></span>
    </div>
  `;

  document.getElementById('hero').innerHTML = heroHTML;
  document.getElementById('hero').classList.add('hero');
}

renderHero();

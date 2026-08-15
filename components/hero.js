const heroData = {
  // Stacked headline echoing the logo lockup at poster scale. Line one is the
  // glitch target; the shift classes are the deliberate grid ruptures.
  lines: [
    { text: 'Avaneesh', class: 'glitch', glitch: true },
    { text: '40585', class: 'shift outline' },
    { text: 'Builds', class: 'shift-2 shift', stop: true }
  ],
  subtitle: "IIT Indore · CSE '28",
  stamp: '↯ Copy Email',
  email: 'avaneesh40585@gmail.com',
  description: 'For me, the reason I code is that I love the process of taking an idea—just a thought—and turning it into something real and interactive on a screen. I think that\'s the best way to learn as well. That\'s why I focus on making things that are easy to use and maybe even a little bit fun. You can see what I\'ve been working on below.',
  buttons: [
    { text: 'View My Work', href: '#projects', class: 'btn-primary' },
    { text: 'Get In Touch', href: '#contact', class: 'btn-secondary' }
  ]
};

function renderHeroLines() {
  return heroData.lines.map(line => {
    const stop = line.stop ? '<span class="stop">.</span>' : '';
    if (line.glitch) {
      return `<span class="${line.class}" id="glitchWord" data-txt="${line.text}">${line.text}</span>${stop}`;
    }
    return `<span class="${line.class}">${line.text}${stop}</span>`;
  }).join('');
}

function renderButtons() {
  return heroData.buttons.map(btn => `
    <a href="${btn.href}" class="btn ${btn.class}">${btn.text}</a>
  `).join('');
}

function renderHero() {
  const heroHTML = `
    <div class="wrap">
      <h1 class="hero-title">${renderHeroLines()}</h1>
      <div class="hero-meta">
        <span class="tag">${heroData.subtitle}</span>
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

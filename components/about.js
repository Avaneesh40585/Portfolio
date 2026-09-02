const aboutData = {
  kicker: 'About',
  number: '01',
  image: 'assets/images/about.jpeg',
  intro: "I am currently pursuing a B.Tech in Computer Science at IIT Indore. In my downtime, I enjoy gaming, watching anime, and reading manga. Occasionally, I like to take practical ideas and code them into accessible, user-friendly tools specifically alternatives to software that is usually gated behind ads or paywalls. My goal is to open-source these projects, with the hope that the community can use them and perhaps nurture them into something even better over time."
};

function renderAbout() {
  const aboutHTML = `
    <div class="wrap">
      <h2 class="kicker"><i>${aboutData.number}</i> — ${aboutData.kicker}</h2>
      <div class="about-content">
        <div class="about-text reveal">
          <p>${aboutData.intro}</p>
        </div>
        <div class="about-image reveal">
          <img src="${aboutData.image}" alt="Avaneesh Muskula" class="about-image-photo" width="1072" height="712">
        </div>
      </div>
    </div>
  `;

  document.getElementById('about').innerHTML = aboutHTML;
  document.getElementById('about').classList.add('about');
}

renderAbout();

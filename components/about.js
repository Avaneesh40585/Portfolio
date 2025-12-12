const aboutData = {
  intro: "I am currently pursuing a B.Tech in Computer Science at IIT Indore. In my downtime, I enjoy gaming, watching anime, and reading manga. Occasionally, I like to take practical ideas and code them into accessible, user-friendly tools specifically alternatives to software that is usually gated behind ads or paywalls. My goal is to open-source these projects, with the hope that the community can use them and perhaps nurture them into something even better over time."
};

function renderAbout() {
  const aboutHTML = `
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>${aboutData.intro}</p>
        </div>
        <div class="about-image">
          <img src="assets/images/about.jpeg" alt="About" class="about-image-photo">
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('about').innerHTML = aboutHTML;
  document.getElementById('about').classList.add('about');
}

renderAbout();

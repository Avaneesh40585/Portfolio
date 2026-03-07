# Portfolio Website

I built this strictly using Vanilla JS to serve as a reference for developers who want to build a portfolio from scratch. It features a component-based structure, a striking developer-focused Cyberpunk aesthetic, and interactive animations, making it an ideal lightweight template to fork and customize.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Installation & Usage](#installation--usage)
- [Customization Guide](#customization-guide)
- [Component Structure](#component-structure)
- [Contributing](#contributing)

---

## Features

- **Terminal Aesthetic:** A stark dark mode featuring pure blacks, high-contrast neon accents, and crisp monospace typography.
- **Interactive 3D Background:** A dynamic, neon cyber-grid hero background that tilts and shifts with mouse movement using CSS 3D perspective and JavaScript parallax.
- **Scroll Animations:** Smooth fade-and-slide effects implemented efficiently via the Intersection Observer API.
- **Component Architecture:** Modular JavaScript structure allowing easy content updates without touching HTML layouts.
- **Responsive Design:** Native CSS grid layouts (`auto-fit`) adapt seamlessly to mobile, tablet, and desktop viewports.
- **Microinteractions:** Sharp hover states, glowing CRT dropshadows, and crisp transitions on interactive elements.

---

## Folder Structure

```text
portfolio/
├── index.html                 # Main HTML file
├── styles.css                 # All styles and global theme variables
├── script.js                  # Main JavaScript with initialization & parallax
├── LICENSE.txt                # MIT License
├── README.md                  # Project documentation
├── .gitignore                 # Git ignore file
├── assets/
│   └── images/
│       ├── favicon.png        # Browser tab icon
│       ├── profile.jpeg       # Profile photo for hero section
│       └── about.jpeg         # About section image
└── components/
    ├── navbar.js              # Navigation bar component
    ├── hero.js                # Hero section with intro
    ├── about.js               # About section
    ├── skills.js              # Skills grid with categories
    ├── courses.js             # Key courses component
    ├── timeline.js            # Experience & education timeline
    ├── projects.js            # Project cards with links
    ├── contact.js             # Contact methods
    └── footer.js              # Footer with attribution
```

---

## How It Works

### 1. **Design System & Aesthetics**

- Relies on CSS custom properties (`:root`) to define a stark monochrome palette alongside electric Cyberpunk Yellow and Neon Cyan accents. 
- Employs a universal monospace font (`JetBrains Mono`) and sharp, boxy geometry (zero border radius) to replicate a modern-retro developer environment.
- The hero section uses a combination of infinite CSS background animations and an invisible CRT scanline overlay to simulate a glowing terminal screen.

### 2. **Component Architecture**

- Splits the page into self-contained JavaScript components (`navbar`, `hero`, `about`, `skills`, `courses`, `timeline`, `projects`, `contact`, `footer`), each responsible for rendering its own HTML into a dedicated `<section>` by `id`.
- Each component follows a consistent pattern: data object → template string → `innerHTML` injection. This makes it incredibly easy to update content (like skills or projects) by simply editing structured JS arrays instead of raw HTML.
- The `index.html` remains minimal and declarative, loading all component scripts plus a central `script.js` that wires up global behaviors.

### 3. **Navigation & Interactions**

- Implements a sticky, glassmorphism navbar that stays at the top during scroll. The layout places the logo on the left and a centered link group on larger screens.
- Provides a hamburger menu that appears at smaller breakpoints, toggling a full-width dropdown navigation. A click-outside handler automatically collapses the menu when the user taps outside the nav area.
- Includes smooth in-page navigation by intercepting anchor clicks, offsetting for the navbar height, and using `scrollTo` for polished section jumps.

### 4. **Scroll & Interactive Animations**

- **Intersection Observer:** Watches key elements (project cards, skill categories, timeline items) and applies fade-in effects only when they enter the viewport, maximizing performance.
- **Hero Parallax:** JavaScript tracks mouse coordinates relative to the hero section, mapping those values to CSS variables (`--mouse-x`, `--mouse-y`) to apply a subtle 3D `rotateX` and `rotateY` tilt to the background cyber-grid.
- Adds purely CSS-based micro-interactions (harsh drop shadows, color inversions, and border highlight glows) to keep the UI feeling tactile and responsive.

### 5. **Content Presentation**

- Uses CSS Grid with `repeat(auto-fit, minmax(...))` constraints to automatically layout project and contact cards beautifully, regardless of how many items you add.
- Renders the education and experience history from a structured array, generating a vertical timeline with dynamic markers (pulsing colors for current roles, hollow outlines for past).

---

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with Grid, Flexbox, 3D transforms, and Custom Properties
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **Phosphor Icons**: A sharp, geometric icon library perfect for technical UIs
- **Google Fonts**: JetBrains Mono font family

---

## Installation & Usage

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- Basic knowledge of HTML, CSS, and JavaScript
- Optional: Live server for a better development experience

### Setup Instructions

1. **Clone the repository**

```bash
git clone [https://github.com/Avaneesh40585/Portfolio.git](https://github.com/Avaneesh40585/Portfolio.git)
cd Portfolio
```

2. **Update your information**

Edit the component files in the `components/` directory to add your personal details:

- `components/navbar.js` – Logo text and navigation links
- `components/hero.js` – Name, title, description, buttons, profile image reference
- `components/about.js` – About text, about image reference
- `components/skills.js` – Skill categories and tags
- `components/courses.js` – Key courses in your respective fields
- `components/timeline.js` – Education and work experience
- `components/projects.js` – Projects, tech stack, and external links
- `components/contact.js` – Contact methods (email, LinkedIn, GitHub, etc.)
- `components/footer.js` – Footer text

3. **Add your images**

Place your own images in `assets/images/`:
- `favicon.png`
- `profile.jpeg`
- `about.jpeg`

4. **Open in browser**

Simply open `index.html` in your browser, or use a live server (e.g., VS Code Live Server extension).

---

## Customization Guide

### Changing Colors & Theme

Customize the main color system via CSS custom properties in `styles.css`. 

```css
:root {
  --primary-color: #FCEE0A;   /* Cyberpunk Yellow */
  --secondary-color: #00FFFF; /* Neon Cyan */
  --bg-dark: #000000;         /* Void Black */
  --bg-panel: #0A0A0A;        /* Slightly elevated panel black */
  --text-main: #FFFFFF;       /* Pure White for highest contrast */
  --text-muted: #A1A1AA;      /* Muted gray for secondary text */
  --border-color: #333333;    /* Sharp grid lines */
}
```

### Adding New Sections

1. **Add a section container in `index.html`:**

```html
<section id="new-section"></section>
```

2. **Create a new component file `components/new-section.js`:**

```js
  const newSectionData = {
    title: 'NEW SECTION',
  };

  function renderNewSection() {
    const html = `
      <div class="container">
        <h2 class="section-title">${newSectionData.title}</h2>
        </div>
    `;

    const section = document.getElementById('new-section');
    section.innerHTML = html;
    section.classList.add('new-section');
  }

  renderNewSection();
```

3. **Include the script in `index.html` (before `script.js`):**

```html
<script src="components/new-section.js"></script>
```

### Modifying Animations & Scroll Behavior

Global animation behavior is configured in `script.js` via a configuration object:

```js
const appConfig = {
  navbarOffset: 60,
  scrollDuration: 'smooth',
  observerThreshold: 0.1,                // When to trigger (0–1)
  observerMargin: '0px 0px -100px 0px',  // Offset from viewport
  animationDuration: '0.4s',             // Animation speed
  elementsToAnimate: '.project-card, .skill-category'
};
```

### Changing Fonts

To use a different font, update the Google Fonts import in `index.html`:

```html
  <link href="[https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap](https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap)" rel="stylesheet">
```

Replace `JetBrains Mono` with your chosen font and then update `styles.css`:

```css
:root {
  --font-mono: 'Your New Font', monospace;
}
```

---

## Component Structure

Each component follows a consistent, data-driven pattern:
```js
  // Data object
  const componentData = {
    // Configuration and content for this section
  };

  // Render function
  function renderComponent() {
    const html = `
      `;

    const section = document.getElementById('component-id');
    section.innerHTML = html;
  }

  // Auto-execute on load
  renderComponent();
```

**Benefits:**
- Clear separation of concerns
- Easy to maintain and update individual sections without touching others
- Reusable patterns across all sections

---

## Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/your-feature-name`)
3. **Make your changes** (Ensure code style and component structure matches)
4. **Commit your changes** (`git commit -m "Add feature: description of changes"`)
5. **Push to your fork** (`git push origin feature/your-feature-name`)
6. **Open a Pull Request**

---

**Build your stunning portfolio today!** ⭐
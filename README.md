# Portfolio Website ✨

I built this strictly using Vanilla JS to serve as a reference for developers who want to build a portfolio from scratch. It features a component-based structure, dark/light themes, and scroll animations, making it an ideal lightweight template to fork and customize.

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

- **Dark/Light Theme Toggle:** Uses `localStorage` persistence and system preference detection
- **Scroll Animations:** Implemented via the Intersection Observer API
- **Interactive Timeline:** Displays education and experience with CSS hover states
- **Component Architecture:** Modular JavaScript structure
- **Responsive Design:** Layout adapts to mobile and desktop viewports
- **Microinteractions:** Button ripples and visual feedback on hover
- **Accessibility:** Semantic HTML with keyboard navigation support

---

## Folder Structure

```
portfolio/
├── index.html                 # Main HTML file
├── styles.css                 # All styles and theme definitions
├── script.js                  # Main JavaScript with initialization
├── LICENSE.txt                # MIT License
├── README.md                  # Project documentation
├── .gitignore                 # Git ignore file
├── assets/
│   └── images/
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
    ├── footer.js              # Footer with attribution
    └── theme-toggle.js        # Theme switching functionality
```

---

## How It Works

### 1. **Theme System**

- Uses a single set of CSS custom properties to define colors, gradients, and surfaces, with separate values for light and dark modes applied via a `data-theme` attribute on the root element
- Initializes the theme by checking `localStorage` for a saved preference, falling back to the user's system color scheme, and updates both the DOM and storage whenever the toggle is used
- Provides a circular theme toggle button integrated into the navbar layout (right side on desktop, consistent position on mobile) that switches between moon/sun icons and applies smooth transitions for background, text, and accent colors

### 2. **Component Architecture**

- Splits the page into self-contained JavaScript components (`navbar`, `hero`, `about`, `skills`, `courses`, `timeline`, `projects`, `contact`, `footer`), each responsible for rendering its own HTML into a dedicated `<section>` by `id`
- Each component follows a consistent pattern: data object → template string → `innerHTML` injection → optional class hooks, making it easy to update content (like skills, projects, courses, timeline items) by editing structured data instead of raw HTML
- The `index.html` remains minimal and declarative, loading all component scripts plus a central `script.js` that wires up global behavior such as smooth scrolling, menu interactions, and scroll animations

### 3. **Navigation & Interactions**

- Implements a sticky navbar that stays at the top during scroll, with a centered link group, a logo on the left, and the theme toggle aligned to the right on larger screens, falling back to a logo–toggle–hamburger layout on mobile
- Provides a hamburger menu that appears at smaller breakpoints, toggling a full-width dropdown navigation; links close the menu on click, and a click-outside handler collapses the menu when the user taps outside the nav area
- Includes smooth in-page navigation by intercepting anchor clicks, offsetting for the navbar height, and using `scrollTo` with a configurable behavior for polished section jumps

### 4. **Scroll & Micro Animations**

- Uses the Intersection Observer API to watch key elements (project cards, skill categories, stats, timeline items) and applies fade-and-slide-in effects only when they enter the viewport, improving performance over scroll-event-based approaches
- Initializes each observed element with hidden/translated styles and transitions them into place on intersection, with timing and offsets controlled by configuration in `script.js` and the main stylesheet
- Adds micro-interactions (button ripple effect, card hover lifts, icon rotations, glowing markers) that are purely CSS-based, reducing JavaScript overhead while keeping the UI feeling dynamic and responsive

### 5. **Timeline & Content Presentation**

- Renders the education and experience history from a structured `timelineData` array, generating a vertical timeline where each entry has a marker, year badge, title, organization, optional grade badge, and description
- Distinguishes item types visually: present/ongoing entries use a pulsing gold marker, past education entries use a green marker, and past experience entries use a blue marker, with hover states that scale markers and elevate cards
- Ensures the timeline remains legible and attractive on all devices by adjusting marker alignment, padding, and card sizing at responsive breakpoints, while other sections (hero, about, skills, courses, projects, contact) follow a consistent grid-based layout with dark-mode-aware styling

---

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with Flexbox, Grid, animations, and custom properties
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins font family

---

## Installation & Usage

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- Basic knowledge of HTML, CSS, and JavaScript
- Optional: Live server (Python, Node http-server, or VS Code Live Server) for a better development experience

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Avaneesh40585/Portfolio.git
cd Portfolio
```

2. **Update your information**

Edit the component files in the `components/` directory to add your personal details:

- `components/navbar.js` – Logo text and navigation links
- `components/hero.js` – Name, title, description, hero buttons, social links, profile image reference
- `components/about.js` – About text, stats, about image reference
- `components/skills.js` – Skill categories and tags
- `components/courses.js` – Key courses in Mathematics and Computer Science (or your own subjects)
- `components/timeline.js` – Education and work experience, including grades for education items
- `components/projects.js` – Projects, tech stack, and external links
- `components/contact.js` – Contact methods (email, LinkedIn, GitHub, etc.)
- `components/footer.js` – Footer text and links

3. **Add your images**

Place your own images in `assets/images/`:

- `profile.jpeg` – Profile photo for the hero section (around 300x300px, square)
- `about.jpeg` – Image for the about section (around 550x400px, landscape)
- Any additional images you want to use for projects or other sections

4. **Open in browser**

Simply open `index.html` in your browser, or use a live server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
Right-click index.html → Open with Live Server
```

5. **Access the portfolio**

Open `http://localhost:3000` (or the port shown in your terminal/live server) in your browser to view the site.

---

## Customization Guide

### Changing Colors & Theme

Customize the main color system via CSS custom properties in `styles.css`. Light mode:

```css
:root {
  --primary-color: #d4af37;        /* Gold */
  --secondary-color: #ffd700;      /* Light gold */
  --dark-bg: #1a1a1a;
  --light-bg: #f5f5f5;
  --text-dark: #000000;
  --text-light: #555555;
  --border-color: #e0e0e0;
  --gradient: linear-gradient(135deg, #d4af37, #ffd700);
  --transition: all 0.3s ease;
}
```

Dark mode overrides (applied via `data-theme="dark"` on `<html>`):

```css
[data-theme="dark"] {
  --primary-color: #d4af37;
  --secondary-color: #ffd700;
  --dark-bg: #000000;
  --light-bg: #1a1a1a;
  --text-dark: #ffffff;
  --text-light: #b0b0b0;
  --border-color: #333333;
  --gradient: linear-gradient(135deg, #d4af37, #ffd700);
}
```

The theme toggle in the navbar updates `data-theme` and uses these variables automatically.


### Adding New Sections

1. **Add a section container in `index.html`:**

```html
<section id="new-section"></section>
```

2. **Create a new component file `components/new-section.js`:**

```js
  // components/new-section.js
  const newSectionData = {
    title: 'New Section',
    // Add any structured data you need here
  };

  function renderNewSection() {
    const html = `
      <div class="container">
        <h2 class="section-title">${newSectionData.title}</h2>
        <!-- Your content -->
      </div>
    `;

    const section = document.getElementById('new-section');
    section.innerHTML = html;
    section.classList.add('new-section');
  }

  renderNewSection();
```

3. **Include the script in `index.html` (after other components or where appropriate):**

```html
<script src="components/new-section.js"></script>
```

4. **Add styles for the new section in `styles.css`:**

```css
.new-section {
  padding: 80px 0;
  background-color: var(--light-bg);
}
```

### Modifying Animations & Scroll Behavior

Global animation behavior is configured in `script.js` via a configuration object:

```js
const appConfig = {
  navbarOffset: 60,
  scrollDuration: 'smooth',
  observerThreshold: 0.1,                // When to trigger (0–1)
  observerMargin: '0px 0px -100px 0px',  // Offset from viewport
  animationDuration: '0.6s',             // Animation speed
  elementsToAnimate: '.project-card, .skill-category, .stat'
};
```

- Adjust `observerThreshold` and `observerMargin` to control when elements animate into view.
- Change `elementsToAnimate` to include or exclude selectors you want animated.
- Animation timing for individual elements is handled in `styles.css` using `transition` and transform/opacity rules.

### Changing Fonts

To use a different font, update the Google Fonts import in `index.html`:

```html
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
```

Replace `Poppins` with your chosen font and then update `styles.css`:

```css
body {
  font-family: 'Poppins', sans-serif;
}
```

### Navbar & Theme Toggle Placement

The navbar layout is controlled by Flexbox in `styles.css`:

- On desktop, the structure is: **Logo – Centered Links – Theme Toggle**.
- On mobile, it becomes: **Logo – Theme Toggle – Hamburger**, with the nav links in a dropdown.

If you change the navbar structure in `components/navbar.js`, keep the order:
```html
  <div class="logo">...</div>
  <ul class="nav-menu">...</ul>
  <button class="theme-toggle-btn" id="theme-toggle">...</button>
  <div class="hamburger">...</div>
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
      <!-- Component HTML built from componentData -->
    `;

    const section = document.getElementById('component-id');
    section.innerHTML = html;
    section.classList.add('component-class');
  }

  // Auto-execute on load
  renderComponent();
```

**Benefits:**

- Clear separation of concerns (layout in HTML, data in JS, styling in CSS)
- Easy to maintain and update individual sections without touching others
- Reusable patterns across all sections (hero, about, skills, courses, timeline, projects, contact, footer)
- Simple to extend by adding new data objects and render functions for new sections

---

## Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository**

```
git fork https://github.com/Avaneesh40585/Portfolio.git
```

2. **Create a feature branch**

```
git checkout -b feature/your-feature-name
```

3. **Make your changes**

- Follow the existing code style and component structure
- Test across different browsers and devices
- Ensure accessibility standards are maintained
- Add comments for complex logic

4. **Commit your changes**

```
git commit -m "Add feature: description of changes"
```

5. **Push to your fork**

```
git push origin feature/your-feature-name
```

6. **Open a Pull Request**

- Provide a clear description of changes
- Include screenshots for UI changes
- Reference any related issues
- Ensure all tests pass

### Code Style Guidelines

- Use meaningful variable and function names
- Keep functions small and focused
- Comment complex logic
- Maintain consistent indentation (2 spaces)
- Follow existing naming conventions

### Bug Reports

- Use GitHub Issues with the "bug" label
- Include browser and OS information
- Provide steps to reproduce
- Include screenshots if applicable

### Feature Requests

- Use GitHub Issues with the "enhancement" label
- Describe the use case clearly
- Explain expected behavior
- Consider backward compatibility

---

**Build your stunning portfolio today!** ⭐

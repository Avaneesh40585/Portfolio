# Portfolio Website

I built this strictly using Vanilla JS to serve as a reference for developers who want to build a portfolio from scratch. It features a component-based structure, a loud brutalist type-poster aesthetic with three flippable themes, and hand-rolled interactions — making it an ideal lightweight template to fork and customize. No build step, no dependencies, no webfonts.

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

- **Brutalist Type Poster:** Bone paper, ink black, and a single acid yellow accent. 6px rules everywhere, hard offset shadows, zero border radius, and massive stacked headlines set in the system Helvetica stack.
- **Three-Way Theme Flip:** Bone, acid, and dark palettes swap the entire page through CSS custom properties, using `steps()` transitions so the change feels mechanical rather than smooth. The choice persists in `localStorage` and is applied before first paint, so there is no flash of the wrong palette.
- **Counter-Scrolling Marquees:** Two bars of engineering quotations scroll in opposite directions and double their speed on hover. They pause automatically when the browser tab is hidden.
- **Glyph-Scramble Glitch:** The hero name periodically dissolves into noise glyphs and repairs itself, driven by a plain `setInterval` that skips while the tab is hidden.
- **Full-Inversion Hover:** Specimen cards flip their entire foreground and background on hover; coursework rows shift right onto an acid ground and their badge picks up a hard offset shadow.
- **Constructivist Hero Art:** A stack of nested rotated squares and rules built entirely from CSS — no images — that recolours with every theme and drifts slowly beside the headline.
- **Zero Dependencies:** No framework, no bundler, no icon CDN, no Google Fonts. Everything ships from this repository.
- **Accessible by Default:** `prefers-reduced-motion` disables every animation, the toast is an `aria-live` region, and all three themes keep text contrast intact.

---

## Folder Structure

```text
portfolio/
├── index.html                 # Mount points, meta, and the pre-paint theme script
├── styles.css                 # All styles, theme tokens, and responsive rules
├── script.js                  # All behavior, wired on DOMContentLoaded
├── LICENSE.txt                # MIT License
├── README.md                  # Project documentation
├── .gitignore                 # Git ignore file
├── assets/
│   └── images/
│       ├── favicon.png        # Browser tab icon
│       ├── profile.jpeg       # Unused by the brutalist layout; kept for forks
│       └── about.jpeg         # Manifesto section portrait
└── components/
    ├── navbar.js              # Ruled header: logo, links, theme chips, hamburger
    ├── marquees.js            # The two counter-scrolling bars
    ├── hero.js                # Stacked headline, stamp button, CSS art
    ├── about.js               # 01 — Manifesto
    ├── projects.js            # 02 — Specimens
    ├── skills.js              # 03 — Stack
    ├── courses.js             # 04 — Coursework
    ├── timeline.js            # 05 — Record
    ├── contact.js             # 06 — Elsewhere (the inverted end block)
    └── footer.js              # Colophon strip
```

---

## How It Works

### 1. **Design System & Aesthetics**

- Three palettes are defined as CSS custom properties. `:root` holds the bone default; `html.t-acid` and `html.t-dark` redefine only `--bg`, `--fg`, and `--ac`, so every rule in the stylesheet flips for free.
- A fourth token, `--on-ac`, is always ink. Because `--ac` is a light value in every theme, any text sitting on an accent-colored ground uses `--on-ac` rather than `--fg` — this is what keeps the acid marquee and the chips readable in the dark theme.
- Typography is the system Helvetica stack with no webfont request. Display type adds `Arial Black` — a genuine ~900 face preinstalled on macOS and Windows — because Helvetica Neue tops out at Bold and headlines would otherwise render a full weight lighter than intended.
- Outlined headline type is `-webkit-text-stroke` over `color: transparent`. Grid ruptures are plain `margin-left` offsets on individual headline lines. The hero figure is a stack of rotated, absolutely-positioned blocks — no images anywhere on the page except the portrait.

### 2. **Component Architecture**

- Splits the page into self-contained JavaScript components, each responsible for rendering its own HTML into a dedicated `<section>` by `id`.
- Each component follows a consistent pattern: data object → template string → `innerHTML` injection. This makes it easy to update content by editing structured JS arrays instead of raw HTML.
- The `index.html` remains minimal and declarative, loading all component scripts plus a central `script.js` that wires up global behaviors. Section order lives in `index.html`; script order does not matter, since each component targets its own element.

### 3. **Navigation & Interactions**

- A sticky ruled header holds the logo, the section links, and a labelled theme cell. The nav flexes to absorb all slack between them, so the 6px rules run edge to edge with no floating gaps. Each link inverts on hover; a scroll spy inverts the link for whichever section is in view. Nav labels match their section headings exactly.
- A hamburger menu appears below 1180px, toggling a full-width dropdown. Click-outside and <kbd>Esc</kbd> both collapse it.
- Smooth in-page navigation intercepts anchor clicks and offsets by the header's measured `offsetHeight`, so the target never lands underneath it.

### 4. **Scroll & Interactive Animations**

- **Intersection Observer:** A single observer watches everything carrying the `.reveal` class, adds `is-in` when it enters the viewport, and then unobserves it. Under reduced motion it simply marks everything visible immediately.
- **Marquees:** Each track holds two identical halves and animates `translateX(-50%)`, so the loop never shows a seam. Each half is padded with enough repetitions to exceed the widest viewport — otherwise a gap opens on large monitors.
- **The End Block:** The contact section and colophon render as one inverted panel — `background: var(--fg); color: var(--bg)` — so it flips with the theme and the page closes on a hard slab rather than trailing off.

### 5. **Content Presentation**

- Specimen and stack blocks share one ruled grid whose **interior lines are the `gap`, not borders**: the container is filled with `--fg` and each cell repaints itself with `--bg`, so the 6px rules appear between cells automatically. There is no `nth-child` border arithmetic to get wrong when the number of cards changes — an earlier version used it and broke the moment a fourth project was removed.
- Column count comes from a `--cols` custom property so every grid keeps a **full last row** and no cell is ever a different width from its siblings. Skills uses the default of 2 for its 4 blocks; projects adds `cols-3` for its 3 cards. See the customization note below before changing how many projects you list.
- Both course categories collapse into a single continuously numbered index, set in two CSS columns so the numbering still reads top-to-bottom then across. A badge on the right distinguishes them. Blank entries are filtered out, so a stray empty string in the data cannot render an empty numbered row.
- Education and experience render as ruled rows — year, title, institution, grade — with the current entry marked by an acid edge and a filled grade badge.
- Every section heading is a real `<h2>` (styled by `.kicker`), giving a clean H1 → H2 → H3 outline for screen readers and search engines.

---

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Custom Properties, `clamp()`, `steps()` timing, `-webkit-text-stroke`
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **System fonts only**: Helvetica / Arial — no webfont request at all

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
git clone https://github.com/Avaneesh40585/Portfolio.git
cd Portfolio
```

2. **Update your information**

Edit the component files in the `components/` directory to add your personal details:

- `components/navbar.js` – Logo text, navigation links, theme chips
- `components/marquees.js` – The quotations in each scrolling bar, and their repeat counts
- `components/hero.js` – Headline lines, tagline, email
- `components/about.js` – Manifesto text and portrait reference
- `components/projects.js` – Projects, tech stack, external links
- `components/skills.js` – Skill categories and chips
- `components/courses.js` – Course categories and their badges (rendered as one numbered index)
- `components/timeline.js` – Education and work experience
- `components/contact.js` – Contact methods (email, LinkedIn, GitHub, etc.)
- `components/footer.js` – Colophon text

3. **Add your images**

Place your own images in `assets/images/`:
- `favicon.png`
- `about.jpeg`

4. **Open in browser**

Open `index.html` directly, or serve the folder — `python3 -m http.server 8000` works, as does the VS Code Live Server extension. Serving over HTTP is recommended: the "Copy Email" stamp uses the async Clipboard API, which needs a secure context (it falls back to `execCommand` otherwise).

---

## Customization Guide

### Changing Colors & Theme

All three palettes live at the top of `styles.css`:

```css
:root {
  --bone: #F4F1EA;
  --ink:  #111111;
  --acid: #D8FF3E;

  --bg: var(--bone);   /* page background */
  --fg: var(--ink);    /* text, rules, borders */
  --ac: var(--acid);   /* the single loud accent */

  --on-ac: #111111;    /* text placed on an --ac ground */

  --rule: 6px;         /* the thick rule used everywhere */
  --hair: 3px;         /* the thin rule */
}

html.t-acid { --bg: #D8FF3E; --fg: #111111; --ac: #F4F1EA; }
html.t-dark { --bg: #111111; --fg: #F4F1EA; --ac: #D8FF3E; }
```

Swap `--acid` for your own accent and the whole site follows. If you pick a **dark** accent, change `--on-ac` to a light value to keep accent-backed text readable.

To change how many themes exist, update the chips in `components/navbar.js` and the `themes` array in `script.js`.

### Changing Fonts

There is no font request to edit — the stack is defined entirely in `styles.css`:

```css
:root {
  --font:         "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-display: "Helvetica Neue", "Arial Black", Helvetica, Arial, sans-serif;
}
```

If you'd rather load a webfont, add the `<link>` to `index.html` and put the family first in `--font-display`.

### Adding New Sections

1. **Add a section container in `index.html`:**

```html
<section id="new-section"></section>
```

2. **Create a new component file `components/new-section.js`:**

```js
  const newSectionData = {
    number: '07',
    kicker: 'New Section',
  };

  function renderNewSection() {
    const html = `
      <div class="wrap">
        <h2 class="kicker"><i>${newSectionData.number}</i> — ${newSectionData.kicker}</h2>
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

Add `class="reveal"` to any block you want to fade in on scroll — the existing observer picks it up automatically.

### Modifying Animations & Scroll Behavior

Global behavior is configured at the top of `script.js`:

```js
const appConfig = {
  themeKey: 'rh-theme',                  // localStorage key
  themes: ['t-bone', 't-acid', 't-dark'],
  themeColors: { ... },                  // drives the theme-color meta tag
  toastDuration: 1800,                   // ms the toast stays up
  glitchInterval: 7000,                  // ms between scrambles
  glitchFrameMs: 55,                     // ms per scramble frame
  glitchGlyphs: '#%&@§Ø*!?!',            // the noise pool
  observerThreshold: 0.15,               // when reveals trigger (0–1)
  observerMargin: '0px 0px -80px 0px',   // offset from viewport
};
```

Marquee speed is CSS, not JS — edit `.track` (22s), `.m2 .track` (16s), and the two `:hover` durations in `styles.css`.

### Adding or Removing Projects

The grids only look right when the last row is full, so the column count has to match the number of cards. In `components/projects.js` the wrapper is `<div class="grid cols-3">`:

| Projects | Wrapper class | Result |
|---|---|---|
| 2, 4, 6 | `grid` | two even columns |
| 3, 6, 9 | `grid cols-3` | three even columns |

With an awkward count (5, 7) either accept a partial last row — which shows as a block of `--fg` where the missing cell would be — or add a `--cols` value that divides it. The responsive overrides in `styles.css` collapse `cols-3` straight to one column below 1080px, because three items only tile evenly at 3-across or 1-across.

### A Note on the Outlined Headline

`.hero-title` carries `letter-spacing: -0.05em`, but `-webkit-text-stroke` draws *outside* the glyph, so on an outlined line that negative tracking makes adjacent letterforms' strokes cross straight through each other. `.hero-title .outline` therefore sets its own positive `letter-spacing`. Keep that override if you change the headline copy.

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

> **Note:** content is interpolated with `innerHTML`, which is safe here because every string is an author-authored constant. Do not feed user-supplied or remote data through these templates without escaping it first.

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

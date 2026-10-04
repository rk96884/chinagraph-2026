# CHINAGRAPH // 2026

> **A portfolio 25 years in the making.**

CHINAGRAPH is my accessibility-first front-end portfolio: a record of how my work has evolved from handcrafted HTML and graphic design into responsive, user-centred digital products and modern front-end engineering.

**Live portfolio:** https://rk96884.github.io/chinagraph-2026/

---

## About the project

The portfolio is deliberately more than a collection of screenshots. It combines selected commercial work, independent products and engineering projects with the story of a career spanning more than 25 years.

The site itself is also part of the portfolio. It is built to demonstrate the same priorities I bring to production work: semantic markup, progressive enhancement, responsive design, accessibility, performance and maintainable front-end code.

## Highlights

- Responsive, mobile-first interface
- WCAG 2.2 AA accessibility target
- Semantic HTML5 and progressive enhancement
- Light and dark themes
- Keyboard-friendly navigation and visible focus states
- Reduced-motion support
- Interactive career journey
- Selected portfolio case studies
- Football Tournament Manager engineering showcase
- Independent projects including Travel Plan It and CYPH/1
- Search and social metadata
- Optimised production CSS and JavaScript
- Downloadable CV

## Selected projects

### Football Tournament Manager

A full-stack tournament-management application and the portfolio's flagship engineering project, combining a React front end with an ASP.NET Core API, Entity Framework Core and SQLite.

### Travel Plan It

An online-first independent travel business focused on tailor-made long-haul and complex itineraries. The portfolio feature covers the brand, responsive front end, enquiry journey, supporting web infrastructure and SEO.

### CYPH/1

An independent consumer beauty-tech venture centred on premium at-home IPL. The project combines product and interface design with an Astro/TypeScript web platform, commerce architecture and supporting APIs.

## Technology

The portfolio itself intentionally uses a lightweight front-end stack:

- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js build tooling
- clean-css
- Terser
- Git and GitHub
- GitHub Pages

The projects showcased within it extend beyond that stack and include technologies such as React, TypeScript, ASP.NET Core, Entity Framework Core, SQLite, Astro and cloud/serverless services.

## Project structure

```text
chinagraph-2026/
├── index.html
├── pages/          # Portfolio, app, engineering and CV pages
├── css/
│   ├── pages/      # Page-specific source styles
│   └── generated/  # Minified production styles
├── js/
│   └── generated/  # Minified production scripts
├── images/
├── assets/
├── docs/
└── scripts/        # Build helpers
```

## Local development

Clone the repository and install the development dependencies:

```bash
git clone https://github.com/rk96884/chinagraph-2026.git
cd chinagraph-2026
npm install
```

For local development, open the project in Visual Studio Code and use the **Live Server** extension. Open `index.html` (or the page you are working on), then select **Open with Live Server**.

Live Server will launch the site on a local development URL, typically similar to:

```text
http://127.0.0.1:5500/
```

The Node.js dependencies are used for the project's production asset build tooling rather than for running the site locally.

### Production assets

Source CSS and JavaScript are compiled/minified into the `generated` directories. After changing source styles or scripts, rebuild the production assets:

```bash
npm run build
```

Individual asset builds are also available:

```bash
npm run build:css
npm run build:js
```

Generated assets are committed so the static GitHub Pages deployment can reference them directly.

## Accessibility

Accessibility is treated as a core engineering requirement rather than a final-stage check. The site is designed around:

- Semantic document structure
- Keyboard navigation
- Skip navigation
- Visible focus states
- Accessible colour contrast
- Screen-reader-friendly labelling
- Reduced-motion preferences
- Responsive layouts across viewport sizes
- WCAG 2.2 AA as the baseline target

## Performance and quality

Google Lighthouse is used as a final quality check across Performance, Accessibility, Best Practices and SEO.

Latest mobile portfolio audit:

| Category | Score |
| --- | ---: |
| Performance | **99** |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |

The same audit recorded a 1.6 s First Contentful Paint, 1.8 s Largest Contentful Paint, 10 ms Total Blocking Time and 0.04 Cumulative Layout Shift.

Lighthouse results can vary between runs and environments; the scores above represent a local mobile audit performed during the 2026 portfolio release work.

## Development workflow

Changes are developed away from the production branch and reviewed before release:

```text
feature / docs branch
        ↓
     develop
        ↓
      main
```

The workflow uses focused branches, pull requests and validation before changes are promoted to production.

## Design approach

CHINAGRAPH uses a restrained editorial visual language: strong typography, generous spacing, high-contrast content and hand-drawn annotation details. The aim is to give the portfolio its own identity without allowing decoration to compromise usability or accessibility.

The interface uses Space Grotesk, Inter and Caveat, with the CHINAGRAPH yellow annotation motif providing a visual link between the site's historical and contemporary work.

## Author

**Rishi Khosla**  
Front-End Developer

- GitHub: https://github.com/rk96884
- LinkedIn: https://www.linkedin.com/in/rishi-khosla-83473998/

## Licence

MIT

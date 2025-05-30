# GemCommerce - Test Page

This is a front-end implementation for the **Customer Success Associate** technical test requested by GemCommerce.

The project is built with **React**, **TypeScript**, **SCSS**, and structured for clarity and maintainability. It contains 3 main sections from a Figma design:

- `HeroSection`
- `NutritionStats`
- `GutHealthSection`

---

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/OsmePhe/gemcom-test-page.git
cd gemcom-test-page
npm install
npm run dev
```

No script modifications have been made to package.json. The default vite dev server is used.

## Folder Structure

```text
project-root/
│
├── assets/
│
├── src/
│ ├── components/
│ │ ├── HeroSection/
│ │ │ ├── index.tsx
│ │ │ └── index.scss
│ │ ├── NutritionStats/
│ │ │ ├── index.tsx
│ │ │ └── index.scss
│ │ └── GutHealthSection/
│ │ ├── index.tsx
│ │ └── index.scss
│ │
│ ├── App.tsx
│ └── main.tsx
│
├── index.html
├── package.json
└── vite.config.ts
```

## Explanation of the Structure

### HeroSection

- Displays the main title, 4 grouped feature blocks (icon + title + text), a hero image, a CTA, and payment icons.

- Layout is horizontally centered.

- Main container uses flex with space between.

- Images are circular and use object-fit: cover.

- SCSS is modular and scoped inside the component folder.

### NutritionStats

- A two-column layout: left side includes a title, subtitle, statistics, and CTA; right side shows an image.

- Typography and spacing match Figma's exact specs (px, gap, font-size, etc.).

- Responsive width is considered with width: 100% for main sections.

- All text blocks use the Inter Tight font family.

### GutHealthSection

- Contains two stacked horizontal blocks, each divided into left (image/text) and right (text/image).

- Each block follows the fixed Figma layout.

- Carefully aligned based on pixel values.

- Rounded image corners and consistent spacing throughout.

## Technical Choices

- Used React with TypeScript for type safety and clarity.

- SCSS for styling, allowing nested rules and modular design.

- Chose a static and pixel-accurate layout for initial delivery, keeping responsiveness minimal.

- Developed with Visual Studio Code.

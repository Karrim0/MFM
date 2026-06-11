# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```
MFM--main
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ 11.jpg
│  └─ video
│     ├─ back.mp4
│     ├─ project4.mp4
│     └─ project5.mp4
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ files
│  │  │  ├─ influencers.pdf
│  │  │  ├─ lolaqezma.pdf
│  │  │  └─ relation.pdf
│  │  └─ images
│  │     ├─ 896a3483-1.png
│  │     ├─ about
│  │     │  ├─ abot1.jpg
│  │     │  ├─ about2.jpg
│  │     │  └─ about3.jpg
│  │     ├─ clients
│  │     │  ├─ clent3.jpeg
│  │     │  ├─ client1.png
│  │     │  └─ client2.jpeg
│  │     ├─ map.jpg
│  │     ├─ presentaion
│  │     │  ├─ MFM-eMM Ar brief.pdf
│  │     │  └─ mfm-eMM.pdf
│  │     ├─ projects
│  │     │  ├─ project 9.jpeg
│  │     │  ├─ project1.jpeg
│  │     │  ├─ project2.jpeg
│  │     │  ├─ project3.jpeg
│  │     │  ├─ project6.jpeg
│  │     │  ├─ project7.jpeg
│  │     │  └─ project8.jpeg
│  │     ├─ RECOGNITION_MFM (1)_page-0001.jpg
│  │     ├─ WhatsApp Image 2026-02-18 at 15.52.46.jpeg
│  │     ├─ work
│  │     │  ├─ work1.jpeg
│  │     │  ├─ work2.jpeg
│  │     │  ├─ work3.jpeg
│  │     │  ├─ work4.jpeg
│  │     │  ├─ work5.jpeg
│  │     │  ├─ work6.jpeg
│  │     │  └─ work7.jpeg
│  │     └─ لوجو
│  │        ├─ eMM-Logo - Copy.png
│  │        ├─ لوجو.webp
│  │        └─ لوجو2.webp
│  ├─ components
│  │  ├─ About.tsx
│  │  ├─ Clients.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Gallery.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ OurLatest.tsx
│  │  ├─ Philosophy.tsx
│  │  └─ ScrollToTop.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ About.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Events.tsx
│  │  ├─ Home.tsx
│  │  ├─ InfluencersMarketing.tsx
│  │  ├─ MediaMonitoring.tsx
│  │  ├─ News.tsx
│  │  ├─ Services.tsx
│  │  └─ WhitePaper.tsx
│  └─ styles
│     ├─ about.css
│     ├─ aboutpage.css
│     ├─ clients.css
│     ├─ contact.css
│     ├─ events.css
│     ├─ footer.css
│     ├─ gallery.css
│     ├─ hero.css
│     ├─ InfluencersMarketing.css
│     ├─ MediaMonitoring.css
│     ├─ navnar.css
│     ├─ newspage.css
│     ├─ ourlatest.css
│     ├─ philosophy.css
│     ├─ ServicesPage.css
│     └─ whitepaper.css
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
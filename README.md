# 3D Full Stack Developer Portfolio

Built with **Next.js 14 (App Router)**, **React 18** and **Three.js**. Black and dark blue theme, 3D tilt cards, an orbiting yellow skills scene, fully responsive.

## Run it

1. Install Node.js 18 or newer from https://nodejs.org
2. Open a terminal in this folder and run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Production build

```
npm run build
npm start
```

## Deploy (free)

Push the folder to GitHub, then import it on https://vercel.com. No settings needed.

## Customize

- Your name, projects, services, certificates, education: `components/Sections.js`
- Hero text, nav links, typing roles: `components/Portfolio.js`
- Skill names in the 3D scene: `names` array in `components/Scene.js`
- Colors and layout: `app/globals.css` (CSS variables at the top)
- Contact form opens your email app. Change `you@example.com` in `components/Sections.js`
- Resume button: put your file at `public/resume.pdf`
- Page title: `app/layout.js`

# FirstStep

A mobile-first investing education and virtual practice prototype for a Groww Product Intern case study. FirstStep is an original concept and visual identity; it is not affiliated with Groww.

## Run locally

Prerequisites: Node.js 20+ and npm, plus network access to install npm packages.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Build with `npm run build`; run automated tests with `npm test`.

## Architecture

- `src/App.tsx` contains typed local data models, demo assets and lessons, onboarding, app navigation, feature pages, and interaction logic.
- `src/style.css` contains responsive layouts, accessible focus styles, and reduced-motion handling.
- `src/main.tsx` mounts the React app. Vite and TypeScript configuration live at the repository root.
- The app uses React, TypeScript, Vite, and Lucide icons. Demo charts are original inline SVG illustrations; no external market or brokerage services are used.

## Data and limitations

The `firststep.v1` localStorage key stores onboarding answers and progress, completed lessons, goals, watchlist, quiz score, virtual cash, holdings, and transaction history. Malformed JSON falls back to initial demo state. Data stays in this browser; clearing site storage removes it. “Clear all local FirstStep data” removes this key.

All sample asset names, prices, movements, and charts are fictional and static. The virtual portfolio starts with ₹1,00,000, has no real transactions, and uses fixed demo prices consistently. Profit/loss compares current fictional prices with average virtual purchase cost. Goal monthly amounts divide remaining savings by whole months to the target date, without investment growth. The illustrative chart is not historical data. There is no account, backend, live market feed, tax treatment, fee model, or personalized advice.

## Publish

After a successful local build, publish the generated `dist/` folder on a static host such as Netlify, Vercel, or GitHub Pages. For Netlify/Vercel, connect the repository and use build command `npm run build` and publish directory `dist`. For GitHub Pages, configure the correct Vite `base` for the repository path before building, then publish `dist`. Complete hosting setup in your own account; this repository has not been deployed.

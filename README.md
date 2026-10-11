# FirstStep

**Learn · plan · practise** — an independent, mobile-first investing education concept for people exploring their first investing account.

> FirstStep is a case-study prototype inspired by the supplied Groww-for-Gen-Z brief. It is not affiliated with Groww, does not use Groww’s logo or proprietary assets, and is not a live financial product.

## Try the prototype

**Live demo:** [Open FirstStep](https://neeraj6264.github.io/firststep-investing-education/)

The project is a static Vite app and can be hosted from this repository with the included GitHub Actions workflow.

## The idea

The brief asks how an investing app could better serve Indian Gen Z users aged 20–26 who may be students, part-time workers, or receiving their first paycheck. With no research or product analytics supplied, this prototype treats beginner confidence, unfamiliar terminology, and fear of making an uninformed choice as hypotheses to test.

The proposed first journey connects three actions:

1. **Learn:** short lessons explain investing, SIPs, stocks, diversification, compounding, and planning in plain language, with examples and risk context.
2. **Plan:** a goal planner estimates an even monthly contribution from the amount remaining and time horizon. It assumes no investment growth.
3. **Practise:** fictional assets and a virtual portfolio let people explore basic mechanics without placing real orders.

The optional learner profile asks for a display name and broad age range, or lets people continue as a guest. This is **not authentication**: there is no identity verification, password, backend, or cross-device sync.

## Case-study deliverables

- [Case-study draft and assumptions](CASE_STUDY_NOTES.md) — 300–700-word AI-assisted draft with explicit assumptions and disclosure. The candidate reports that the hiring contact allowed AI assistance; no primary user research is claimed.
- [Prompts used](PROMPTS.md)
- [Evaluation record](EVALS.md)

## Run locally

Requirements: Node.js 20+ and npm.

```sh
npm install
npm run dev
```

Build and check the app:

```sh
npm run build
npm test
```

## Project structure

- `src/App.tsx` — onboarding, lesson content, navigation, goals, fictional discovery assets, virtual portfolio, and profile.
- `src/finance.ts` — small deterministic helpers for virtual portfolio and goal calculations.
- `src/style.css` — responsive styles, focus treatments, and reduced-motion behavior.
- `src/main.tsx` — React entry point.
- `EVALS.md` — observed and automated checks, including known gaps.
- `CASE_STUDY_NOTES.md` — editable case-study draft and declared assumptions.

Built with React, TypeScript, Vite, and Lucide icons. Charts are illustrative SVGs; no live market or brokerage API is connected.

## Data, privacy, and limitations

The `firststep.v1` localStorage key stores optional onboarding answers, learning progress, goals, watchlist, quiz score, virtual cash, holdings, and transaction history in this browser. Nothing is sent to a server. Clearing site data removes it. The profile does not protect information on a shared device and is not secure sign-in.

All instruments, prices, price changes, and charts are fictional and static. The practice balance begins at ₹1,00,000; transactions are simulated. Practice P/L uses fixed demo prices and virtual average cost. Goal contributions divide the remaining target by whole months and assume no growth. These examples are not forecasts, personalized advice, or recommendations. Live investing would require separate legal, privacy, security, suitability, and operational review.

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`. On pushes to `main`, GitHub Actions builds the app and publishes `dist/` to Pages. Vite uses the repository subpath as its production base. The repository Pages source is set to GitHub Actions. The live site is [neeraj6264.github.io/firststep-investing-education](https://neeraj6264.github.io/firststep-investing-education/); deployment status is visible in the repository’s [Actions](https://github.com/Neeraj6264/firststep-investing-education/actions) tab.

# Evaluation record

The 2026-10-11 results below include checks on the Groww-inspired visual and naming refresh.

Checks performed on 2026-10-11 (Asia/Kolkata). UI checks used the local Vite app in the in-app browser. Build/tests were run after installing dependencies; commands that hit Windows process-spawn restrictions succeeded via the approved elevated route.

| Case | Expected behavior | Actual result | Status |
| --- | --- | --- | --- |
| Dependency install and audit | Resolve app dependencies without known advisories | `npm install` succeeded after disabling the machine's global offline setting. `npm audit` reports 0 vulnerabilities after updating Vitest to 4.1.11. | Pass |
| Production build | Type-check and create `dist/` | `npm run build` succeeded; Vite emitted production JS/CSS assets. | Pass |
| New-user welcome and onboarding | Start onboarding and complete required selections | Browser smoke test clicked through welcome, required experience/goal/horizon/risk answers and optional-income skip; dashboard appeared. | Pass |
| Optional income skip | Let user skip personal range | Skip control advanced to the next step; continue-without-answer was enabled afterward. | Pass |
| Lesson browsing and completion | Browse six lessons, open one and persist completion | Learn Hub showed six lessons. Opened “Investing, in plain English,” marked it complete, then progress showed 1/6 (17%). | Pass |
| Goal planner form | Open form with labeled fields and validation | Goal page and create form rendered with name, target, saved amount, date and contribution-only note. Goal submission/edit/delete were not exercised. | Partial |
| Explore and watchlist | Show fictional demo assets and watchlist controls | Explore showed four labeled fictional assets, fixed sample prices and watchlist buttons; opened detail for LearnCo Demo and saw fictional price/risk/chart labels. Toggle persistence was not directly tested. | Partial |
| Virtual purchase | Validate quantity, show summary and update virtual transaction | Entered 2 units at fictional ₹86 (₹172 estimate), confirmed and saw “Virtual transaction recorded.” Portfolio cash/holding totals were not separately verified. | Partial |
| Virtual sale and reset confirmation | Block overselling; update sale; confirm reset | Utility tests verify oversell rejection and full-sale removal. Browser interaction and confirmation dialog not exercised. | Partial |
| Goal calculation | Savings estimate handles ordinary, completed, invalid and past dates | Automated unit tests cover 12-month ₹12,000 plan, completed goal, malformed date and past date. | Pass |
| Portfolio calculations | Use fixed demo prices and average cost consistently | Automated tests cover weighted cost, valuation, hypothetical P/L and sale quantity validation. | Pass |
| Quiz scoring and retry | Explain answers and calculate five-question score accurately | Quiz implemented, but end-to-end browser quiz and retry were not exercised. | Not run |
| Refresh persistence and malformed storage | Keep progress after refresh, safely recover malformed JSON | State is stored under `firststep.v1`; malformed JSON fallback exists. Refresh and corrupted storage were not exercised in browser. | Partial |
| Responsive, keyboard and console QA | Usable at mobile/desktop widths, visible focus, no console errors | Desktop browser smoke test only. Mobile-width, keyboard-only, and console-log inspection were not completed. | Not run |
| Groww-inspired refresh | Use cohesive green fintech styling and clear screen names without presenting as an official Groww app | Changed the working concept name to Groww FirstStep, updated brand and demo disclosures, and renamed Explore/Portfolio navigation to Discover/Practice. `npm run build` and `npm test` pass after the refresh. Mobile browser screenshot verified new brand and navigation layout; full desktop and keyboard review remain outstanding. | Partial |

Automated test result: **1 test file passed, 6 tests passed** (`npm test`). Production build: **passed** (`npm run build`).

### Bugs found and fixes

- Build exposed a missing default export at the end of `src/App.tsx`; added the export and Vite CSS type declaration.
- The first optional income step appeared as step 2 and had no continue action without choosing a value. Skip and continue-without-answer now explicitly choose “Prefer not to say.”
- A static October 2026 dashboard greeting would go stale; replaced it with a date-independent dashboard label.
- Extracted goal and portfolio arithmetic into `src/finance.ts`; UI now shares those helpers with the automated tests.
- `npm audit` initially found six issues in the older Vitest tree. Updated to Vitest 4.1.11; a fresh audit reported zero vulnerabilities and all six tests still passed.

### Remaining checks

Exercise goal create/edit/delete, quiz answers/retry, watchlist persistence after reload, oversell prevention and portfolio reset in-browser. Inspect at narrow and wide viewport widths, test keyboard navigation, and inspect browser console logs before claiming full QA.

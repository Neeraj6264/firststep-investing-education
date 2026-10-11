# Evaluation record

Checks performed on 2026-10-11 (Asia/Kolkata). Browser checks used a separate local QA profile with synthetic learner data. No data from the user's original local app profile was used or changed.

| Case | What was checked | Result |
| --- | --- | --- |
| Automated unit tests | Avatar initials, safe profile parsing, malformed saved data, goal math, portfolio math, weighted cost, and sale validation. | Pass: 2 test files, 12 tests. |
| Production build | `npm run build` generated the production bundle. | Pass. |
| Onboarding and learner profile | Completed onboarding with a test learner name and age range; name, age, and choices appeared on Home/Profile. | Pass. |
| Guest and age opt-out | Continued as guest, chose “Prefer not to say” for age, skipped optional income, completed the remaining steps, and saw the “Learner” dashboard. | Pass. |
| Avatar initials | Verified “Neeraj” uses N in the header, dashboard and profile; the old fixed A is gone. | Pass. |
| Lessons | Opened “Investing, in plain English,” marked it complete, and verified progress changed to 1/6. | Pass. |
| Quiz and retry | Completed all five questions for 5/5, viewed the recap, selected Try again, and verified question 1 restarted. | Pass. |
| Savings goals | Created a ₹12,000 goal with ₹2,000 saved, edited it to ₹2,500 saved, confirmed monthly estimates changed from ₹834 to ₹792, then deleted it and verified the empty state. | Pass. |
| Discover and watchlist | Added a fictional asset, refreshed, returned to Discover, and confirmed it remained in the watchlist. | Pass. |
| Asset detail | Verified fictional value, risk note, illustrative chart label, and watchlist control. | Pass. |
| Practice buy and sell | Bought two units at the fictional ₹86 price, blocked an attempted sale of three units, then sold one and the final unit and checked the resulting cash and holdings. | Pass. |
| Practice reset | Opened the reset confirmation, reviewed its warning, confirmed reset, and verified demo holdings and transaction history cleared. | Pass. |
| Refresh persistence | Reloaded the isolated test app and verified saved profile, lesson progress, and watchlist remained. | Pass. |
| Malformed browser data | Automated tests passed for invalid JSON, null/non-object values, and malformed saved lists/holdings. | Pass (unit tested; recovery was not separately injected in browser). |
| Responsive layout | At 390px, checked Home, Learn, Goals, Discover, Practice and Profile; document width remained within the viewport. Also checked a 768px layout. | Pass: no horizontal overflow observed. |
| Keyboard focus | Tabbed to navigation and confirmed the active control received visible keyboard focus. | Pass. |
| Browser console | Reviewed captured errors and warnings after the main flows. | Pass: none observed. |
| GitHub Pages | Verified the deployed app rendered at the repository subpath after correcting Vite's base path. | Pass. |

### Limits

No user interviews, surveys, or live market research were conducted. The app uses fictional static prices and local browser storage. The browser QA covered the main learner and simulation flows; it is not a security, accessibility-conformance, financial, or cross-browser audit.

### Fixes recorded

- Replaced the hard-coded avatar letter with initials derived from the learner's display name (N for Neeraj; NC for Neeraj Choithwani).
- Added safe recovery for malformed saved profile data and automated tests for the recovery behavior.
- Corrected lesson breadcrumb navigation so the lesson view remains under Learn.
- Corrected Vite's base path for GitHub Pages deployment under the repository subpath.

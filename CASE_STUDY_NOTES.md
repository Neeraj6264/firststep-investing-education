# Case study: A calmer first step into investing

> **Personalize before submitting.** The brief asks for this page not to be AI-created. This is an AI-assisted working draft based on the prototype, not a claim of unaided authorship or user research. Rewrite it in your own voice, add your real observations and decisions, and remove anything you cannot personally stand behind before submission.

## Problem and point of view

The brief focuses on people aged 20–26 who may be opening their first investment account while studying, working part-time, or receiving a first salary. I interpret the challenge as a confidence and comprehension problem as much as a product-discovery problem: a beginner may encounter unfamiliar terms, many choices, and price movement before they understand what ownership, risk, or a regular investment actually means. A polished interface alone cannot resolve that gap. The first experience should make the next sensible learning step feel clear, while being honest that investing involves uncertainty.

There was no supplied user research, analytics, or access to Groww product data. I therefore treated “choice overload and fear of making an uninformed mistake” as hypotheses to validate, not established facts. I assumed this audience uses phones, has varied levels of financial familiarity, and may not want to disclose personal details just to explore an educational concept. The prototype is an independent case-study concept inspired by the brief; it is not a Groww product.

## Scope

In scope is a lightweight journey to **learn, plan, and practise**: a welcome and optional learner profile, short beginner lessons, a simple savings-goal planner, a discovery area with fictional assets, and a virtual portfolio for practising basic buy/sell mechanics. The profile asks for a display name and optional broad age band, with a guest path. Answers and progress remain in browser storage. The goal calculator explains a contribution-only estimate, and practice screens label demo prices and transactions as fictional.

Out of scope are real account opening, identity or age verification, live market prices, brokerage or payments, real-money orders, tax and fee modeling, personalized recommendations, and any claim of investment returns. Those require product, security, regulatory, suitability, and operational work beyond this learning prototype. “Authentication” is intentionally not implied: a local browser profile does not verify identity, secure data on a shared device, or sync between devices.

## Proposed solution and rationale

FirstStep gives a new learner a low-pressure route through three connected modes. Lessons explain ideas in plain language and pair examples with risk context. The goal planner translates a target and time horizon into an easy-to-check monthly contribution without assuming investment growth. The practice area lets people explore fictional assets and see how virtual holdings and cash change, without confusing that exercise with a real trade. A small optional profile can tailor the starting point without demanding a date of birth, email, password, or government identifier.

I chose fixed, fictional prices to make interactions predictable and keep the prototype away from live financial decisions. Persistent labels and a privacy note reinforce the limits. Local storage makes the demo usable without an account or backend, but means data is device-specific and can disappear when browser storage is cleared. The visual direction uses a restrained green palette and familiar fintech navigation while retaining original layouts and avoiding Groww branding assets. The key trade-off is fidelity versus safety: a realistic practice flow is useful only if its simulated nature stays unmistakable.

## What I would validate next

Before expanding the concept, I would test it with students, first-salary earners, and part-time workers across the 20–26 cohort. I would ask them to explain a SIP, identify whether a chart is real, and estimate a goal contribution after using the app. Measures could include lesson completion and recall, quiz retries, goal-plan comprehension, return visits, and confidence before and after a session. Guardrails should track whether anyone mistakes virtual performance for expected returns or interprets the profile as secure sign-in. I would use moderated usability sessions first, revise confusing language, and only then decide whether a broader product experiment is justified.

## Assumptions to revisit

- Beginner confidence and choice overload are hypotheses; no primary research was provided.
- The age range describes the brief’s intended audience, not a verified user segment.
- Contribution estimates exclude returns, inflation, taxes, and fees.
- The prototype is educational only and is not financial advice or a live investing service.

# Prompts used

## Master prompt

The user-provided master prompt is the complete text in the attachment `Pasted text.txt` for this task. It requests the FirstStep education and virtual investing app, its feature set, technical and financial-safety requirements, QA, and deliverables. The attachment is outside this repository; this note records the source without duplicating its full text.

## Follow-up prompt

The user requested that the app feel more related to Groww’s visual style and that the interface names be adjusted to match. The implementation uses the working name “Groww FirstStep” for this independent concept, with green fintech styling and labels such as Discover and Practice. It remains clearly marked unofficial and does not use Groww’s logo or proprietary screens.

The user then requested a small authentication flow that asks age. The agreed implementation direction is a local learner profile with optional broad age band, a guest path, and clear disclosure that this prototype does not provide secure authentication or cloud sync.

## Case-study brief

The supplied image asks for a Groww app suited to Indian Gen Z investors, especially ages 20–26, with a 300–700-word page explaining problem interpretation, scope, exclusions, and solution rationale; a prompt record; evaluations; and an accessible app link. It states assumptions are acceptable if declared, and that the submitted one-page artifact should not be AI-created. This repo therefore contains an explicitly AI-assisted editable draft with a clear instruction to rewrite it personally before submission; it must not be represented as unaided human-authored work.

## Product decisions recorded

- No user research, analytics, or proprietary Groww data was provided; user needs are stated as hypotheses.
- The concept connects learning, savings planning, and simulated investing practice.
- Fictional fixed-price assets and a local-only profile keep the prototype educational; no live financial activity or actual authentication is implied.
- The learner profile stores only a display name and optional broad age band, with guest/skip choices.
- A GitHub Pages Actions workflow publishes the static Vite build from `main`. The repository’s Pages source was enabled for Actions, the workflow succeeded, and the live URL is `https://neeraj6264.github.io/firststep-investing-education/`.

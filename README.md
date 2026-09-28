# SmartStudy Agile Quest — v5 Modular Professor Edition

A **static, modular, browser-based Agile/Scrum learning simulation** grounded in the SmartStudy Planner academic application. No Django, MySQL, build tool, npm, or server-side runtime is required for the *game*. The separate real SmartStudy Planner uses Django, HTML/CSS/Bootstrap and MySQL.

## Start

Open this folder in VS Code and use **Live Server** on `index.html` (recommended), or publish its contents to GitHub Pages. Open the site and start at Mission 00. Because JavaScript uses ES modules, opening via `file://` is not supported reliably.

## Modular structure

- `index.html` — thin application entry point
- `css/base.css` — shared design and responsive foundation
- `css/components.css` — reusable UI components
- `css/mission.css` — learning mission styles
- `css/board.css` — Kanban board styles
- `css/accessibility.css` — focus, print, motion preferences
- `js/app.js` — routing/controller composition
- `js/core/state.js` — persistence, one-time XP, unlock rules
- `js/core/router.js` — mission routes
- `js/core/helpers.js` — safe rendering helpers
- `js/data/content.js` — stories, four Sprint Backlogs, quiz
- `js/components/shell.js` — navigation, player profile, reset
- `js/components/board.js` — shared Sprint Kanban rendering
- `js/components/quiz.js` — shared quiz logic
- `js/pages/*.js` — **independent mission modules** (discovery, stories, backlog, reusable Sprint controller, final)
- `tests/` — smoke tests for modules and state transitions

## Learning sequence

00 Meet Maya → 01 User Stories → 02 Product Backlog (MoSCoW; no Fibonacci) → 03 Sprint 1: discovery/design → 04 Sprint 2: Django/MySQL core → 05 Sprint 3: Excel/Power BI/email → 06 Sprint 4: verification/handoff → 07 Final Scrum review.

Every Sprint contains an explicit task-level Sprint Backlog, an ordered Kanban progression, a Sprint Review question and a Retrospective improvement. Tasks must reach verified Done before the Review unlocks. Progress is saved in the browser's localStorage key `smartstudy-agile-quest-v5`; it is local to the browser/device. Mission rewards are idempotent, even after refresh. Reset progress clears the v5 game save. Previous v1–v3 saves are intentionally not imported to avoid mixing incompatible progress models.

## Deployment

Copy the **contents** of this directory (including `index.html`, `css`, `js`, `assets`) into your GitHub repository root. GitHub → Settings → Pages → Deploy from branch → `main` / `(root)`. Relative paths support project repositories under `/repo-name/`.

## Scope / integrity

This is an educational simulation of Scrum, not a hosted copy of the Django SmartStudy application. The user-reported SmartStudy implementation is reflected as a case study; the game does not claim to test the Django backend. Sprint allocation is an instructional reconstruction, not a verified historical timeline. Browser localStorage is not secure or suitable for authoritative grading. Do not store credentials in frontend code.


## v5 learning improvements
- All nine implementation user stories are mandatory, individually checked multiple-choice questions. No exact sentence typing.
- Product Backlog practice progresses through four Sprint groupings, including discovery and verification enablers and one deferred chatbot proposal.
- Row-level feedback shows which priorities are correct/incorrect, the expected category, and an explanation after checking.
- A single Product Backlog is still distinguished from Sprint Backlogs in the teaching text.
- Prior v4 browser progress is read as a fallback; v5 writes its own key. To experience the new story workshop from scratch, use Reset progress.

## v7 navigation refinement
The Product Backlog's four Sprint stage tabs are interactive. After completing a stage, learners may revisit that stage without losing its validated answers. Later stages remain locked until the preceding stage has been validated. The learner-facing wording no longer mentions Fibonacci estimation.

## Product Backlog → Sprint task traceability (v7)

Every Sprint page now displays a collapsible relationship map connecting its Product Backlog items to the concrete tasks in the Kanban board. Task cards also display parent backlog IDs. The numbers are intentionally different: one backlog requirement can involve multiple implementation tasks, and a technical task may support multiple requirements. Sprint 4's deferred chatbot proposal has no assigned task. Run `node tests/traceability.test.mjs` to verify all links.

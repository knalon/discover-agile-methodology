# SmartStudy Agile Quest v8 — Incremental Agile Learning Simulation

## Run
Open this folder in VS Code and serve `index.html` using Live Server, or publish the folder to GitHub Pages. No backend or build tools are needed. Progress is saved in the browser under `smartstudy-agile-quest-v8` (intentionally separate from v7 because the learning state changed).

## Learning journey
Meet Maya → complete nine user-story exercises → prioritise one initial Product Backlog using MoSCoW → four iterative Sprints → final knowledge check.

Every Sprint: select a small subset of **currently available** backlog items → implement and verify two concrete tasks per selected item → inspect the Increment at Sprint Review → record a process improvement at Retrospective → respond to Maya's feedback and update priorities for subsequent Sprint Planning. No predefined assignment of backlog items to Sprints 1–4. At least one item remains for later refinement.

Sprint 1 can deliver Subjects + Assignments, rather than only planning documents. Later Sprints build on the tested Increment. Sprint 1–3 feedback changes the required priority of the next core outcome. Sprint 4 concludes with an honest accounting of remaining backlog items.

## Modular architecture
- `js/data/agile.js`: scenario, MoSCoW baseline, acceptance tasks, capacity, Sprint Goals and feedback.
- `js/data/engine.js`: pure selectors and rules for Sprint planning and adaptation.
- `js/pages/backlog.js`: initial MoSCoW workshop.
- `js/pages/sprint.js`: reusable four-Sprint controller.
- `js/core/state.js`: isolated v8 browser storage, unlocks and one-time XP rewards.
- `js/components/board.js`: Kanban lane transitions.
- `js/pages/stories.js`, `welcome.js`, `final.js`: independent missions.
- `css/agile.css`: new Sprint planning styles; Montserrat retained.

The Sprint Review is a product inspection; the Retrospective concerns team process. “Review (Peer Review)” is only an academic label on the Kanban lane; it adds no extra gate.

## Notes
This is a classroom simulation, not a production Scrum tracking tool. For this guided scenario, the next feedback-triggered feature is held for its later Sprint to guarantee that the learner can respond to it. The choice of exactly 2/2/2/2 backlog items per Sprint is a learning constraint rather than a Scrum rule. Priorities and feedback are illustrative; the actual Django app is a separate project. Browser interaction testing is recommended before classroom deployment.

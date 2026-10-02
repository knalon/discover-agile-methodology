# SmartStudy Agile Quest v9 — Guided One-Month Scrum Simulation

## Run
Open `index.html` with VS Code Live Server or publish the folder to GitHub Pages. No backend/build tools are required. v9 progress is isolated under `smartstudy-agile-quest-v9`.

## Important learning use
A persistent reminder appears on every page: learners should revisit this web whenever new Agile/Scrum concepts are introduced in the IUs. The simulation is a recurring companion to the capstone, not a one-time activity.

## v9 scenario
The Product Backlog contains 10 items: 9 active items and 1 `Won’t now` proposal (US-10). For this guided classroom version, the 9 active items are deliberately allocated across a one-month Sprint schedule:
- Sprint 1 — Days 1–5: US-01, US-02, US-04
- Sprint 2 — Days 6–12: US-03, US-05, plus US-04 carry-forward after the planned Sprint 1 DoD rejection
- Sprint 3 — Days 13–20: US-09, US-06
- Sprint 4 — Days 21–30: US-07, US-08

Sprint 1 intentionally rejects `US-04-T2` at Review because dashboard counts/date ordering fail the Definition of Done. US-04 returns to the Product Backlog and appears in Sprint 2 with corrective and re-verification tasks. This demonstrates that unfinished/rejected work is not falsely marked Done and can be reconsidered in the next Sprint.

The dictated allocation is explicitly labelled as a teaching constraint, not a general Scrum rule.

## Board language
Task progression uses:
- To do → **Advance →**
- In progress → **Submit for Review →**
- Review (Peer Review) → **Accept as Done ✓**

## Architecture
Data/rules remain separated from page controllers. `js/data/agile.js` contains the guided Sprint plan, lengths, goals, feedback and rejection scenario. `js/data/engine.js` handles carry-forward and Sprint task generation. `js/pages/sprint.js` renders the reusable Sprint flow.

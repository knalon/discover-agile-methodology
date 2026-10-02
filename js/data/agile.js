// v9 guided scenario: 9 active Product Backlog items are intentionally distributed across four Sprints.
// US-10 remains visible in the Product Backlog as Won't now.
export const items=[
{id:'US-01',title:'Manage subjects',priority:'Must',reason:'Maya needs a place to organise her modules.',steps:['Create and list subjects','Edit/delete subjects and test ownership']},
{id:'US-02',title:'Track assignments and due dates',priority:'Must',reason:'Deadline tracking is central to Maya’s problem.',steps:['Build assignment form and due-date display','Test assignment status and date validation']},
{id:'US-03',title:'Plan and complete study tasks',priority:'Must',reason:'The planner must turn assignments into actionable work.',steps:['Create study-task model and screens','Test completion and planned dates']},
{id:'US-04',title:'View dashboard and study plan',priority:'Must',reason:'Maya needs a usable overview of upcoming work.',steps:['Build dashboard and plan views','Check counts and date ordering']},
{id:'US-05',title:'Monitor study progress',priority:'Should',reason:'Progress insights improve the core workflow.',steps:['Show completed and pending totals','Verify completion percentage']},
{id:'US-06',title:'Manage records in Django Admin',priority:'Should',reason:'Administrative controls support maintenance.',steps:['Register and configure admin models','Test search, filters and access']},
{id:'US-07',title:'Export records to Excel',priority:'Should',reason:'Export supports reporting beyond daily planning.',steps:['Export Subjects, Assignments and Tasks','Verify workbook content and ownership']},
{id:'US-08',title:'Analyse progress in Power BI',priority:'Could',reason:'Advanced reporting adds value after basic tracking.',steps:['Import exported workbook','Build and verify report measures']},
{id:'US-09',title:'Receive daily deadline reminders',priority:'Should',reason:'Reminders help Maya avoid missed deadlines.',steps:['Implement email command safely','Test incomplete-only reminders and scheduling']},
{id:'US-10',title:'AI essay-writing chatbot',priority:'Won’t now',reason:'This proposal is outside the agreed SmartStudy product goal.',steps:[]}
];

// Dictated initial Sprint allocation for the guided classroom simulation.
// US-04 is intentionally rejected in Sprint 1 and carried forward into Sprint 2.
export const sprintPlan={
  1:['US-01','US-02','US-04'],
  2:['US-03','US-05'],
  3:['US-09','US-06'],
  4:['US-07','US-08']
};
export const sprintLengths=[
  {label:'Days 1–5',days:5},
  {label:'Days 6–12',days:7},
  {label:'Days 13–20',days:8},
  {label:'Days 21–30',days:10}
];
export const sprintGoals=[
'Give Maya a usable starting point for organising subjects, assignments and upcoming work.',
'Help Maya turn assignments into planned work, monitor progress, and resolve the Sprint 1 dashboard rejection.',
'Improve deadline awareness and administration of the growing product.',
'Extend the proven planner with export and Power BI reporting.'
];
export const feedback=[
{quote:'Subjects and assignments work, but the dashboard check fails: upcoming work is not ordered correctly. I cannot accept US-04 as Done yet.',target:'US-04',priority:'Must',reason:'Sprint Review rejects US-04 against the Definition of Done. The item returns to the Product Backlog and is carried into Sprint 2 for correction and re-verification.'},
{quote:'The corrected dashboard, study tasks and progress view now help me plan my week. I still need stronger deadline awareness.',target:'US-09',priority:'Must',reason:'The product is usable; deadline reminders are now the next planned value in the guided scenario.'},
{quote:'Reminders and administration are working. I now need a way to export and analyse the study data.',target:'US-07',priority:'Must',reason:'The next planned Increment extends proven application data into reporting.'},
{quote:'The planner now supports the intended monthly learning journey. Let’s inspect the integrated product and keep any future ideas visible.',target:null,priority:null,reason:'The final Sprint inspects the integrated Increment and transparently records deferred work.'}
];
export const rejectedInSprint1={pbi:'US-04',task:'US-04-T2',message:'DoD rejected: dashboard counts/date ordering do not match the expected result. Carry US-04 forward and fix it in Sprint 2.'};

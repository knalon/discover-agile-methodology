// Scenario data is independent from page controllers. Priorities can change after reviews.
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
export const capacity=[2,2,2,2];
export const sprintGoals=[
'Give Maya a usable starting point for organising subjects and deadlines.',
'Help Maya turn assignments into planned, trackable work.',
'Improve deadline awareness and everyday progress visibility.',
'Extend the proven planner with reporting and administration.'
];
export const feedback=[
{quote:'I can see my subjects and deadlines. Now I need to break each assignment into manageable study sessions.',target:'US-03',priority:'Must',reason:'Maya has validated the basic planner and now needs actionable study tasks.'},
{quote:'The tasks help. I still miss approaching deadlines when I am busy. Can the planner remind me?',target:'US-09',priority:'Must',reason:'New user feedback raises reminders above other optional enhancements.'},
{quote:'Reminders help! Now I want to understand my progress and share the results with my tutor.',target:'US-05',priority:'Must',reason:'After reminders, visible progress becomes the most useful next outcome.'},
{quote:'The planner now supports my weekly routine. Let’s inspect what was delivered and decide what remains for a later release.',target:null,priority:null,reason:'The team inspects the increment and transparently records unfinished work.'}
];
export const taskTypes=['Implement feature','Verify acceptance criteria'];

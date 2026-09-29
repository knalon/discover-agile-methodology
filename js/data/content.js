export const stories = [
{id:'US-01',role:'learner',want:'manage my subjects',why:'I can organise my modules in one place',priority:'Must',sprint:2,criteria:['A subject can be created with a name','A subject can be viewed, edited and deleted']},
{id:'US-02',role:'learner',want:'manage assignments with due dates and priorities',why:'I can keep track of upcoming deadlines',priority:'Must',sprint:2,criteria:['An assignment has a subject, title and due date','Priority and status are recorded','The learner can create, view, edit and delete an assignment']},
{id:'US-03',role:'learner',want:'plan study tasks for my assignments',why:'I can break large assignments into manageable activities',priority:'Must',sprint:2,criteria:['A task links to an assignment','A planned date and estimated minutes can be entered','Tasks can be marked Completed or Pending']},
{id:'US-04',role:'learner',want:'view a dashboard and study plan',why:'I can see what to do next',priority:'Must',sprint:2,criteria:['Dashboard shows subject, assignment and task counts','Study plan orders tasks by planned date']},
{id:'US-05',role:'learner',want:'see my task progress',why:'I can monitor completed and pending work',priority:'Must',sprint:2,criteria:['Progress displays total, completed and pending tasks','Percentage reflects the completion state']},
{id:'US-06',role:'administrator',want:'manage academic records in Django Admin',why:'I can inspect and maintain application data',priority:'Should',sprint:2,criteria:['Subject, Assignment and StudyTask are registered','Search, filtering and ordering are configured']},
{id:'US-07',role:'learner',want:'export my academic data to Excel',why:'I can report on my work',priority:'Should',sprint:3,criteria:['Workbook contains Subjects, Assignments and Study Tasks worksheets','Downloaded data reflects stored records']},
{id:'US-08',role:'analyst',want:'view a Power BI report',why:'I can analyse task and assignment patterns',priority:'Should',sprint:3,criteria:['Report uses exported workbook','Counts, completion, subject workload and assignment status are visible']},
{id:'US-09',role:'learner',want:'receive daily assignment reminder emails',why:'I am less likely to overlook outstanding work',priority:'Should',sprint:3,criteria:['Incomplete assignments are included','Users without an email address are skipped','Daily command can run through a scheduled task']},
{id:'US-10',role:'learner',want:'have a chatbot that writes my essays',why:'I can automate academic writing',priority:'Won’t now',sprint:null,criteria:['Out of the current academic scope']}
];
// Product Backlog includes feature stories plus Sprint 1/4 enabling work.
// Enablers are explicitly NOT learner-facing user stories.
export const backlogItems = [
 {id:'EN-01',want:'Investigate Maya’s needs and agree on product scope',priority:'Must',sprint:1,kind:'Discovery enabler',reason:'Without a shared problem and scope, the team cannot plan meaningful work.'},
 {id:'EN-02',want:'Prepare wireframes, data model and implementation plan',priority:'Must',sprint:1,kind:'Design enabler',reason:'The team needs a development-ready foundation before implementation.'},
 ...stories.filter(x=>x.sprint).map(x=>({...x,kind:'User story',reason:x.priority==='Must'?'Required for the core study-management workflow.':'Supports administration, reporting or reminders beyond the core learner workflow.'})),
 {id:'EN-03',want:'Run integrated CRUD, progress, export and reminder tests',priority:'Must',sprint:4,kind:'Verification enabler',reason:'The academic deliverable needs end-to-end verification.'},
 {id:'EN-04',want:'Prepare UAT evidence, documentation and final handoff',priority:'Must',sprint:4,kind:'Release enabler',reason:'The final Sprint must demonstrate and hand over the verified Increment.'},
 {id:'US-10',want:stories.find(x=>x.id==='US-10').want,priority:'Won’t now',sprint:4,kind:'Deferred proposal',reason:'Essay-writing chatbot is outside the agreed academic project scope.'}
];
export const sprints=[
{id:1,title:'Discovery & design',goal:'Prepare a reviewed, development-ready SmartStudy foundation.',increment:'Reviewed stories, prioritised Product Backlog, designs and development plan.',tasks:[['S1-T1','Investigate Maya’s scattered deadlines and study tasks'],['S1-T2','Write user stories with acceptance criteria'],['S1-T3','Prioritise the Product Backlog using MoSCoW'],['S1-T4','Define the MVP and draft dashboard/CRUD wireframes'],['S1-T5','Sketch Subject → Assignment → StudyTask relationships'],['S1-T6','Agree on Sprint 2 implementation readiness']]},
{id:2,title:'Core application',goal:'Deliver a working Django/MySQL study-management workflow.',increment:'Working core SmartStudy app with CRUD, planning and progress.',tasks:[['S2-T1','Configure Django project and MySQL connection'],['S2-T2','Implement Subject, Assignment and StudyTask models'],['S2-T3','Build Subject CRUD screens and views'],['S2-T4','Build Assignment CRUD with due date, priority and status'],['S2-T5','Build Study Task CRUD, duration and completion toggle'],['S2-T6','Implement Dashboard, Study Plan and Progress'],['S2-T7','Configure Django Admin and verify data persistence']]},
{id:3,title:'Reporting & automation',goal:'Extend the application with reporting and daily reminders.',increment:'Excel export, Power BI report and reminder automation.',tasks:[['S3-T1','Export three formatted Excel worksheets'],['S3-T2','Import workbook into Power BI and prepare data types'],['S3-T3','Create report measures and visuals'],['S3-T4','Configure Gmail SMTP with environment variables'],['S3-T5','Implement assignment reminder management command'],['S3-T6','Configure and test daily Windows scheduling']]},
{id:4,title:'Verification & handoff',goal:'Validate the integrated academic deliverable and prepare a handoff.',increment:'Tested SmartStudy academic project and supporting evidence.',tasks:[['S4-T1','Verify Subjects, Assignments and Study Tasks CRUD'],['S4-T2','Test Completed/Pending toggle and progress calculations'],['S4-T3','Verify Excel export and Power BI refresh'],['S4-T4','Verify reminder delivery and scheduled execution'],['S4-T5','Review defects, privacy and learner data handling'],['S4-T6','Document results and demonstrate the integrated product']]}
];
// Traceability: each Sprint task contributes to one or more Product Backlog items.
// Enablers cover foundation and verification work; a task can serve several stories.
export const taskBacklogLinks = {
 'S1-T1':['EN-01'], 'S1-T2':['EN-01'], 'S1-T3':['EN-01'],
 'S1-T4':['EN-02'], 'S1-T5':['EN-02'], 'S1-T6':['EN-02'],
 'S2-T1':['US-01','US-02','US-03'],
 'S2-T2':['US-01','US-02','US-03'],
 'S2-T3':['US-01'], 'S2-T4':['US-02'], 'S2-T5':['US-03'],
 'S2-T6':['US-04','US-05'], 'S2-T7':['US-06'],
 'S3-T1':['US-07'], 'S3-T2':['US-08'], 'S3-T3':['US-08'],
 'S3-T4':['US-09'], 'S3-T5':['US-09'], 'S3-T6':['US-09'],
 'S4-T1':['EN-03'], 'S4-T2':['EN-03'], 'S4-T3':['EN-03'],
 'S4-T4':['EN-03'], 'S4-T5':['EN-03','EN-04'], 'S4-T6':['EN-04']
};
export function sprintTraceability(n){
 const items=backlogItems.filter(item=>item.sprint===n);
 const sprint=sprints.find(item=>item.id===n);
 return items.map(item=>({ ...item, tasks:sprint.tasks.filter(([id])=>(taskBacklogLinks[id]||[]).includes(item.id)) }));
}
export const quiz=[{q:'Which artifact is an ordered, evolving list of product work?',options:['Sprint Retrospective','Product Backlog','Daily Scrum'],answer:1,why:'The Product Backlog is the ordered, evolving source of product work.'},{q:'Which event inspects the product Increment with stakeholders?',options:['Sprint Review','Sprint Planning','Sprint Retrospective'],answer:0,why:'The Sprint Review inspects the Increment and informs future backlog decisions.'},{q:'What does a Sprint Retrospective focus on?',options:['Rewriting user personas','How the team worked and can improve','Exporting the database'],answer:1,why:'The Retrospective inspects teamwork and ways of working.'},{q:'When should a task move to Done in this simulation?',options:['When coding starts','When its evidence/checks are complete','As soon as it is planned'],answer:1,why:'Done requires completion and verification, not simply progress.'}];

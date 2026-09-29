import assert from 'node:assert/strict';
const {backlogItems,sprints,taskBacklogLinks,sprintTraceability}=await import('../js/data/content.js');
const backlogIds=new Set(backlogItems.map(x=>x.id));
const allTasks=sprints.flatMap(s=>s.tasks.map(([id])=>id));
assert.equal(allTasks.length,25);
assert.deepEqual(Object.keys(taskBacklogLinks).sort(),[...allTasks].sort());
for(const sprint of sprints){
 const ids=new Set(backlogItems.filter(x=>x.sprint===sprint.id).map(x=>x.id));
 for(const [taskId] of sprint.tasks){
  const parents=taskBacklogLinks[taskId];
  assert.ok(parents.length,`${taskId} must have a parent`);
  for(const parent of parents)assert.ok(ids.has(parent),`${taskId} links to an invalid parent ${parent}`);
 }
 const trace=sprintTraceability(sprint.id);
 for(const item of trace.filter(x=>x.id!=='US-10'))assert.ok(item.tasks.length,`${item.id} needs a linked task`);
}
assert.ok(!Object.values(taskBacklogLinks).flat().includes('US-10'));
assert.ok(Object.values(taskBacklogLinks).some(x=>x.length>1));
console.log('PASS: 25 tasks linked to valid Sprint backlog items; all active items covered; deferred item excluded');

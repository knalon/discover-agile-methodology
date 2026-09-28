import assert from 'node:assert/strict';
const memory=new Map();
globalThis.localStorage={getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,v)};
globalThis.window={dispatchEvent:()=>{}};
globalThis.Event=class{constructor(type){this.type=type}};
const state=await import('../js/core/state.js');
const data=await import('../js/data/content.js');
assert.equal(data.stories.length,10);
assert.equal(data.sprints.length,4);
assert.deepEqual(data.sprints.map(s=>s.tasks.length),[6,7,6,6]);
assert.equal(state.unlocked('stories'),false);
assert.equal(state.award('discovery',80),true);
assert.equal(state.award('discovery',80),false);
assert.equal(state.state.xp,80);
assert.equal(state.unlocked('stories'),true);
state.update({storyDone:true,backlogDone:true});
assert.equal(state.unlocked('sprint1'),true);
assert.equal(state.unlocked('sprint2'),false);
for(const sprint of data.sprints){
 for(const [id] of sprint.tasks){
  state.setTask(sprint.id,id,'doing');
  state.setTask(sprint.id,id,'review');
  state.setTask(sprint.id,id,'done');
  assert.equal(state.taskStatus(sprint.id,id),'done');
 }
 state.sprintState(sprint.id).review=true;
 state.sprintState(sprint.id).retro=true;
 state.save();
 assert.equal(state.sprintFinished(sprint.id),true);
}
assert.equal(state.unlocked('final'),true);
assert.equal(state.read().xp,80);
state.reset();
assert.equal(state.state.xp,0);
assert.equal(state.unlocked('stories'),false);
console.log('PASS: 10 stories, 4 Sprint Backlogs, 25 tasks, unlock gates, state persistence, XP anti-farming, reset');

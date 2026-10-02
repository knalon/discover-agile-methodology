import {items,sprintPlan,feedback,rejectedInSprint1} from './agile.js';
export const byId=id=>items.find(x=>x.id===id);
export function carriedInto(state,n){
 if(n===2 && state.sprints?.[1]?.review && state.sprints[1]?.rejectedPbi===rejectedInSprint1.pbi)return [rejectedInSprint1.pbi];
 return [];
}
export function plannedFor(state,n){return [...carriedInto(state,n),...(sprintPlan[n]||[])];}
export function delivered(state,until=4){
 const done=new Set();
 for(let n=1;n<=until;n++){
  const s=state.sprints?.[n]; if(!s?.review)continue;
  for(const id of (s.selected||[])) if(!(n===1&&id===s.rejectedPbi)) done.add(id);
 }
 return done;
}
export function available(state,n){return plannedFor(state,n).map(byId).filter(Boolean)}
export function sprintTasks(ids,n){
 return ids.flatMap(id=>{
  if(n===2&&id===rejectedInSprint1.pbi){
   return [{id:'US-04-CF1',parent:'US-04',title:'Fix dashboard counts and upcoming-date ordering from Sprint 1 review'},{id:'US-04-CF2',parent:'US-04',title:'Re-test US-04 against its acceptance criteria and Definition of Done'}];
  }
  return byId(id).steps.map((title,i)=>({id:`${id}-T${i+1}`,parent:id,title}));
 });
}
export function proposedPriority(state,id,n){
 for(let i=Math.min(n-1,3);i>=1;i--){if(state.sprints?.[i]?.adapted&&feedback[i-1].target===id)return feedback[i-1].priority}
 return state.priorities[id]||byId(id).priority;
}
export function validSelection(state,n,ids){const expected=plannedFor(state,n);return ids.length===expected.length&&new Set(ids).size===ids.length&&expected.every(id=>ids.includes(id));}
export function validAdaptation(n,id){return feedback[n-1].target===id||n===4&&id==='none'}

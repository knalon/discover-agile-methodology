import {items,capacity,feedback} from './agile.js';
export const byId=id=>items.find(x=>x.id===id);
export function delivered(state,until=4){return new Set(Array.from({length:until},(_,i)=>state.sprints[i+1]?.review?state.sprints[i+1].selected:[]).flat())}
export function available(state,n){const done=delivered(state,n-1);return items.filter(x=>x.id!=='US-10'&&!done.has(x.id)&&!({'US-03':2,'US-09':3,'US-05':4}[x.id]>n))}
export function sprintTasks(ids){return ids.flatMap(id=>byId(id).steps.map((title,i)=>({id:`${id}-T${i+1}`,parent:id,title}))) }
export function proposedPriority(state,id,n){for(let i=Math.min(n-1,3);i>=1;i--){if(state.sprints[i]?.adapted&&feedback[i-1].target===id)return feedback[i-1].priority}return state.priorities[id]||byId(id).priority}
export function validSelection(state,n,ids){if(ids.length!==capacity[n-1]||new Set(ids).size!==ids.length)return false;const possible=new Set(available(state,n).map(x=>x.id));if(!ids.every(id=>possible.has(id)))return false;const required=['US-01','US-03','US-09','US-05'][n-1];return ids.includes(required)}
export function validAdaptation(n,id){return feedback[n-1].target===id||n===4&&id==='none'}

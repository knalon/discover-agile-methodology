const KEY='smartstudy-agile-quest-v5';
const PREVIOUS_KEY='smartstudy-agile-quest-v4';
export const initial=()=>({version:5,xp:0,awarded:[],evidence:[],storyDraft:'',storySelected:'US-01',criteriaDraft:'',storyDone:false,storyAnswers:{},backlogDone:false,backlogStage:1,backlogChecked:{},backlogAttempted:{},priorities:{},sprints:{},quizAnswers:{},quizDone:false,role:'Discovery'});
function normalize(raw){const d=initial();if(!raw||typeof raw!=='object')return d;return {...d,...raw,version:5,xp:Number.isFinite(raw.xp)?Math.max(0,raw.xp):0,awarded:Array.isArray(raw.awarded)?[...new Set(raw.awarded)]:[],evidence:Array.isArray(raw.evidence)?[...new Set(raw.evidence)]:[],storyAnswers:raw.storyAnswers&&typeof raw.storyAnswers==='object'?raw.storyAnswers:{},backlogChecked:raw.backlogChecked&&typeof raw.backlogChecked==='object'?raw.backlogChecked:{},backlogAttempted:raw.backlogAttempted&&typeof raw.backlogAttempted==='object'?raw.backlogAttempted:{},backlogStage:Number.isInteger(raw.backlogStage)?Math.max(1,Math.min(4,raw.backlogStage)):1,priorities:raw.priorities&&typeof raw.priorities==='object'?raw.priorities:{},sprints:raw.sprints&&typeof raw.sprints==='object'?raw.sprints:{},quizAnswers:raw.quizAnswers&&typeof raw.quizAnswers==='object'?raw.quizAnswers:{}}}
export function read(){try{return normalize(JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(PREVIOUS_KEY)))}catch{return initial()}}
export let state=read();
export function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(err){console.warn('Local progress unavailable',err)}window.dispatchEvent(new Event('quest:updated'))}
export function update(changes){Object.assign(state,changes);save()}
export function award(id,points){if(state.awarded.includes(id))return false;state.awarded.push(id);state.xp+=points;save();return true}
export function hasAward(id){return state.awarded.includes(id)}
export function reset(){state=initial();save()}
export function sprintState(n){if(!state.sprints[n])state.sprints[n]={tasks:{},review:false,retro:false,improvement:'',daily:false,reviewAnswer:''};return state.sprints[n]}
export function taskStatus(n,id){return sprintState(n).tasks[id]||'todo'}
export function setTask(n,id,status){sprintState(n).tasks[id]=status;save()}
export function sprintFinished(n){const s=sprintState(n);return s.review===true&&s.retro===true}
export function unlocked(page){if(page==='welcome')return true;if(page==='stories')return hasAward('discovery');if(page==='backlog')return state.storyDone;if(page==='final')return [1,2,3,4].every(sprintFinished);const m=/^sprint([1-4])$/.exec(page);if(!m)return false;const n=Number(m[1]);return state.backlogDone&&(n===1||sprintFinished(n-1))}

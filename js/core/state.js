const KEY='smartstudy-agile-quest-v9';
export const initial=()=>({version:9,xp:0,awarded:[],evidence:[],storyAnswers:{},storyDone:false,backlogDone:false,priorities:{},sprints:{},quizAnswers:{},quizDone:false,role:'Discovery'});
function normalize(raw){const d=initial();if(!raw||typeof raw!=='object'||raw.version!==9)return d;return {...d,...raw,version:9,xp:Number.isFinite(raw.xp)?Math.max(0,raw.xp):0,awarded:Array.isArray(raw.awarded)?[...new Set(raw.awarded)]:[],evidence:Array.isArray(raw.evidence)?[...new Set(raw.evidence)]:[],storyAnswers:raw.storyAnswers||{},priorities:raw.priorities||{},sprints:raw.sprints||{},quizAnswers:raw.quizAnswers||{}}}
export function read(){try{return normalize(JSON.parse(localStorage.getItem(KEY)))}catch{return initial()}}
export let state=read();
export function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(err){console.warn('Progress could not be saved',err)}window.dispatchEvent(new Event('quest:updated'))}
export function award(id,points){if(state.awarded.includes(id))return false;state.awarded.push(id);state.xp+=points;save();return true}
export const hasAward=id=>state.awarded.includes(id);
export function reset(){state=initial();save()}
export function sprintState(n){if(!state.sprints[n])state.sprints[n]={selected:[],tasks:{},planned:false,review:false,retro:false,improvement:'',adapted:false,adaptChoice:'',reviewAnswer:'',rejectedPbi:'',blockerSeen:false};return state.sprints[n]}
export function taskStatus(n,id){return sprintState(n).tasks[id]||'todo'}
export function setTask(n,id,status){sprintState(n).tasks[id]=status;save()}
export function sprintFinished(n){const s=sprintState(n);return s.review===true&&s.retro===true&&s.adapted===true}
export function unlocked(page){if(page==='welcome')return true;if(page==='stories')return hasAward('discovery');if(page==='backlog')return state.storyDone;if(page==='final')return [1,2,3,4].every(sprintFinished);const m=/^sprint([1-4])$/.exec(page);if(!m)return false;const n=Number(m[1]);return state.backlogDone&&(n===1||sprintFinished(n-1))}

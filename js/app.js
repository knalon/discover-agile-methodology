import {state} from './core/state.js';
import {resolve,current} from './core/router.js';
import {mountShell} from './components/shell.js';
import * as welcome from './pages/welcome.js';
import * as stories from './pages/stories.js';
import * as backlog from './pages/backlog.js';
import * as sprint from './pages/sprint.js';
import * as final from './pages/final.js';
const pages={welcome,stories,backlog,final};
let lastPage='';
export function render(){const page=resolve();if(page!==current())history.replaceState(null,'',`${location.pathname}${location.search}#${page}`);const n=page.startsWith('sprint')?Number(page.slice(6)):null;const role=page==='welcome'?'Discovery':page==='stories'?'Business Analyst':page==='backlog'?'Product Owner':page==='final'?'Scrum Team':n===1?'Scrum Team':'Developer / Scrum Team';state.role=role;const view=n?sprint:pages[page];mountShell(page,n?view.render(n):view.render());if(n)view.bind(n,render);else view.bind(render);if(page!==lastPage){window.scrollTo(0,0);lastPage=page}}
window.addEventListener('hashchange',render);
window.addEventListener('quest:navigate',render);
render();

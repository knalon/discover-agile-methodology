import {unlocked} from './state.js';
export const routes=[['welcome','00','Meet Maya'],['stories','01','User stories'],['backlog','02','Product Backlog'],['sprint1','03','Sprint 1'],['sprint2','04','Sprint 2'],['sprint3','05','Sprint 3'],['sprint4','06','Sprint 4'],['final','07','Final review']];
export function current(){return (location.hash.slice(1)||'welcome').split('?')[0]}
export function resolve(){const name=current();return routes.some(([id])=>id===name)&&unlocked(name)?name:'welcome'}
export function go(name){location.hash=`#${name}`}

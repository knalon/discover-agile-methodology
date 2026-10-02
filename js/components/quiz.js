import {quiz} from '../data/content.js';
import {state} from '../core/state.js';
import {escapeHTML} from '../core/helpers.js';
export function quizMarkup(){return quiz.map((q,i)=>`<fieldset class="question"><legend><b>${i+1}. ${escapeHTML(q.q)}</b></legend>${q.options.map((option,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}" ${state.quizAnswers[i]===j?'checked':''}> ${escapeHTML(option)}</label>`).join('')}</fieldset>`).join('')}
export function incorrect(){return quiz.map((q,i)=>state.quizAnswers[i]===q.answer?null:i).filter(i=>i!==null)}

export const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const $=(selector,root=document)=>root.querySelector(selector);
export const $$=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
export const badge=(text,type='')=>`<span class="pill ${type}">${escapeHTML(text)}</span>`;
export const notice=(text,type='good')=>`<div class="notice ${type}" role="status">${escapeHTML(text)}</div>`;
export const nextLink=(id,label='Next mission →')=>`<a class="btn primary" href="#${id}">${escapeHTML(label)}</a>`;
export function completed(text,next){return `<section class="completion" aria-label="Mission completed"><div><strong>✓ Mission complete</strong><p>${escapeHTML(text)}</p></div>${next?nextLink(next):''}</section>`}
export function intro(kicker,title,description){return `<section class="hero"><div class="eyebrow">${escapeHTML(kicker)}</div><h1>${escapeHTML(title)}</h1><p>${escapeHTML(description)}</p></section>`}
export function objective(title,description){return `<section class="objective"><strong>🎯 ${escapeHTML(title)}</strong><p>${escapeHTML(description)}</p></section>`}

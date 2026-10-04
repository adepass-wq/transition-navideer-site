const header=document.querySelector('[data-header]');
const toggle=document.querySelector('[data-menu-toggle]');
const menu=document.querySelector('[data-menu]');
const setHeader=()=>header.classList.toggle('scrolled',window.scrollY>24);
setHeader();
window.addEventListener('scroll',setHeader,{passive:true});
toggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
menu?.addEventListener('click',e=>{if(e.target.closest('a')){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
document.querySelector('[data-year]').textContent=new Date().getFullYear();

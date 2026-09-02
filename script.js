const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav'),theme=document.querySelector('.theme');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
if(theme){theme.addEventListener('click',()=>document.body.classList.toggle('light'));}
document.getElementById('year').textContent=new Date().getFullYear();

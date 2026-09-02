const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
const theme = document.querySelector('.theme');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  }),
  { threshold: 0.08 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light');

theme?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(
    'portfolio-theme',
    document.body.classList.contains('light') ? 'light' : 'dark'
  );
});

document.getElementById('year').textContent = new Date().getFullYear();

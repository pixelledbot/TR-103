const menu=document.querySelector('.menu'),links=document.querySelector('.nav-links');
if(menu&&links)menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
const mobile=document.querySelector('.mobile-menu'),sidebar=document.querySelector('.sidebar'),scrim=document.querySelector('.scrim');
function closeSidebar(){sidebar?.classList.remove('open');scrim?.classList.remove('show');mobile?.setAttribute('aria-expanded','false')}
mobile?.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');scrim?.classList.toggle('show',open);mobile.setAttribute('aria-expanded',String(open))});
scrim?.addEventListener('click',closeSidebar);
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
const page=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.side-nav a').forEach(a=>{if(a.getAttribute('href')===page)a.classList.add('active')});

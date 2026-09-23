// mobile menu
const ham = document.getElementById('hamburger');
const menu = document.getElementById('mobilemenu');
ham.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

// back to top
const totop = document.getElementById('totop');
window.addEventListener('scroll',()=>{
  totop.classList.toggle('show', window.scrollY>500);
});
totop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// active nav link via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navA = document.querySelectorAll('.navlinks a');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navA.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id));
    }
  });
},{rootMargin:'-40% 0px -55% 0px'});
sections.forEach(s=>obs.observe(s));

// reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); revealObs.unobserve(e.target); }
  });
},{threshold:0.15});
revealEls.forEach(el=>revealObs.observe(el));

// CV button placeholder notice
document.getElementById('cvBtn').addEventListener('click',(e)=>{
  e.preventDefault();
  alert('Add your CV file link here — replace the href on the "Download CV" buttons with your hosted PDF.');
});

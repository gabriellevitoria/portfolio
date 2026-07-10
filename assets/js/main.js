/* ============================================================ */
/* PORTFÓLIO GABRIELLE — JS UNIFICADO                          */
/* HTML puro, sem build. Compartilhado por todas as páginas.  */
/* ============================================================ */

const REDUCED = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
const FINE = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

/* ---------- Idioma (PT/EN) + persistência ---------- */
(function(){
  const root = document.documentElement;
  const btns = document.querySelectorAll('.lang button');
  const cv = document.querySelector('.nav__cv');
  function setLang(l){
    root.dataset.lang = l; root.lang = l;
    btns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.set === l)));
    // CV bilíngue: aponta o link pro PDF do idioma ativo (PT/EN)
    if(cv){
      const href = l === 'en' ? cv.dataset.cvEn : cv.dataset.cvPt;
      if(href) cv.setAttribute('href', href);
    }
    try{ localStorage.setItem('lang', l); }catch(e){}
  }
  let saved; try{ saved = localStorage.getItem('lang'); }catch(e){}
  if(saved) setLang(saved);
  btns.forEach(b => b.addEventListener('click', () => setLang(b.dataset.set)));
})();

/* ---------- Relógio de São Paulo (index.html) ---------- */
(function(){
  const el = document.getElementById('clock');
  if(!el) return;
  function tick(){
    const t = new Date().toLocaleTimeString('pt-BR', {timeZone:'America/Sao_Paulo', hour:'2-digit', minute:'2-digit'});
    el.textContent = 'SP ' + t;
  }
  tick(); setInterval(tick, 15000);
})();

/* ---------- Ano ---------- */
(function(){
  const el = document.getElementById('year');
  if(el) el.textContent = new Date().getFullYear();
})();

/* ---------- Reveal on scroll (com stagger para index.html) ---------- */
(function(){
  // stagger: aplica delay progressivo aos .reveal dentro de [data-stagger]
  document.querySelectorAll('[data-stagger]').forEach(group=>{
    group.querySelectorAll(':scope > .reveal').forEach((el,i)=>{
      el.style.transitionDelay = (i*90)+'ms';
    });
  });
  const els = document.querySelectorAll('.reveal');
  if(REDUCED || !('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver((ents)=>{
    ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
  els.forEach(e=>io.observe(e));
})();

/* ---------- Marquee: duplica conteúdo pra loop contínuo (index.html) ---------- */
(function(){
  const track = document.querySelector('[data-marquee]');
  if(!track) return;
  track.innerHTML += track.innerHTML; // duplica pro -50% fechar certinho
})();

/* ---------- Cursor custom (só pointer fino) ---------- */
(function(){
  if(!FINE || REDUCED) return;
  const dot = document.querySelector('.cur--dot');
  const ring = document.querySelector('.cur--ring');
  if(!dot || !ring) return;
  let mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my;
  document.addEventListener('mousemove', e=>{
    mx=e.clientX; my=e.clientY;
    dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;
    document.body.classList.add('cur-on');
  });
  (function loop(){
    rx+=(mx-rx)*.18; ry+=(my-ry)*.18;
    ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  const hot='a, button, [data-magnetic], .case__cover, .svc__item, .shot, .step, .stat';
  document.querySelectorAll(hot).forEach(el=>{
    el.addEventListener('mouseenter',()=>document.body.classList.add('cur-hot'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('cur-hot'));
  });
  document.addEventListener('mouseleave',()=>document.body.classList.remove('cur-on'));
})();

/* ---------- Efeito magnético (index.html) ---------- */
(function(){
  if(!FINE || REDUCED) return;
  document.querySelectorAll('[data-magnetic]').forEach(el=>{
    el.style.transition='transform .3s var(--ease)';
    el.addEventListener('mousemove', e=>{
      const r=el.getBoundingClientRect();
      const x=e.clientX-(r.left+r.width/2);
      const y=e.clientY-(r.top+r.height/2);
      el.style.transform=`translate(${x*.3}px,${y*.3}px)`;
    });
    el.addEventListener('mouseleave', ()=>{ el.style.transform=''; });
  });
})();

/* ---------- Menu mobile (index.html) ---------- */
(function(){
  const burger = document.querySelector('.nav__burger');
  if(!burger) return;
  burger.addEventListener('click', ()=>{
    const work = document.getElementById('work');
    if(work) work.scrollIntoView({behavior: REDUCED?'auto':'smooth'});
  });
})();

/* ---------- Voltar ao topo (links #top: marca + rodapé) ---------- */
(function(){
  document.querySelectorAll('a[href="#top"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      window.scrollTo({top:0, behavior: REDUCED?'auto':'smooth'});
      history.replaceState(null, '', location.pathname + location.search);
    });
  });
})();

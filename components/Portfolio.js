'use client';
import { useEffect, useState, memo } from 'react';
import Scene from './Scene';
import Sections from './Sections';

const LINKS = [['home','Home'],['about','About'],['projects','Projects'],['services','Services'],['process','Process'],['certs','Certificates'],['contact','Contact']];
const ROLES = ['Full Stack Developer','React + Next.js Engineer','Node.js API Builder','3D Web Enthusiast'];
const Q = s => <span className="s">{`"${s}"`}</span>;
const Body = memo(Sections);

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [role, setRole] = useState('');

  useEffect(() => { // typing effect
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) { setRole(ROLES[0]); return; }
    let r = 0, c = 0, del = false, id;
    const tick = () => {
      const w = ROLES[r]; setRole(w.slice(0, c)); let d = del ? 40 : 80;
      if (!del && c < w.length) c++; else if (!del) { del = true; d = 1400; } else if (c > 0) c--; else { del = false; r = (r + 1) % ROLES.length; }
      id = setTimeout(tick, d);
    };
    tick(); return () => clearTimeout(id);
  }, []);

  useEffect(() => { // 3D card tilt, counters, active nav link
    const off = [];
    document.querySelectorAll('.card').forEach(c => {
      const mm = e => { const r = c.getBoundingClientRect(); c.style.transform = `rotateY(${((e.clientX - r.left) / r.width - .5) * 14}deg) rotateX(${-((e.clientY - r.top) / r.height - .5) * 14}deg)`; };
      const ml = () => { c.style.transform = ''; };
      c.addEventListener('mousemove', mm); c.addEventListener('mouseleave', ml);
      off.push(() => { c.removeEventListener('mousemove', mm); c.removeEventListener('mouseleave', ml); });
    });
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('[data-n]').forEach(s => { const t = +s.dataset.n, st = Math.max(1, Math.ceil(t / 40)); let v = 0; const id = setInterval(() => { v = Math.min(t, v + st); s.textContent = v; if (v >= t) clearInterval(id); }, 35); });
      io.unobserve(e.target);
    }), { threshold: .3 });
    io.observe(document.getElementById('about'));
    const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section').forEach(s => so.observe(s));
    return () => { off.forEach(f => f()); io.disconnect(); so.disconnect(); };
  }, []);

  return (
    <>
      <nav>
        <a className="logo" href="#home">&lt;Harsh<i>/</i>&gt;</a>
        <button id="mb" aria-label="Open menu" onClick={() => setOpen(!open)}>Menu</button>
        <ul id="nl" className={open ? 'o' : ''} onClick={() => setOpen(false)}>
          {LINKS.map(([id, t]) => <li key={id}><a href={'#' + id} className={active === id ? 'on' : ''}>{t}</a></li>)}
        </ul>
      </nav>
      <main>
        <section id="home" className="hero">
          <div>
            <p className="role">&gt; <b>{role}</b><span>_</span></p>
            <h1>I build complete web apps, from <span>database</span> to pixels.</h1>
            <p>Full stack developer and B.Tech Computer Engineering student. I design APIs, build fast interfaces and ship them to the cloud.</p>
            <div className="row">
              <a className="btn" href="#projects">See my work</a>
              <a className="btn r" href="#contact">Hire me</a>
              {/* <a className="btn g" href="/resume.pdf" download>Resume</a> */}
            </div>
            <div className="term" aria-hidden="true">
              <div><i></i><i></i><i></i></div>
              <pre><span className="k">const</span>{' dev = {\n  name: '}{Q('Harsh Vara')}{',\n  stack: ['}{Q('React')}{', '}{Q('Next.js')}{', '}{Q('Node')}{', '}{Q('MongoDB')}{'],\n  status: '}{Q('open to internships')}{'\n};'}</pre>
            </div>
          </div>
          <Scene />
        </section>
        <Body />
      </main>
      <footer>Built with Next.js, React and Three.js. Replace the sample name, links and projects with yours.</footer>
    </>
  );
}

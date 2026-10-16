'use client';
export default function Sections(){
  const send=e=>{e.preventDefault();const d=new FormData(e.target);
    location.href='mailto:you@example.com?subject='+encodeURIComponent('Portfolio message from '+d.get('n'))+'&body='+encodeURIComponent(d.get('m')+'\n\n'+d.get('e'))};
  return (<>
<section id="about">
 <h2>About me</h2>
 <p className="sub">A developer who loves building complete products and learning something new every week.</p>
 <div className="ab">
  <div className="card pf">
   <div className="av">HV</div>
   <h3>Harsh Vara</h3>
   <p>Full Stack Developer</p>
   <span className="live">Open to internships</span>
   <div className="kv"><span>Location</span><b>Rajkot, India</b><span>Degree</span><b>B.Tech Computer Engineering</b><span>CGPA</span><b>8.56 / 10</b><span>Email</span><b>varaharsh061@gmail.com</b></div>
   {/* <a className="btn" href="/resume.pdf" download>Download resume</a> */}
  </div>
  <div className="abr">
   <p className="lead">Hi, I&apos;m VARA HARSH, a third-year Computer Engineering student who builds web products end to end.</p>
   <p style={{color:'var(--mu)'}}>I start with the data model, build a clean and secure API, then craft a fast interface with React and Next.js. I enjoy 3D on the web, competitive programming and open source, and I deploy early and often.</p>
   <div className="stats"><div><b data-n="15">0</b><span>Projects shipped</span></div><div><b data-n="450">0</b><span>DSA problems</span></div><div><b data-n="8">0</b><span>Hackathons</span></div><div><b data-n="3">0</b><span>Internships</span></div></div>
   <h3>Education</h3>
   <div className="tl"><div><b>B.Tech, Computer Engineering</b><br /><small>2023 to 2027</small><p>Atmiya University. CGPA 8.56 / 10.</p></div><div><b>Class X,</b><br /><small>2022</small><p>80%, with Mathematics and Computer Science.</p></div></div>
   <h3>What I enjoy</h3>
   <span className="chip">Web development</span><span className="chip">3D on the web</span><span className="chip">Open source</span><span className="chip">Problem solving</span><span className="chip">Cloud</span><span className="chip">Teaching juniors</span>
  </div>
 </div>
</section>
<section id="projects">
 <h2>Projects</h2>
 <p className="sub">Real apps with auth, databases and deployment.</p>
 <div className="grid">
  <article className="card proj"><div className="meta"><span>Full stack</span><span>2026</span></div><h3>ShopSpace: 3D e-commerce</h3><p>Store with rotatable 3D product viewer, JWT login, cart and Stripe payments.</p><span className="chip">Next.js</span><span className="chip r">Three.js</span><span className="chip">MongoDB</span><span className="chip r">Stripe</span><div><a href="#">Live demo</a><a href="#">GitHub</a></div></article>
  <article className="card r proj"><div className="meta"><span>Full stack + AI</span><span>2026</span></div><h3>AskDocs: AI document chat</h3><p>Upload a PDF and ask questions. Streaming answers, saved history, usage limits.</p><span className="chip">React</span><span className="chip r">Node.js</span><span className="chip">PostgreSQL</span><span className="chip r">OpenAI API</span><div><a href="#">Live demo</a><a href="#">GitHub</a></div></article>
  <article className="card proj"><div className="meta"><span>Real-time</span><span>2025</span></div><h3>ChatWave</h3><p>Group chat with rooms, typing status, online users and file sharing.</p><span className="chip">Socket.io</span><span className="chip r">Express</span><span className="chip">Redis</span><span className="chip r">React</span><div><a href="#">Live demo</a><a href="#">GitHub</a></div></article>
  <article className="card r proj"><div className="meta"><span>Dashboard</span><span>2025</span></div><h3>CampusHub portal</h3><p>Role-based student portal: attendance, grades, notices and admin panel.</p><span className="chip">Vue.js</span><span className="chip r">Django</span><span className="chip">MySQL</span><div><a href="#">Live demo</a><a href="#">GitHub</a></div></article>
  <article className="card proj"><div className="meta"><span>SaaS</span><span>2025</span></div><h3>TaskFlow</h3><p>Kanban board with drag and drop, teams, comments and email reminders.</p><span className="chip">Next.js</span><span className="chip r">Prisma</span><span className="chip">PostgreSQL</span><div><a href="#">Live demo</a><a href="#">GitHub</a></div></article>
  <article className="card r proj"><div className="meta"><span>Tool</span><span>2024</span></div><h3>Algo Visualizer</h3><p>Animated sorting and pathfinding to learn how algorithms work.</p><span className="chip">JavaScript</span><span className="chip r">Canvas</span><div><a href="#">Live demo</a><a href="#">GitHub</a></div></article>
 </div>
</section>
<section id="services">
 <h2>Services</h2>
 <p className="sub">What I can build for you.</p>
 <div className="grid">
  <div className="card"><h3>Web app development</h3><p>Fast, responsive apps with React and Next.js, built from your design or idea.</p></div>
  <div className="card"><h3>API and backend</h3><p>Secure REST APIs with Node.js, authentication, databases and clean documentation.</p></div>
  <div className="card"><h3>3D web experiences</h3><p>Interactive Three.js scenes and animations that make a site stand out.</p></div>
  <div className="card"><h3>Deployment</h3><p>Docker, CI/CD and cloud hosting so your project runs reliably online.</p></div>
 </div>
</section>
<section id="process">
 <h2>How I work</h2>
 <p className="sub">A simple path from idea to launch.</p>
 <div className="grid">
  <div className="card"><h3>1. Plan</h3><p>Understand the goal, list features and design the database.</p></div>
  <div className="card"><h3>2. Design</h3><p>Sketch clean, responsive screens before writing code.</p></div>
  <div className="card"><h3>3. Build</h3><p>Write readable code, test the API and polish the interface.</p></div>
  <div className="card"><h3>4. Launch</h3><p>Deploy, monitor and improve based on feedback.</p></div>
 </div>
</section>
<section id="certs">
 <h2>Certificates</h2>
 <p className="sub">Courses and certifications I have completed.</p>
 <div className="grid">
  <div className="card"><h3>Meta Front-End Developer</h3><p>Coursera, 2025</p></div>
  <div className="card"><h3>AWS Cloud Practitioner</h3><p>Amazon Web Services, 2026</p></div>
  <div className="card"><h3>MongoDB Associate Developer</h3><p>MongoDB University, 2026</p></div>
  <div className="card"><h3>Data Structures and Algorithms</h3><p>NPTEL, 2024</p></div>
 </div>
</section>
<section id="contact">
 <h2>Let&apos;s build something</h2>
 <p className="sub">Looking for internships and entry-level full stack roles. I reply within a day.</p>
 <form onSubmit={send}>
  <input name="n" placeholder="Your name" required aria-label="Your name" />
  <input name="e" type="email" placeholder="Your email" required aria-label="Your email" />
  <textarea name="m" rows="5" placeholder="Your message" required aria-label="Your message"></textarea>
  <button className="btn r" type="submit">Send message</button>
 </form>
 <div className="row"><a className="btn g" href="https://github.com/">GitHub</a><a className="btn g" href="https://linkedin.com/">LinkedIn</a><a className="btn g" href="mailto:you@example.com">you@example.com</a></div>
</section>
  </>);
}

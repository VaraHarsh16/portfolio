import { projects } from "../data/content.js";
import { ExternalIcon, GithubIcon } from "./Icons.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <h2 className="section-title"> Projects</h2>
        <p className="section-sub">
          Projects I built during my studies and while learning on my own.
        </p>
        <div className="pj-grid">
          {projects.map((p) => (
            <article className="pj-card" key={p.title}>
              
             
              <div className="pj-body">
                <span className="pj-cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p className="pj-desc">{p.description}</p>
                <ul className="pj-tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="pj-actions">
                  <a href={p.live} target="_blank" rel="noreferrer" className="pj-btn solid">
                    <ExternalIcon width={16} height={16} /> Live Demo
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="pj-btn">
                    <GithubIcon width={16} height={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { profile } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title"> About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="stats">
            {profile.stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

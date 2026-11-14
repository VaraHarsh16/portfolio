import { education, certifications } from "../data/content.js";

export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="container">
        <h2 className="section-title"> Education</h2>
        <div className="edu-list">
          {education.map((e) => (
            <div className="edu-item" key={e.title}>
              <span className="edu-period">{e.period}</span>
              <div>
                <h3>{e.title}</h3>
                <p>{e.place}</p>
                <p className="edu-note">{e.note}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="sub-title">Certifications &amp; Achievements</h3>
        <ul className="cert-list">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

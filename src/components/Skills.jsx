import { skills } from "../data/content.js";

// Flatten all categories, then split into two rows
const allSkills = skills.flatMap((g) => g.items);
const rowOne = allSkills.filter((_, i) => i % 2 === 0);
const rowTwo = allSkills.filter((_, i) => i % 2 === 1);

function Row({ items, reverse }) {
  // Items are repeated so the loop looks endless
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <ul className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {loop.map((name, i) => (
          <li className="sk-pill" key={`${name}-${i}`} aria-hidden={i >= items.length}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title"><span>03.</span> Technical Skills</h2>
        <p className="section-sub">
          Languages and tools I have learned and use in my college and personal projects.
        </p>
      </div>
      <div className="marquee-wrap">
        <Row items={rowOne} />
        <Row items={rowTwo} reverse />
      </div>
    </section>
  );
}

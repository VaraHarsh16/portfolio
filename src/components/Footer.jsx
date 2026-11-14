import { navLinks, profile } from "../data/content.js";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Footer() {
  const first = profile.name.split(" ")[0];
  const go = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="#home" className="footer-logo" onClick={go("home")}>
              {first}<span>.</span>
            </a>
            <p>
              Student developer from Gujarat who loves building things for the web.
              Thanks for stopping by, let's build something together!
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li><a href={`mailto:${profile.email}`}><MailIcon width={18} height={18} /> {profile.email}</a></li>
              <li><a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon width={18} height={18} /> GitHub</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon width={18} height={18} /> LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profile.name}. Designed and built by me with React.</p>
          <a href="#home" className="to-top" onClick={go("home")}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { profile } from "../data/content.js";
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

// 📷 Put your photo in the "public" folder and name it profile.jpg
const PHOTO = `${import.meta.env.BASE_URL}profile.jpg`;

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const initials = profile.name.split(" ").map((w) => w[0]).join("");

  const go = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          {/* <span className="badge"><i /> Engineering student · Open to internships</span> */}
          <h1>{profile.name}</h1>
          <h2 className="gradient-text">{profile.role}</h2>
          <p className="lead">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary" onClick={go("projects")}>
              View Projects <ArrowIcon width={18} height={18} />
            </a>
            <a href="#contact" className="btn outline" onClick={go("contact")}>
              Contact Me
            </a>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </div>
        </div>

        <div className="hero-photo">
          {photoFailed ? (
            <span className="initials">{initials}</span>
          ) : (
            <img src={PHOTO} alt={profile.name} onError={() => setPhotoFailed(true)} />
          )}
        </div>
      </div>
    </section>
  );
}

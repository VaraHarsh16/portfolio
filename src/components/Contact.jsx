import { useState } from "react";
import { profile } from "../data/content.js";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's email app with the message pre-filled (no backend needed).
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <h2 className="section-title center"> Get In Touch</h2>
        <p className="contact-lead">
          I'm a student looking for internships, projects to learn from and people to collaborate with.
          Send me a message and I'll get back to you soon.
        </p>

        <div className="contact-grid">
          <form className="card form" onSubmit={submit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={update} required placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={update} required placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={update} required placeholder="How can I help you?" />
            </label>
            <button className="btn primary" type="submit">Send Message</button>
          </form>

          <div className="card info">
            <h3>Contact Info</h3>
            <a href={`mailto:${profile.email}`}><MailIcon /> {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

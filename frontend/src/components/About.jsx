import { profile, education, certifications } from "../data/portfolioData";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="eyebrow">about</div>
      <h2>A bit about me</h2>

      <div className="about-grid">
        <div>
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {education.map((ed, i) => (
            <div key={i} style={{ marginTop: "20px" }}>
              <strong>{ed.degree}</strong>
              <p style={{ color: "var(--text-muted)", margin: "4px 0" }}>
                {ed.school} — {ed.period}
              </p>
              <p style={{ color: "var(--text-muted)" }}>{ed.detail}</p>
            </div>
          ))}

          {certifications && certifications.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <p style={{ fontWeight: 600, marginBottom: "8px" }}>Certifications</p>
              {certifications.map((c, i) => (
                <p key={i} style={{ color: "var(--text-muted)", margin: "4px 0" }}>
                  🏅 <strong>{c.issuer}</strong> — {c.title} ({c.year})
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="meta-card">
          <div className="meta-row">
            <span className="k"><FiMapPin style={{verticalAlign:"middle"}} /> location</span>
            <span>{profile.location}</span>
          </div>
          <div className="meta-row">
            <span className="k"><FiMail style={{verticalAlign:"middle"}} /> email</span>
            <span style={{ fontSize: "0.82rem" }}>
              <a href={`mailto:${profile.email}`} style={{ color: "var(--accent)" }}>
                {profile.email}
              </a>
            </span>
          </div>
          <div className="meta-row">
            <span className="k"><FiPhone style={{verticalAlign:"middle"}} /> phone</span>
            <span>{profile.phone}</span>
          </div>
          <div className="meta-row">
            <span className="k">degree</span>
            <span>CSE – AIML</span>
          </div>
          <div className="meta-row">
            <span className="k">college</span>
            <span>St Mary's, Hyderabad</span>
          </div>
          <div className="meta-row">
            <span className="k">batch</span>
            <span>2023 – 2027</span>
          </div>
          <div className="meta-row">
            <span className="k">status</span>
            <span style={{ color: "var(--accent-green)" }}>open to internships</span>
          </div>
        </div>
      </div>
    </section>
  );
}

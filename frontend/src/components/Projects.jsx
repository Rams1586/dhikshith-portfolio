import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="eyebrow">projects</div>
      <h2>Things I've built</h2>

      <div className="project-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.id}>
            <div className="terminal-bar">
              <span className="tl-dot red" />
              <span className="tl-dot yellow" />
              <span className="tl-dot green" />
              <span className="path">{p.id}.js</span>
            </div>
            <div className="project-card-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
                <span className={`status-pill ${p.status}`}>
                  {p.status.replace("-", " ")}
                </span>
              </div>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub /> code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div style={{
        marginTop: "28px",
        padding: "16px 20px",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        fontFamily: "var(--font-display)",
        fontSize: "0.85rem",
        color: "var(--text-muted)"
      }}>
        <span style={{ color: "var(--accent)" }}>$ </span>
        More projects on{" "}
        <a
          href="https://github.com/Rams1586"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent)" }}
        >
          github.com/Rams1586 ↗
        </a>
      </div>
    </section>
  );
}

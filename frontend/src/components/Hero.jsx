import { useEffect, useState } from "react";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const LINES = [
  "$ whoami",
  `> ${profile.name}`,
  "$ cat objective.txt",
  "> aspiring AIML student | full-stack developer",
  "$ status --check",
  "> open to internship opportunities",
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 400);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section id="home" className="section hero">
      <div className="terminal">
        <div className="terminal-bar">
          <span className="tl-dot red" />
          <span className="tl-dot yellow" />
          <span className="tl-dot green" />
          <span className="path">~/portfolio — zsh</span>
        </div>
        <div className="terminal-body">
          {LINES.slice(0, visibleLines).map((line, i) => (
            <div className="terminal-line" key={i}>
              {line.startsWith("$") ? <span className="prompt">$</span> : null}
              {line.replace(/^\$\s*/, "")}
            </div>
          ))}

          <div className="status-badge">
            <span className="pulse" /> open to internships
          </div>

          <h1 className="hero-name">
            {profile.name}
            <span className="cursor" aria-hidden="true" />
          </h1>
          <div className="hero-role">{profile.role}</div>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects <FiArrowDown />
            </a>
            <a className="btn btn-ghost" href={profile.resumeUrl} download>
              Download résumé <FiDownload />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

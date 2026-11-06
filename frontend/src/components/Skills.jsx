import { skills } from "../data/portfolioData";

const LEVEL_WIDTH = {
  beginner: 32,
  intermediate: 65,
  advanced: 92,
};

const CATEGORY_LABELS = {
  language: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
  ai: "AI / ML",
  creative: "Creative",
};

const CATEGORY_ORDER = ["language", "ai", "frontend", "database", "backend", "tools", "creative"];

export default function Skills() {
  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = skills.filter((s) => s.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  return (
    <section id="skills" className="section">
      <div className="eyebrow">skills</div>
      <h2>What I work with</h2>

      <div className="pkg-block">
        <div className="terminal-bar">
          <span className="tl-dot red" />
          <span className="tl-dot yellow" />
          <span className="tl-dot green" />
          <span className="path">skills.json</span>
        </div>
        <div className="skills-list">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.72rem",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "10px 0 4px",
                  borderBottom: "1px solid var(--border)",
                  marginBottom: "2px",
                }}
              >
                // {CATEGORY_LABELS[cat] || cat}
              </div>
              {items.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${LEVEL_WIDTH[skill.level] || 50}%` }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

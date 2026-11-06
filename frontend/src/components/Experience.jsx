import { experience } from "../data/portfolioData";
import { FiAward, FiCode, FiStar } from "react-icons/fi";

const ICONS = [<FiCode />, <FiAward />, <FiStar />];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="eyebrow">experience & achievements</div>
      <h2>Highlights</h2>

      <div>
        {experience.map((job, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-role">
              <span style={{ marginRight: "8px", verticalAlign: "middle" }}>
                {ICONS[i % ICONS.length]}
              </span>
              {job.role}
            </div>
            <div className="timeline-meta">
              {job.company} · {job.period}
            </div>
            <ul>
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const NAV_ITEMS = [
  { id: "home",       label: "home",       idx: "01" },
  { id: "about",      label: "about",      idx: "02" },
  { id: "skills",     label: "skills",     idx: "03" },
  { id: "experience", label: "experience", idx: "04" },
  { id: "projects",   label: "projects",   idx: "05" },
  { id: "contact",    label: "contact",    idx: "06" },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const socials = [
    { href: profile.social.github, icon: <FiGithub />, label: "GitHub" },
    { href: profile.social.linkedin, icon: <FiLinkedin />, label: "LinkedIn" },
    { href: `mailto:${profile.email}`, icon: <FiMail />, label: "Email" },
  ].filter((s) => s.href);

  return (
    <>
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="sidebar-brand">
          <span className="dot">●</span> ~/dhikshith
        </div>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""}>
              <span className="idx">{item.idx}</span> {item.label}
            </a>
          ))}
        </nav>
        <div className="sidebar-footer">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </aside>

      <div className="mobile-bar">
        <span>~/dhikshith</span>
        <button onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle navigation">
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <nav className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setMobileOpen(false)}>
            {item.idx} {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}

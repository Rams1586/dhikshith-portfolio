import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {profile.name}. Hyderabad, India.</span>
      <span>$ git commit -m "keep building, keep learning"</span>
    </footer>
  );
}

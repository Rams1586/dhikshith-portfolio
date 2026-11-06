import { useState } from "react";
import { profile } from "../data/portfolioData";

// Set this to your deployed backend URL, e.g. via a .env file:
// VITE_API_URL=https://your-backend.onrender.com
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus({ state: "success", message: data.message || "Message sent!" });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Couldn't send your message. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="eyebrow">contact</div>
      <h2>Let's work together</h2>

      <div className="contact-grid">
        <div>
          <p style={{ color: "var(--text-muted)" }}>
            Have an opportunity, project, or just want to say hi? My inbox is open — I read and
            reply to everything.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            Prefer email directly?{" "}
            <a href={`mailto:${profile.email}`} style={{ color: "var(--accent)" }}>
              {profile.email}
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              maxLength={100}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={150}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject (optional)</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              maxLength={150}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              maxLength={5000}
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status.state === "loading"}>
            {status.state === "loading" ? "Sending..." : "Send message"}
          </button>

          {status.state === "success" && <p className="form-status success">{status.message}</p>}
          {status.state === "error" && <p className="form-status error">{status.message}</p>}
        </form>
      </div>
    </section>
  );
}

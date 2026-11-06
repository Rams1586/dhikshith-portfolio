# Dhikshith Ram Poshala — Portfolio Website

**Author:** Dhikshith Ram Poshala — B.E. CSE (AIML), St Mary's Engineering College, Hyderabad (2023–2027)
**LinkedIn:** https://www.linkedin.com/in/poshala-dhikshith-ram-a422492b2 · **GitHub:** https://github.com/Rams1586

A full-stack personal portfolio built with **React 18 + Vite** (frontend) and **Node.js + Express + MongoDB** (backend), with a contact form that saves messages to MongoDB and sends email via Nodemailer. All portfolio content (skills, experience, projects, certifications) is driven by a single data file, `frontend/src/data/portfolioData.js`.

**Tech stack:** React, Vite, Node.js, Express, MongoDB, Nodemailer, HTML/CSS

---

## 🗂 Project Structure

```
portfolio-website/
├── frontend/          React + Vite (UI, SEO meta tags, all content sections)
└── backend/           Express API (contact form → MongoDB + Nodemailer email)
```

---

## ⚡ Run Locally in VS Code

### Prerequisites — install these first

| Tool | Download |
|------|----------|
| Node.js v18+ | https://nodejs.org |
| MongoDB Community | https://www.mongodb.com/try/download/community |
| Git | https://git-scm.com |
| VS Code | https://code.visualstudio.com |

---

### Step 1 — Open the project in VS Code

```bash
code portfolio-website
```

---

### Step 2 — Start the Backend

Open a **new terminal** in VS Code (`Ctrl + `` ` ```) and run:

```bash
cd backend
npm install
cp .env.example .env
```

Now open `.env` and fill in:
- `MONGO_URI` → keep as `mongodb://127.0.0.1:27017/dhikshith-portfolio` if running MongoDB locally
- `EMAIL_USER` → `deekshithramposhala@gmail.com`
- `EMAIL_PASS` → your Gmail App Password (generate one at https://myaccount.google.com/apppasswords)
- `EMAIL_TO` → `deekshithramposhala@gmail.com`

Then start the server:
```bash
npm run dev
# → Server running on http://localhost:5000
```

---

### Step 3 — Start the Frontend

Open a **second terminal** in VS Code and run:

```bash
cd frontend
npm install
cp .env.example .env
# .env already has: VITE_API_URL=http://localhost:5000
npm run dev
# → Site running on http://localhost:5173
```

Open **http://localhost:5173** in your browser — your portfolio is live! ✅

---

## ✏️ Personalise Your Content

All your personal data lives in one file:

```
frontend/src/data/portfolioData.js
```

Edit your name, bio, skills, projects, experience, and social links there — no need to touch any component code.

**To add your résumé PDF:**
- Drop your PDF in `frontend/public/resume.pdf`
- The "Download résumé" button in the hero section already links to it

---

## 🌐 Deploy (Go Live)

| Service | What to deploy |
|---------|---------------|
| **Vercel** (free) | `frontend/` — set `VITE_API_URL` to your backend URL in Vercel env vars |
| **Render** (free) | `backend/` — add all env vars from `.env.example` in Render dashboard |
| **MongoDB Atlas** (free M0 tier) | Use the Atlas connection string as `MONGO_URI` |

---

## 📤 Push to GitHub

```bash
cd portfolio-website
git init
git add .
git commit -m "feat: Dhikshith Ram Poshala portfolio website"
git branch -M main
git remote add origin https://github.com/Rams1586/portfolio-website.git
git push -u origin main
```

> **Note:** `.env` files are excluded by `.gitignore`. Only `.env.example` files (with placeholder values) are committed. Never commit real credentials.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Vanilla CSS |
| Backend | Node.js, Express, express-validator, rate-limit |
| Database | MongoDB (Mongoose) |
| Email | Nodemailer (Gmail) |

---

## 📋 Key Features

- ✅ Interactive resume & portfolio sections (About, Skills, Experience, Projects)
- ✅ Contact form → saves messages to MongoDB + sends email notification + auto-reply
- ✅ SEO-friendly (meta tags, Open Graph, JSON-LD, robots.txt, sitemap.xml)
- ✅ Fully responsive & accessible
- ✅ One data file to edit for all personal content

---

**Dhikshith Ram Poshala** | deekshithramposhala@gmail.com | Hyderabad, India
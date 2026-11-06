require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact");

const app = express();

// --- Database ---
connectDB();

// --- Core middleware ---
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
  })
);

// Basic abuse protection on the contact endpoint (5 submissions / 15 min / IP)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many requests, please try again later." },
});

// --- Routes ---
app.get("/api/health", (req, res) => res.json({ status: "ok", uptime: process.uptime() }));
app.use("/api/contact", contactLimiter, contactRoutes);

// --- 404 + error handling ---
app.use((req, res) => res.status(404).json({ success: false, message: "Route not found" }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

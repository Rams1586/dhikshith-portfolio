const express = require("express");
const { body, validationResult } = require("express-validator");
const Message = require("../models/Message");
const { sendContactNotification } = require("../config/email");

const router = express.Router();

// POST /api/contact - submit the contact form
router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
    body("email").trim().isEmail().withMessage("A valid email is required").normalizeEmail(),
    body("subject").optional({ checkFalsy: true }).trim().isLength({ max: 150 }),
    body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 5000 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    try {
      const saved = await Message.create({ name, email, subject, message });

      // Email sending shouldn't block the success response to the user,
      // but we do want to know server-side if it fails.
      sendContactNotification({ name, email, subject, message }).catch((err) =>
        console.error("Email notification failed:", err.message)
      );

      return res.status(201).json({
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
        data: { id: saved._id },
      });
    } catch (err) {
      console.error("Contact form error:", err.message);
      return res.status(500).json({
        success: false,
        message: "Something went wrong while sending your message. Please try again later.",
      });
    }
  }
);

// GET /api/contact - list messages (simple admin/debug use, no auth — add auth before real use)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch messages" });
  }
});

module.exports = router;

const nodemailer = require("nodemailer");

// Reusable transporter built from env vars. Works with Gmail out of the box;
// for other providers, set EMAIL_SERVICE or swap to host/port/secure config.
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends a notification email to the site owner when someone submits
 * the contact form, and a confirmation email back to the sender.
 */
async function sendContactNotification({ name, email, subject, message }) {
  const notifyOwner = transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    replyTo: email,
    subject: `New portfolio message: ${subject || "No subject"}`,
    text: `You received a new message from your portfolio site.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
    html: `
      <h2>New portfolio contact message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, "<br/>")}</p>
    `,
  });

  const confirmSender = transporter.sendMail({
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thanks for reaching out!",
    text: `Hi ${name},\n\nThanks for your message — I'll get back to you soon.\n\nHere's a copy of what you sent:\n"${message}"\n\nBest,\nYour Name`,
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for your message — I'll get back to you soon.</p>
      <p><em>Your message:</em><br/>"${String(message).replace(/\n/g, "<br/>")}"</p>
      <p>Best,<br/>Your Name</p>
    `,
  });

  return Promise.all([notifyOwner, confirmSender]);
}

module.exports = { sendContactNotification };

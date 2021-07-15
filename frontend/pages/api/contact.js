export default async function (req, res) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `<${req.body.email}>${req.body.name}`,
      to: process.env.EMAIL_ADDRESS,
      subject: `Contact Form: ${req.body.subject}`,
      text: `${req.body.name}
      ${req.body.email}
      ${req.body.message}`,
      html: `
        <div>
          <h1>${req.body.name}</h1>
          <h3>${req.body.email}</h3>
          <p style="white-space: pre-line;">${req.body.message}</p>
        </div>
      `,
    });
    res.status(200).json(req.body);
  } catch (err) {
    console.log("----Transporter Error----  ", err);
    res.status(500).json(req.body);
  }
}

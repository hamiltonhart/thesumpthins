export default async function (req, res) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  console.log("----Transporter", transporter);
  try {
    const info = await transporter.sendMail({
      from: `<${req.body.email}>${req.body.name}`,
      to: process.env.EMAIL_ADDRESS,
      subject: `Contact Form: ${req.body.subject}`,
      text: `${req.body.name}
      ${req.body.email}
      ${req.body.message}`,
      html: `
        <div>
          <h1 style="text-align: center;">${req.body.name}</h1>
          <h3 style="text-align: center;">${req.body.email}</h3>
          <p>${req.body.message}</p>
        </div>
      `,
    });
  } catch (err) {
    console.log("----Transporter Error----", err);
  }

  res.status(200).json(req.body);
}

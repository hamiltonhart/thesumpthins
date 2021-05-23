export default async function (req, res) {
  const nodemailer = require("nodemailer");
  // const { google } = require("googleapis");
  // const OAuth2 = google.auth.OAuth2;

  // const oauth2Client = new OAuth2(
  //   process.env.CLIENT_ID,
  //   process.env.CLIENT_SECRET,
  //   "https://developers.google.com/oauthplayground"
  // );

  // oauth2Client.setCredentials({
  //   refresh_token: process.env.REFRESH_TOKEN,
  // });

  // const accessToken = await new Promise((resolve, reject) => {
  //   oauth2Client.getAccessToken((err, token) => {
  //     if (err) {
  //       reject(`Failed to create access token ${err}`);
  //     }
  //     resolve(token);
  //   });
  // });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_ADDRESS,
      // accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

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
          <h1>${req.body.name}</h1>
          <h3>${req.body.email}</h3>
          <p style="white-space: pre-line;">${req.body.message}</p>
        </div>
      `,
    });
  } catch (err) {
    console.log("----Transporter Error----  ", err);
    failed = true;
  }

  res.status(200).json(req.body);
}

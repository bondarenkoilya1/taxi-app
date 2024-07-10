const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  }

  async sentActivationMail(to, link) {
    await this.transporter.sendMail({
      from: {
        name: "Taxi App",
        address: `${process.env.SMTP_USER}`
      },
      to,
      subject: `Activate your account on ${process.env.API_URL}`,
      text: "",
      html: `
      <div>
        <h1>Follow the link below to activate your account</h1>
        <a href="${link}">Link</a>
      </div>
      `
    });
  }
}

module.exports = new MailService();

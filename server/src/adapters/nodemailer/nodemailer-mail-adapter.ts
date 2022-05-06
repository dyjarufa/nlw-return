import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "61ea74bf394953",
    pass: "41568bd1c7e1cd",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: "Feedback <dev@feedget.com>",
      to: "Jady Rufio <jadyrufa@gmail.com>",
      subject,
      html: body,
    });
  }
}

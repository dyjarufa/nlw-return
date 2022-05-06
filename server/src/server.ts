import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json()); // middleware do express para receber json

// configração default nodemailer para integração com nodejs
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "61ea74bf394953",
    pass: "41568bd1c7e1cd"
  }
});

app.post('/feedbacks', async (req, res) => {
 
  const {type, comment, screenshot } = req.body; // ordem dos parâmetros precisa seguir a ordem que foram enviado pelo insominia

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  await transport.sendMail({
    from: "Feedback <dev@feedget.com>",
    to: "Jady Rufio <jadyrufa@gmail.com>",
    subject: "new feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Feedback type: ${type}</p>`,
      `<p>Comment: ${comment}</p>`,	
      `</div>`
    ].join("\n")
  })

  return res.status(201).json({ data: feedback});
})

app.get('/users', (request, response) => {
  return response.send('Hey there!');
})

app.listen(3333, () => {
  console.log('Server launch 🚀');
})
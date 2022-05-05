import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json()); // middleware do express para receber json

app.post('/feedbacks', async (req, res) => {
  // console.log(req.body)
 
  const {type, comment, screenshot } = req.body; // ordem dos parametros precisa seguir a ordem que foram enviado pelo insominia

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  return res.status(201).json({ data: feedback});
})

app.get('/users', (request, response) => {
  return response.send('Hey there!');
})

app.listen(3333, () => {
  console.log('Server launch 🚀');
})
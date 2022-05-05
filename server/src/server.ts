import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.send('Hey there!');
})

app.listen(3333, () => {
  console.log('Server launch 🚀');
})
## express é o framework para lidar com rotas
------------------------------------------------
<br>

### config inicial básica do express:

```ts
import express from 'express';


app.get('/users', (request, response) => { //criação de rota
  return response.send('Hey there!');
})

const app = express();

app.listen(3333, () => {
  console.log('Server launch 🚀');
})

comando via curl para testar a rota: curl http://localhost:3333/users ou acessar pelo navegador

```


----------------------------------------
<br>

```ts
import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { routes } from "./routes";

const app = express();

app.use(express.json()); // middleware do express para receber json

app.use(routes); // minhas rotas serão chamadas pelo express


// configração default nodemailer para integração com nodejs
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "61ea74bf394953",
    pass: "41568bd1c7e1cd",
  },
});

// app.get("/users", (request, response) => {
//   return response.send("Hey there!");
// });

app.listen(3333, () => {
  console.log("Server launch 🚀");
});


```

------------------------------------
<br>

Server refatorado com a implemtação do arquivo de routes:
```ts
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json()); 

app.use(routes);

app.listen(3333, () => {
  console.log("Server launch 🚀");
});

```

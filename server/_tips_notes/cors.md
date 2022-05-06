## Configurando o CROS na minha aplicação
------------------------------------------------

instalação:
```
❯ npm i cors 
❯ npm i @types/cors -D

```

<br>

- Cors é uma forma de garantir que o back-end não irá ser acessado por front-end indesejado ou fora do domínio

```tsx
import express from "express";
import { routes } from "./routes";
import cors from 'cors';

const app = express();

app.use(express.json()); 
app.use(routes);
app.use(cors()); ///configurado dessa forma permito qualquer front-end

// caso eu estivesse em produção consigo especificar quais endereços são permitidos
app.use(cors({
  origin: 'localhost:3000',
})); 
app.listen(3333, () => {
  console.log("Server launch 🚀");
});


```
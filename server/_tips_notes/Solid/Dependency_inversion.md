## Aplicando Independency inversion
----------------------------------------------------------------
<br>

### criando minha interface (contrato):
```tsx
      export interface FeedbackCreateData {
        type: string;
        comment: string;
        screenshot?: string;
      }

      export interface FeedbacksRepository {
        create: (data: FeedbackCreateData) => Promise<void>; // quando configura uma função assíncrona, precisa retornar uma Promise.
      }

```
<br>

### Implementando minha interface:
```tsx
        import { prisma } from "../../prisma";
        import { FeedbackCreateData, FeedbacksRepository } from "../feedbacs-repository";

        /* Não importa qual tipo de ORM eu escolha usar, basta agora chamar minha interface para implementar o */
        export class PrismaFeedbackRepository implements FeedbacksRepository {
          async create({comment, type, screenshot}: FeedbackCreateData) {
            await prisma.feedback.create({
              data: {
                type,
                comment,
                screenshot,
              },
            });
          }
        }

```
----------------------------------------------------------------

<br>

### Criando funcionalidade  e usando interface

```tsx

// Nesse arquivo possui apenas uma única responsabilidade: criar um feedback.

// Não ha nenuma referência ao prismic pois ele será injetado inversamente conforme o princípio de Inversão de Dependência. 
import { FeedbacksRepository } from "../feedbacs-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {

  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })
  }
}

```

<br>

### Implementando o dependency inversion no  arquivo  routes:

```tsx

import { prisma } from "./prisma";
import express from "express";
import nodemailer from "nodemailer";
import { SubmitFeedbackUseCase } from "./repositories/use-cases/submit-feedback-use-case";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "61ea74bf394953",
    pass: "41568bd1c7e1cd",
  },
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  // crio o meu objeto da classe PrismaFeedbackRepository que já implementa a interface FeedbacksRepository
  const prismaFeedbacksRepository = new PrismaFeedbackRepository(); 

  // a minha classe SubmitFeedbackUseCase espera como parâmetro no seu construtor uma instância de FeedbacksRepository 

  // como eu já havia implementado a interface FeedbacksRepository o    prismaFeedbacksRepository agora é um instância de FeedbacksRepository
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    // aqui ocorre a injeção de dependência
    // O arquivo que precisar usar o SubmitFeedbackUseCase é quem passa as dependências

    //Não é o SubmitFeedbackUseCase que esta importando o PrismaFeedbackRepository internamente, o arquivo esta usando que passando para ele o prisma
    prismaFeedbacksRepository 
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })

  //return res.status(201).json({ data: feedback }); // como escohi que não ira retornar uma reposta, posso apenas retornar o status 201.
  return res.status(201).send();
});


```
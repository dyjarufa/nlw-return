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

  const prismaFeedbacksRepository = new PrismaFeedbackRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })

  /* = await transport.sendMail({
    from: "Feedback <dev@feedget.com>",
    to: "Jady Rufio <jadyrufa@gmail.com>",
    subject: "new feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Feedback type: ${type}</p>`,
      `<p>Comment: ${comment}</p>`,
      `</div>`,
    ].join("\n"),
  }); */

  //return res.status(201).json({ data: feedback }); // como escohi que não ira retornar uma reposta, posso apenas retornar o status 201.
  return res.status(201).send();
});

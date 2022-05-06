### Analise de cada etapa no teste:
```tsx
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// spies => serve para identificar se o método foi chamado ou não.
// não espera identifica se a função foi EXECUTADA porém nos assegura que ela foi chamado no momento.

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
 /*  { create: async () => {} },
  { sendMail: async () => {} }, */
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("submit feedback", () => {
  it("should be able to submit a feedback", async () => {

    await expect(submitFeedback.execute({ // espera que excute(executará a função inteira)
      type: "bug",
      comment: "I have a bug",
      screenshot: "data:image/png;base64",
    })).resolves.not.toThrow(); // resolves(percorre a função inteira) e not. toThrow() não tenha nenhum erro
    
    // agora que estou me certificando que a função esta sendo chamada
    // se eu for no arquivo submit-feedback-use-case e deletar a função sendMail o meu teste irá falhar!
    expect(sendMailSpy).toHaveBeenCalled();

    expect(createFeedbackSpy).toHaveBeenCalled(); // toHaveBeenCalled identifica se o método foi chamado
  }),
  it("should not be able to submit a feedback without a type", async () => {
    await expect(submitFeedback.execute({ 
      type: "",
      comment: "I have a bug",
      screenshot: "data:image/png;base64",
    })).rejects.toThrow();
   });

  it("should not be able to submit a feedback without a comment", async () => {
    await expect(submitFeedback.execute({ 
      type: "BUG",
      comment: "",
      screenshot: "data:image/png;base64",
    })).rejects.toThrow();
   });
  it("should not be able to submit a feedback without a invalid screenshot", async () => {
    await expect(submitFeedback.execute({ 
      type: "BUG",
      comment: "Bug is extremely annoying",
      screenshot: "12345.jpg",
    })).rejects.toThrow();
   });
});

```
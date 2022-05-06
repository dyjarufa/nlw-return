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

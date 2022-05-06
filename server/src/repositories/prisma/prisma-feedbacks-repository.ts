import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacs-repository";

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

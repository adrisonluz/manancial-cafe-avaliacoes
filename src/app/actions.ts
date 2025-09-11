"use server";

import { ratingSchema } from "@/app/schema";
import { analyzeFeedbackSentiment } from "@/ai/flows/analyze-feedback-sentiment";
import { suggestRatingActions } from "@/ai/flows/suggest-rating-actions";

export async function submitFeedback(data: unknown) {
  const parsedData = ratingSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      errors: parsedData.error.flatten().fieldErrors,
    };
  }

  try {
    // We don't need to wait for these to complete to send a response to the user.
    suggestRatingActions(parsedData.data);
    if (parsedData.data.comment) {
      analyzeFeedbackSentiment({ comment: parsedData.data.comment });
    }
  } catch (error) {
    console.error("AI action failed:", error);
    // Don't block user feedback submission even if AI fails
  }

  return { success: true };
}

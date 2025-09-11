"use server";

import { ratingSchema } from "@/app/schema";
import { analyzeFeedbackSentiment } from "@/ai/flows/analyze-feedback-sentiment";
import { suggestRatingActions } from "@/ai/flows/suggest-rating-actions";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";

export async function submitFeedback(data: unknown) {
  const parsedData = ratingSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      errors: parsedData.error.flatten().fieldErrors,
    };
  }

  try {
    // Save data to Firebase Realtime Database
    const ratingsRef = ref(db, 'ratings');
    await push(ratingsRef, {
      ...parsedData.data,
      createdAt: new Date().toISOString(),
    });

    // We don't need to wait for these to complete to send a response to the user.
    suggestRatingActions(parsedData.data);
    if (parsedData.data.comment) {
      analyzeFeedbackSentiment({ comment: parsedData.data.comment });
    }

    return { success: true };
  } catch (error) {
    console.error("Firebase or AI action failed:", error);
    
    // Return a generic error to the user
    return {
      success: false,
      errors: { _form: ["Ocorreu um erro ao enviar sua avaliação. Tente novamente mais tarde."] },
    };
  }
}

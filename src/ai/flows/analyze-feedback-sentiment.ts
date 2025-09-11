'use server';

/**
 * @fileOverview A sentiment analysis AI agent for user feedback.
 *
 * - analyzeFeedbackSentiment - A function that analyzes the sentiment of user feedback.
 * - AnalyzeFeedbackSentimentInput - The input type for the analyzeFeedbackSentiment function.
 * - AnalyzeFeedbackSentimentOutput - The return type for the analyzeFeedbackSentiment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeFeedbackSentimentInputSchema = z.object({
  comment: z.string().describe('The user feedback comment to analyze.'),
});
export type AnalyzeFeedbackSentimentInput = z.infer<
  typeof AnalyzeFeedbackSentimentInputSchema
>;

const AnalyzeFeedbackSentimentOutputSchema = z.object({
  sentiment: z
    .string()
    .describe(
      'The overall sentiment of the feedback (e.g., positive, negative, neutral).' + //
        'Also include particular areas of satisfaction and dissatisfaction and how to make improvements.'
    ),
});
export type AnalyzeFeedbackSentimentOutput = z.infer<
  typeof AnalyzeFeedbackSentimentOutputSchema
>;

export async function analyzeFeedbackSentiment(
  input: AnalyzeFeedbackSentimentInput
): Promise<AnalyzeFeedbackSentimentOutput> {
  return analyzeFeedbackSentimentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeFeedbackSentimentPrompt',
  input: {schema: AnalyzeFeedbackSentimentInputSchema},
  output: {schema: AnalyzeFeedbackSentimentOutputSchema},
  prompt: `Analyze the sentiment of the following user feedback comment and provide a summary of the overall sentiment, including particular areas of satisfaction and dissatisfaction, and how to make improvements:

Comment: {{{comment}}}`,
});

const analyzeFeedbackSentimentFlow = ai.defineFlow(
  {
    name: 'analyzeFeedbackSentimentFlow',
    inputSchema: AnalyzeFeedbackSentimentInputSchema,
    outputSchema: AnalyzeFeedbackSentimentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

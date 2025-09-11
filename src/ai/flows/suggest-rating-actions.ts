'use server';

/**
 * @fileOverview Uses generative AI to suggest possible actions based on the contents of the rating.
 *
 * - suggestRatingActions - A function that handles the suggestion of rating actions.
 * - SuggestRatingActionsInput - The input type for the suggestRatingActions function.
 * - SuggestRatingActionsOutput - The return type for the suggestRatingActions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRatingActionsInputSchema = z.object({
  comment: z.string().describe('The comment provided in the rating.'),
  atendimento: z.number().min(1).max(5).describe('Rating for atendimento (service).'),
  qualidadeProdutos: z.number().min(1).max(5).describe('Rating for qualidade dos produtos (product quality).'),
  precosProdutos: z.number().min(1).max(5).describe('Rating for precos dos produtos (product prices).'),
  tempoPreparo: z.number().min(1).max(5).describe('Rating for tempo de preparo (preparation time).'),
  ambiente: z.number().min(1).max(5).describe('Rating for ambiente (ambiance).'),
});
export type SuggestRatingActionsInput = z.infer<typeof SuggestRatingActionsInputSchema>;

const SuggestRatingActionsOutputSchema = z.object({
  suggestedActions: z.string().describe('Suggested actions based on the rating and comment.'),
});
export type SuggestRatingActionsOutput = z.infer<typeof SuggestRatingActionsOutputSchema>;

export async function suggestRatingActions(input: SuggestRatingActionsInput): Promise<SuggestRatingActionsOutput> {
  return suggestRatingActionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRatingActionsPrompt',
  input: {schema: SuggestRatingActionsInputSchema},
  output: {schema: SuggestRatingActionsOutputSchema},
  prompt: `You are a business consultant specializing in customer service improvement.

  Based on the customer's rating and comment, suggest specific actions the business can take to improve their service. Be direct and concise.

  Rating details:
  - Atendimento: {{{atendimento}}}
  - Qualidade dos produtos: {{{qualidadeProdutos}}}
  - Preços dos produtos: {{{precosProdutos}}}
  - Tempo de preparo: {{{tempoPreparo}}}
  - Ambiente: {{{ambiente}}}

  Comment: {{{comment}}}

  Suggested Actions:`,
});

const suggestRatingActionsFlow = ai.defineFlow(
  {
    name: 'suggestRatingActionsFlow',
    inputSchema: SuggestRatingActionsInputSchema,
    outputSchema: SuggestRatingActionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

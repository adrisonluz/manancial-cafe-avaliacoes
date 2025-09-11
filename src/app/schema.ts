import { z } from "zod";

export const ratingSchema = z.object({
  atendimento: z.number({ required_error: "Avaliação obrigatória." }).min(1, "Avaliação de 1 a 5.").max(5, "Avaliação de 1 a 5."),
  qualidadeProdutos: z.number({ required_error: "Avaliação obrigatória." }).min(1, "Avaliação de 1 a 5.").max(5, "Avaliação de 1 a 5."),
  precosProdutos: z.number({ required_error: "Avaliação obrigatória." }).min(1, "Avaliação de 1 a 5.").max(5, "Avaliação de 1 a 5."),
  tempoPreparo: z.number({ required_error: "Avaliação obrigatória." }).min(1, "Avaliação de 1 a 5.").max(5, "Avaliação de 1 a 5."),
  ambiente: z.number({ required_error: "Avaliação obrigatória." }).min(1, "Avaliação de 1 a 5.").max(5, "Avaliação de 1 a 5."),
  comment: z.string().optional(),
  name: z.string().optional(),
  contact: z.string().optional(),
});

export type RatingSchema = z.infer<typeof ratingSchema>;

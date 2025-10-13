"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { RatingSchema } from "@/app/schema";
import { ratingSchema } from "@/app/schema";
import { submitFeedback } from "@/app/actions";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import StarRating from "@/components/star-rating";
import Logo from "./logo";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface RatingFormProps {
  onSuccess: () => void;
}

const ratingCategories = [
  { id: "atendimento", label: "Atendimento" },
  { id: "qualidadeProdutos", label: "Qualidade dos produtos" },
  { id: "precosProdutos", label: "Preços dos produtos" },
  { id: "tempoPreparo", label: "Tempo de preparo" },
  { id: "ambiente", label: "Ambiente" },
] as const;

export default function RatingForm({ onSuccess }: RatingFormProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<RatingSchema>({
    resolver: zodResolver(ratingSchema),
    defaultValues: {
      comment: "",
      name: "",
      contact: "",
    },
  });

  const onSubmit = (data: RatingSchema) => {
    startTransition(async () => {
      const result = await submitFeedback(data);
      if (result.success) {
        onSuccess();
      } else {
        toast({
          variant: "destructive",
          title: "Erro ao enviar avaliação",
          description: "Por favor, verifique os campos e tente novamente.",
        });
      }
    });
  };

  return (
    <Card className="w-full animate-in fade-in duration-500">
      <CardHeader className="items-center text-center">
        <Logo className="h-200 w-auto" />
        <CardTitle className="font-headline text-2xl">
          Deixe sua avaliação
        </CardTitle>
        <CardDescription>
          Sua opinião nos ajuda a melhorar.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {ratingCategories.map((category) => (
                <FormField
                  key={category.id}
                  control={form.control}
                  name={category.id}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col items-center justify-between sm:flex-row">
                        <FormLabel className="mb-2 text-base sm:mb-0">
                          {category.label}
                        </FormLabel>
                        <FormControl>
                          <StarRating
                            rating={field.value}
                            onRatingChange={field.onChange}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="text-center sm:text-right" />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comentário</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Deixe aqui seus elogios, críticas ou sugestões..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contato (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu e-mail ou telefone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Enviar Avaliação
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

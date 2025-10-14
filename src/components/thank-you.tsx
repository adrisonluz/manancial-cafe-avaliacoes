"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Logo from "./logo";

export default function ThankYou() {
  return (
    <Card className="w-full animate-in fade-in duration-500">
      <CardHeader className="items-center text-center">
        <Logo className="h-auto w-250" />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-4 text-center">
        <CheckCircle2 className="h-16 w-16 text-accent" />
        <CardTitle className="font-headline text-2xl">
          Obrigado pela sua avaliação!
        </CardTitle>
        <CardDescription>
          Sua opinião é muito importante para nós e nos ajudará a melhorar
          nossos serviços.
        </CardDescription>
      </CardContent>
    </Card>
  );
}

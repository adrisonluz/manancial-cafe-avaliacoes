"use client";

import { useState } from "react";
import RatingForm from "@/components/rating-form";
import ThankYou from "@/components/thank-you";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSuccess = () => {
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md">
        {submitted ? <ThankYou /> : <RatingForm onSuccess={handleSuccess} />}
      </div>
    </main>
  );
}

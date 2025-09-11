"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  totalStars?: number;
}

const StarRating = ({
  rating,
  onRatingChange,
  totalStars = 5,
}: StarRatingProps) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            type="button"
            key={starValue}
            className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125 focus:scale-125 focus:outline-none"
            onClick={() => onRatingChange(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            aria-label={`${starValue} de ${totalStars} estrelas`}
          >
            <Star
              className={cn(
                "size-8 text-muted",
                starValue <= (hover || rating) ? "text-accent fill-accent" : "text-muted-foreground/50"
              )}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;

import { Crown } from "lucide-react";
import { cn } from "../../lib/utils";

export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const text =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
        ? "text-lg"
        : "text-xl sm:text-2xl";
  const crown =
    size === "lg" ? "h-6 w-6 sm:h-7 sm:w-7" : size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <span className={cn("inline-flex flex-col items-center leading-none", className)}>
      <Crown className={cn("text-qj-gold", crown)} strokeWidth={1.75} />
      <span
        className={cn(
          "font-brand text-gold-gradient font-bold tracking-[0.14em]",
          text,
        )}
      >
        QUEEN JUICE
      </span>
    </span>
  );
}

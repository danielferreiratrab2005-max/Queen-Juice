import { Crown } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CrownMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-qj-gold/60" />
      <Crown className="h-5 w-5 text-qj-gold" strokeWidth={1.75} />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-qj-gold/60" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <CrownMark className="mb-5" />
      {eyebrow && (
        <p className="font-brand mb-3 text-xs tracking-[0.35em] text-qj-gold uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-qj-cream sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-qj-muted">{subtitle}</p>
      )}
    </div>
  );
}

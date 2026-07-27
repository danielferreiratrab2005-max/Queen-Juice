import { Droplets, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./common";

const pillars = [
  {
    icon: Droplets,
    title: "100% integral",
    text: "Sucos feitos com fruta de verdade, sem adição de conservantes. Só o sabor natural.",
  },
  {
    icon: Sparkles,
    title: "Do seu jeito",
    text: "Escolha com açúcar demerara ou sem açúcar. Cada garrafa é preparada pensando em você.",
  },
  {
    icon: HeartHandshake,
    title: "Feito com cuidado",
    text: "Uma marca que está começando com carinho e vontade de entregar frescor em cada gole.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-qj-black-2 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="A marca"
          title={
            <>
              Realeza em forma de <span className="text-gold-gradient">suco</span>
            </>
          }
          subtitle="A Queen Juice nasceu para levar o frescor da fruta com a elegância de uma coroa. Sucos naturais de manga e maracujá, preparados na hora e servidos com orgulho."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-qj-gold/15 bg-qj-black/60 p-6 transition-colors hover:border-qj-gold/40">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-qj-gold/10 text-qj-gold transition-colors group-hover:bg-qj-gold/20">
                  <p.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl text-qj-cream">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-qj-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

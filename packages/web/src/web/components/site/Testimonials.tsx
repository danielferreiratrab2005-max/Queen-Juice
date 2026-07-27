import { Heart, Quote } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Reveal, SectionHeading } from "./common";
import { INSTAGRAM_URL } from "../../lib/whatsapp";

// Reações reais do Instagram (@queenjuice.sn). Fáceis de atualizar conforme chegam novas.
const items = [
  {
    handle: "@leandrocamposflu",
    text: "Vai bombar!",
    hearts: false,
  },
  {
    handle: "@julianaaafernandes",
    text: "Nossa primeira cliente — saiu o primeiro pedido! Obrigado.",
    hearts: false,
  },
  {
    handle: "@celmamcmarcon",
    text: "Só amor pela Queen Juice.",
    hearts: true,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Avaliações"
          title={
            <>
              Direto do <span className="text-gold-gradient">Instagram</span>
            </>
          }
          subtitle="As primeiras reações de quem já conhece a Queen Juice. Estamos só começando — venha fazer parte!"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.handle} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-qj-gold/15 bg-qj-black-2 p-6">
                <Quote className="h-7 w-7 text-qj-gold/50" />
                <blockquote className="mt-3 flex-1 text-base leading-relaxed text-qj-cream">
                  “{t.text}”
                </blockquote>
                <div className="mt-4 flex items-center justify-between">
                  <figcaption className="flex items-center gap-2 text-sm font-semibold text-qj-gold">
                    <FaInstagram className="h-4 w-4" />
                    {t.handle}
                  </figcaption>
                  {t.hearts && (
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Heart
                          key={s}
                          className="h-4 w-4 fill-qj-magenta text-qj-magenta"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-qj-gold/30 px-6 py-3 text-sm font-semibold text-qj-cream transition-colors hover:border-qj-gold hover:text-qj-gold"
          >
            <FaInstagram className="h-5 w-5" />
            Ver no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

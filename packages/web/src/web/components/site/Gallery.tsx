import { FaInstagram } from "react-icons/fa";
import { Reveal, SectionHeading } from "./common";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../../lib/whatsapp";

const photos = [
  { src: "/images/bottles-flowers.png", alt: "Sucos Queen Juice com arranjo de flores", span: "row-span-2" },
  { src: "/images/menu-poster.png", alt: "Cardápio Queen Juice", span: "" },
  { src: "/images/bottle-ice.png", alt: "Garrafa Queen Juice sobre gelo", span: "" },
  { src: "/images/bottles-duo.png", alt: "Garrafas Queen Juice edição selecionada", span: "sm:col-span-2" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative bg-qj-black-2 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title={
            <>
              Direto do nosso <span className="text-gold-gradient">feed</span>
            </>
          }
          subtitle="Um gostinho do que preparamos. Acompanhe as novidades no Instagram."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 0.08}
              className={`overflow-hidden rounded-2xl border border-qj-gold/15 ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
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
            Siga {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}

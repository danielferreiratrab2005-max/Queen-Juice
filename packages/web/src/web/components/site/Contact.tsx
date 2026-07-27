import { Clock, Truck } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Reveal, SectionHeading } from "./common";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "../../lib/whatsapp";

export function Contact() {
  return (
    <section id="contato" className="relative bg-qj-black-2 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contato & Pedidos"
          title={
            <>
              Peça já o <span className="text-gold-gradient">seu</span>
            </>
          }
          subtitle="Fazemos entrega e o pedido é feito direto pelo WhatsApp. Em breve teremos delivery pelo próprio site."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          <Reveal>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-qj-gold/15 bg-qj-black/60 p-6 transition-colors hover:border-[#25D366]/50"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                <FaWhatsapp className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl text-qj-cream">WhatsApp</h3>
              <p className="mt-1 text-sm text-qj-muted">
                Faça seu pedido e tire dúvidas
              </p>
              <p className="mt-3 text-base font-semibold text-qj-gold">
                {WHATSAPP_DISPLAY}
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-qj-gold/15 bg-qj-black/60 p-6 transition-colors hover:border-qj-magenta/50"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-qj-magenta/15 text-qj-magenta">
                <FaInstagram className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl text-qj-cream">Instagram</h3>
              <p className="mt-1 text-sm text-qj-muted">
                Acompanhe novidades e sabores
              </p>
              <p className="mt-3 text-base font-semibold text-qj-gold">
                {INSTAGRAM_HANDLE}
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col rounded-2xl border border-qj-gold/15 bg-qj-black/60 p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-qj-gold/10 text-qj-gold">
                <Truck className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-xl text-qj-cream">Entrega</h3>
              <p className="mt-1 text-sm leading-relaxed text-qj-muted">
                Fazemos entrega na região. Combine o endereço e a taxa pelo
                WhatsApp ao finalizar o pedido.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col rounded-2xl border border-qj-gold/15 bg-qj-black/60 p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-qj-gold/10 text-qj-gold">
                <Clock className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-xl text-qj-cream">
                Atendimento
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-qj-muted">
                Respondemos os pedidos pelo WhatsApp todos os dias. Faça o seu que
                a gente prepara na hora.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Reveal, SectionHeading } from "./common";
import { FlavorCard } from "./FlavorCard";
import { flavors } from "../../lib/menu";

export function Menu() {
  return (
    <section id="cardapio" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cardápio"
          title={
            <>
              Escolha o seu <span className="text-gold-gradient">sabor</span>
            </>
          }
          subtitle="Monte seu pedido: escolha o tamanho, com ou sem açúcar, e adicione ao carrinho. Você finaliza direto no WhatsApp."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {flavors.map((flavor, i) => (
            <Reveal key={flavor.id} delay={i * 0.1}>
              <FlavorCard flavor={flavor} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-qj-muted">
          Sucos 100% integrais, sem adição de conservantes · vendidos com ou sem
          açúcar demerara.
        </p>
      </div>
    </section>
  );
}

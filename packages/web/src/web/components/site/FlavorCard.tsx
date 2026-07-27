import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "./cart";
import { formatBRL, type Flavor, type SizeId } from "../../lib/menu";

export function FlavorCard({ flavor }: { flavor: Flavor }) {
  const { add } = useCart();
  const [sizeId, setSizeId] = useState<SizeId>(flavor.sizes[1].id);
  const [withSugar, setWithSugar] = useState(true);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const size = flavor.sizes.find((s) => s.id === sizeId)!;

  function handleAdd() {
    add({
      flavorId: flavor.id,
      flavorName: flavor.name,
      sizeId: size.id,
      sizeLabel: size.label,
      price: size.price,
      withSugar,
      qty,
    });
    setAdded(true);
    setQty(1);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-qj-gold/15 bg-qj-black/60 transition-all duration-300 hover:border-qj-gold/40 hover:royal-glow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={flavor.image}
          alt={flavor.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-qj-black via-qj-black/10 to-transparent" />
        <span
          className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-[#1a1206]"
          style={{ backgroundColor: flavor.accent }}
        >
          {flavor.name.replace("Suco de ", "")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-qj-cream">{flavor.name}</h3>
        <p className="mt-1 text-sm text-qj-gold">{flavor.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-qj-muted">
          {flavor.description}
        </p>

        {/* Tamanhos */}
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium tracking-wide text-qj-muted uppercase">
            Tamanho
          </p>
          <div className="grid grid-cols-3 gap-2">
            {flavor.sizes.map((s) => {
              const active = s.id === sizeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSizeId(s.id)}
                  className={`rounded-xl border px-2 py-2.5 text-center transition-colors ${
                    active
                      ? "border-qj-gold bg-qj-gold/15"
                      : "border-qj-gold/15 hover:border-qj-gold/40"
                  }`}
                >
                  <span className="block text-sm font-semibold text-qj-cream">
                    {s.label}
                  </span>
                  <span className="block text-xs text-qj-gold">
                    {formatBRL(s.price)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Açúcar */}
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium tracking-wide text-qj-muted uppercase">
            Açúcar
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setWithSugar(true)}
              className={`rounded-xl border px-2 py-2.5 text-sm font-medium transition-colors ${
                withSugar
                  ? "border-qj-gold bg-qj-gold/15 text-qj-cream"
                  : "border-qj-gold/15 text-qj-muted hover:border-qj-gold/40"
              }`}
            >
              Com açúcar
            </button>
            <button
              type="button"
              onClick={() => setWithSugar(false)}
              className={`rounded-xl border px-2 py-2.5 text-sm font-medium transition-colors ${
                !withSugar
                  ? "border-qj-gold bg-qj-gold/15 text-qj-cream"
                  : "border-qj-gold/15 text-qj-muted hover:border-qj-gold/40"
              }`}
            >
              Sem açúcar
            </button>
          </div>
        </div>

        {/* Quantidade + adicionar */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-qj-gold/25 p-1">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-qj-cream transition-colors hover:bg-qj-gold/15"
              aria-label="Diminuir quantidade"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-6 text-center text-sm font-semibold text-qj-cream">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-qj-cream transition-colors hover:bg-qj-gold/15"
              aria-label="Aumentar quantidade"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all ${
              added
                ? "bg-[#25D366] text-white"
                : "bg-gold-gradient text-[#1a1206] hover:scale-[1.02]"
            }`}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Adicionado
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" /> Adicionar ·{" "}
                {formatBRL(size.price * qty)}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

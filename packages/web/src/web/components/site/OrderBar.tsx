import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "./cart";
import { formatBRL } from "../../lib/menu";
import { buildOrderMessage, waLink } from "../../lib/whatsapp";

export function OrderBar() {
  const { items, count, total, increment, decrement, remove, clear } = useCart();
  const [open, setOpen] = useState(false);

  const hasItems = count > 0;

  function finalize() {
    const url = waLink(buildOrderMessage(items, total));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      {/* Barra fixa inferior */}
      <AnimatePresence>
        {hasItems && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-qj-gold/20 bg-qj-black/95 backdrop-blur-md"
          >
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-qj-gold/15 text-qj-gold">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-qj-magenta px-1 text-[11px] font-bold text-white">
                    {count}
                  </span>
                </span>
                <div className="leading-tight">
                  <p className="text-xs text-qj-muted">Seu pedido</p>
                  <p className="font-display text-lg text-qj-cream">
                    {formatBRL(total)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-[#1a1206] transition-transform hover:scale-[1.03]"
              >
                Ver pedido
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Drawer do pedido */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed inset-x-0 bottom-0 z-[70] max-h-[85vh] overflow-hidden rounded-t-3xl border-t border-qj-gold/25 bg-qj-black-2 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-h-[80vh] sm:w-[420px] sm:rounded-3xl sm:border"
            >
              <div className="flex items-center justify-between border-b border-qj-gold/15 px-5 py-4">
                <h3 className="font-display text-xl text-qj-cream">Seu pedido</h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-qj-muted transition-colors hover:bg-qj-gold/10 hover:text-qj-cream"
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="max-h-[45vh] overflow-y-auto px-5 py-4">
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.key}
                      className="flex items-center gap-3 rounded-2xl border border-qj-gold/10 bg-qj-black/50 p-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-qj-cream">
                          {item.flavorName}
                        </p>
                        <p className="text-xs text-qj-muted">
                          {item.sizeLabel} ·{" "}
                          {item.withSugar ? "com açúcar" : "sem açúcar"}
                        </p>
                        <p className="mt-0.5 text-sm text-qj-gold">
                          {formatBRL(item.price * item.qty)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full border border-qj-gold/20 p-1">
                        <button
                          type="button"
                          onClick={() => decrement(item.key)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-qj-cream transition-colors hover:bg-qj-gold/15"
                          aria-label="Diminuir"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm font-semibold text-qj-cream">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => increment(item.key)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-qj-cream transition-colors hover:bg-qj-gold/15"
                          aria-label="Aumentar"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(item.key)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-qj-muted transition-colors hover:bg-red-500/15 hover:text-red-400"
                        aria-label="Remover"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={clear}
                  className="mt-4 text-xs text-qj-muted underline underline-offset-4 transition-colors hover:text-qj-cream"
                >
                  Limpar pedido
                </button>
              </div>

              <div className="border-t border-qj-gold/15 px-5 py-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-qj-muted">Total</span>
                  <span className="font-display text-2xl text-qj-cream">
                    {formatBRL(total)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={finalize}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Finalizar no WhatsApp
                </button>
                <p className="mt-2 text-center text-xs text-qj-muted">
                  Você confirma o endereço e a entrega na conversa.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

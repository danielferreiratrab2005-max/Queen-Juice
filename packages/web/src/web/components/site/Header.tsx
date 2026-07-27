import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Wordmark } from "./Wordmark";
import { WHATSAPP_NUMBER } from "../../lib/whatsapp";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-qj-gold/15 bg-qj-black/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" aria-label="Queen Juice — início">
          <Wordmark size="sm" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-qj-muted transition-colors hover:text-qj-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-[#1a1206] transition-transform hover:scale-[1.03] md:inline-flex"
        >
          <FaWhatsapp className="h-4 w-4" />
          Pedir agora
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-qj-gold/25 text-qj-gold md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-qj-gold/15 bg-qj-black/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-qj-gold/10 py-3 text-base font-medium text-qj-cream last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-[#1a1206]"
            >
              <FaWhatsapp className="h-4 w-4" />
              Pedir no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

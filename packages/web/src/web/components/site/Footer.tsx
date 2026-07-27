import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Wordmark } from "./Wordmark";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
} from "../../lib/whatsapp";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-qj-gold/15 bg-qj-black py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <Wordmark size="md" />
            <p className="mt-3 max-w-xs text-sm text-qj-muted">
              Sucos 100% naturais de manga e maracujá. Frescor e sabor em cada
              gole.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-qj-muted transition-colors hover:text-qj-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-qj-gold/25 text-qj-cream transition-colors hover:border-[#25D366] hover:text-[#25D366]"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={INSTAGRAM_HANDLE}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-qj-gold/25 text-qj-cream transition-colors hover:border-qj-magenta hover:text-qj-magenta"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-qj-gold/10 pt-6 text-center text-xs text-qj-muted">
          © {new Date().getFullYear()} Queen Juice · Sucos Naturais. Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
}

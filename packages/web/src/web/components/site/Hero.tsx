import { Crown, Leaf, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../../lib/whatsapp";

const badges = [
  { icon: Leaf, label: "100% integral" },
  { icon: Sparkles, label: "Sem conservantes" },
  { icon: Crown, label: "Com ou sem açúcar" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-radial noise-grain relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-6">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-brand mb-4 inline-flex items-center gap-2 rounded-full border border-qj-gold/25 px-4 py-1.5 text-[11px] tracking-[0.3em] text-qj-gold uppercase"
          >
            <Crown className="h-3.5 w-3.5" /> Sucos Naturais
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-4xl leading-[1.05] text-qj-cream sm:text-5xl md:text-6xl"
          >
            Frescor e sabor
            <br />
            <span className="text-gold-gradient">em cada gole</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-qj-muted lg:mx-0 sm:text-lg"
          >
            Sucos 100% naturais de manga e maracujá, feitos com fruta de verdade.
            Com ou sem açúcar demerara. Experimente o seu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-base font-semibold text-[#1a1206] transition-transform hover:scale-[1.03]"
            >
              Ver cardápio
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-qj-gold/35 px-7 py-3.5 text-base font-semibold text-qj-cream transition-colors hover:border-qj-gold hover:text-qj-gold"
            >
              <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
              Pedir no WhatsApp
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start"
          >
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 text-sm text-qj-muted"
              >
                <b.icon className="h-4 w-4 text-qj-gold" />
                {b.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-qj-purple/25 blur-3xl" />
          <div className="royal-glow relative overflow-hidden rounded-[1.75rem] border border-qj-gold/20">
            <img
              src="/images/bottle-ice.png"
              alt="Garrafa de suco Queen Juice sobre gelo"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-qj-black/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-2xl border border-qj-gold/25 bg-qj-black/85 px-4 py-3 backdrop-blur-sm">
            <p className="font-brand text-xs tracking-[0.2em] text-qj-gold uppercase">
              Edição selecionada
            </p>
            <p className="text-sm text-qj-cream">Manga · Maracujá</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { AnimatePresence, motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "./cart";
import { WHATSAPP_NUMBER } from "../../lib/whatsapp";

export function WhatsAppFloat() {
  const { count } = useCart();

  return (
    <AnimatePresence>
      {count === 0 && (
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir no WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.08 }}
          className="fixed right-4 bottom-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 sm:right-6 sm:bottom-6"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
          <FaWhatsapp className="relative h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

import type { CartItem } from "../components/site/cart";
import { formatBRL } from "./menu";

// Número no formato internacional (somente dígitos). 55 = Brasil, 21 = DDD RJ.
export const WHATSAPP_NUMBER = "5521970340738";
export const WHATSAPP_DISPLAY = "(21) 97034-0738";
export const INSTAGRAM_URL = "https://www.instagram.com/queenjuice.sn";
export const INSTAGRAM_HANDLE = "@queenjuice.sn";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildOrderMessage(items: CartItem[], total: number): string {
  const lines: string[] = [];
  lines.push("Olá, Queen Juice! 👑 Quero fazer um pedido:");
  lines.push("");
  for (const item of items) {
    const sugar = item.withSugar ? "com açúcar demerara" : "sem açúcar";
    lines.push(
      `• ${item.qty}x ${item.flavorName} ${item.sizeLabel} (${sugar}) — ${formatBRL(
        item.price * item.qty,
      )}`,
    );
  }
  lines.push("");
  lines.push(`Total: ${formatBRL(total)}`);
  lines.push("");
  lines.push("Meu nome é: ");
  lines.push("Endereço de entrega: ");
  return lines.join("\n");
}

export type SizeId = "300" | "500" | "1000";

export interface SizeOption {
  id: SizeId;
  label: string;
  price: number;
}

export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accent: string; // css color for the flavor accent
  sizes: SizeOption[];
}

export const flavors: Flavor[] = [
  {
    id: "manga",
    name: "Suco de Manga",
    tagline: "Doçura tropical, encorpado e refrescante",
    description:
      "Manga madura batida na hora. Cremoso, docinho no ponto certo e cheio de sabor de fruta de verdade.",
    image: "/images/bottles-duo.png",
    accent: "var(--qj-mango)",
    sizes: [
      { id: "300", label: "300 ml", price: 8 },
      { id: "500", label: "500 ml", price: 10 },
      { id: "1000", label: "1 Litro", price: 18 },
    ],
  },
  {
    id: "maracuja",
    name: "Suco de Maracujá",
    tagline: "Azedinho na medida, aroma marcante",
    description:
      "Maracujá natural com aquele equilíbrio entre o azedinho e o doce. Refrescância pura em cada gole.",
    image: "/images/bottle-ice.png",
    accent: "var(--qj-maracuja)",
    sizes: [
      { id: "300", label: "300 ml", price: 10 },
      { id: "500", label: "500 ml", price: 14 },
      { id: "1000", label: "1 Litro", price: 20 },
    ],
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CartItem {
  key: string; // flavorId-sizeId-sugar
  flavorId: string;
  flavorName: string;
  sizeId: string;
  sizeLabel: string;
  price: number;
  withSugar: boolean;
  qty: number;
}

interface AddArgs {
  flavorId: string;
  flavorName: string;
  sizeId: string;
  sizeLabel: string;
  price: number;
  withSugar: boolean;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  add: (args: AddArgs) => void;
  increment: (key: string) => void;
  decrement: (key: string) => void;
  remove: (key: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = useCallback((args: AddArgs) => {
    const key = `${args.flavorId}-${args.sizeId}-${args.withSugar ? "s" : "n"}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + args.qty } : i,
        );
      }
      return [...prev, { ...args, key }];
    });
  }, []);

  const increment = useCallback((key: string) => {
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i)),
    );
  }, []);

  const decrement = useCallback((key: string) => {
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const remove = useCallback((key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, i) => sum + i.qty, 0);
    const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);
    return { items, count, total, add, increment, decrement, remove, clear };
  }, [items, add, increment, decrement, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

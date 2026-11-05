import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "./products";

type Line = { product: Product; qty: number };
type Ctx = {
  lines: Line[];
  count: number;
  subtotal: number;
  subtotalEUR: number;
  open: boolean;
  setOpen: (o: boolean) => void;
  add: (p: Product) => void;
  remove: (id: string) => void;
};

const CartContext = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const add = (p: Product) =>
    setLines((ls) =>
      ls.some((l) => l.product.id === p.id)
        ? ls.map((l) => (l.product.id === p.id ? { ...l, qty: l.qty + 1 } : l))
        : [...ls, { product: p, qty: 1 }],
    );
  const remove = (id: string) => setLines((ls) => ls.filter((l) => l.product.id !== id));
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.qty * l.product.price, 0);
  const subtotalEUR = lines.reduce((s, l) => s + l.qty * (l.product.priceEUR ?? Math.round(l.product.price / 655)), 0);

  return (
    <CartContext.Provider value={{ lines, count, subtotal, subtotalEUR, open, setOpen, add, remove }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}

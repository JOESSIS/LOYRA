import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Eye, ShoppingBag, Sparkles } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useCurrency } from "@/lib/currency";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add, setOpen } = useCart();
  const { formatPrice } = useCurrency();
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(product);
    setJustAdded(true);
    setOpen(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-3.5 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl">
      {/* Container visuel produit */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-secondary/70">
        <Link to="/produit/$id" params={{ id: product.id }} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            width={800}
            height={1008}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
          />
        </Link>

        {/* Badges Flottants Univers & Type */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground backdrop-blur shadow-sm">
            <Sparkles className="h-3 w-3 text-amber-700" />
            {product.category}
          </span>
          <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-1 text-[10px] font-semibold text-primary backdrop-blur">
            {product.skin[0]}
          </span>
        </div>

        {/* Barre d'action rapide tactile */}
        <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            onClick={handleQuickAdd}
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur shadow-lg transition-all duration-300 ${
              justAdded
                ? "bg-emerald-700 text-white"
                : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="h-4 w-4" />
                <span>Ajouté</span>
              </>
            ) : (
              <>
                <ShoppingBag className="h-3.5 w-3.5" />
                <span>Ajout Panier</span>
              </>
            )}
          </button>

          <Link
            to="/produit/$id"
            params={{ id: product.id }}
            aria-label="Voir le produit"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-background/90 text-foreground backdrop-blur shadow-md transition-colors hover:bg-background hover:text-primary"
          >
            <Eye className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Informations Produit */}
      <div className="mt-4 flex flex-1 flex-col justify-between p-1.5">
        <Link to="/produit/$id" params={{ id: product.id }} className="block">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-xl sm:text-2xl font-light text-foreground group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <span className="font-sans text-sm font-semibold text-primary shrink-0">
              {formatPrice(product.price, product.priceEUR)}
            </span>
          </div>

          <p className="mt-1 text-xs text-muted-foreground font-light line-clamp-1">
            {product.note}
          </p>
        </Link>

        {/* Badges Carnations / Teint (Teint Noir, Marron Clair, Métisse) */}
        <div className="mt-4 border-t border-border/70 pt-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {product.complexions.slice(0, 2).map((comp) => (
              <span
                key={comp}
                className="rounded-full bg-secondary/90 border border-border/80 px-2 py-0.5 text-[10px] font-medium text-foreground"
              >
                {comp}
              </span>
            ))}
            {product.complexions.length > 2 && (
              <span className="text-[10px] text-muted-foreground">+1</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

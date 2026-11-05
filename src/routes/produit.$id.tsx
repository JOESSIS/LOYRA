import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Sparkles, Truck, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/lib/cart";
import { useCurrency } from "@/lib/currency";
import { products } from "@/lib/products";

export const Route = createFileRoute("/produit/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.product.title} — L'OYRA Cosmétique · Abidjan` : "Produit — L'OYRA";
    const d = loaderData ? `${loaderData.product.title} : ${loaderData.product.note}. Soin d'exception formulé en Côte d'Ivoire.` : "Soin d'exception L'OYRA.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="py-40 text-center">
      <p className="font-display text-4xl">Produit introuvable</p>
      <Link to="/e-shop" className="btn-cta mt-10">
        Retour à la boutique
      </Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add, setOpen } = useCart();
  const { formatPrice, currency } = useCurrency();
  const others = products.filter((p) => p.id !== product.id && p.category !== product.category).slice(0, 3);

  const whatsappInquiryUrl = `https://wa.me/2250700000000?text=${encodeURIComponent(
    `Bonjour Maison L'OYRA, je m'intéresse au soin "${product.title}" (${formatPrice(product.price, product.priceEUR)}). Est-il adapté à mon teint et disponible pour livraison à Abidjan ?`
  )}`;

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-16 md:grid-cols-2 md:px-12 items-center">
        {/* Product Image Container */}
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-secondary/80 shadow-xl">
          <img
            src={product.image}
            alt={product.title}
            loading="eager"
            decoding="async"
            className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-wider font-semibold text-foreground shadow">
            {product.category}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            Soin Signature L'OYRA · Abidjan
          </div>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-light">
            {product.title}
          </h1>

          <p className="mt-3 text-sm text-muted-foreground font-light">
            {product.note} · Recommandé pour peaux {product.skin.join(", ").toLowerCase()}
          </p>

          {/* Badges Teint */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">Idéal pour :</span>
            {product.complexions.map((comp) => (
              <span
                key={comp}
                className="rounded-full bg-secondary border border-border px-3 py-1 text-xs font-medium text-foreground"
              >
                {comp}
              </span>
            ))}
          </div>

          <p className="mt-6 font-display text-3xl font-light text-primary">
            {formatPrice(product.price, product.priceEUR)}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              className="btn-cta flex-1 text-center shadow-lg"
              onClick={() => {
                add(product);
                setOpen(true);
              }}
            >
              Ajouter au panier ({currency})
            </button>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-500/10 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-emerald-800 transition-colors hover:bg-emerald-500/20"
              title="Poser une question sur WhatsApp à Abidjan"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              <span>Conseil WhatsApp</span>
            </a>
          </div>

          {/* Quick Reassurance */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-b border-border py-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary shrink-0" />
              <span>Livraison Abidjan & Expédition Internationale</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span>Wave, Orange Money & CB acceptés</span>
            </div>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible defaultValue="b" className="mt-8">
            {(
              [
                ["b", "Bénéfices & Éclat", product.benefits],
                ["i", "Ingrédients & Plantes d'Afrique", product.ingredients],
                ["u", "Rituel & Application Tropicale", product.usage],
              ] as const
            ).map(([v, t, c]) => (
              <AccordionItem key={v} value={v} className="border-border">
                <AccordionTrigger className="text-xs font-medium uppercase tracking-[0.2em] hover:no-underline py-4">
                  {t}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                  {c}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Routine suggestions */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 border-t border-border">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Synergie</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light">Complétez votre rituel</h2>
          </div>
          <Link to="/e-shop" className="text-xs uppercase tracking-widest text-primary hover:underline font-medium">
            Voir toute la boutique →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {others.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}

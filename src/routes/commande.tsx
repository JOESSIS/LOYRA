import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { useCurrency } from "@/lib/currency";
import { CheckCircle2, MapPin, ShieldCheck, Smartphone } from "lucide-react";

export const Route = createFileRoute("/commande")({
  head: () => ({
    meta: [
      { title: "Finaliser ma Commande — L'OYRA Cosmétique · Abidjan" },
      { name: "description", content: "Finalisez votre commande L'OYRA avec livraison à Abidjan et partout en Côte d'Ivoire. Paiement Wave, Orange Money, MTN et Carte." },
      { property: "og:title", content: "Finaliser ma Commande — L'OYRA Cosmétique · Abidjan" },
      { property: "og:description", content: "Paiement sécurisé et livraison express en Côte d'Ivoire." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { lines, subtotal, subtotalEUR, remove, setOpen } = useCart();
  const { formatPrice, currency } = useCurrency();
  const [done, setDone] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("wave");

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  if (done) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-32 text-center md:px-12 bg-card my-16 rounded-3xl border border-border shadow-lg">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary font-semibold">
          Commande n° LOY-ABJ-{new Date().getFullYear()}-8821
        </p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-light">
          Merci pour votre confiance.
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground text-sm">
          Votre commande a été enregistrée avec succès. Notre service de conciergerie à Abidjan prépare votre colis avec le plus grand soin. Une notification WhatsApp et un e-mail récapitulatif vous ont été transmis.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs text-foreground font-medium">
          <MapPin className="h-4 w-4 text-primary" />
          Livraison prévue sous 24h à 48h à Abidjan
        </div>
        <div className="mt-10">
          <Link to="/e-shop" className="btn-cta">
            Continuer mes achats
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-12">
      <div className="border-b border-border pb-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-medium">
          <ShieldCheck className="h-4 w-4" />
          Paiement Sécurisé · Livraison Côte d'Ivoire & International
        </div>
        <h1 className="mt-3 font-display text-4xl sm:text-6xl font-light">Validation de commande</h1>
      </div>

      {lines.length === 0 ? (
        <div className="mt-16 text-center py-20 bg-card rounded-3xl border border-border">
          <p className="font-display text-2xl text-muted-foreground">Votre panier est actuellement vide.</p>
          <Link to="/e-shop" className="btn-cta mt-8">
            Découvrir la boutique
          </Link>
        </div>
      ) : (
        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {/* Order Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
              Vos soins sélectionnés ({lines.length})
            </h2>

            <ul className="mt-6 space-y-4">
              {lines.map((l) => (
                <li key={l.product.id} className="flex items-center gap-4 rounded-2xl border border-border/80 p-3.5 bg-card shadow-sm">
                  <img
                    src={l.product.image}
                    alt={l.product.title}
                    className="h-20 w-16 rounded-xl object-cover bg-secondary"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{l.product.title}</p>
                    <p className="text-[11px] text-muted-foreground">{l.product.note}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Quantité : {l.qty}</p>
                    <button
                      onClick={() => remove(l.product.id)}
                      className="mt-1.5 text-[10px] uppercase tracking-widest text-red-700 underline underline-offset-4"
                    >
                      Supprimer
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    {formatPrice(l.qty * l.product.price, l.qty * l.product.priceEUR)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-secondary/50 p-6 space-y-3 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Sous-total soins ({currency})</span>
                <span className="font-semibold text-foreground">
                  {formatPrice(subtotal, subtotalEUR)}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Livraison Abidjan</span>
                <span className="font-semibold text-emerald-700">Offerte</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-base font-medium text-foreground">
                <span>Total à régler</span>
                <span className="font-display text-2xl text-primary font-semibold">
                  {formatPrice(subtotal, subtotalEUR)}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm space-y-6"
          >
            <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
              Coordonnées & Livraison (Côte d'Ivoire & International)
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  Prénom & Nom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex. Marie Kouassi"
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  Numéro WhatsApp / Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+225 07 00 00 00 00"
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  Destination de livraison *
                </label>
                <select
                  required
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs outline-none focus:border-primary"
                >
                  <option value="Cocody">Abidjan - Cocody (Angré, Riviera, Deux-Plateaux...)</option>
                  <option value="Plateau">Abidjan - Plateau</option>
                  <option value="Marcory">Abidjan - Marcory / Zone 4 / Biétry</option>
                  <option value="Yopougon">Abidjan - Yopougon</option>
                  <option value="Treichville">Abidjan - Treichville</option>
                  <option value="Autre commune">Autre commune d'Abidjan</option>
                  <option value="Interieur">Intérieur du pays (Yamoussoukro, Bouaké, San Pedro...)</option>
                  <option value="International-Europe">International - France / Belgique / Europe</option>
                  <option value="International-Amerique">International - USA / Canada</option>
                  <option value="International-Afrique">International - Afrique (Sénégal, Cameroun, Gabon...)</option>
                  <option value="International-Autre">International - Autre pays</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  Adresse précise ou repère *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex. Rue des Jardins, face pharmacie"
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Mobile Payment Selector */}
            <div className="pt-2">
              <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                Mode de règlement privilégié
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {([
                  ["wave", "Wave"],
                  ["orange", "Orange Money"],
                  ["mtn", "MTN MoMo"],
                  ["card", "Carte Bancaire"],
                ] as const).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setPaymentMethod(id)}
                    className={`flex items-center gap-2 rounded-xl p-3 border transition-all ${
                      paymentMethod === id
                        ? "border-primary bg-primary/10 text-primary font-semibold"
                        : "border-border bg-background text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <Smartphone className="h-4 w-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn-cta w-full text-center mt-6 shadow-lg"
            >
              Confirmer la commande ({formatPrice(subtotal, subtotalEUR)})
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Sparkles, SlidersHorizontal, ArrowUpDown, MessageCircle, RefreshCw, X, MapPin } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { products, type Category, type SkinType, type Complexion } from "@/lib/products";
import { CurrencySwitcher, useCurrency } from "@/lib/currency";

export const Route = createFileRoute("/e-shop")({
  head: () => ({
    meta: [
      { title: "Boutique Officielle — L'OYRA Cosmétique · Abidjan" },
      { name: "description", content: "Collection de soins pour teints noirs, marron clair et métisses. Prix en FCFA et Euros. Livraison rapide à Abidjan, Côte d'Ivoire et expédition internationale." },
      { property: "og:title", content: "Boutique Officielle — L'OYRA Cosmétique · Abidjan" },
      { property: "og:description", content: "Soins d'exception aux plantes pour sublimer chaque teint." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

const cats: (Category | "Tout")[] = ["Tout", "Sérums", "Crèmes"];
const complexionsList: Complexion[] = [
  "Tous teints",
  "Teint Noir",
  "Teint Marron Clair",
  "Teint Métisse",
];
const skins: (SkinType | "Toutes")[] = ["Toutes", "Sèche", "Mixte", "Grasse", "Sensible"];

const complexionDescriptions: Record<string, string> = {
  "Tous teints": "Soins universels respectant chaque teint et apportant un éclat pur.",
  "Teint Noir": "Hautement dosé pour préserver l'éclat profond, éviter l'effet terne ou grisâtre et sublimer la mélanine.",
  "Teint Marron Clair": "Action ciblée sur l'homogénéité du grain, l'atténuation des taches brunes et le glow doré.",
  "Teint Métisse": "Formule régulatrice équilibrant hydratation et zone médiane, pour une clarté satinée.",
};

export function Shop() {
  const [selectedCat, setSelectedCat] = useState<(typeof cats)[number]>("Tout");
  const [selectedComplexion, setSelectedComplexion] = useState<Complexion>("Tous teints");
  const [selectedSkin, setSelectedSkin] = useState<(typeof skins)[number]>("Toutes");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const { currency } = useCurrency();

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchCat = selectedCat === "Tout" || p.category === selectedCat;
      const matchComplexion =
        selectedComplexion === "Tous teints" ||
        p.complexions.includes(selectedComplexion) ||
        p.complexions.includes("Tous teints");
      const matchSkin = selectedSkin === "Toutes" || p.skin.includes(selectedSkin);
      return matchCat && matchComplexion && matchSkin;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    return result;
  }, [selectedCat, selectedComplexion, selectedSkin, sortBy]);

  const resetFilters = () => {
    setSelectedCat("Tout");
    setSelectedComplexion("Tous teints");
    setSelectedSkin("Toutes");
    setSortBy("featured");
  };

  const hasActiveFilters =
    selectedCat !== "Tout" ||
    selectedComplexion !== "Tous teints" ||
    selectedSkin !== "Toutes";

  return (
    <div className="bg-background text-foreground">
      {/* Boutique Header Banner */}
      <section className="border-b border-border/80 bg-secondary/40 px-6 pt-16 pb-12 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
                <MapPin className="h-3.5 w-3.5" />
                Maison L'OYRA · Abidjan
              </div>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl md:text-7xl font-light">
                La Boutique
              </h1>
              <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
                Soins formulés spécifiquement pour les teints noirs, marron clair et métisses. Actifs purs de plantes d'Afrique de l'Ouest hautement concentrés. Expédition locale et internationale.
              </p>
            </div>

            {/* Quick Reassurance & Currency Switcher */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs">
                <span className="text-muted-foreground">Affichage :</span>
                <CurrencySwitcher />
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Expédition Monde & Abidjan</span>
              </div>

              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-800 transition-colors hover:bg-emerald-500/20"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>Conseil WhatsApp Direct</span>
              </Link>
            </div>
          </div>

          {/* Interactive Category Segmented Tabs (Apple HIG Style) */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-border/80 pb-4">
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mr-2">
              Univers :
            </span>
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                  selectedCat === cat
                    ? "bg-foreground text-background shadow-md scale-102"
                    : "border border-border/80 bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Boutique Content */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* Left Filters Panel */}
          <aside className="space-y-8">
            {/* Teint Filter (Teint Noir, Marron Clair, Métisse) */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
                  Nuance & Teint
                </span>
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              </div>

              <div className="mt-4 space-y-2">
                {complexionsList.map((comp) => (
                  <button
                    key={comp}
                    onClick={() => setSelectedComplexion(comp)}
                    className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-xs transition-all ${
                      selectedComplexion === comp
                        ? "bg-primary text-primary-foreground font-medium shadow-sm"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span>{comp}</span>
                    {selectedComplexion === comp && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-secondary/80 p-3.5 text-[11px] text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">Conseil teint :</p>
                <p className="mt-1">
                  {complexionDescriptions[selectedComplexion]}
                </p>
              </div>
            </div>

            {/* Skin Type Filter */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
                  Type de peau
                </span>
                <SlidersHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
              </div>

              <div className="mt-4 space-y-2">
                {skins.map((skin) => (
                  <button
                    key={skin}
                    onClick={() => setSelectedSkin(skin)}
                    className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-xs transition-all ${
                      selectedSkin === skin
                        ? "bg-primary text-primary-foreground font-medium shadow-sm"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span>{skin}</span>
                    {selectedSkin === skin && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Consultation Box Côte d'Ivoire */}
            <div className="rounded-3xl border border-border bg-[#231812] text-[#FAF5EE] p-6 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-light">Besoin d'un diagnostic ?</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#FAF5EE]/75">
                Envoyez-nous une photo de votre peau sur WhatsApp. Nos expertes à Abidjan vous orientent vers le rituel parfait.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-amber-300 hover:underline"
              >
                Échanger avec nous →
              </Link>
            </div>
          </aside>

          {/* Right Product Grid */}
          <div>
            {/* Top Bar with Count & Sort */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border/80">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-medium text-foreground">
                  {filteredProducts.length} soin{filteredProducts.length > 1 ? "s" : ""} disponible{filteredProducts.length > 1 ? "s" : ""} ({currency})
                </p>

                {selectedComplexion !== "Tous teints" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-3 py-0.5 text-xs font-medium text-primary">
                    {selectedComplexion}
                    <button onClick={() => setSelectedComplexion("Tous teints")}>
                      <X className="h-3 w-3 hover:text-foreground" />
                    </button>
                  </span>
                )}

                {selectedSkin !== "Toutes" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary border border-border px-3 py-0.5 text-xs font-medium text-foreground">
                    Peau {selectedSkin}
                    <button onClick={() => setSelectedSkin("Toutes")}>
                      <X className="h-3 w-3 hover:text-foreground" />
                    </button>
                  </span>
                )}
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Trier :</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="rounded-xl border border-border bg-card px-3.5 py-2 text-xs text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="featured">Recommandés</option>
                  <option value="price-asc">Prix : croissant</option>
                  <option value="price-desc">Prix : décroissant</option>
                </select>
              </div>
            </div>

            {/* Grid of Products */}
            {filteredProducts.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border p-16 text-center bg-card/40">
                <p className="font-display text-2xl text-muted-foreground">Aucun soin ne correspond à ces critères combinés.</p>
                <button
                  onClick={resetFilters}
                  className="mt-6 rounded-full bg-foreground px-8 py-3 text-xs uppercase tracking-wider text-background shadow-md"
                >
                  Voir tous les soins
                </button>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}

            {/* Editorial Reassurance Banner Côte d'Ivoire */}
            <div className="mt-16 rounded-3xl border border-border/80 bg-secondary/50 p-8 sm:p-10 text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-light">
                Livraison à Abidjan & expédition sous 24h
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Paiement sécurisé par Wave, Orange Money, MTN MoMo, Moov Money et Cartes Bancaires.
                Vos soins sont confectionnés avec amour et rigueur pour sublimer votre peau.
              </p>
              <div className="mt-6 flex justify-center gap-6 text-xs uppercase tracking-widest text-primary font-medium">
                <Link to="/resultats-temoignages" className="hover:underline">
                  Preuves dermatologiques →
                </Link>
                <Link to="/contact" className="hover:underline">
                  Conseil WhatsApp →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

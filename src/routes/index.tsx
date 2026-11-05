import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Globe } from "lucide-react";
import heroImage from "@/assets/hero-loyra.jpg";
import deuxiemeImage from "@/assets/deuxieme-image-loyra.jpg";
import reveleImage from "@/assets/revele-ta-beaute-opt.jpg";
import cream from "@/assets/cream.jpg";
import serum from "@/assets/serum.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "L'OYRA Cosmétique — Soins aux Plantes d'Afrique · Abidjan" },
      {
        name: "description",
        content:
          "Soins d'exception pour teints noirs, marron clair et métisses. Formulés en Côte d'Ivoire avec les plantes précieuses d'Afrique. Expédition en Côte d'Ivoire et à l'international.",
      },
      { property: "og:title", content: "L'OYRA Cosmétique — Soins aux Plantes · Abidjan" },
      {
        property: "og:description",
        content: "Sublimez votre teint avec L'OYRA : sérums et crèmes d'exception à Abidjan. Expédition internationale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImage },
    ],
  }),
  component: Index,
});

const skinTones = [
  {
    title: "Teint Noir & Ébène",
    desc: "Éclat profond, prévention des zones cendrées et maintien d'une lumière miroir satinée.",
    tag: "Haute mélanine",
    complexionFilter: "Teint Noir",
  },
  {
    title: "Teint Marron Clair & Caramel",
    desc: "Unification du grain, atténuation ciblée des taches brunes et teint doré rayonnant.",
    tag: "Teint doré",
    complexionFilter: "Teint Marron Clair",
  },
  {
    title: "Teint Métisse & Ambré",
    desc: "Équilibre parfait de l'hydratation, régulation de la brillance et clarté naturelle.",
    tag: "Teint ambré",
    complexionFilter: "Teint Métisse",
  },
];

function Index() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section Authentique (Mobile-First & Grand Format) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 sm:pt-8 md:px-12">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-border/70 bg-[#231812]">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] min-h-[360px] sm:min-h-[460px] md:min-h-[540px]">
            <img
              src={heroImage}
              alt="L'OYRA Cosmétique — S'assumer avec L'OYRA"
              className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-103"
              loading="eager"
              decoding="async"
            />
            {/* Subtle Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#231812]/80 via-transparent to-black/20" />

            {/* Hero Overlay Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-16 flex flex-col justify-end text-[#FAF5EE]">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/40 backdrop-blur-md px-3.5 py-1 text-[10px] sm:text-[11px] font-medium tracking-[0.15em] text-amber-300 w-fit">
                  <Globe className="h-3 w-3" />
                  Expédition Abidjan & International
                </div>

                <h1 className="mt-3 sm:mt-5 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white drop-shadow-md">
                  La beauté qui s'assume.
                </h1>

                <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base font-light leading-relaxed text-[#FAF5EE]/90 max-w-xl drop-shadow">
                  Maison de soins cosmétiques créée à Abidjan pour magnifier la lumière et l'authenticité de chaque peau.
                </p>

                <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to="/e-shop"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-amber-400 px-7 sm:px-9 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#231812] shadow-lg transition-all hover:bg-amber-300 active:scale-95 text-center"
                  >
                    Découvrir l'e-shop
                  </Link>
                  <Link
                    to="/resultats-temoignages"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#FAF5EE]/40 bg-black/30 backdrop-blur-md px-7 sm:px-9 py-3.5 sm:py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FAF5EE] hover:border-amber-300 hover:text-amber-300 transition-all text-center"
                  >
                    Résultat et témoignage →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note : L'ancien bloc de réassurance ("Livraison Abidjan Express...", "Wave, Orange Money...", "Karité sauvage...") a été totalement retiré comme demandé. */}
      </section>

      {/* 2. Section "Une formule adaptée à chaque nuance de peau" — Photo en grand format avec la dame assise et les écritures placées SUR la photo */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 md:px-12">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-[#E8DDD0] shadow-2xl">
          {/* Conteneur Grand Format : on voit la dame assise en entier */}
          <div className="relative min-h-[720px] sm:min-h-[780px] lg:min-h-[840px] flex items-center">
            {/* L'image en grand format en arrière-plan */}
            <img
              src={deuxiemeImage}
              alt="Maison L'OYRA — Soins pour tous teints, femme rayonnante"
              className="absolute inset-0 h-full w-full object-cover object-[82%_center] md:object-[85%_center] lg:object-right"
              loading="lazy"
              decoding="async"
            />

            {/* Gradient subtil garantissant un contraste parfait pour les textes sur la gauche tout en laissant la dame assise 100% visible à droite */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EE]/95 via-[#FAF5EE]/85 via-45% to-transparent hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EE] via-[#FAF5EE]/85 via-70% to-[#FAF5EE]/30 md:hidden" />

            {/* Écritures et cartes placées DIRECTEMENT SUR la photo */}
            <div className="relative z-10 w-full p-6 sm:p-10 md:p-12 lg:p-14 max-w-xl lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 backdrop-blur-md px-3.5 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-primary font-semibold shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                EXPERTISE DES TEINTS AFRICAINS
              </div>

              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-foreground leading-[1.12]">
                Une formule adaptée à chaque nuance de peau
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-foreground/80 leading-relaxed font-light max-w-lg">
                Chaque teint possède des besoins spécifiques d'hydratation, de lipides et d'harmonisation de l'éclat.
              </p>

              {/* Les 3 Cartes de Teints intégrées en overlay sur la photo avec effet verre luxueux */}
              <div className="mt-8 flex flex-col gap-3.5 sm:gap-4">
                {skinTones.map((tone) => (
                  <div
                    key={tone.title}
                    className="group relative rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md p-4 sm:p-5 shadow-sm transition-all duration-300 hover:bg-white/95 hover:shadow-md hover:scale-[1.01]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-secondary/80 border border-border/70 px-2.5 py-0.5 text-[10px] sm:text-[10.5px] font-semibold text-foreground">
                        {tone.tag}
                      </span>
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Formule ciblée
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-xl sm:text-2xl text-foreground font-light">
                      {tone.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground font-light">
                      {tone.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-border/50">
                      <Link
                        to="/e-shop"
                        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-primary font-semibold hover:text-amber-700 transition-colors"
                      >
                        <span>VOIR LES SOINS DÉDIÉS</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Section (Responsive Mobile-First) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.28em] text-primary font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              Sélection Iconique
            </div>
            <h2 className="mt-2 sm:mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-light">
              Nos bestsellers
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground max-w-xs font-light">
            Les formules favorites pour un glow naturel sans brillance excessive.
          </p>
        </div>

        {/* Grille responsive : 1 colonne mobile, 2 colonnes tablette, 3 colonnes desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Bouton "VOIR TOUTE LA BOUTIQUE" sous les bestsellers */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link
            to="/e-shop"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-full border-2 border-foreground bg-foreground px-10 sm:px-14 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-background shadow-lg transition-all duration-300 hover:bg-transparent hover:text-foreground hover:shadow-xl active:scale-[0.98] text-center"
          >
            <span>VOIR TOUTE LA BOUTIQUE</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4. En bas du bouton : Campagne "Révèle ta beauté" avec sa photo originale remise à sa place */}
        <div className="mt-16 sm:mt-20 overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-[#231812] text-[#FAF5EE] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:col-span-6 overflow-hidden">
              <img
                src={reveleImage}
                alt="Révèle ta beauté - L'OYRA Cosmétique"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#231812]/70 via-transparent to-transparent lg:hidden" />
            </div>

            <div className="p-6 sm:p-10 lg:col-span-6 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-amber-300 w-fit">
                <Sparkles className="h-3 w-3" />
                Maison L'OYRA
              </div>

              <h3 className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] font-light">
                Révèle ta beauté.
              </h3>

              {/* Texte exact demandé par le client */}
              <blockquote className="mt-6 sm:mt-8 border-l-2 border-amber-400/70 pl-4 sm:pl-6 font-display text-lg sm:text-2xl italic leading-relaxed text-[#FAF5EE]/95">
                « La peau est la première chose qu'on remarque chez une personne, elle est semblable à la couverture d'un livre : on doit la sublimer. »
              </blockquote>

              <p className="mt-6 text-xs sm:text-sm font-light leading-relaxed text-[#FAF5EE]/75">
                Formulée avec rigueur à partir des plantes précieuses d'Afrique de l'Ouest, chaque création L'OYRA apporte aux peaux noires, marron clair et métisses un éclat incomparable.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/e-shop"
                  className="rounded-full bg-amber-400 px-8 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#231812] shadow-md transition-all hover:bg-amber-300 active:scale-95 text-center"
                >
                  Accéder aux rituels
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FAF5EE]/30 bg-white/5 px-8 py-3.5 sm:py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FAF5EE] hover:border-amber-400 hover:text-amber-300 transition-all backdrop-blur text-center"
                >
                  Conseil WhatsApp Direct →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section Origines & Flacons Réels */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 md:px-12 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Origines & Savoir-Faire</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              Née à Abidjan : la fierté d'une peau souveraine.
            </h2>
            <p className="mt-6 leading-relaxed text-xs sm:text-sm md:text-base text-muted-foreground font-light">
              L'OYRA est née d'un amour profond pour la diversité et la noblesse des teints africains.
              Nous sélectionnons le karité brut le plus noble, l'huile de baobab et le marula pur pressés à froid pour créer des soins sensoriels qui respectent et révèlent la vitalité de votre teint sous le soleil tropical.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-primary font-medium">
              <Globe className="h-4 w-4" />
              <span>Livraison à Abidjan & expédition internationale dans le monde entier</span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/philosophie"
                className="inline-block text-xs uppercase tracking-[0.2em] underline underline-offset-8 hover:text-primary transition-colors font-semibold"
              >
                Découvrir notre histoire
              </Link>
              <Link
                to="/contact"
                className="inline-block text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Service Conciergerie Abidjan & Monde
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl bg-secondary">
              <img
                src={cream}
                alt="Crème Velours L'OYRA"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl bg-secondary mt-6 sm:mt-10">
              <img
                src={serum}
                alt="Sérum Éclat Pur L'OYRA"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section Preuves & Transparence Clinique (Sans faux avis) */}
      <section className="border-t border-border bg-secondary/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Preuves Cliniques & Vérité
            </div>
            <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-light">
              Des résultats mesurés, 0 faux avis
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
              L'OYRA s'engage sur l'authenticité : chaque résultat est évalué sur peaux noires, marron clair et métisses.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-6 sm:p-8 text-center shadow-sm">
              <p className="font-display text-4xl sm:text-6xl font-light text-primary">98%</p>
              <h3 className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">Éclat du Teint</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-light">
                Peau visiblement plus radieuse, lumineuse et unifiée dès 28 jours.
              </p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-6 sm:p-8 text-center shadow-sm">
              <p className="font-display text-4xl sm:text-6xl font-light text-primary">94%</p>
              <h3 className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">Anti-Taches & Uniformité</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-light">
                Atténuation des marques pigmentaires et des reflets ternes.
              </p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-6 sm:p-8 text-center shadow-sm">
              <p className="font-display text-4xl sm:text-6xl font-light text-primary">100%</p>
              <h3 className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">Confort & Tolérance</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-light">
                Adapté aux climats tropicaux : absorption immédiate sans film collant.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/resultats-temoignages"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary hover:opacity-80 underline underline-offset-8 transition-opacity font-semibold"
            >
              <span>Voir les résultats et témoignages avec photos avant / après</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

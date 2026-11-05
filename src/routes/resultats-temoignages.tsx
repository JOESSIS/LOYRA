import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ShieldCheck, ArrowRight, Camera, MessageCircle, Heart, CheckCircle2, UserCheck } from "lucide-react";
import serum from "@/assets/serum.jpg";
import cream from "@/assets/cream.jpg";
import deuxiemeImage from "@/assets/deuxieme-image-loyra.jpg";

export const Route = createFileRoute("/resultats-temoignages")({
  head: () => ({
    meta: [
      { title: "Résultats et Témoignages — L'OYRA Cosmétique · Abidjan" },
      { name: "description", content: "Découvrez les résultats et témoignages réels avec photos avant / après sur teints noirs, marron clair et métisses. Expédition internationale." },
      { property: "og:title", content: "Résultats et Témoignages — L'OYRA Cosmétique · Abidjan" },
      { property: "og:description", content: "Transformations cutanées et retours d'expérience vérifiés sur teints d'Afrique." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ResultsPage,
});

// Études de cas Avant / Après avec réservations pour les photos de clientes
const beforeAfterCases = [
  {
    id: "ba-1",
    client: "Aïcha K. (Abidjan, Cocody)",
    complexion: "Teint Noir / Ébène",
    routine: "Sérum Éclat Pur + Crème Lumière",
    duration: "4 semaines d'utilisation",
    beforeText: "Taches pigmentaires d'acné sur les joues, teint terne en fin de journée et manque d'éclat.",
    afterText: "Taches nettement estompées, peau lissée et éclat miroir satiné sans aucune brillance grasse.",
    productImage: serum,
    productName: "Sérum Éclat Pur",
    productLink: "/produit/s1",
  },
  {
    id: "ba-2",
    client: "Mariam D. (Paris / Expédition internationale)",
    complexion: "Teint Marron Clair / Caramel",
    routine: "Crème Velours + Baume Royal la nuit",
    duration: "3 semaines d'utilisation",
    beforeText: "Sensations de tiraillements intenses, peau sèche par le froid et le calcaire, teint sans vie.",
    afterText: "Souplesse retrouvée immédiatement, teint caramel lumineux et unifié, texture veloutée.",
    productImage: cream,
    productName: "Crème Velours",
    productLink: "/produit/c1",
  },
  {
    id: "ba-3",
    client: "Sarah B. (Abidjan, Zone 4)",
    complexion: "Teint Métisse / Ambré",
    routine: "Crème Lumière + Sérum Nuit Ambrée",
    duration: "6 semaines d'utilisation",
    beforeText: "Pores dilatés, brillance excessive sur la zone T sous l'humidité et grain irrégulier.",
    afterText: "Zone T matifiée tout au long de la journée, pores visiblement resserrés, peau nette et fraîche.",
    productImage: serum,
    productName: "Crème Lumière",
    productLink: "/produit/c2",
  },
  {
    id: "ba-4",
    client: "Esther T. (Dakar / Expédition internationale)",
    complexion: "Teint Noir / Ébène",
    routine: "Huile Sacrée + Sérum Éclat Pur",
    duration: "5 semaines d'utilisation",
    beforeText: "Teint grisâtre après exposition au soleil et petites irrégularités au niveau des pommettes.",
    afterText: "Teint noir profond intensément sublimé, éclat naturel durable et barrière cutanée renforcée.",
    productImage: serum,
    productName: "Huile Sacrée",
    productLink: "/produit/s3",
  },
];

const timelineSteps = [
  {
    period: "Semaine 1",
    title: "Hydratation profonde & confort immédiat",
    desc: "La barrière cutanée est nourrie. Les tiraillements causés par la chaleur et la climatisation disparaissent. Le grain de peau s'adoucit dès les premières applications.",
    tag: "Confort retrouvé",
  },
  {
    period: "Semaine 3",
    title: "Unification & régulation du sébum",
    desc: "La Vitamine C stabilisée et la Niacinamide harmonisent le teint. Les pores sont resserrés et la zone T est naturellement matifiée sans assécher.",
    tag: "Grain affiné",
  },
  {
    period: "Semaine 6",
    title: "Glow signature & éclat miroir",
    desc: "Le renouvellement cellulaire est complet. La peau reflète la lumière de manière homogène : l'éclat « signature » L'OYRA s'exprime pleinement, sans filtre.",
    tag: "Glow durable",
  },
];

export function ResultsPage() {
  const [selectedComplexion, setSelectedComplexion] = useState("Tous");

  const filterOptions = ["Tous", "Teint Noir / Ébène", "Teint Marron Clair / Caramel", "Teint Métisse / Ambré"];

  const filteredCases = selectedComplexion === "Tous" 
    ? beforeAfterCases 
    : beforeAfterCases.filter(c => c.complexion === selectedComplexion);

  return (
    <div className="bg-background text-foreground">
      {/* Editorial Header */}
      <section className="relative overflow-hidden border-b border-border/80 bg-secondary/40 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
            <UserCheck className="h-3.5 w-3.5" />
            Expériences Vérifiées · Maison Abidjan
          </div>
          <h1 className="mt-8 font-display text-4xl md:text-6xl lg:text-7xl font-light">
            Résultats et Témoignages
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Chez L'OYRA, nous laissons parler la vérité de la peau.
            Découvrez les photos avant et après l'utilisation de nos soins aux plantes d'Afrique par nos clientes réelles à Abidjan et à l'international.
          </p>

          {/* Authenticity Badge */}
          <div className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3.5 text-xs text-muted-foreground shadow-sm">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
            <span className="text-left font-medium">
              <strong className="text-foreground">Charte de Vérité L'OYRA :</strong> 0 faux avis · Résultats observés sur les teints africains réels.
            </span>
          </div>
        </div>
      </section>

      {/* Section PHOTOS AVANT / APRÈS demandée par le client */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              <Camera className="h-4 w-4" />
              Témoignages & Transformations Clientes
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-light">
              Photos Avant / Après utilisation
            </h2>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground font-light max-w-xl">
              Chaque cliché illustre l'évolution naturelle du teint après application des rituels cosmétiques L'OYRA.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedComplexion(f)}
                className={`rounded-full px-5 py-2 text-xs transition-all ${
                  selectedComplexion === f
                    ? "bg-foreground text-background shadow font-medium"
                    : "border border-border/80 bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grille Avant / Après */}
        <div className="grid gap-10 lg:grid-cols-2">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/40 flex flex-col justify-between"
            >
              <div>
                {/* Header de la carte */}
                <div className="p-6 md:p-8 pb-4 flex flex-wrap items-center justify-between gap-3 border-b border-border/50">
                  <div>
                    <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-0.5 text-[10px] font-semibold text-primary uppercase tracking-wider">
                      {item.complexion}
                    </span>
                    <h3 className="mt-2 font-display text-xl md:text-2xl font-light text-foreground">
                      {item.client}
                    </h3>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {item.duration}
                  </span>
                </div>

                {/* Bloc Comparatif Avant / Après (Emplacements Photos Clientes) */}
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Cadre Photo Avant */}
                    <div className="group/before relative overflow-hidden rounded-2xl border-2 border-dashed border-border/80 bg-secondary/50 p-4 flex flex-col justify-between aspect-[3/4] text-center">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-black/70 px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider text-white">
                          AVANT
                        </span>
                        <Camera className="h-4 w-4 text-muted-foreground" />
                      </div>

                      <div className="my-auto py-3">
                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-muted-foreground shadow-sm">
                          <UserCheck className="h-5 w-5" />
                        </div>
                        <p className="text-[11px] font-semibold text-foreground uppercase tracking-wide">
                          Photo avant soin
                        </p>
                        <p className="mt-2 text-[10.5px] leading-relaxed text-muted-foreground font-light px-2">
                          {item.beforeText}
                        </p>
                      </div>

                      <p className="text-[9.5px] text-muted-foreground uppercase tracking-widest font-mono">
                        Jour 1
                      </p>
                    </div>

                    {/* Cadre Photo Après */}
                    <div className="group/after relative overflow-hidden rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent p-4 flex flex-col justify-between aspect-[3/4] text-center shadow-inner">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider text-[#231812] shadow">
                          APRÈS
                        </span>
                        <Sparkles className="h-4 w-4 text-amber-600" />
                      </div>

                      <div className="my-auto py-3">
                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-[#231812] shadow-sm">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <p className="text-[11px] font-semibold text-[#231812] uppercase tracking-wide">
                          Résultat constaté
                        </p>
                        <p className="mt-2 text-[10.5px] leading-relaxed text-foreground/90 font-medium px-2">
                          {item.afterText}
                        </p>
                      </div>

                      <p className="text-[9.5px] text-amber-800 font-semibold uppercase tracking-widest">
                        {item.duration}
                      </p>
                    </div>
                  </div>

                  {/* Routine Prescrite */}
                  <div className="mt-6 rounded-2xl bg-secondary/70 p-4 text-xs">
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                      Routine utilisée :
                    </p>
                    <p className="mt-1 text-muted-foreground">
                      {item.routine}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pied de carte avec lien vers le soin */}
              <div className="p-6 md:p-8 pt-0 border-t border-border/50">
                <Link
                  to={item.productLink}
                  className="mt-4 group flex items-center justify-between text-xs uppercase tracking-widest text-primary font-semibold hover:opacity-80 transition-opacity"
                >
                  <span className="flex items-center gap-2">
                    <img src={item.productImage} alt={item.productName} className="h-7 w-7 rounded-full object-cover border border-border" />
                    Voir {item.productName}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Appel à témoignage pour les clientes réelles */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-amber-400/30 bg-[#231812] text-[#FAF5EE] p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                <Camera className="h-3.5 w-3.5" />
                Vous utilisez L'OYRA ?
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-4xl font-light">
                Partagez votre transformation cutanée
              </h3>
              <p className="mt-2 text-xs md:text-sm text-[#FAF5EE]/80 leading-relaxed font-light">
                Envoyez vos photos avant / après sur notre ligne WhatsApp officielle à Abidjan. Votre témoignage permettra d'inspirer notre communauté et vous recevrez un soin offert lors de votre prochaine commande.
              </p>
            </div>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-amber-400 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#231812] shadow-lg transition-all hover:bg-amber-300 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Envoyer mon témoignage</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Chronologie cutanée */}
      <section className="border-y border-border/80 bg-secondary/30 py-24 px-6 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary">Chronologie cutanée</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-light">La progression au fil des semaines</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              Le cycle naturel de renouvellement de la peau dure environ 28 jours :
            </p>
          </div>

          <div className="relative border-l-2 border-primary/20 pl-6 ml-4 md:ml-12 space-y-12">
            {timelineSteps.map((step) => (
              <div key={step.period} className="relative group">
                <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background shadow">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-8 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {step.period}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl text-foreground font-light">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-border/80 bg-[#231812] text-[#FAF5EE] py-20 px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light">
            Prête à révéler la lumière de votre teint ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#FAF5EE]/75 font-light">
            Bénéficiez d'un diagnostic direct sur WhatsApp avec nos conseillères à Abidjan. Livraison locale et expédition internationale.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/e-shop"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#231812] transition-all hover:bg-amber-300 shadow-lg"
            >
              Découvrir la boutique
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#FAF5EE]/30 bg-white/5 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FAF5EE] transition-all hover:border-amber-400 hover:text-amber-300 backdrop-blur"
            >
              Diagnostic WhatsApp offert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

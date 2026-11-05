import { createFileRoute, Link } from "@tanstack/react-router";
import serum from "@/assets/serum.jpg";
import cream from "@/assets/cream.jpg";
import { LoyraLogo } from "@/components/site/LoyraLogo";
import { MapPin, Sparkles, ShieldCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/philosophie")({
  head: () => ({
    meta: [
      { title: "Notre Histoire & Philosophie — L'OYRA Cosmétique · Abidjan" },
      { name: "description", content: "L'histoire de la Maison L'OYRA née à Abidjan : la haute cosmétique au service des teints noirs, marron clair et métisses." },
      { property: "og:title", content: "Notre Histoire & Philosophie — L'OYRA Cosmétique · Abidjan" },
      { property: "og:description", content: "Haute cosmétique aux plantes d'Afrique : pureté, fierté et transparence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Philo,
});

function Philo() {
  return (
    <div className="bg-background text-foreground">
      {/* Header avec Logo Vectoriel Parfait */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <LoyraLogo className="mx-auto h-20 w-auto" />
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
          <MapPin className="h-3.5 w-3.5" />
          Maison Fondée à Abidjan · Côte d'Ivoire
        </div>
        <h1 className="mt-8 font-display text-5xl md:text-7xl font-light">
          Notre Philosophie
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
          Célébrer la grandeur, la richesse et la lumière singulière de chaque teint.
        </p>
      </section>

      {/* Section Histoire avec Serum */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 md:grid-cols-2 md:px-12 border-t border-border">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium">
            <Sparkles className="h-3.5 w-3.5" />
            Origines & Conviction
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-light leading-tight">
            Née sous le soleil d'Abidjan
          </h2>
          <p className="mt-6 leading-loose text-muted-foreground">
            L'OYRA est née d'une conviction profonde : la peau est la première chose que l'on remarque chez une personne, semblable à la couverture d'un livre d'exception. Elle mérite d'être nourrie, respectée et magnifiée sans artifice nocif.
          </p>
          <p className="mt-4 leading-loose text-muted-foreground">
            Nos soins sont spécifiquement conçus pour répondre aux besoins des teints noirs, marron clair et métisses face aux exigences du climat tropical : prévenir le teint terne, équilibrer l'hydratation et sublimer le glow naturel.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-xl bg-secondary">
          <img
            src={serum}
            alt="Sérum L'OYRA"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* Section Valeurs avec Cream - Thème Marron Foncé */}
      <section className="bg-[#231812] text-[#FAF5EE] py-24 my-16">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-12">
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-[#1C1410] md:order-first">
            <img
              src={cream}
              alt="Crème L'OYRA"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-amber-300 font-medium">
              <ShieldCheck className="h-3.5 w-3.5" />
              Charte des Plantes Souveraines
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-light text-[#FAF5EE]">
              Pureté, transparence et respect de la mélanine
            </h2>
            <p className="mt-6 leading-loose text-[#FAF5EE]/80">
              Nous sélectionnons uniquement des plantes et trésors naturels d'Afrique — karité brut sauvage de Côte d'Ivoire et de la sous-région, huile de baobab millénaire, marula pur pressé à froid.
            </p>
            <p className="mt-4 leading-loose text-[#FAF5EE]/80">
              Nous bannissons catégoriquement tout agent décapant, hydroquinone ou produit controversé. Chez L'OYRA, sublimer ne signifie jamais dénaturer.
            </p>

            <div className="mt-10">
              <Link
                to="/e-shop"
                className="rounded-full bg-amber-400 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#231812] transition-all hover:bg-amber-300 shadow-md inline-block"
              >
                Découvrir la collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

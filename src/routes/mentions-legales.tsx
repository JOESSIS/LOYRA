import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — L'OYRA Cosmétique" },
      { name: "description", content: "Mentions légales du site L'OYRA Cosmétique." },
      { property: "og:title", content: "Mentions légales — L'OYRA Cosmétique" },
      { property: "og:description", content: "Mentions légales du site L'OYRA Cosmétique." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-12">
      <h1 className="font-display text-5xl md:text-6xl">Mentions légales</h1>
      <div className="mt-16 space-y-10 text-sm leading-loose text-muted-foreground">
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">Éditeur du site</h2>
          <p className="mt-4">L'OYRA Cosmétique — SAS au capital de 10 000 € — 12 rue des Lilas, 75011 Paris, France. SIREN 000 000 000 (à compléter). Contact : bonjour@loyra-cosmetique.fr</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">Responsable de publication</h2>
          <p className="mt-4">La direction de L'OYRA Cosmétique.</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">Hébergement</h2>
          <p className="mt-4">Site hébergé par Lovable (hébergement cloud européen).</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">Propriété intellectuelle</h2>
          <p className="mt-4">L'ensemble des contenus de ce site (textes, visuels, logo, formules) est la propriété exclusive de L'OYRA Cosmétique. Toute reproduction, même partielle, est interdite sans autorisation écrite.</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">Note maquette</h2>
          <p className="mt-4">Ce site est une maquette de démonstration. Les coordonnées, prix et informations juridiques sont fictifs.</p>
        </div>
      </div>
      <Link to="/" className="btn-cta mt-16">Retour à l'accueil</Link>
    </section>
  );
}

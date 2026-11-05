import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Confidentialité — L'OYRA Cosmétique" },
      { name: "description", content: "Politique de confidentialité et de protection des données de L'OYRA Cosmétique." },
      { property: "og:title", content: "Confidentialité — L'OYRA Cosmétique" },
      { property: "og:description", content: "Politique de confidentialité de L'OYRA Cosmétique." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-12">
      <h1 className="font-display text-5xl md:text-6xl">Confidentialité</h1>
      <div className="mt-16 space-y-10 text-sm leading-loose text-muted-foreground">
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">Données collectées</h2>
          <p className="mt-4">Nous collectons uniquement les données nécessaires : e-mail pour la newsletter, nom et adresse pour les commandes. Aucune donnée n'est revendue ni partagée avec des tiers à des fins commerciales.</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">Utilisation</h2>
          <p className="mt-4">Votre e-mail sert à vous envoyer nos nouveautés si vous vous êtes inscrit(e). Chaque newsletter contient un lien de désinscription immédiate.</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">Vos droits</h2>
          <p className="mt-4">Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Une simple demande à bonjour@loyra-cosmetique.fr suffit.</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">Cookies</h2>
          <p className="mt-4">Ce site n'utilise que des cookies techniques indispensables à son fonctionnement (panier, navigation). Aucun cookie publicitaire n'est déposé.</p>
        </div>
      </div>
      <Link to="/" className="btn-cta mt-16">Retour à l'accueil</Link>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "CGV — L'OYRA Cosmétique" },
      { name: "description", content: "Conditions générales de vente de la boutique en ligne L'OYRA Cosmétique." },
      { property: "og:title", content: "CGV — L'OYRA Cosmétique" },
      { property: "og:description", content: "Conditions générales de vente de la boutique L'OYRA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cgv,
});

function Cgv() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-12">
      <h1 className="font-display text-5xl md:text-6xl">CGV</h1>
      <div className="mt-16 space-y-10 text-sm leading-loose text-muted-foreground">
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">1. Commandes</h2>
          <p className="mt-4">Toute commande passée sur ce site implique l'acceptation des présentes conditions générales de vente. La commande est confirmée par e-mail après validation du paiement.</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">2. Prix et paiement</h2>
          <p className="mt-4">Les prix sont indiqués en euros, toutes taxes comprises. Le paiement s'effectue par carte bancaire via un prestataire sécurisé. Aucune donnée bancaire n'est conservée par L'OYRA Cosmétique.</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">3. Livraison</h2>
          <p className="mt-4">Expédition en 48h, livraison offerte dès 60 € d'achat en France métropolitaine. Les délais indiqués sont moyens et ne constituent pas un engagement ferme.</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">4. Retours et remboursement</h2>
          <p className="mt-4">Conformément au droit de rétractation, vous disposez de 30 jours pour retourner un produit. Les frais de retour sont à la charge du client ; le remboursement intervient sous 5 jours ouvrés après réception.</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground">5. Garanties et contact</h2>
          <p className="mt-4">Nos produits sont des cosmétiques : ils ne remplacent pas un traitement médical. Pour toute question sur une commande, écrivez à bonjour@loyra-cosmetique.fr.</p>
        </div>
      </div>
      <Link to="/" className="btn-cta mt-16">Retour à l'accueil</Link>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — L'OYRA Cosmétique · Abidjan" },
      { name: "description", content: "Questions fréquentes : livraison à Abidjan et en Côte d'Ivoire, modes de paiement Wave/Orange Money/MTN, conseils teints noirs et métisses." },
      { property: "og:title", content: "FAQ — L'OYRA Cosmétique · Abidjan" },
      { property: "og:description", content: "Toutes les réponses sur les soins L'OYRA et nos livraisons en Côte d'Ivoire." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faq,
});

const faq = [
  ["Comment se passe la livraison à Abidjan, en Côte d'Ivoire et à l'international ?", "À Abidjan (Cocody, Plateau, Marcory, Yopougon, Riviera...), les livraisons s'effectuent par coursier express sous 24h à 48h. Pour l'intérieur du pays et l'international (Europe, Amérique, Afrique...), les expéditions sont assurées par transporteur express sécurisé avec suivi direct sur WhatsApp."],
  ["Quels sont les moyens de paiement acceptés ?", "Nous acceptons Wave, Orange Money, MTN MoMo, Moov Money ainsi que les cartes bancaires Visa et Mastercard sécurisées. Le règlement à la livraison est également possible sur certaines communes d'Abidjan."],
  ["Pour quels teints vos soins sont-ils recommandés ?", "Nos formules sont spécialement équilibrées pour les teints noirs (ébène), les teints marron clair (caramel) et les teints métisses (ambrés). Elles subliment le rayonnement naturel de la mélanine sans jamais blanchir ni dénaturer votre teint."],
  ["Vos soins conviennent-ils au climat tropical humide d'Abidjan ?", "Absolument. Nos textures sont formulées pour pénétrer instantanément sans laisser de film collant ou de brillance excessive, même sous forte chaleur ou humidité."],
  ["Vos produits contiennent-ils des agents éclaircissants ou chimiques nocifs ?", "Non, formellement aucun. La Maison L'OYRA refuse tout composant décapant, parabène ou silicone. Nos actifs sont 100% nobles : karité grand cru sauvage, huile de baobab et huile de marula."],
  ["Comment obtenir un diagnostic personnalisé pour ma peau ?", "Il vous suffit de cliquer sur notre bouton WhatsApp ou de nous contacter via notre page contact. Nos conseillères expertes à Abidjan vous répondent sous 10 minutes avec une routine sur-mesure."],
] as const;

function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-12 bg-background text-foreground">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
        <MapPin className="h-3.5 w-3.5" />
        Service Clientèle Abidjan
      </div>
      <h1 className="mt-4 font-display text-5xl md:text-7xl font-light">Questions fréquentes</h1>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        Tout ce que vous souhaitez savoir sur nos rituels, nos modes de paiement locaux et la livraison en Côte d'Ivoire.
      </p>

      <Accordion type="single" collapsible defaultValue="q1" className="mt-14">
        {faq.map(([q, a], i) => (
          <AccordionItem key={q} value={`q${i + 1}`} className="border-border/80">
            <AccordionTrigger className="text-left text-sm font-medium uppercase tracking-[0.14em] hover:no-underline py-5">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-16 rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="font-display text-2xl font-light">Une question spécifique sur votre peau ?</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Nos expertes beauté à Abidjan sont disponibles 7j/7 pour vous orienter.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-cta text-xs">
            Contacter par WhatsApp / Téléphone
          </Link>
          <Link to="/e-shop" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-xs uppercase tracking-wider text-foreground hover:bg-secondary">
            Voir la boutique
          </Link>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Phone, Mail, Clock, MapPin, Send, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Conciergerie Privée — L'OYRA Cosmétique · Abidjan" },
      { name: "description", content: "Contactez nos spécialistes L'OYRA à Abidjan par WhatsApp ou appel téléphonique. Conseils sur-mesure pour peaux noires, marron clair et métisses." },
      { property: "og:title", content: "Contact & Conciergerie Privée — L'OYRA Cosmétique · Abidjan" },
      { property: "og:description", content: "Échangez directement avec votre conseillère L'OYRA à Abidjan sur WhatsApp ou par téléphone." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    complexion: "Teint Marron Clair",
    skinType: "Mixte",
    concern: "Éclat & Teint unifié",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappNumber = "+225 07 00 00 00 00";
  const displayPhone = "+225 27 22 00 00 00";
  const whatsappUrl = `https://wa.me/2250700000000?text=${encodeURIComponent(
    "Bonjour Maison L'OYRA, je souhaite bénéficier d'un diagnostic personnalisé pour ma peau et de conseils sur vos soins à Abidjan."
  )}`;

  return (
    <div className="bg-[#1C1410] text-[#FAF5EE] min-h-screen">
      {/* Hero Header - Thème Marron Foncé & Or de Luxe */}
      <section className="border-b border-[#34241B] bg-gradient-to-b from-[#261A13] to-[#1C1410] py-20 px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            Conciergerie Privée · Abidjan
          </div>
          <h1 className="mt-8 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FAF5EE]">
            Nous sommes à votre écoute
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#FAF5EE]/75 md:text-lg">
            Une question sur votre teint (noir, marron clair ou métisse), votre routine ou une commande en Côte d'Ivoire ou à l'international ?
            Nos conseillères expertes vous répondent avec chaleur et précision.
          </p>
        </div>
      </section>

      {/* Main Direct Channels (WhatsApp & Téléphone) */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* WhatsApp Direct Card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/30 bg-[#241A13] p-8 shadow-xl transition-all duration-300 hover:border-emerald-400/50 hover:shadow-2xl md:p-10">
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[11px] font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              Conseillères en ligne (Abidjan)
            </div>

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-display text-2xl md:text-3xl font-light text-[#FAF5EE]">
                Échange direct WhatsApp
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#FAF5EE]/75">
                Le moyen le plus simple et rapide : posez vos questions, envoyez des photos de votre peau pour diagnostic ou suivez votre livraison à Abidjan en direct.
              </p>

              <div className="mt-6 space-y-2 text-xs text-[#FAF5EE]/70">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>Réponse moyenne en moins de 10 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Diagnostic discret, confidentiel et personnalisé</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#34241B]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg active:scale-[0.99]"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Ouvrir la discussion WhatsApp</span>
              </a>
              <p className="mt-2 text-center text-[11px] text-[#FAF5EE]/60">
                Ligne WhatsApp directe : {whatsappNumber}
              </p>
            </div>
          </div>

          {/* Phone Hotline Card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-400/30 bg-[#241A13] p-8 shadow-xl transition-all duration-300 hover:border-amber-400/50 hover:shadow-2xl md:p-10">
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 px-3 py-1 text-[11px] font-medium text-amber-300">
              Ligne Beauté Abidjan
            </div>

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-[#1C1410] shadow-lg">
                <Phone className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-display text-2xl md:text-3xl font-light text-[#FAF5EE]">
                Appel Téléphonique
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#FAF5EE]/75">
                Vous préférez échanger de vive voix ? Nos expertes beauté en Côte d'Ivoire sont à votre écoute pour vous guider dans le choix de vos soins.
              </p>

              <div className="mt-6 space-y-2 text-xs text-[#FAF5EE]/70">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-400" />
                  <span>Du lundi au samedi : 08h30 – 19h00 (Heure d'Abidjan)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span>Orientation adaptée aux conditions climatiques ivoiriennes</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#34241B]">
              <a
                href={`tel:${displayPhone.replace(/\s+/g, "")}`}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-400 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1410] transition-all duration-300 hover:bg-amber-300 hover:shadow-lg active:scale-[0.99]"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Appeler le {displayPhone}</span>
              </a>
              <p className="mt-2 text-center text-[11px] text-[#FAF5EE]/60">
                Ligne fixe Abidjan · Équipe locale basée à Cocody
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de Diagnostic Peau Personnalisé */}
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-12">
        <div className="rounded-3xl border border-[#34241B] bg-[#241A13] p-8 md:p-12 shadow-xl">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">Diagnostic & Demande écrite</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-light text-[#FAF5EE]">
              Recevez votre ordonnance de soin
            </h3>
            <p className="mt-3 text-sm text-[#FAF5EE]/70">
              Remplissez le formulaire ci-dessous et une conseillère L'OYRA reviendra vers vous avec une prescription sur-mesure adaptée à votre teint et votre peau.
            </p>
          </div>

          {submitted ? (
            <div className="mt-10 rounded-2xl bg-[#1C1410] border border-amber-400/30 p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-amber-400" />
              <h4 className="mt-4 font-display text-2xl text-[#FAF5EE]">Votre demande a été transmise</h4>
              <p className="mx-auto mt-2 max-w-md text-sm text-[#FAF5EE]/75">
                Merci {formData.name || "chère cliente"}. Notre conseillère analyse vos réponses et vous recontactera très rapidement.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs uppercase tracking-widest text-amber-400 underline underline-offset-4 hover:opacity-80"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#FAF5EE]/70 mb-2">
                    Votre Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Awa Koné"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-[#3E2B21] bg-[#1C1410] px-4 py-3 text-sm text-[#FAF5EE] outline-none transition-colors focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#FAF5EE]/70 mb-2">
                    Numéro WhatsApp / Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+225 07 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-[#3E2B21] bg-[#1C1410] px-4 py-3 text-sm text-[#FAF5EE] outline-none transition-colors focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#FAF5EE]/70 mb-2">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="awa@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-[#3E2B21] bg-[#1C1410] px-4 py-3 text-sm text-[#FAF5EE] outline-none transition-colors focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#FAF5EE]/70 mb-2">
                    Votre Teint *
                  </label>
                  <select
                    value={formData.complexion}
                    onChange={(e) => setFormData({ ...formData, complexion: e.target.value })}
                    className="w-full rounded-xl border border-[#3E2B21] bg-[#1C1410] px-4 py-3 text-sm text-[#FAF5EE] outline-none transition-colors focus:border-amber-400"
                  >
                    <option value="Teint Noir">Teint Noir / Ébène</option>
                    <option value="Teint Marron Clair">Teint Marron Clair / Caramel</option>
                    <option value="Teint Métisse">Teint Métisse / Ambré</option>
                    <option value="Autre nuance">Autre nuance de teint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#FAF5EE]/70 mb-2">
                    Préoccupation
                  </label>
                  <select
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full rounded-xl border border-[#3E2B21] bg-[#1C1410] px-4 py-3 text-sm text-[#FAF5EE] outline-none transition-colors focus:border-amber-400"
                  >
                    <option value="Éclat & Teint unifié">Éclat & Teint unifié</option>
                    <option value="Taches & Hyperpigmentation">Taches & Hyperpigmentation</option>
                    <option value="Sécheresse & Tiraillements">Sécheresse & Tiraillements</option>
                    <option value="Excès de sébum & Brillance">Excès de sébum & Brillance</option>
                    <option value="Livraison">Livraison Abidjan & Expédition Internationale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#FAF5EE]/70 mb-2">
                  Votre Message ou Question *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Décrivez votre peau, vos habitudes de soin ou votre commune de livraison à Abidjan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-[#3E2B21] bg-[#1C1410] px-4 py-3 text-sm text-[#FAF5EE] outline-none transition-colors focus:border-amber-400"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#1C1410] shadow-md transition-all duration-300 hover:bg-amber-300 hover:shadow-lg active:scale-95"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>Envoyer ma demande</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Informations Pratiques Abidjan */}
      <section className="border-t border-[#34241B] bg-[#17100D] py-16 px-6 md:px-12">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
              <Mail className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg text-[#FAF5EE]">Par Email</h4>
            <p className="mt-2 text-sm text-[#FAF5EE]/75">contact@loyra-cosmetique.com</p>
            <p className="text-xs text-[#FAF5EE]/50 mt-1">Dédié aux questions d'ordre général et partenariats</p>
          </div>

          <div className="flex flex-col items-center md:items-start p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
              <Clock className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg text-[#FAF5EE]">Horaires d'Ouverture</h4>
            <p className="mt-2 text-sm text-[#FAF5EE]/75">Lundi – Samedi : 08h30 – 19h00</p>
            <p className="text-xs text-[#FAF5EE]/50 mt-1">Heure de Côte d'Ivoire (GMT)</p>
          </div>

          <div className="flex flex-col items-center md:items-start p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
              <MapPin className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg text-[#FAF5EE]">Maison L'OYRA</h4>
            <p className="mt-2 text-sm text-[#FAF5EE]/75">Cocody, Abidjan · Côte d'Ivoire</p>
            <p className="text-xs text-[#FAF5EE]/50 mt-1">Livraisons express sur toutes les communes d'Abidjan</p>
          </div>
        </div>
      </section>
    </div>
  );
}

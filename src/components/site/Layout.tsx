import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X, Menu, Phone, ArrowRight, MapPin } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useCart } from "@/lib/cart";
import { useCurrency, CurrencySwitcher } from "@/lib/currency";
import { LoyraLogo } from "./LoyraLogo";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/e-shop", label: "Boutique" },
  { to: "/resultats-temoignages", label: "Résultats & Témoignages" },
  { to: "/philosophie", label: "Notre Maison" },
  { to: "/contact", label: "Contact & Conseil" },
] as const;

export function Header() {
  const { count, setOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md transition-colors">
        {/* Ruban discret Côte d'Ivoire & Expédition Internationale */}
        <div className="bg-[#231812] text-[#FAF5EE] py-2 px-4 text-center text-[10.5px] uppercase tracking-[0.22em] font-light">
          <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2 px-2">
            <span className="flex items-center gap-1.5 mx-auto sm:mx-0">
              <MapPin className="h-3 w-3 text-amber-500" />
              Maison L'OYRA · Abidjan · Livraison express & Expédition internationale
            </span>
            <div className="hidden sm:flex items-center gap-4">
              <span>Conseil WhatsApp 7j/7</span>
              <span className="text-white/40">|</span>
              <CurrencySwitcher />
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="p-2 text-foreground hover:opacity-70 transition-opacity"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <div className="sm:hidden">
              <CurrencySwitcher />
            </div>
          </div>

          {/* Desktop Navigation Left */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.22em]">
            {nav.slice(0, 3).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="nav-link font-medium"
                activeProps={{ className: "nav-link text-foreground font-semibold underline underline-offset-8" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Centered Brand Logo Officiel */}
          <Link to="/" className="flex items-center justify-center py-2" aria-label="L'OYRA – Accueil">
            <LoyraLogo className="h-16 sm:h-18 md:h-20 w-auto hover:opacity-90 transition-opacity" />
          </Link>

          {/* Desktop Navigation Right & Actions */}
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.22em]">
              {nav.slice(3).map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: true }}
                  className="nav-link font-medium"
                  activeProps={{ className: "nav-link text-foreground font-semibold underline underline-offset-8" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Quick Contact & Cart Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                aria-label="Contacter le service client"
                className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                title="Conseil WhatsApp & Appel Abidjan"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
              </Link>

              <button
                onClick={() => setOpen(true)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card text-foreground hover:border-primary/40 transition-colors shadow-sm"
                aria-label="Ouvrir le panier"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0.4 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground shadow"
                  >
                    {count}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-[#231812]/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed left-0 top-0 z-50 flex h-full w-4/5 max-w-sm flex-col bg-background p-8 shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <LoyraLogo className="h-14 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fermer le menu"
                  className="p-2 text-foreground"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>

              <div className="py-4 border-b border-border">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Devise d'affichage :</p>
                <CurrencySwitcher />
              </div>

              <nav className="mt-6 flex flex-col space-y-6 text-sm uppercase tracking-[0.25em]">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="nav-link py-1 hover:text-primary transition-colors"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t border-border pt-6 space-y-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-secondary p-4 text-xs font-medium uppercase tracking-wider text-foreground"
                >
                  <span>Conseil WhatsApp Abidjan</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-[11px] text-muted-foreground text-center">
                  Maison L'OYRA · Abidjan, Côte d'Ivoire
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function CartDrawer() {
  const { open, setOpen, lines, subtotal, subtotalEUR, remove } = useCart();
  const { currency, formatPrice } = useCurrency();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-[#231812]/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background p-8 md:p-10 shadow-2xl border-l border-border"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-border pb-6">
              <div>
                <h2 className="font-display text-3xl">Votre sélection</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {lines.reduce((acc, l) => acc + l.qty, 0)} soin(s) sélectionné(s)
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="rounded-full p-2 hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>

            <div className="mt-8 flex-1 space-y-6 overflow-y-auto pr-2">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                    <ShoppingBag className="h-8 w-8" strokeWidth={1} />
                  </div>
                  <p className="mt-4 font-display text-xl">Votre panier est vide</p>
                  <p className="mt-2 text-xs text-muted-foreground max-w-xs">
                    Découvrez nos soins botaniques conçus pour sublimer l'éclat des carnations d'Afrique.
                  </p>
                  <Link
                    to="/e-shop"
                    onClick={() => setOpen(false)}
                    className="mt-6 rounded-full bg-foreground px-6 py-2.5 text-xs uppercase tracking-wider text-background"
                  >
                    Explorer la boutique
                  </Link>
                </div>
              ) : (
                lines.map((l) => (
                  <div key={l.product.id} className="flex gap-4 rounded-xl border border-border/80 p-3.5 bg-card">
                    <img
                      src={l.product.image}
                      alt={l.product.title}
                      className="h-20 w-16 rounded-lg object-cover bg-secondary"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-medium">{l.product.title}</p>
                          <p className="text-xs font-semibold text-primary">
                            {formatPrice(l.qty * l.product.price, l.qty * l.product.priceEUR)}
                          </p>
                        </div>
                        <p className="text-[11px] text-muted-foreground">{l.product.note}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Quantité : {l.qty}</span>
                        <button
                          onClick={() => remove(l.product.id)}
                          className="text-[11px] text-muted-foreground hover:text-red-700 underline underline-offset-4"
                        >
                          Retirer
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-border pt-6 mt-4">
              <div className="flex justify-between text-base font-medium">
                <span>Sous-total ({currency})</span>
                <span className="font-semibold text-primary">
                  {formatPrice(subtotal, subtotalEUR)}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Livraison express à Abidjan (Cocody, Plateau, Marcory...) & expéditions partout en Côte d'Ivoire et à l'international.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[10px] text-muted-foreground">
                <span className="rounded bg-secondary px-2 py-0.5">Wave</span>
                <span className="rounded bg-secondary px-2 py-0.5">Orange Money</span>
                <span className="rounded bg-secondary px-2 py-0.5">MTN MoMo</span>
                <span className="rounded bg-secondary px-2 py-0.5">Visa / Mastercard</span>
              </div>
              <Link
                to="/commande"
                onClick={() => setOpen(false)}
                disabled={lines.length === 0}
                className="btn-cta mt-6 w-full rounded-xl text-center disabled:pointer-events-none disabled:opacity-40 shadow-lg"
              >
                Passer la commande
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="mt-3 w-full py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Poursuivre ma sélection
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-[#231812] text-[#FAF5EE]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 text-xs text-[#FAF5EE]/70 md:grid-cols-4 md:px-12">
        <div className="md:col-span-2">
          <LoyraLogo className="h-24 sm:h-28 w-auto mb-6 !justify-start" dark={true} />
          <p className="text-sm font-light text-[#FAF5EE]/80 max-w-md leading-relaxed">
            Maison de haute cosmétique aux plantes d'Afrique créée en Côte d'Ivoire. Des formules souveraines pour célébrer et sublimer chaque teint noir, marron clair et métisse.
          </p>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-medium mb-2">Devise d'affichage :</p>
            <CurrencySwitcher />
          </div>

          <div className="mt-8 space-y-1.5 text-xs text-[#FAF5EE]/80">
            <p><strong>Siège & Laboratoire :</strong> Abidjan, Côte d'Ivoire</p>
            <p><strong>Expéditions :</strong> Abidjan, Côte d'Ivoire & International (Europe, USA, Afrique)</p>
            <p><strong>Service Client & WhatsApp :</strong> +225 07 00 00 00 00</p>
            <p><strong>Paiements sécurisés :</strong> Wave, Orange Money, MTN MoMo, Moov Money, Carte Bancaire</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-semibold uppercase tracking-widest text-[#FAF5EE] mb-4">La Maison</p>
          <ul className="space-y-2.5 uppercase tracking-wider">
            <li><Link to="/" className="hover:text-amber-300">Accueil</Link></li>
            <li><Link to="/e-shop" className="hover:text-amber-300">Boutique Officielle</Link></li>
            <li><Link to="/resultats-temoignages" className="hover:text-amber-300">Résultats & Témoignages</Link></li>
            <li><Link to="/philosophie" className="hover:text-amber-300">Notre Philosophie</Link></li>
            <li><Link to="/contact" className="hover:text-amber-300 font-semibold text-amber-400">Contact & Diagnostic</Link></li>
            <li><Link to="/faq" className="hover:text-amber-300">FAQ & Livraison</Link></li>
          </ul>
        </div>

        <div className="space-y-3 md:text-right">
          <p className="font-semibold uppercase tracking-widest text-[#FAF5EE] mb-4">Informations</p>
          <div className="space-y-2 uppercase tracking-wider">
            <p><Link to="/mentions-legales" className="hover:text-amber-300">Mentions Légales</Link></p>
            <p><Link to="/cgv" className="hover:text-amber-300">Conditions Générales (CGV)</Link></p>
            <p><Link to="/confidentialite" className="hover:text-amber-300">Politique de Confidentialité</Link></p>
            <p className="pt-2"><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-300">Instagram @loyra.ci</a></p>
            <p><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-amber-300">TikTok @loyra.ci</a></p>
          </div>
          <p className="pt-6 normal-case tracking-normal text-[#FAF5EE]/50">
            © 2026 L'OYRA Cosmétique · Abidjan, Côte d'Ivoire. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageFade({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={path}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

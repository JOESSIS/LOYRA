import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoGold from "@/assets/loyra-official-logo-gold.png";

/**
 * Barre de progression ultra-fine et dorée au sommet de l'écran lors du changement de page.
 */
export function RouteProgressBar() {
  const isNavigating = useRouterState({ select: (s) => s.status === "pending" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isNavigating) {
      setVisible(true);
    } else {
      timer = setTimeout(() => setVisible(false), 280);
    }
    return () => clearTimeout(timer);
  }, [isNavigating]);

  if (!visible) return null;

  return (
    <div
      role="progressbar"
      aria-label="Chargement de la page"
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-[#231812]/20 pointer-events-none overflow-hidden"
    >
      <div className="h-full w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200 animate-pulse shadow-[0_0_12px_rgba(217,119,6,0.8)]" />
    </div>
  );
}

/**
 * Écran d'accueil de chargement haute couture Maison L'OYRA avec le logo officiel de la marque.
 * S'affiche au premier chargement puis s'efface délicatement dès que l'application est prête.
 */
export function AppLoadingScreen() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Retirer le preloader HTML natif dès que React est monté
    const nativePreloader = document.getElementById("loyra-initial-preloader");
    if (nativePreloader) {
      nativePreloader.classList.add("loyra-preloader-hidden");
      setTimeout(() => {
        nativePreloader.remove();
      }, 500);
    }

    // Effacement fluide de l'écran d'accueil
    const timer = setTimeout(() => {
      setMounted(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          key="app-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1F140E] text-[#FAF5EE] pointer-events-none select-none"
        >
          {/* Logo Officiel L'OYRA et Halo d'or */}
          <div className="relative flex flex-col items-center">
            {/* Halo lumineux ambré */}
            <div className="absolute -inset-10 rounded-full bg-amber-500/10 blur-2xl animate-pulse" />

            {/* Logo Officiel de la marque */}
            <div className="relative mb-6 max-w-[230px] sm:max-w-[270px] px-4">
              <img
                src={logoGold}
                alt="L'OYRA — Haute Cosmétique"
                className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(232,186,107,0.35)]"
                loading="eager"
              />
            </div>

            {/* Ligne de chargement dorée raffinée */}
            <div className="mt-2 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-[loyraShimmer_1.4s_infinite_ease-in-out]" />
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-white/50 font-light">
              Sublimation de votre éclat...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

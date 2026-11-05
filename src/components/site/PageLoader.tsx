import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
 * Écran d'accueil de chargement haute couture Maison L'OYRA.
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
    }, 600);

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
          {/* Logo et Halo d'or */}
          <div className="relative flex flex-col items-center">
            {/* Halo lumineux ambré */}
            <div className="absolute -inset-10 rounded-full bg-amber-500/10 blur-2xl animate-pulse" />

            {/* Emblème Couronne & Monogramme */}
            <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-amber-400/30 bg-[#281C15]/80 shadow-[0_0_25px_rgba(217,119,6,0.2)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-amber-400"
              >
                <path
                  d="M2 14 L6 6 L12 11 L18 6 L22 14 Z"
                  fill="currentColor"
                  opacity="0.9"
                />
                <circle cx="12" cy="18" r="2" fill="currentColor" />
              </svg>
            </div>

            {/* Titre L'OYRA */}
            <h1 className="font-display text-4xl sm:text-5xl font-light tracking-[0.22em] text-[#FAF5EE]">
              L'OYRÂ
            </h1>

            <p className="mt-2 text-[10.5px] uppercase tracking-[0.32em] text-amber-300/80 font-light">
              Maison de Haute Cosmétique · Abidjan
            </p>

            {/* Ligne de chargement dorée raffinée */}
            <div className="mt-8 h-[2px] w-36 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-[loyraShimmer_1.4s_infinite_ease-in-out]" />
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/50 font-light">
              Sublimation de votre éclat...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Currency = "FCFA" | "EUR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceFCFA: number, priceEUR?: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

// Taux officiel : 1 EUR ≈ 655,957 FCFA
export const RATE_EUR_TO_FCFA = 655;

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("FCFA");

  useEffect(() => {
    const saved = localStorage.getItem("loyra_currency") as Currency | null;
    if (saved === "FCFA" || saved === "EUR") {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("loyra_currency", c);
  };

  const formatPrice = (priceFCFA: number, priceEUR?: number) => {
    if (currency === "FCFA") {
      return `${priceFCFA.toLocaleString("fr-FR")} FCFA`;
    }
    const eur = priceEUR ?? Math.round(priceFCFA / RATE_EUR_TO_FCFA);
    return `${eur} €`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    // Fallback si hors du provider
    return {
      currency: "FCFA" as Currency,
      setCurrency: () => {},
      formatPrice: (priceFCFA: number, priceEUR?: number) =>
        `${priceFCFA.toLocaleString("fr-FR")} FCFA`,
    };
  }
  return ctx;
}

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card/90 p-0.5 text-[10px] font-medium shadow-sm backdrop-blur">
      <button
        type="button"
        onClick={() => setCurrency("FCFA")}
        className={`rounded-full px-2.5 py-1 transition-all ${
          currency === "FCFA"
            ? "bg-primary text-primary-foreground font-semibold shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FCFA
      </button>
      <button
        type="button"
        onClick={() => setCurrency("EUR")}
        className={`rounded-full px-2.5 py-1 transition-all ${
          currency === "EUR"
            ? "bg-primary text-primary-foreground font-semibold shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EUR (€)
      </button>
    </div>
  );
}

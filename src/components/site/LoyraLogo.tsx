import logoLight from "@/assets/loyra-official-logo-transparent.png";
import logoGold from "@/assets/loyra-official-logo-gold.png";

export function LoyraLogo({
  className = "h-14 w-auto",
  dark = false,
  alt = "L'OYRA — Haute Cosmétique",
}: {
  className?: string;
  dark?: boolean;
  alt?: string;
}) {
  const logoSrc = dark ? logoGold : logoLight;

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt={alt}
        className="h-full w-auto max-w-full object-contain"
        loading="eager"
      />
    </div>
  );
}

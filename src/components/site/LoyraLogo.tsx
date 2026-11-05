export function LoyraLogo({
  className = "h-12 w-auto",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const textColor = dark ? "#FAF5EE" : "#231812";
  const goldColor = "#C6924A";

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 240 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full"
      >
        {/* Subtle Halo Arch */}
        <path
          d="M 40 46 A 80 50 0 0 1 200 46"
          stroke={goldColor}
          strokeWidth="1.2"
          strokeDasharray="2 2"
          opacity="0.45"
          fill="none"
        />

        {/* Brand Text L'OYRÂ */}
        <text
          x="120"
          y="42"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="36"
          fontWeight="400"
          letterSpacing="0.16em"
          fill={textColor}
        >
          L'OYRÂ
        </text>

        {/* Small Crown Icon above Â */}
        <g transform="translate(162, 11) scale(0.65)">
          <path
            d="M2 12 L5 4 L9 9 L13 2 L17 9 L21 4 L24 12 Z"
            fill={goldColor}
          />
        </g>

        {/* Subtitle Cosmétique - Abidjan */}
        <text
          x="120"
          y="58"
          textAnchor="middle"
          fontFamily="'Jost', system-ui, sans-serif"
          fontSize="7.5"
          fontWeight="400"
          letterSpacing="0.32em"
          fill={goldColor}
        >
          HAUTE COSMÉTIQUE · ABIDJAN
        </text>
      </svg>
    </div>
  );
}

interface LogoProps {
  className?: string;
  showText?: boolean;
  darkMode?: boolean;
}

export default function Logo({ className = "h-16", showText = true, darkMode = false }: LogoProps) {
  // Colors
  const primaryColor = darkMode ? "#ffffff" : "#166534"; // forest-800
  const accentColor = "#4ade80"; // green-400 (Leaf accent)
  const secondaryColor = darkMode ? "#cbd5e1" : "#475569"; // slate-600

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Symbol */}
      <svg 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto flex-shrink-0"
        aria-label="DFW Landscaping Pros Logo"
      >
        {/* Shield/Badge Background shape - subtle */}
        <path 
          d="M32 4 L56 16 V32 C56 46 45 58 32 62 C19 58 8 46 8 32 V16 L32 4Z" 
          fill={darkMode ? "rgba(255,255,255,0.1)" : "rgba(22, 101, 52, 0.05)"} 
        />
        
        {/* Leaf Shape - Abstract D */}
        <path 
          d="M32 12 C32 12 48 12 48 28 C48 44 32 44 32 44" 
          stroke={primaryColor} 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Stem/Trunk */}
        <path 
          d="M32 12 V52" 
          stroke={primaryColor} 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        
        {/* Leaf Veins / F - W suggestions */}
        <path 
          d="M32 24 L42 20" 
          stroke={primaryColor} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <path 
          d="M32 34 L44 30" 
          stroke={primaryColor} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        
        {/* Accent Leaf on Left */}
        <path 
          d="M32 44 C32 44 16 44 16 32 C16 24 22 18 32 18" 
          stroke={accentColor} 
          strokeWidth="4" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <span 
            className="font-display font-bold tracking-tight uppercase text-2xl"
            style={{ color: primaryColor }}
          >
            DFW
          </span>
          <span 
            className="text-xs font-bold tracking-[0.15em] uppercase"
            style={{ color: secondaryColor }}
          >
            Landscaping
          </span>
        </div>
      )}
    </div>
  );
}

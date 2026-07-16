export default function Logo() {
  return (
    <span className="logo-mark">
      <svg className="logo-icon" viewBox="0 0 120 60" aria-hidden="true">
        <g className="logo-wave" fill="none" strokeWidth="5" strokeLinecap="round">
          <path d="M14 24 C 8 24 8 36 14 36" />
          <path d="M22 20 C 16 20 16 40 22 40" />
          <line x1="34" y1="18" x2="34" y2="42" />
          <line x1="44" y1="10" x2="44" y2="50" />
          <line x1="54" y1="22" x2="54" y2="38" />
          <line x1="64" y1="6" x2="64" y2="54" />
          <line x1="74" y1="16" x2="74" y2="44" />
          <line x1="84" y1="24" x2="84" y2="36" />
          <path d="M98 20 C 104 20 104 40 98 40" />
          <path d="M106 24 C 112 24 112 36 106 36" />
        </g>
      </svg>
      <span className="logo-word">KallUS</span>
    </span>
  );
}

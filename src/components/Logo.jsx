export default function Logo() {
  return (
    <span className="logo-mark">
      <svg className="logo-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M6 6 L32 32 L6 58 Z" fill="currentColor" />
        <path d="M58 6 L32 32 L58 58 Z" fill="currentColor" />
        <rect x="28" y="2" width="8" height="20" fill="currentColor" />
        <rect x="28" y="42" width="8" height="20" fill="currentColor" />
      </svg>
      <span className="logo-word">KALLUS.IO</span>
    </span>
  );
}

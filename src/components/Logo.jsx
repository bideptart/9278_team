// NIXXY HEALTH lockup: medical-cross icon + wordmark (teal "XX") + HEALTH subtitle.
export default function Logo() {
  return (
    <span className="logo" aria-label="NIXXY HEALTH">
      <svg className="logo-icon" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="lcrs" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#43484c" /><stop offset="1" stopColor="#16191b" />
          </linearGradient>
          <linearGradient id="lleaf" x1="0.1" y1="0.1" x2="0.9" y2="1">
            <stop offset="0" stopColor="#2fc0bb" /><stop offset="0.55" stopColor="#1a8c92" /><stop offset="1" stopColor="#143f63" />
          </linearGradient>
          <linearGradient id="lring" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#34c2bd" /><stop offset="1" stopColor="#0f7b80" />
          </linearGradient>
        </defs>
        <g fill="#d9dde0">
          <rect x="18.5" y="2.5" width="27" height="59" rx="10" />
          <rect x="2.5" y="18.5" width="59" height="27" rx="10" />
        </g>
        <g fill="url(#lcrs)">
          <rect x="21" y="5" width="22" height="54" rx="7.5" />
          <rect x="5" y="21" width="54" height="22" rx="7.5" />
        </g>
        <path d="M21.5 52 C22.5 41 27 34.5 39.5 31.5 C40.5 41 37 49 29.5 52.5 C26 54 23 54 21.5 52 Z" fill="url(#lleaf)" />
        <path d="M21.5 52 C22.5 42.5 26 36.5 33 33.5 C30.5 41 27.5 47.5 24 51.5 C23 52.5 22 52.6 21.5 52 Z" fill="#f1fbfa" opacity="0.92" />
        <circle cx="32" cy="23.5" r="8" fill="#0e2b32" />
        <circle cx="32" cy="23.5" r="6.3" fill="url(#lring)" />
        <circle cx="32" cy="23.5" r="3.1" fill="#0e2b32" />
      </svg>
      <span className="logo-sep" aria-hidden="true" />
      <span className="logo-text">
        <span className="logo-name">
          <span className="lw-sil">NI</span><span className="lw-x">XX</span><span className="lw-sil">Y</span>
        </span>
        <span className="logo-sub">HEALTH</span>
      </span>
    </span>
  );
}

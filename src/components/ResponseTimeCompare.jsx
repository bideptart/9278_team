import { useEffect, useState } from 'react';

const rows = [
  {
    tone: 'kallus',
    label: 'kallus.io',
    sub: '<300ms to first response',
    pct: 100,
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
  },
  {
    tone: 'hold',
    label: 'Traditional hold queue',
    sub: 'Minutes of hold music',
    pct: 62,
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  },
  {
    tone: 'miss',
    label: 'Unanswered call',
    sub: 'Caller hangs up',
    pct: 8,
    icon: <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 4.05.85 2 2 0 0 1 1.75 2v3.5a2 2 0 0 1-2 2A18 18 0 0 1 3 4.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 1.75 12.84 12.84 0 0 0 .85 4.05 2 2 0 0 1-.45 2.11ZM3 3l18 18" />,
  },
];

export default function ResponseTimeCompare() {
  const [step, setStep] = useState(0); // how many bars have filled so far

  useEffect(() => {
    const delay = step === 0 ? 500 : step < rows.length ? 1300 : 2000;
    const t = setTimeout(() => setStep((n) => (n < rows.length ? n + 1 : 0)), delay);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="lc-section">
      <div className="lc-layout">
        <div className="section-head lc-head">
          <p className="hiw-badge"><span className="live-dot" /> Built for speed</p>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)' }}>While they're still on hold, kallus.io already answered.</h2>
        </div>

        <div className="lc-chart">
          {rows.map((r, i) => {
            const filled = i < step;
            return (
              <div className={`lc-col lc-col--${r.tone}${filled ? ' is-filled' : ''}`} key={r.label}>
                <div className="lc-col-track">
                  <span className="lc-col-fill" style={{ height: filled ? `${r.pct}%` : '0%' }} />
                </div>
                <div className="lc-col-meta">
                  <span className="lc-col-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{r.icon}</svg>
                  </span>
                  <div className="lc-col-label">{r.label}</div>
                  <div className="lc-col-value">{r.sub}</div>
                  {r.tone === 'kallus' && <span className="lc-badge">Fastest</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

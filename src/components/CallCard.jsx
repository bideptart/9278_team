import { useEffect, useRef, useState } from 'react';

const script = [
  { who: 'caller', text: 'Sawubona, ngingathola usizo ngomkhiqizo?', tag: 'isiZulu' },
  { who: 'agent', text: 'Yebo! Ngingakusiza. Yini ofuna ukwazi?', tag: 'isiZulu' },
  { who: 'caller', text: 'Actually, can we switch to English?', tag: 'English' },
  { who: 'agent', text: 'Of course. How can I help you today?', tag: 'English' },
];

export default function CallCard() {
  const [shown, setShown] = useState(0); // how many lines revealed
  const [typing, setTyping] = useState(true);
  const [seconds, setSeconds] = useState(8);
  const [latency, setLatency] = useState(184);
  const bodyRef = useRef(null);

  // Reveal lines one at a time, then pause and loop.
  useEffect(() => {
    let t;
    if (shown < script.length) {
      setTyping(true);
      t = setTimeout(() => {
        setTyping(false);
        setShown((n) => n + 1);
      }, shown === 0 ? 700 : 1500);
    } else {
      t = setTimeout(() => setShown(0), 3200);
    }
    return () => clearTimeout(t);
  }, [shown]);

  // Call timer ticking up.
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s >= 59 ? 8 : s + 1)), 1000);
    return () => clearInterval(id);
  }, []);

  // Latency reading drifts slightly to feel alive.
  useEffect(() => {
    const id = setInterval(() => setLatency((l) => {
      const next = l + (Math.floor((seconds * 37) % 23) - 11);
      return Math.max(120, Math.min(290, next));
    }), 900);
    return () => clearInterval(id);
  }, [seconds]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [shown, typing]);

  const visible = script.slice(0, shown);
  const nextWho = shown < script.length ? script[shown].who : null;
  const speaking = typing && nextWho === 'agent';

  return (
    <div className="call-card" aria-hidden="true">
      <div className="call-glow" />

      <div className="cc-header">
        <div className="cc-header-left">
          <div className="cc-avatar-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 14.5a3 3 0 0 0 3-3v-5a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z" fill="currentColor" />
              <path d="M18.5 11.5a6.5 6.5 0 0 1-13 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="cc-agent-name">KallUs Voice Agent</div>
            <div className="cc-agent-meta">Inbound · Live call</div>
          </div>
        </div>
        <span className="cc-live-badge"><span className="live-dot" />LIVE</span>
      </div>

      <div className="call-transcript" ref={bodyRef}>
        {visible.map((t, i) => (
          <div key={i} className={`bubble ${t.who}`}>
            <span className="bubble-who">{t.who === 'agent' ? 'KallUs' : 'Caller'}</span>
            {t.text}
            <span className="bubble-tag">{t.tag}</span>
          </div>
        ))}
        {typing && nextWho && (
          <div className={`bubble ${nextWho} is-typing`}>
            <span className="bubble-who">{nextWho === 'agent' ? 'KallUs' : 'Caller'}</span>
            <span className="dots"><i /><i /><i /></span>
          </div>
        )}
      </div>

      <div className="cc-footer">
        <div className="cc-voicebars-row" data-active={speaking}>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${(i % 8) * 0.08}s` }} />
          ))}
        </div>
        <span className="cc-latency">Latency <strong>{latency}ms</strong></span>
      </div>

      <div className="call-foot">
        <span className="tag">Intent: booking</span>
        <span className="tag">Sentiment: positive</span>
        <span className="tag accent">↳ Calendar</span>
      </div>
    </div>
  );
}

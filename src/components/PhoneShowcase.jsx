import { useEffect, useRef, useState } from 'react';

export default function PhoneShowcase() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // Toggles (not one-shot) so the tilt-to-front + card reveal replays every
  // time this scrolls into view, whether scrolling up or down.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setInView(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="phone-stage" ref={ref}>
      <div className={`phone-rotate${inView ? ' faced' : ''}`}>
        <div className="phone-frame">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="phone-statusbar">
              <span>9:41</span>
              <span>●●● 📶 🔋</span>
            </div>
            <p className="phone-incoming">INCOMING</p>
            <p className="phone-number">+1 415 · 555 · 0142</p>
            <div className="phone-avatar">AI</div>
            <p className="phone-name">AI Receptionist</p>
            <p className="phone-oncall"><span className="live-dot" /> On call · 00:42</p>

            <div className="phone-controls">
              <div className="pctl-cell">
                <span className="pctl">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-3-3" />
                    <path d="M19 10v2a7 7 0 0 1-.66 3" />
                    <path d="M5 10v2a7 7 0 0 0 12 5" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                </span>
                <span className="pctl-label">mute</span>
              </div>
              <div className="pctl-cell">
                <span className="pctl">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="6" cy="6" r="1.6" /><circle cx="12" cy="6" r="1.6" /><circle cx="18" cy="6" r="1.6" />
                    <circle cx="6" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="18" cy="12" r="1.6" />
                    <circle cx="6" cy="18" r="1.6" /><circle cx="12" cy="18" r="1.6" /><circle cx="18" cy="18" r="1.6" />
                  </svg>
                </span>
                <span className="pctl-label">keypad</span>
              </div>
              <div className="pctl-cell">
                <span className="pctl pctl--on">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                </span>
                <span className="pctl-label">audio</span>
              </div>
              <div className="pctl-cell">
                <span className="pctl">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" />
                  </svg>
                </span>
                <span className="pctl-label">add call</span>
              </div>
              <div className="pctl-cell">
                <span className="pctl">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </span>
                <span className="pctl-label">FaceTime</span>
              </div>
              <div className="pctl-cell">
                <span className="pctl">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <span className="pctl-label">contacts</span>
              </div>
            </div>

            <span className="pctl-end">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'rotate(135deg)' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="phone-card pc-1">
          <span className="pc-icon">✓</span>
          <div>
            <div className="pc-title">Call answered</div>
            <div className="pc-sub">0.3s pickup</div>
          </div>
        </div>
        <div className="phone-card pc-2">
          <span className="pc-icon">✎</span>
          <div>
            <div className="pc-title">Live transcript</div>
            <div className="pc-sub">32+ languages</div>
          </div>
        </div>
        <div className="phone-card pc-3">
          <span className="pc-icon">↳</span>
          <div>
            <div className="pc-title">CRM synced</div>
            <div className="pc-sub">HubSpot · contact +1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

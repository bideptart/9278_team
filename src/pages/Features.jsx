import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { features, faqs, steps, metrics } from '../data/content.js';
import { NIXXY_ICONS, Check } from '../components/FeatureIcons.jsx';
import useCardStack from '../hooks/useCardStack.js';
import Reveal from '../components/Reveal.jsx';
import IntegrationsCarousel from '../components/IntegrationsCarousel.jsx';
import Seo from '../components/Seo.jsx';

function useCallTimer() {
  const [seconds, setSeconds] = useState(3);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

export default function Features() {
  const stackRef = useRef(null);
  useCardStack(stackRef);
  const callTime = useCallTimer();

  return (
    <>
    <Seo
      title="Features"
      description="Every capability of the KallUS AI voice receptionist — sub-second answering, natural intent understanding, live actions in your tools, RAG over your documents, and a self-hosted control panel."
    />
    <div className="container page-body feat-page" id="content">
      <Reveal className="hero-split" style={{ marginBottom: 120 }}>
        <div className="hero-copy">
          <span className="pill-badge" style={{ marginTop: 12 }}><span className="dot" />AI voice receptionist</span>
          <div className="cta-row" style={{ marginTop: 38, marginBottom: 42 }}>
            <span className="tag">Patient intake</span>
            <span className="tag">Multi-language</span>
            <span className="tag">24/7 coverage</span>
            <span className="tag">Same-day live</span>
          </div>
          <h1 style={{ fontSize: 'clamp(38px, 6.4vw, 72px)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            A call queue your <span className="grad">patients won't dread.</span>
          </h1>
          <p className="lead" style={{ marginTop: 20, fontSize: 17 }}>
            Appointment booking. Insurance and billing triage. After-hours coverage.
            Every call routed automatically — no hold music, no front-desk backlog.
          </p>
          <div className="cta-row" style={{ marginTop: 56 }}>
            <Link to="/pricing" className="btn btn-sheen">See plans & pricing <span className="arrow">→</span></Link>
            <Link to="/contact" className="btn btn-ghost">Book a demo</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-stage feat-diagram-stage">
            <div className="phone-frame feat-diagram-frame">
              <div className="phone-notch" />
              <div className="phone-screen feat-diagram-screen">
                <div className="phone-statusbar">
                  <span>9:41</span>
                  <span>●●● 📶 🔋</span>
                </div>
                <p className="phone-incoming">Incoming call</p>
                <p className="phone-number">+27 21 · 555 · 0142</p>
                <div className="phone-avatar phone-avatar--live">AI</div>
                <p className="phone-name">AI Receptionist</p>
                <p className="phone-oncall"><span className="live-dot" /> Answering · {callTime}</p>

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
                    <span className="pctl-label">video</span>
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
          </div>
        </div>
      </Reveal>

      <div className="feat-split" style={{ marginTop: 80, paddingBottom: 80 }}>
        {/* left — sticky intro */}
        <aside className="feat-intro">
          <span className="pill-badge"><span className="dot" />The capability library</span>
          <h2 className="feat-intro-title" style={{ marginTop: 24 }}>
            Everything a great receptionist does — <span className="grad">at machine scale.</span>
          </h2>
          <p className="lead feat-intro-lead" style={{ marginTop: 30 }}>
            kallus.io answers, understands, books, and routes every call. Here's what powers
            the conversation.
          </p>
          <div className="cta-row feat-intro-cta" style={{ marginTop: 40 }}>
            <Link to="/pricing" className="btn btn-sheen">
              See the full feature matrix <span className="arrow">→</span>
            </Link>
            <Link to="/contact" className="btn btn-ghost">Book a demo</Link>
          </div>
        </aside>

        {/* right — stacked feature cards (sticky, deck-of-cards depth on scroll) */}
        <div className="feat-stack" ref={stackRef}>
          {features.map((f, i) => {
            const Icon = NIXXY_ICONS[f.title];
            return (
              <article className="feat-card" key={f.title} style={{ '--i': i }}>
                <div className="feat-card-head">
                  <span className="feat-num">Stack · {String(i + 1).padStart(2, '0')}</span>
                  {Icon && <span className="feat-badge"><Icon /></span>}
                </div>
                <h3 className="feat-card-title">{f.title}</h3>
                <p className="feat-card-desc">{f.desc}</p>
                {f.bullet && (
                  <p className="feat-bullet"><Check />{f.bullet}</p>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <div className="soft-panel" style={{ marginTop: 96 }}>
        <Reveal className="section-head">
          <span className="pill-badge"><span className="dot" />How it works</span>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)' }}>Live in three steps.</h2>
        </Reveal>
        <div className="grid grid-3">
          {steps.map((s, i) => (
            <Reveal className="usecase glow-card" delay={i * 90} key={s.title}>
              <span className="usecase-tag">/{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="section-head faq-center" style={{ marginTop: 96 }}>
        <span className="pill-badge"><span className="dot" />Integrations</span>
        <h2>Plugs into what you already use.</h2>
        <p className="lead" style={{ marginTop: 12 }}>
          Calendars, messaging, and automation — connected out of the box,
          no engineering required.
        </p>
      </Reveal>
      <IntegrationsCarousel />

      <div className="soft-panel" style={{ marginTop: 96 }}>
        <Reveal className="section-head faq-center">
          <span className="pill-badge"><span className="dot" />By the numbers</span>
          <h2>Trusted at scale.</h2>
        </Reveal>
        <div className="grid grid-4" style={{ marginTop: 32 }}>
          {metrics.map((m, i) => (
            <Reveal className="usecase glow-card" delay={i * 90} key={m.label} style={{ textAlign: 'center' }}>
              <h3 className="grad" style={{ fontSize: 'clamp(28px,3.5vw,40px)' }}>{m.value}</h3>
              <p>{m.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="section-head faq-center" style={{ marginTop: 96 }}>
        <span className="pill-badge"><span className="dot" />FAQ</span>
        <h2>Questions, answered.</h2>
      </Reveal>
      <div className="faq faq-narrow">
        {faqs.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </div>

    <section className="cta-band hiw-cta">
      <div className="glow glow-cta" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <p className="hiw-badge hiw-badge--center hiw-badge--star">★ Ready when you are</p>
          <h2>See it answer your first call today.</h2>
          <p>Design your agent, connect your knowledge, and forward your line — live in minutes.</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <Link to="/pricing" className="btn btn-sheen">See plans & pricing <span className="arrow">→</span></Link>
            <Link to="/contact" className="btn btn-ghost hiw-cta-ghost">Book a demo</Link>
          </div>
        </Reveal>
      </div>
    </section>
    </>
  );
}

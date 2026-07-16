import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { features, faqs, steps, metrics } from '../data/content.js';
import { NIXXY_ICONS, Check } from '../components/FeatureIcons.jsx';
import useCardStack from '../hooks/useCardStack.js';
import Reveal from '../components/Reveal.jsx';
import IntegrationsCarousel from '../components/IntegrationsCarousel.jsx';
import CallRoutingDiagram from '../components/CallRoutingDiagram.jsx';

export default function Features() {
  const stackRef = useRef(null);
  useCardStack(stackRef);

  return (
    <div className="container page-body feat-page" id="content">
      <Reveal className="hero-split" style={{ marginBottom: 120, paddingTop: 40 }}>
        <div className="hero-copy">
          <p className="eyebrow" style={{ display: 'flex' }}>Feature</p>
          <span className="pill-badge" style={{ marginTop: 12 }}><span className="dot" />AI voice receptionist</span>
          <div className="cta-row" style={{ marginTop: 38, marginBottom: 42 }}>
            <span className="tag">Patient intake</span>
            <span className="tag">Multi-language</span>
            <span className="tag">24/7 coverage</span>
            <span className="tag">Same-day live</span>
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
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
        <div className="hero-visual"><CallRoutingDiagram /></div>
      </Reveal>

      <div className="feat-split" style={{ marginTop: 80, paddingBottom: 80 }}>
        {/* left — sticky intro */}
        <aside className="feat-intro">
          <span className="pill-badge"><span className="dot" />The capability library</span>
          <h1 className="feat-intro-title" style={{ marginTop: 24 }}>
            Everything a great receptionist does — <span className="grad">at machine scale.</span>
          </h1>
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
  );
}

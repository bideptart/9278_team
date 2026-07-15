import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { features, faqs, steps } from '../data/content.js';
import { NIXXY_ICONS, Check } from '../components/FeatureIcons.jsx';
import useCardStack from '../hooks/useCardStack.js';
import Reveal from '../components/Reveal.jsx';
import IntegrationsCarousel from '../components/IntegrationsCarousel.jsx';

export default function Features() {
  const stackRef = useRef(null);
  useCardStack(stackRef);

  return (
    <div className="container page-body feat-page" id="content">
      <div className="feat-split">
        {/* left — sticky intro */}
        <aside className="feat-intro">
          <p className="eyebrow">The capability library</p>
          <h1 className="feat-intro-title">
            Everything a great receptionist does — <span className="grad">at machine scale.</span>
          </h1>
          <p className="lead feat-intro-lead">
            NIXXY answers, understands, books, and routes every call. Here's what powers
            the conversation.
          </p>
          <div className="cta-row feat-intro-cta">
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
          <p className="eyebrow">How it works</p>
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
          Calendars, CRMs, messaging, and automation — connected out of the box,
          no engineering required.
        </p>
      </Reveal>
      <IntegrationsCarousel />

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

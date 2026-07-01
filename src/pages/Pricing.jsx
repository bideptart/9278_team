import { Link } from 'react-router-dom';
import { plans, faqs } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

const billing = [
  ['Billed monthly', 'Included minutes and agents reset every cycle. Cancel anytime.'],
  ['Per-second overage', 'Go past your minutes and you\'re billed per second at your plan\'s effective rate.'],
  ['No setup fees', 'Your phone number is included and assigned automatically at checkout.'],
];

export default function Pricing() {
  const scrollToPlans = () =>
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <section className="pricing-hero container">
        <Reveal>
          <p className="eyebrow">Pricing</p>
          <h1 style={{ fontSize: 'clamp(38px,6.4vw,72px)', maxWidth: '15ch' }}>
            Simple plans that <span className="grad">scale with you.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24 }}>
            Every plan includes AI voice agents and minutes. Start small and move up
            as your call volume grows — only pay for what you go over.
          </p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <button type="button" className="btn btn-cta" onClick={scrollToPlans}>
              View plans <span className="arrow">↓</span>
            </button>
            <Link to="/contact" className="btn btn-ghost">Talk to sales</Link>
          </div>
        </Reveal>
      </section>

      <div className="container pricing-body" id="plans">
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <Reveal as="div" delay={i * 90} className={`price-card${p.featured ? ' featured' : ''}`} key={p.name}>
            {p.featured && <span className="badge">Most popular</span>}
            <h3 className="plan-name">{p.name}</h3>
            <p className="plan-blurb">{p.blurb}</p>
            <div className="plan-rate"><span>{p.price}</span> /mo</div>
            <div className="plan-meta">{p.meta}</div>
            <ul className="plan-features">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link to="/signup" className={`btn${p.featured ? ' btn-sheen' : ' btn-ghost'}`} style={{ width: '100%', justifyContent: 'center' }}>
              Get started
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="section-head" style={{ marginTop: 80 }}>
        <p className="eyebrow">How billing works</p>
        <h2 style={{ fontSize: 'clamp(24px,3.6vw,38px)' }}>Predictable, month to month.</h2>
      </Reveal>
      <div className="grid grid-3">
        {billing.map(([t, d], i) => (
          <Reveal delay={i * 80} className="card" key={t}>
            <h3 className="card-title">{t}</h3>
            <p className="card-desc">{d}</p>
          </Reveal>
        ))}
      </div>

      <div className="section-head" style={{ marginTop: 80 }}>
        <p className="eyebrow">FAQ</p>
        <h2 style={{ fontSize: 'clamp(24px,3.6vw,38px)' }}>Pricing questions.</h2>
      </div>
      <div className="faq">
        {faqs.slice(4).concat(faqs.slice(0, 1)).map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>

      </div>
    </>
  );
}

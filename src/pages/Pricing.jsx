import { Link } from 'react-router-dom';
import { plans } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

const billing = [
  ['Prepaid wallet billing', 'Buy credit up front and your clinic\'s minutes draw down as patient calls come in. Top up anytime from ₹500.'],
  ['Per-second overage', 'Go past your included minutes and you\'re billed per second at your plan\'s effective rate — as low as ₹10/min on Scale.'],
  ['GST included at checkout', 'Every purchase includes a GST invoice automatically. Your clinic\'s phone number is assigned at signup — no separate setup fee.'],
];

const pricingFaqs = [
  {
    q: 'What does it cost?',
    a: 'Pay-as-you-go plans starting at ₹2,999/mo, billed once as wallet credit. Each plan includes voice agents and minutes; go over and you\'re billed per second at your plan\'s effective rate — as low as ₹10/min on Scale.',
  },
  {
    q: 'Is GST included?',
    a: 'GST is charged at checkout on every purchase, and you get a GST invoice automatically — no separate paperwork for your practice.',
  },
  {
    q: 'Can I just top up my wallet?',
    a: 'Yes. Top-ups are available from ₹500 any time your balance runs low, on top of your plan\'s included minutes.',
  },
  {
    q: 'Does it handle patient calls after hours?',
    a: 'Yes. Every plan answers around the clock — booking, rescheduling, and confirming appointments, answering insurance questions, and triaging urgent calls after hours.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, there\'s no lock-in. Cancel anytime and you keep any unused wallet credit until it expires.',
  },
];

export default function Pricing() {
  const scrollToPlans = () =>
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="kallus-theme">
      <section className="pricing-hero container">
        <Reveal>
          <p className="eyebrow">Pay as you go · INR pricing · GST invoices</p>
          <h1 style={{ fontSize: 'clamp(38px,6.4vw,72px)', maxWidth: '15ch' }}>
            Pick the plan for <span className="grad">your practice.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24 }}>
            Every plan includes AI voice agents built for patient calls — booking,
            rescheduling, insurance questions, and after-hours triage. All plans include
            inbound calling, call recording, and real-time transcription. Prices in ₹,
            billed once as wallet credit.
          </p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <button type="button" className="btn btn-sheen" onClick={scrollToPlans}>
              View plans <span className="arrow">↓</span>
            </button>
            <Link to="/contact" className="btn btn-sheen">Talk to sales</Link>
          </div>
        </Reveal>
      </section>

      <div className="container pricing-body" id="plans">
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <Reveal
            as="div"
            delay={i * 90}
            className={`price-card${p.featured ? ' featured' : ''}`}
            key={p.name}
          >
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
            <div className="plan-actions">
              <Link
                to="/contact"
                className="btn btn-sheen"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Buy {p.price} now
              </Link>
            </div>
            <p className="plan-gst">GST charged at checkout.</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="section-head" style={{ marginTop: 80 }}>
        <p className="eyebrow">How billing works</p>
        <h2 style={{ fontSize: 'clamp(24px,3.6vw,38px)' }}>Predictable billing for your practice.</h2>
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
        <h2 style={{ fontSize: 'clamp(24px,3.6vw,38px)' }}>Everything your practice needs to know.</h2>
      </div>
      <div className="faq">
        {pricingFaqs.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>

      <p className="plan-gst" style={{ marginTop: 40 }}>
        GST charged at checkout. Top-ups available from ₹500. Cancel anytime.
      </p>

      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

const trustBadges = [
  'HIPAA-ready',
  'GST-compliant invoicing',
  '99.9% uptime SLA',
  'Cancel anytime',
];

const comparison = [
  { feature: 'Included minutes', values: ['250 min', '800 min', '3,000 min'] },
  { feature: 'Effective rate', values: ['₹12/min', '₹11/min', '₹10/min'] },
  { feature: 'AI voice agents', values: ['2', '10', 'Unlimited'] },
  { feature: 'Voice stack', values: ['Standard', 'Standard + premium', 'Realtime + premium'] },
  { feature: 'Call recording', values: [true, true, true] },
  { feature: 'Real-time transcription', values: [true, true, true] },
  { feature: 'Support', values: ['Email', 'Priority', 'Dedicated success manager'] },
  { feature: 'SLA', values: [false, false, true] },
];

const pricingTestimonials = [
  {
    quote: 'It paid for itself in the first week — we stopped losing after-hours bookings to voicemail.',
    name: 'Dr. Anjali Rao',
    role: 'Owner, Rao Family Dental',
    metric: '+38% booked appointments',
  },
  {
    quote: 'Front desk finally has time for patients in the room instead of the phone. Setup took an afternoon.',
    name: 'Vikram Shah',
    role: 'Practice Manager, CarePlus Clinics',
    metric: '54% fewer missed calls',
  },
];

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

  const gridRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.innerWidth > 640) return;

    const featuredIndex = plans.findIndex((p) => p.featured);
    slideRefs.current[featuredIndex]?.scrollIntoView({ inline: 'center', block: 'nearest' });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-stack-active', entry.intersectionRatio > 0.6);
        });
      },
      { root: grid, threshold: [0, 0.6, 1] }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

      <Reveal className="trust-badges">
        {trustBadges.map((b) => (
          <span className="trust-badge" key={b}>✓ {b}</span>
        ))}
      </Reveal>

      <p className="pricing-swipe-hint">← Swipe to compare plans →</p>

      <div className="pricing-grid" ref={gridRef}>
        {plans.map((p, i) => (
          <div
            className={`price-card-slide${p.featured ? ' is-stack-active' : ''}`}
            ref={(el) => (slideRefs.current[i] = el)}
            key={p.name}
          >
            <Reveal
              as="div"
              delay={i * 90}
              className={`price-card${p.featured ? ' featured' : ''}`}
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
          </div>
        ))}
      </div>

      </div>

      <section className="section billing-shade">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">How billing works</p>
            <h2>Predictable billing for your practice.</h2>
          </Reveal>
          <div className="grid grid-3">
            {billing.map(([t, d], i) => (
              <Reveal className="usecase glow-card" delay={i * 90} key={t}>
                <span className="usecase-tag">/{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container pricing-body">

      <Reveal className="section-head" style={{ marginTop: 80 }}>
        <p className="eyebrow">Compare plans</p>
        <h2 style={{ fontSize: 'clamp(24px,3.6vw,38px)' }}>Every plan, side by side.</h2>
      </Reveal>
      <p className="compare-swipe-hint">← Swipe to see all plans →</p>
      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              {plans.map((p) => (
                <th key={p.name} className={p.featured ? 'compare-featured-col' : ''}>
                  {p.name}
                  {p.featured && <span className="compare-popular">Popular</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.feature}>
                <th scope="row">{row.feature}</th>
                {row.values.map((v, i) => (
                  <td key={i} className={plans[i]?.featured ? 'compare-featured-col' : ''}>
                    {typeof v === 'boolean' ? (v ? <span className="compare-yes">✓</span> : <span className="compare-no">—</span>) : v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </div>

      <section className="section billing-shade">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What practices say</p>
            <h2>Real results from real clinics.</h2>
          </Reveal>
          <div className="grid grid-2">
            {pricingTestimonials.map((t, i) => (
              <Reveal className="usecase glow-card testimonial-card" delay={i * 90} key={t.name}>
                <span className="usecase-tag">/{String(i + 1).padStart(2, '0')}</span>
                <p className="quote-text">"{t.quote}"</p>
                <div className="quote-by">
                  <span className="quote-name">{t.name}</span>
                  <span className="quote-role">{t.role}</span>
                </div>
                <div className="quote-metric">{t.metric}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container pricing-body">

      <div className="section-head faq-head" style={{ marginTop: 80, textAlign: 'center' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>FAQ</p>
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

      <section className="cta-band hiw-cta">
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <p className="hiw-badge hiw-badge--center hiw-badge--star">★ Ready when you are</p>
            <h2>Give your front desk an AI receptionist.</h2>
            <p>Pick a plan, forward your number, and start answering patient calls the same day.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <button type="button" className="btn btn-sheen" onClick={scrollToPlans}>
                View plans <span className="arrow">↓</span>
              </button>
              <Link to="/contact" className="btn btn-ghost hiw-cta-ghost">Talk to sales</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';

const fmtZAR = (n) => 'R' + n.toLocaleString('en-US');

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'KallUS AI Voice Receptionist',
  description: 'AI voice receptionist plans for clinics and healthcare practices — booking, rescheduling, insurance questions, and after-hours triage.',
  offers: plans.map((p) => ({
    '@type': 'Offer',
    name: p.name,
    price: p.priceMonthly,
    priceCurrency: 'ZAR',
    description: p.blurb,
  })),
};

const trustBadges = [
  'POPIA-compliant',
  '99.9% uptime SLA',
  'Cancel anytime',
];

const comparison = [
  { feature: 'Included minutes', values: ['250 min', '800 min', '3,000 min'] },
  { feature: 'Effective rate', values: ['R2.80/min', 'R2.50/min', 'R2.20/min'] },
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
  ['Prepaid wallet billing', 'Buy credit up front and your clinic\'s minutes draw down as patient calls come in. Top up anytime from R100.'],
  ['Per-second overage', 'Go past your included minutes and you\'re billed per second at your plan\'s effective rate — as low as R2.20/min on Scale.'],
  ['No setup fees', 'Your clinic\'s phone number is assigned automatically at signup — no separate setup fee, no hidden costs.'],
];

const pricingFaqs = [
  {
    q: 'What does it cost?',
    a: 'Pay-as-you-go plans starting at R649/mo, billed once as wallet credit. Each plan includes voice agents and minutes; go over and you\'re billed per second at your plan\'s effective rate — as low as R2.20/min on Scale.',
    meta: 'Billing',
  },
  {
    q: 'Is it POPIA compliant?',
    a: 'Yes. Call recording, transcripts, and patient data are handled under a POPIA-ready setup — consent capture, data protection, and audit trails are built in for South African practices.',
    meta: 'Compliance',
  },
  {
    q: 'Can I just top up my wallet?',
    a: 'Yes. Top-ups are available from R100 any time your balance runs low, on top of your plan\'s included minutes.',
    meta: 'Wallet',
  },
  {
    q: 'Does it handle patient calls after hours?',
    a: 'Yes. Every plan answers around the clock — booking, rescheduling, and confirming appointments, answering insurance questions, and triaging urgent calls after hours.',
    meta: 'Coverage',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, there\'s no lock-in. Cancel anytime and you keep any unused wallet credit until it expires.',
    meta: 'Flexibility',
  },
];

export default function Pricing() {
  const scrollToPlans = () =>
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const [cycle, setCycle] = useState('monthly');
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
      <Seo
        title="Pricing"
        description="Pay-as-you-go AI voice receptionist plans for South African clinics, priced in ZAR. Booking, rescheduling, insurance questions, and after-hours triage — plans start at R649/mo."
        jsonLd={pricingJsonLd}
      />
      <section className="pricing-hero container">
        <Reveal>
          <p className="eyebrow">Pay as you go · ZAR pricing · South African businesses</p>
          <h1 style={{ fontSize: 'clamp(38px,6.4vw,72px)', maxWidth: '15ch' }}>
            Pick the plan for <span className="grad">your practice.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24 }}>
            Every plan includes AI voice agents built for patient calls — booking,
            rescheduling, insurance questions, and after-hours triage. All plans include
            inbound calling, call recording, and real-time transcription. Prices in R,
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

      <div style={{ marginTop: 32, marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
        <div className="su-toggle">
          <button type="button" className={cycle === 'monthly' ? 'on' : ''} onClick={() => setCycle('monthly')}>Monthly</button>
          <button type="button" className={cycle === 'yearly' ? 'on' : ''} onClick={() => setCycle('yearly')}>
            Yearly <span className="su-save">Save 20%</span>
          </button>
        </div>
      </div>

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
              <div className="plan-rate">
                <span>{fmtZAR(cycle === 'yearly' ? p.priceYearly : p.priceMonthly)}</span> /{cycle === 'yearly' ? 'yr' : 'mo'}
              </div>
              {cycle === 'yearly' && (
                <p className="plan-yearly-note">
                  Save {fmtZAR(p.priceMonthly * 12 - p.priceYearly)} vs monthly · {fmtZAR(Math.round(p.priceYearly / 12))}/mo equivalent
                </p>
              )}
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
                  Buy {fmtZAR(cycle === 'yearly' ? p.priceYearly : p.priceMonthly)} now
                </Link>
              </div>
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

      <Reveal className="section-head section-gap-lg">
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

      <Reveal className="section-head faq-center section-gap-lg">
        <span className="pill-badge"><span className="dot" />FAQ</span>
        <h2 style={{ fontSize: 'clamp(24px,3.6vw,38px)' }}>Everything your practice needs to know.</h2>
      </Reveal>
      <div className="faq faq-narrow">
        {pricingFaqs.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>

      <p className="plan-gst" style={{ marginTop: 40 }}>
        Top-ups available from R100. Cancel anytime.
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

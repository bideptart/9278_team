import { useState } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';

const fmtUSD = (n) => '$' + n.toLocaleString('en-US');

const CONFETTI_COLORS = ['#6fa524', '#c2ee6f', '#4d7c0f', '#8dc63f', '#eef9d3'];

// Small hand-rolled confetti burst — no extra dependency for one animation.
function launchConfetti(x, y) {
  const count = 26;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'confetti-piece';
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const distance = 60 + Math.random() * 60;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    el.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
    el.style.setProperty('--dy', `${Math.sin(angle) * distance - 40}px`);
    el.style.setProperty('--rot', `${Math.round(Math.random() * 360)}deg`);
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

// Pops the price in with a short CSS animation when it changes between
// monthly/yearly. Keying on `value` remounts the span so the animation
// reliably replays and the correct number is always shown immediately —
// no requestAnimationFrame loop that could get stuck mid-count.
function AnimatedPrice({ value }) {
  return (
    <span className="plan-rate-value" key={value}>
      {fmtUSD(value)}
    </span>
  );
}

const trustBadges = [
  'POPIA-compliant',
  '99.9% uptime SLA',
  'Cancel anytime',
];

const comparison = [
  { feature: 'Included minutes', values: ['250 min', '800 min', '3,000 min'] },
  { feature: 'Effective rate', values: ['$0.13/min', '$0.12/min', '$0.11/min'] },
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
    name: 'Dr. Naledi Khumalo',
    role: 'Owner, Khumalo Family Dental',
    metric: '+38% booked appointments',
  },
  {
    quote: 'Front desk finally has time for patients in the room instead of the phone. Setup took an afternoon.',
    name: 'Sipho Mahlangu',
    role: 'Practice Manager, CarePlus Clinics',
    metric: '54% fewer missed calls',
  },
];

const billing = [
  ['Prepaid wallet billing', 'Buy credit up front and your clinic\'s minutes draw down as patient calls come in. Top up anytime from $10.'],
  ['Per-second overage', 'Go past your included minutes and you\'re billed per second at your plan\'s effective rate — as low as $0.11/min on Scale.'],
  ['No setup fees', 'Your clinic\'s phone number is assigned automatically at signup — no separate setup fee, no hidden costs.'],
];

const pricingFaqs = [
  {
    q: 'What does it cost?',
    a: 'Pay-as-you-go plans starting at $31/mo, billed once as wallet credit. Each plan includes voice agents and minutes; go over and you\'re billed per second at your plan\'s effective rate — as low as $0.11/min on Scale.',
    meta: 'Billing',
  },
  {
    q: 'Is it POPIA compliant?',
    a: 'Yes. Call recording, transcripts, and patient data are handled under a POPIA-ready setup — consent capture, data protection, and audit trails are built in for South African practices.',
    meta: 'Compliance',
  },
  {
    q: 'Can I just top up my wallet?',
    a: 'Yes. Top-ups are available from $10 any time your balance runs low, on top of your plan\'s included minutes.',
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

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'KallUS AI Voice Receptionist',
      description: 'AI voice receptionist plans for clinics and healthcare practices, priced in USD — booking, rescheduling, insurance questions, and after-hours triage.',
      offers: plans.map((p) => ({
        '@type': 'Offer',
        name: p.name,
        price: p.priceMonthly,
        priceCurrency: 'USD',
        description: p.blurb,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: pricingFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function Pricing() {
  const scrollToPlans = () =>
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const [cycle, setCycle] = useState('monthly');
  // mobile-only "A" stack: which plan is currently front-and-center.
  // Defaults to the featured plan; tapping a peeking side card opens it.
  const [activeIndex, setActiveIndex] = useState(() => {
    const i = plans.findIndex((p) => p.featured);
    return i === -1 ? 0 : i;
  });

  return (
    <div className="kallus-theme">
      <Seo
        title="Pricing"
        description="Pay-as-you-go AI voice receptionist plans for clinics, priced in USD. Booking, rescheduling, insurance questions, and after-hours triage — plans start at $31/mo."
        jsonLd={pricingJsonLd}
      />
      <section className="pricing-hero container">
        <Reveal>
          <p className="eyebrow">Pay as you go</p>
          <h1 style={{ fontSize: 'clamp(38px,6.4vw,72px)', maxWidth: '15ch' }}>
            Pick the plan for <span className="grad">your practice.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24 }}>
            Every plan includes AI voice agents built for patient calls — booking,
            rescheduling, insurance questions, and after-hours triage. All plans include
            inbound calling, call recording, and real-time transcription. Prices in USD,
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
          <button
            type="button"
            className={cycle === 'yearly' ? 'on' : ''}
            onClick={(e) => {
              if (cycle !== 'yearly') {
                const rect = e.currentTarget.getBoundingClientRect();
                launchConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
              }
              setCycle('yearly');
            }}
          >
            Yearly <span className="su-save">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((p, i) => {
          // position relative to the active plan, wrapping around (only matters on mobile)
          const diff = (i - activeIndex + plans.length) % plans.length;
          const isActive = diff === 0;
          const posClass = isActive ? 'is-active' : diff === 1 ? 'is-right' : 'is-left';
          const moreCount = p.features.length - 5;

          return (
            <div
              className={`price-card-slide ${posClass}${p.featured ? ' featured' : ''}`}
              key={p.name}
              onClick={() => setActiveIndex(i)}
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
                  <AnimatedPrice value={cycle === 'yearly' ? p.priceYearly : p.priceMonthly} /> /{cycle === 'yearly' ? 'yr' : 'mo'}
                </div>
                {cycle === 'yearly' && (
                  <p className="plan-yearly-note">
                    Save {fmtUSD(p.priceMonthly * 12 - p.priceYearly)} vs monthly · {fmtUSD(Math.round(p.priceYearly / 12))}/mo equivalent
                  </p>
                )}
                <div className="plan-meta">{p.meta}</div>
                <ul className="plan-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                {moreCount > 0 && <p className="plan-more">+ {moreCount} more features</p>}
                <div className="plan-actions">
                  <Link
                    to="/contact"
                    className="btn btn-sheen"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Buy {fmtUSD(cycle === 'yearly' ? p.priceYearly : p.priceMonthly)} now
                  </Link>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      <div className="pricing-nav">
        <button
          type="button"
          className="pricing-nav-arrow"
          aria-label="Show previous plan"
          onClick={() => setActiveIndex((activeIndex - 1 + plans.length) % plans.length)}
        >
          ‹
        </button>
        <div className="pricing-dots">
          {plans.map((p, i) => (
            <button
              type="button"
              key={p.name}
              className={`pricing-dot${i === activeIndex ? ' is-active' : ''}`}
              aria-label={`Show ${p.name} plan`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="pricing-nav-arrow"
          aria-label="Show next plan"
          onClick={() => setActiveIndex((activeIndex + 1) % plans.length)}
        >
          ›
        </button>
      </div>

      </div>

      <div className="container">
        <div className="soft-panel" style={{ marginTop: 40, marginBottom: 40 }}>
          <Reveal className="section-head faq-center">
            <span className="pill-badge"><span className="dot" />How billing works</span>
            <h2>Predictable billing for your practice.</h2>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            {billing.map(([t, d], i) => (
              <Reveal className="usecase glow-card" delay={i * 90} key={t}>
                <span className="usecase-tag">/{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

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

      <div className="container">
        <div className="soft-panel" style={{ marginTop: 40, marginBottom: 40 }}>
          <Reveal className="section-head faq-center">
            <span className="pill-badge"><span className="dot" />What practices say</span>
            <h2>Real results from real clinics.</h2>
          </Reveal>
          <div className="grid grid-2" style={{ marginTop: 32 }}>
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
      </div>

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
        Top-ups available from $10. Cancel anytime.
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

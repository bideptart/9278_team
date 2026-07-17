import { Link } from 'react-router-dom';
import { metrics, useCases, testimonials, homeFaqs, homeSteps, missedCallLead, missedCallWithout, missedCallWith } from '../data/content.js';
import CoverageMap from '../components/CoverageMap.jsx';
import IndustryExplorer from '../components/IndustryExplorer.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Home() {
  return (
    <div className="home-page">
      <section className="section-tint hero-tint">
        <div className="hero container hero-split">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> AI Voice Receptionist</p>
            <h1>
              AI voice agents <br /> that <span className="grad">actually <br /> sound human.</span>
            </h1>
            <p className="sub">
              Native-audio voice agents for South African businesses. Sub-second latency
              on Vodacom, MTN, Telkom and Cell C — fast, and fully yours.
            </p>
            <div className="cta-row">
              <Link to="/pricing" className="btn btn-ghost">See pricing</Link>
              <Link to="/features" className="btn btn-cta btn-sheen">Explore features</Link>
            </div>
            <div className="hero-stats">
              {metrics.map((m) => (
                <div className="hero-stat" key={m.label}>
                  <span className="hero-stat-value">{m.value}</span>
                  <span className="hero-stat-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual"><CoverageMap /></div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow"><span className="live-dot" /> The cost of a missed call</p>
            <h2>Every missed call is a customer <span className="grad">who phoned someone else.</span></h2>
          </Reveal>
          <Reveal className="cost-lead">
            <p className="lead">{missedCallLead}</p>
          </Reveal>
          <div className="cost-compare">
            <Reveal className="compare-card compare-without">
              <span className="compare-badge without">✕ Without a voice agent</span>
              <ul className="compare-list">
                {missedCallWithout.map((t) => (
                  <li key={t}><span className="compare-icon without">✕</span>{t}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="compare-card compare-with" delay={90}>
              <span className="compare-badge with">📞 With KallUs</span>
              <ul className="compare-list">
                {missedCallWith.map((t) => (
                  <li key={t}><span className="compare-icon with">✓</span>{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal style={{ marginTop: 28 }}>
            <Link to="/features" className="text-link">See all features →</Link>
          </Reveal>
        </div>
      </section>

      {/* Use cases — three columns */}
      <section className="section section-shade">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow"><span className="live-dot" /> Use cases</p>
            <h2>Inbound, after-hours, every language.</h2>
          </Reveal>
          <div className="grid grid-3">
            {useCases.map((u, i) => (
              <Reveal className="usecase glow-card" delay={i * 90} key={u.title}>
                <span className="usecase-tag">/{u.tag}</span>
                <h3>{u.title}</h3>
                <p>{u.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow"><span className="live-dot" /> From idea to live call</p>
            <h2>Live on a South African number in hours.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Design your agent in plain English, test every scenario in a sandbox,
              then go live — no engineering team required.
            </p>
          </Reveal>
          <div className="steps3 steps4">
            {homeSteps.map((s, i) => (
              <Reveal className="step3" delay={i * 110} key={s.title}>
                <div className="step3-badge">0{i + 1}</div>
                <h3 className="step3-title">{s.title}</h3>
                <p className="step3-desc">{s.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 28 }}>
            <Link to="/how-it-works" className="text-link">Walk through setup →</Link>
          </Reveal>
        </div>
      </section>

      {/* Industries — interactive explorer */}
      <section className="section section-shade ie-section">
        <div className="container">
          <Reveal className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p className="eyebrow"><span className="live-dot" /> Built for your front desk</p>
              <h2>Built for every South African industry.</h2>
            </div>
            <Link to="/industries" className="text-link">Explore industries →</Link>
          </Reveal>
          <Reveal><IndustryExplorer /></Reveal>
        </div>
      </section>

      {/* Testimonials — continuous scrolling carousel */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow"><span className="live-dot" /> Trusted on the ground</p>
            <h2>Trusted by South African businesses.</h2>
          </Reveal>
        </div>
        <Reveal className="quote-marquee">
          <div className="quote-track">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div className="quote-card" key={`${t.name}-${i}`}>
                <div className="quote-metric">{t.metric}</div>
                <p className="quote-text">“{t.quote}”</p>
                <div className="quote-by">
                  <span className="quote-name">{t.name}</span>
                  <span className="quote-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="section-head faq-head" style={{ textAlign: 'center' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}><span className="live-dot" /> FAQ</p>
            <h2>Questions, answered.</h2>
          </Reveal>
          <div className="faq">
            {homeFaqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band hiw-cta">
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <p className="hiw-badge hiw-badge--center hiw-badge--star">★ Ready when you are</p>
            <h2>Hear it answer your next call.</h2>
            <p>Spin up your AI receptionist and forward a line today. Pay only for the minutes you use.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link to="/pricing" className="btn btn-ghost hiw-cta-ghost">See pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

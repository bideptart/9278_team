import { Link } from 'react-router-dom';
import { steps } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SetupPreview from '../components/SetupPreview.jsx';
import PhoneShowcase from '../components/PhoneShowcase.jsx';
import ResponseTimeCompare from '../components/ResponseTimeCompare.jsx';

export default function HowItWorks() {
  const scrollToBody = () =>
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <section className="page-hero hiw-hero container">
        <div className="hiw-glow" aria-hidden="true" />
        <Reveal className="hiw-hero-copy">
          <p className="hiw-badge"><span className="live-dot" /> Live on your number in ~10 minutes</p>
          <h1 style={{ fontSize: 'clamp(38px,6.4vw,72px)', maxWidth: '15ch' }}>
            From sign-up to answering calls — <span className="grad">in a day.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24 }}>
            No call-center build-out, no new phone system. Configure your agent, connect
            your knowledge, and forward your line.
          </p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <button type="button" className="btn btn-cta btn-sheen hiw-scroll-btn" onClick={scrollToBody}>
              See the steps <span className="arrow">↓</span>
            </button>
          </div>
        </Reveal>
        <Reveal className="hero-visual hiw-hero-visual" delay={120}>
          <SetupPreview />
        </Reveal>
      </section>

      <section className="hiw-band" id="content">
        <div className="container section">
          <Reveal className="section-head">
            <p className="hiw-badge"><span className="live-dot" /> Live in 4 simple steps</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)' }}>From sign-up to live, step by step.</h2>
          </Reveal>
          <div className="steps-showcase">
            <div className="phone-col">
              <PhoneShowcase />
            </div>
            <div className="steps-list">
              {[
                ...steps,
                {
                  title: 'Watch it improve',
                  desc: 'Every call becomes data — transcripts, sentiment, and intent flow into your dashboard so you can fine-tune the agent as your business changes.',
                },
              ].map((s, i) => (
                <Reveal className="step-row" delay={i * 90} key={s.title}>
                  <div className="step-num">0{i + 1}</div>
                  <div>
                    <h3 style={{ fontSize: 22, marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ color: 'var(--fg-muted)', margin: 0, maxWidth: '60ch' }}>{s.desc.replace('NIXXY', 'kallus.io')}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container section">
        <ResponseTimeCompare />
      </div>

      <section className="hiw-band">
        <div className="container section">
          <Reveal className="section-head">
            <p className="hiw-badge"><span className="live-dot" /> On every single call</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)' }}>What happens on every call.</h2>
          </Reveal>
          <div className="grid grid-2 hood-grid">
            {[
              {
                t: 'Answers instantly',
                d: 'Native audio-to-audio responses in under 300ms — no robotic lag, full-duplex so callers can interrupt.',
                icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
              },
              {
                t: 'Understands intent',
                d: 'Detects what the caller wants — book, ask, complain, buy — and follows your guardrails to handle it.',
                icon: <path d="M21 11.5a8.38 8.38 0 0 1-4.9 7.6 8.5 8.5 0 0 1-8.6-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5h.5a8.48 8.48 0 0 1 8 8v.5Z" />,
              },
              {
                t: 'Acts in your tools',
                d: 'Creates calendar events, updates your CRM, sends confirmations, or warm-transfers to a teammate.',
                icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.4-3.4a6 6 0 0 1-7.6 7.6l-6.5 6.5a2.1 2.1 0 0 1-3-3l6.5-6.5a6 6 0 0 1 7.6-7.6l-3.4 3.4Z" />,
              },
              {
                t: 'Logs everything',
                d: 'Delivers a transcript, summary, sentiment, and intent for every call so you keep full visibility.',
                icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></>,
              },
            ].map((c, i) => (
              <Reveal className="card hood-card" delay={(i % 2) * 70} key={c.t}>
                <span className="hood-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </span>
                <h3 className="card-title">{c.t}</h3>
                <p className="card-desc">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band hiw-cta">
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <p className="hiw-badge hiw-badge--center hiw-badge--star">★ Ready when you are</p>
            <h2>See it answer your first call today.</h2>
            <p>Design your agent, connect your knowledge, and forward your line — live in minutes.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link to="/features" className="btn btn-sheen">Explore features <span className="arrow">→</span></Link>
              <Link to="/pricing" className="btn btn-ghost hiw-cta-ghost">See pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

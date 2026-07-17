import { Link } from 'react-router-dom';
import { steps } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SetupPreview from '../components/SetupPreview.jsx';
import HowItWorksDashboard from '../components/HowItWorksDashboard.jsx';
import ResponseTimeCompare from '../components/ResponseTimeCompare.jsx';
import ScrollCards from '../components/ScrollCards.jsx';
import Seo from '../components/Seo.jsx';

const CALL_FEATURE_CARDS = [
  {
    title: 'Answers instantly',
    description: 'Every inbound call gets picked up in under half a second — no hold music, no voicemail.',
    src: '/feature-answers-instantly.webp',
    color: '#0b1220',
    textColor: '#ffffff',
  },
  {
    title: 'Understands intent',
    description: 'Natural conversation parses what the caller actually needs, not just keywords.',
    src: '/feature-understands-intent.webp',
    color: '#0b1220',
    textColor: '#ffffff',
  },
  {
    title: 'Acts in your tools',
    description: 'Books appointments, checks records, and updates your CRM live, mid-call.',
    src: '/feature-acts-in-your-tools.webp',
    color: '#4d7c0f',
    textColor: '#ffffff',
  },
  {
    title: 'Logs everything',
    description: 'Full transcripts, sentiment, and call data land in your dashboard automatically.',
    src: '/feature-logs-everything.webp',
    color: '#3a5a0c',
    textColor: '#ffffff',
  },
];

export default function HowItWorks() {
  const scrollToBody = () =>
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <Seo
        title="How it works"
        description="From sign-up to answering calls in a day — design your KallUS AI voice agent in plain English, test every scenario in a sandbox, then go live on a South African number."
      />
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
            <Reveal className="phone-col" delay={150}>
              <HowItWorksDashboard />
            </Reveal>
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
        <div className="container hood-split">
          <Reveal className="hood-split-head">
            <p className="hiw-badge"><span className="live-dot" /> On every single call</p>
            <h2 style={{ fontSize: 'clamp(28px,3.6vw,44px)' }}>What happens on every call.</h2>
          </Reveal>
          <ScrollCards items={CALL_FEATURE_CARDS} />
        </div>
      </section>

      <section className="cta-band hiw-cta">
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <p className="hiw-badge hiw-badge--center hiw-badge--star hiw-badge--howitworks">★ Ready when you are</p>
            <h2>See it answer your first call today.</h2>
            <p>Design your agent, connect your knowledge, and forward your line — live in minutes.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link to="/industries" className="btn btn-sheen">Explore industries <span className="arrow">→</span></Link>
              <Link to="/pricing" className="btn btn-ghost hiw-cta-ghost">See pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

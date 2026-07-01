import { Link } from 'react-router-dom';
import { industries } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

export default function Industries() {
  const scrollToBody = () =>
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <section className="page-hero container">
        <Reveal>
          <p className="eyebrow">Industries</p>
          <h1 style={{ fontSize: 'clamp(38px,6.4vw,72px)', maxWidth: '16ch' }}>
            Wherever the phone rings, <span className="grad">NIXXY answers.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24 }}>
            The same AI receptionist adapts to your business — your hours, your services,
            your booking flow, your tone.
          </p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <button type="button" className="btn btn-cta" onClick={scrollToBody}>
              Explore industries <span className="arrow">↓</span>
            </button>
            <Link to="/contact" className="btn btn-ghost">Book a demo</Link>
          </div>
        </Reveal>
      </section>

      <div className="container page-body" id="content">
      <div className="grid grid-2">
        {industries.map((ind, i) => (
          <Reveal className="card glow-card" delay={(i % 2) * 70} key={ind.name}>
            <h3 className="card-title">{ind.name}</h3>
            <p className="card-desc">{ind.desc}</p>
          </Reveal>
        ))}
      </div>

      <div className="cta-band" style={{ marginTop: 80, borderRadius: 20 }}>
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <h2>Don't see your industry?</h2>
            <p>If your business runs on phone calls, NIXXY can answer them. Let's build your agent.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-sheen">Book a demo <span className="arrow">→</span></Link>
            </div>
          </Reveal>
        </div>
      </div>
      </div>
    </>
  );
}

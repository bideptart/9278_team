import { Link } from 'react-router-dom';
import { features, faqs } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

export default function Features() {
  const scrollToBody = () =>
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <section className="page-hero container">
        <Reveal>
          <p className="eyebrow">Features</p>
          <h1 style={{ fontSize: 'clamp(38px,6.4vw,72px)', maxWidth: '16ch' }}>
            Everything a great receptionist does — <span className="grad">at machine scale.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24 }}>
            NIXXY answers, understands, books, and routes every call. Here's what powers
            the conversation.
          </p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <button type="button" className="btn btn-cta" onClick={scrollToBody}>
              See features <span className="arrow">↓</span>
            </button>
            <Link to="/contact" className="btn btn-ghost">Book a demo</Link>
          </div>
        </Reveal>
      </section>

      <div className="container page-body" id="content">
      <div className="grid grid-2">
        {features.map((f, i) => (
          <Reveal className="card glow-card" delay={(i % 2) * 70} key={f.title}>
            <h3 className="card-title">{f.title}</h3>
            <p className="card-desc">{f.desc}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="section-head" style={{ marginTop: 88 }}>
        <p className="eyebrow">FAQ</p>
        <h2 style={{ fontSize: 'clamp(26px,4vw,40px)' }}>Questions, answered.</h2>
      </Reveal>
      <div className="faq">
        {faqs.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>

      <div className="cta-inline">
        <Link to="/contact" className="btn btn-sheen">Book a demo <span className="arrow">→</span></Link>
        <Link to="/pricing" className="btn btn-ghost">See pricing</Link>
      </div>
      </div>
    </>
  );
}

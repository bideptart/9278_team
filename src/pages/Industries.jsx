import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

const KEY_ROWS = [
  [
    { l: '~', w: 1 }, { l: '1', w: 1 }, { l: '2', w: 1 }, { l: '3', w: 1 }, { l: '4', w: 1 },
    { l: '5', w: 1 }, { l: '6', w: 1 }, { l: '7', w: 1 }, { l: '8', w: 1 }, { l: '9', w: 1 },
    { l: '0', w: 1 }, { l: '-', w: 1 }, { l: '+', w: 1 }, { l: '⌫', w: 1.7 },
  ],
  [
    { l: 'Tab', w: 1.6 }, { l: 'Q', w: 1 }, { l: 'W', w: 1 }, { l: 'E', w: 1 }, { l: 'R', w: 1 },
    { l: 'T', w: 1 }, { l: 'Y', w: 1 }, { l: 'U', w: 1 }, { l: 'I', w: 1 }, { l: 'O', w: 1 },
    { l: 'P', w: 1 }, { l: '[', w: 1 }, { l: ']', w: 1 }, { l: '\\', w: 1 },
  ],
  [
    { l: 'Caps', w: 1.9 }, { l: 'A', w: 1 }, { l: 'S', w: 1 }, { l: 'D', w: 1 }, { l: 'F', w: 1 },
    { l: 'G', w: 1 }, { l: 'H', w: 1 }, { l: 'J', w: 1 }, { l: 'K', w: 1 }, { l: 'L', w: 1 },
    { l: ';', w: 1 }, { l: 'Enter', w: 1.9 },
  ],
  [
    { l: 'Shift', w: 2.3 }, { l: 'Z', w: 1 }, { l: 'X', w: 1 }, { l: 'C', w: 1 }, { l: 'V', w: 1 },
    { l: 'B', w: 1 }, { l: 'N', w: 1 }, { l: 'M', w: 1 }, { l: ',', w: 1 }, { l: '.', w: 1 },
    { l: 'Shift', w: 2.3 },
  ],
  [
    { l: 'Ctrl', w: 1.4 }, { l: 'Alt', w: 1.4 }, { l: 'Cmd', w: 1.4 }, { l: '', w: 6.5 },
    { l: 'Alt', w: 1.4 }, { l: '◀', w: 1 }, { l: '▲▼', w: 1 }, { l: '▶', w: 1 },
  ],
];

const INDUSTRY_ICONS = {
  'Real estate': '🏠',
  'Legal services': '⚖️',
  'Healthcare & dental': '🏥',
  'Home services': '🔧',
  'Restaurants': '🍽️',
  'Automotive': '🚗',
  'E-commerce & retail': '🛒',
  'Professional services': '💼',
};

export default function Industries() {
  const scrollToBody = () =>
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const [phoneIndex, setPhoneIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhoneIndex((i) => (i + 1) % industries.length), 3400);
    return () => clearInterval(id);
  }, []);
  const phoneInd = industries[phoneIndex];

  return (
    <div className="industries-theme">
      <section className="page-hero container ind-hero">
        <div className="ind-hero-copy">
          <Reveal>
            <p className="eyebrow ind-eyebrow-pill">Industries</p>
            <h1 className="ind-hero-heading">
              Wherever the phone rings,<br /><span className="grad ind-grad">KALLUS answers.</span>
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
        </div>

        <div className="ind-hero-visual">
          <div className="ind-glow" aria-hidden="true" />

          <div
            className="ind-laptop-unit"
            style={{ transform: 'rotateX(6deg)', transformStyle: 'preserve-3d' }}
          >
            <div className="ind-laptop">
              <span className="ind-laptop-cam" aria-hidden="true" />
              <div className="ind-laptop-screen">
                <motion.div
                  className="ind-phone-sheen"
                  aria-hidden="true"
                  animate={{ x: ['-130%', '160%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                />
                <div className="ind-phone-top">
                  <span className="live-dot" />
                  <span className="ind-phone-brand">KALLUS</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    className="ind-phone-content ind-laptop-content"
                    key={phoneIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <div className="ind-laptop-info">
                      <span className="ind-phone-status">Incoming call</span>
                      <div className="ind-phone-avatar">{INDUSTRY_ICONS[phoneInd.name]}</div>
                      <div className="ind-phone-name">{phoneInd.name}</div>
                      <div className="ind-phone-wave" aria-hidden="true">
                        <span /><span /><span /><span /><span />
                      </div>
                    </div>
                    <div className="ind-laptop-detail">
                      <div className="ind-phone-transcript">
                        <p className="ind-phone-bubble caller">{phoneInd.sample.caller}</p>
                        <p className="ind-phone-bubble agent">{phoneInd.sample.agent}</p>
                      </div>
                      <div className="ind-phone-tags">
                        {phoneInd.tags.map((tag) => (
                          <span className="board-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="ind-phone-dots">
                  {industries.map((ind, i) => (
                    <span key={ind.name} className={i === phoneIndex ? 'on' : ''} />
                  ))}
                </div>
                <span className="ind-laptop-glass" aria-hidden="true" />
              </div>
            </div>

            <span className="ind-laptop-hinge" aria-hidden="true" />
            <div className="ind-laptop-base" aria-hidden="true">
              <span className="ind-laptop-led" />
              <div className="ind-laptop-keys">
                {KEY_ROWS.map((row, r) => (
                  <div className="ind-key-row" key={r}>
                    {row.map((k, i) => (
                      <span className="ind-key" style={{ flex: k.w }} key={i}>
                        <span className="ind-key-label">{k.l}</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <span className="ind-laptop-trackpad" />
            </div>
          </div>
        </div>
      </section>

      <div className="container page-body" id="content">
      <div className="timeline">
        <motion.div
          className="timeline-track"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        {industries.map((ind, i) => (
          <div className={`timeline-row ${i % 2 === 0 ? 'left' : 'right'}`} key={ind.name}>
            <motion.div
              className="timeline-copy"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <span className="timeline-index">{String(i + 1).padStart(2, '0')}</span>
              <div className="timeline-copy-content">
                <h3 className="timeline-name">{ind.name}</h3>
                <p className="timeline-desc">{ind.desc}</p>
                <div className="timeline-tags">
                  {ind.tags.map((tag) => (
                    <span className="board-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="timeline-node"
              style={{ animationDelay: `${(i % 4) * 0.4}s` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 16 }}
            >
              <span className="timeline-node-icon">{INDUSTRY_ICONS[ind.name]}</span>
            </motion.div>
          </div>
        ))}
      </div>

      </div>

      <section className="cta-band hiw-cta" style={{ marginTop: 80 }}>
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <p className="hiw-badge hiw-badge--center hiw-badge--star">★ Ready when you are</p>
            <h2>Don't see your industry?</h2>
            <p>If your business runs on phone calls, KALLUS can answer them. Let's build your agent.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-sheen">Book a demo <span className="arrow">→</span></Link>
              <Link to="/pricing" className="btn btn-ghost hiw-cta-ghost">See pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

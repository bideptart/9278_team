import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { industries } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import { INDUSTRY_ICONS } from '../components/IndustryIcons.jsx';
import IndustriesHeroMotif from '../components/IndustriesHeroMotif.jsx';

const MotionLink = motion(Link);

export default function Industries() {
  const scrollToBody = () =>
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const trackScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
              <button type="button" className="btn btn-cta btn-sheen" onClick={scrollToBody}>
                Explore industries <span className="arrow">↓</span>
              </button>
            </div>
          </Reveal>
        </div>

        <div className="ind-hero-visual">
          <div className="ind-glow" aria-hidden="true" />
          <IndustriesHeroMotif />
        </div>
      </section>

      <div className="container page-body" id="content">
      <div className="timeline" ref={timelineRef}>
        <motion.div
          className="timeline-track"
          style={{ scaleY: trackScale, transformOrigin: 'top' }}
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
              <motion.span
                className="timeline-node-icon"
                whileHover={{ rotate: -12, scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 320, damping: 14 }}
              >
                {(() => { const Icon = INDUSTRY_ICONS[ind.name]; return <Icon />; })()}
              </motion.span>
            </motion.div>
          </div>
        ))}
      </div>

      </div>

      <section className="ind-showcase container">
        <Reveal>
          <h2 className="ind-showcase-heading">See KALLUS in action</h2>
          <MotionLink
            to="/pricing"
            className="ind-showcase-frame ind-showcase-link"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <img src="/images/kallus-showcase.png" alt="KALLUS Industries dashboard handling a live call" className="ind-showcase-img" />
            <span className="ind-showcase-overlay" aria-hidden="true" />
            <span className="ind-showcase-cta">
              See pricing <span className="arrow">→</span>
            </span>
          </MotionLink>
        </Reveal>
      </section>

      <section className="cta-band hiw-cta" style={{ marginTop: 80 }}>
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <p className="hiw-badge hiw-badge--center hiw-badge--star">★ Ready when you are</p>
            <h2>Don't see your industry?</h2>
            <p>If your business runs on phone calls, KALLUS can answer them. Let's build your agent.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link to="/pricing" className="btn btn-cta btn-sheen">See pricing <span className="arrow">→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

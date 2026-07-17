import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { industries } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import { INDUSTRY_ICONS } from '../components/IndustryIcons.jsx';
import IndustriesHeroMotif from '../components/IndustriesHeroMotif.jsx';
import Seo from '../components/Seo.jsx';
import ShowcaseCarousel from '../components/ShowcaseCarousel.jsx';

const SHOWCASE_IMAGES = {
  'Real estate': '/images/showcase-real-estate.png',
  'Legal services': '/images/showcase-legal.png',
  'Healthcare & dental': '/images/showcase-healthcare.png',
};
const SHOWCASE_SLIDES = Object.keys(SHOWCASE_IMAGES).map((name) => {
  const ind = industries.find((i) => i.name === name);
  return {
    src: SHOWCASE_IMAGES[name],
    name: ind.name,
    designation: ind.tags.join(' · '),
    quote: ind.desc,
  };
});

function TimelineRow({ ind, i }) {
  const nodeRef = useRef(null);
  const isActive = useInView(nodeRef, { amount: 0.5, margin: '-35% 0px -35% 0px' });
  const Icon = INDUSTRY_ICONS[ind.name];

  return (
    <div className={`timeline-row ${i % 2 === 0 ? 'left' : 'right'}`}>
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
        ref={nodeRef}
        className={`timeline-node${isActive ? ' is-active' : ''}`}
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
          <Icon />
        </motion.span>
      </motion.div>
    </div>
  );
}

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
      <Seo
        title="Industries"
        description="One KallUS AI receptionist, adapted to every South African industry — clinics, law firms, trades, restaurants, auto, retail and more. Your hours, your services, your booking flow."
      />
      <section className="page-hero container ind-hero">
        <div className="ind-hero-copy">
          <Reveal>
            <p className="eyebrow ind-eyebrow-pill">Industries</p>
            <h1 className="ind-hero-heading">
              Wherever the<br />phone rings,<br /><span className="grad ind-grad">KALLUS answers.</span>
            </h1>
            <p className="lead" style={{ marginTop: 24 }}>
              The same AI receptionist adapts to<br />your business — your hours, your services,<br />your booking flow, your tone.
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
          <TimelineRow ind={ind} i={i} key={ind.name} />
        ))}
      </div>

      </div>

      <section className="ind-showcase container">
        <Reveal>
          <ShowcaseCarousel slides={SHOWCASE_SLIDES} autoplay />
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

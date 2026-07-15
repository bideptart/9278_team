import { integrations } from '../data/content.js';
import { INTEGRATION_ICONS } from './FeatureIcons.jsx';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js';

function Card({ f, i, decorative = false }) {
  const Icon = INTEGRATION_ICONS[f.widget];
  return (
    <div className="carousel-card" aria-hidden={decorative || undefined}>
      <span className="carousel-badge">{Icon && <Icon />}</span>
      <span className="carousel-num">{String(i + 1).padStart(2, '0')}</span>
      <h3 className="carousel-title">{f.title}</h3>
      <p className="carousel-desc">{f.desc}</p>
    </div>
  );
}

// Slow, continuous right-moving marquee. CSS drives the motion (cheap, no
// JS timer); prefers-reduced-motion just freezes it via the stylesheet.
export default function IntegrationsCarousel() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={`int-marquee${reduced ? ' is-static' : ''}`}>
      <div className="int-marquee-track" aria-label="Integrations">
        {integrations.map((f, i) => <Card f={f} i={i} key={f.title} />)}
        {/* duplicate set closes the loop seamlessly; hidden from assistive tech */}
        {integrations.map((f, i) => <Card f={f} i={i} decorative key={`dup-${f.title}`} />)}
      </div>
    </div>
  );
}

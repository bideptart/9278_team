import { integrations } from '../data/content.js';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js';

function Card({ f, decorative = false }) {
  return (
    <div className="carousel-card carousel-card--image" aria-hidden={decorative || undefined}>
      <img src={f.image} alt={decorative ? '' : f.title} loading="lazy" />
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
        {integrations.map((f) => <Card f={f} key={f.title} />)}
        {/* duplicate set closes the loop seamlessly; hidden from assistive tech */}
        {integrations.map((f) => <Card f={f} decorative key={`dup-${f.title}`} />)}
      </div>
    </div>
  );
}

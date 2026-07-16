import { useEffect, useRef, useState } from 'react';
import { industries } from '../data/content.js';

export default function IndustryExplorer() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState('next');
  const [paused, setPaused] = useState(false);

  const go = (i) => {
    if (i === active) return;
    const len = industries.length;
    const forwardDist = (i - active + len) % len;
    const backwardDist = (active - i + len) % len;
    setDir(forwardDist <= backwardDist ? 'next' : 'prev');
    setActive(i);
  };

  // Auto-advance through industries unless the user is interacting.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir('next');
      setActive((a) => (a + 1) % industries.length);
    }, 3200);
    return () => clearInterval(id);
  }, [paused]);

  const cur = industries[active];

  return (
    <div
      className="industry-explorer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ul className="ie-list">
        {industries.map((ind, i) => (
          <li key={ind.name}>
            <button
              className={`ie-item${i === active ? ' active' : ''}`}
              onMouseEnter={() => go(i)}
              onFocus={() => go(i)}
              onClick={() => go(i)}
            >
              <span className="ie-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="ie-name">{ind.name}</span>
              <span className="ie-arrow">→</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="ie-panel-wrap">
        <div className={`ie-panel ie-panel--${dir}`} key={active}>
          <div className="ie-panel-glow" />
          <p className="eyebrow"><span className="live-dot" /> {cur.name}</p>
          <p className="ie-desc">{cur.desc}</p>

          <div className="ie-call">
            <div className="ie-call-head">
              <span className="ie-tag">Sample call</span>
              <span className="ie-bars"><i /><i /><i /><i /></span>
            </div>
            <div className="bubble caller"><span className="bubble-who">Caller</span>{cur.sample.caller}</div>
            <div className="bubble agent"><span className="bubble-who">KallUs</span>{cur.sample.agent}</div>
          </div>
        </div>

        <div className="ie-progress">
          {industries.map((_, i) => (
            <span key={i} className={i === active ? 'on' : ''} />
          ))}
        </div>
      </div>
    </div>
  );
}

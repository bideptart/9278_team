import { useState } from 'react';

// Accordion FAQ with a cursor-tracking spotlight glow and an animated intro
// badge (beam + pulse + tick). Single fixed theme — no light/dark toggle.
export default function FaqGlow({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const setGlow = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--faq-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--faq-y', `${e.clientY - rect.top}px`);
  };
  const clearGlow = (e) => {
    e.currentTarget.style.removeProperty('--faq-x');
    e.currentTarget.style.removeProperty('--faq-y');
  };

  return (
    <div className="faq-glow">
      <ul className="faq-glow-list">
        {items.map((item, i) => {
          const open = activeIndex === i;
          const panelId = `faq-glow-panel-${i}`;
          const buttonId = `faq-glow-trigger-${i}`;
          return (
            <li
              key={item.q}
              className={`faq-glow-card${open ? ' is-open' : ''}`}
              onMouseMove={setGlow}
              onMouseLeave={clearGlow}
            >
              <span className="faq-glow-spot" aria-hidden="true" />
              <button
                type="button"
                id={buttonId}
                aria-controls={panelId}
                aria-expanded={open}
                onClick={() => setActiveIndex(open ? -1 : i)}
                className="faq-glow-trigger"
              >
                <span className="faq-glow-icon">
                  <span className="faq-glow-icon-ring" aria-hidden="true" />
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path d="M12 5v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="faq-glow-body">
                  <div className="faq-glow-row">
                    <h3>{item.q}</h3>
                    {item.meta && <span className="faq-glow-tag">{item.meta}</span>}
                  </div>
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-glow-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

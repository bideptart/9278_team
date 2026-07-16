import { useEffect, useState } from 'react';
import { steps } from '../data/content.js';

const taglines = ['Voice, greeting, guardrails', 'FAQs, calendar, CRM', 'Line forwarded, live now'];

export default function SetupPreview() {
  const [done, setDone] = useState(0);

  // `active` is always the next incomplete step — never overlaps with a done step.
  useEffect(() => {
    const delay = done === 0 ? 600 : done < steps.length ? 1300 : 1700;
    const t = setTimeout(() => {
      setDone((n) => (n < steps.length ? n + 1 : 0));
    }, delay);
    return () => clearTimeout(t);
  }, [done]);

  const active = done < steps.length ? done : -1;
  const pct = (done / steps.length) * 100;

  return (
    <div className="call-card setup-card" aria-hidden="true">
      <div className="call-glow" />
      <div className="call-head">
        <span className="live-dot" />
        <span className="call-status">Setup</span>
        <span className="call-timer">{done}/{steps.length}</span>
      </div>

      <div className="setup-list">
        {steps.map((s, i) => {
          const isDone = i < done;
          const isActive = i === active;
          return (
            <div key={s.title} className={`setup-row${isDone ? ' is-done' : ''}${isActive ? ' is-active' : ''}`}>
              <span className="setup-num">{isDone ? '✓' : i + 1}</span>
              <div>
                <div className="setup-title">{s.title}</div>
                <div className="setup-sub">{taglines[i]}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="call-foot setup-foot">
        <div className="setup-progress"><span style={{ width: `${pct}%` }} /></div>
        <span className={`tag accent${pct === 100 ? ' is-complete' : ''}`}>{pct === 100 ? 'Live on your number' : 'Setting up…'}</span>
      </div>
    </div>
  );
}

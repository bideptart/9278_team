import { useEffect } from 'react';

const SCALE_STEP = 0.018;   // how much each buried level shrinks the card
const MIN_SCALE = 0.86;

// Drives the deck-of-cards depth effect on the sticky feature cards.
//
// Each card pins a little lower than the one before it, so card i+1 comes to
// rest just below card i and buries it. CSS can't know how many cards are
// currently stacked on top of a given card, so we count them on scroll and
// write the scale directly. Scaling from the top edge (transform-origin: top)
// keeps the pinned edge still and makes buried cards read as further back.
//
// The sticky offsets live in CSS and differ per breakpoint, so they are read
// back from the computed style rather than duplicated here — that keeps this
// working at any breakpoint without the two ever drifting apart.
export default function useCardStack(ref, { enabled = true } = {}) {
  useEffect(() => {
    if (!enabled || !ref.current) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cards = [...ref.current.querySelectorAll('.feat-card')];
    if (!cards.length) return;

    let frame = 0;

    // Inline transform beats the stylesheet, so it must be removed (not set to
    // `none`) whenever the effect is off, or it would survive the
    // reduced-motion / short-viewport rules that expect no transform.
    const clear = () => cards.forEach((c) => { c.style.transform = ''; });

    const apply = () => {
      if (reduced.matches) { clear(); return; }

      // Each card's own sticky offset, straight from CSS.
      const stick = cards.map((c) => {
        const cs = getComputedStyle(c);
        return cs.position === 'sticky' ? parseFloat(cs.top) : NaN;
      });
      // Not sticky at this breakpoint (or `top: auto`) → nothing to stack.
      if (stick.some(Number.isNaN)) { clear(); return; }

      const pinned = cards.map((c, i) => c.getBoundingClientRect().top <= stick[i] + 1);
      cards.forEach((c, i) => {
        let depth = 0;
        if (pinned[i]) for (let j = i + 1; j < cards.length; j++) if (pinned[j]) depth++;
        c.style.transform = depth ? `scale(${Math.max(MIN_SCALE, 1 - depth * SCALE_STEP)})` : '';
      });
    };

    const update = () => { frame = 0; apply(); };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('orientationchange', onScroll);
    reduced.addEventListener('change', apply);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('orientationchange', onScroll);
      reduced.removeEventListener('change', apply);
      clear();
    };
  }, [ref, enabled]);
}

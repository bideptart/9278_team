// Circular image carousel for the Industries "See KALLUS in action" section.
// Adapted from a shadcn/Tailwind/TypeScript "circular-testimonials" component
// into this project's stack: plain JSX + CSS (in industries.css) + the
// framer-motion / lucide-react packages already used elsewhere on this page.
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function calculateGap(width) {
  const minWidth = 480;
  const maxWidth = 900;
  const minGap = 30;
  const maxGap = 54;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return maxGap;
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export default function ShowcaseCarousel({ slides, autoplay = true }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(600);
  const [isPaused, setIsPaused] = useState(false);
  const imageContainerRef = useRef(null);
  const autoplayRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const prevActiveRef = useRef(0);
  const lastDirectionRef = useRef('next');
  const count = useMemo(() => slides.length, [slides]);
  const active = slides[activeIndex];

  useEffect(() => {
    prevActiveRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) setContainerWidth(imageContainerRef.current.offsetWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay || isPaused) return undefined;
    autoplayRef.current = setInterval(() => {
      lastDirectionRef.current = 'next';
      setActiveIndex((i) => (i + 1) % count);
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, count, isPaused]);

  useEffect(() => () => clearTimeout(pauseTimeoutRef.current), []);

  function pauseAutoplay() {
    setIsPaused(true);
    clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 6000);
  }

  function handlePrev() {
    lastDirectionRef.current = 'prev';
    setActiveIndex((i) => (i - 1 + count) % count);
    pauseAutoplay();
  }

  function handleNext() {
    lastDirectionRef.current = 'next';
    setActiveIndex((i) => (i + 1) % count);
    pauseAutoplay();
  }

  function getRole(index, active_, count_) {
    if (index === active_) return 'active';
    if ((active_ - 1 + count_) % count_ === index) return 'left';
    if ((active_ + 1) % count_ === index) return 'right';
    return 'hidden';
  }

  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const stickUp = gap * 0.8;
    const role = getRole(index, activeIndex, count);
    const prevRole = getRole(index, prevActiveRef.current, count);
    // Going back, the image that was on the right jumps straight to the left slot —
    // that long cross-screen sweep is what reads as a "flip". Snap it instead of sliding it.
    const isBackJump = lastDirectionRef.current === 'prev' && prevRole === 'right' && role === 'left';
    const transition = isBackJump ? 'opacity 0.7s cubic-bezier(.4, 2, .3, 1)' : undefined;
    if (role === 'active') {
      return { zIndex: 3, opacity: 1, transform: 'translateX(0) translateY(0) scale(1)', transition };
    }
    if (role === 'left') {
      return { zIndex: 2, opacity: 1, transform: `translateX(-${gap}px) translateY(-${stickUp}px) scale(0.85)`, transition };
    }
    if (role === 'right') {
      return { zIndex: 2, opacity: 1, transform: `translateX(${gap}px) translateY(-${stickUp}px) scale(0.85)`, transition };
    }
    return { zIndex: 1, opacity: 0, pointerEvents: 'none' };
  }

  return (
    <div className="ind-carousel">
      <div className="ind-carousel-images" ref={imageContainerRef}>
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.name}
            className="ind-carousel-img"
            style={getImageStyle(i)}
          />
        ))}
      </div>
      <div className="ind-carousel-content">
        <h2 className="ind-showcase-heading">See <span className="ind-showcase-heading-accent">KALLUS</span> in action</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h3 className="ind-carousel-name">{active.name}</h3>
            <p className="ind-carousel-role">{active.designation}</p>
            <p className="ind-carousel-quote">{active.quote}</p>
          </motion.div>
        </AnimatePresence>
        <div className="ind-carousel-arrows">
          <button type="button" className="ind-carousel-arrow" onClick={handlePrev} aria-label="Previous">
            <ArrowLeft strokeWidth={2} />
          </button>
          <button type="button" className="ind-carousel-arrow" onClick={handleNext} aria-label="Next">
            <ArrowRight strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

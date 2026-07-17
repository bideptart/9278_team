// Circular image carousel for the Industries "See KALLUS in action" section.
// Adapted from a shadcn/Tailwind/TypeScript "circular-testimonials" component
// into this project's stack: plain JSX + CSS (in industries.css) + the
// framer-motion / lucide-react packages already used elsewhere on this page.
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const imageContainerRef = useRef(null);
  const autoplayRef = useRef(null);
  const count = useMemo(() => slides.length, [slides]);
  const active = slides[activeIndex];

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) setContainerWidth(imageContainerRef.current.offsetWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay) return undefined;
    autoplayRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % count);
    }, 2800);
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, count]);

  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const stickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + count) % count === index;
    const isRight = (activeIndex + 1) % count === index;
    if (isActive) {
      return { zIndex: 3, opacity: 1, transform: 'translateX(0) translateY(0) scale(1) rotateY(0deg)' };
    }
    if (isLeft) {
      return { zIndex: 2, opacity: 1, transform: `translateX(-${gap}px) translateY(-${stickUp}px) scale(0.85) rotateY(15deg)` };
    }
    if (isRight) {
      return { zIndex: 2, opacity: 1, transform: `translateX(${gap}px) translateY(-${stickUp}px) scale(0.85) rotateY(-15deg)` };
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
      </div>
    </div>
  );
}

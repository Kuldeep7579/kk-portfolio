import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/**
 * Initial loading screen: animates a mono progress counter 0→100,
 * then reveals the page with a GSAP wipe transition.
 * Calls onComplete when the reveal animation finishes.
 */
export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const panelTopRef = useRef(null);
  const panelBottomRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 200 : 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        revealPage();
      }
    };
    requestAnimationFrame(tick);

    function revealPage() {
      const tl = gsap.timeline({
        onComplete: () => onComplete?.(),
      });

      tl.to(counterRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' })
        .to(panelTopRef.current, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' }, '+=0.1')
        .to(panelBottomRef.current, { yPercent: 100, duration: 0.8, ease: 'expo.inOut' }, '<')
        .to(containerRef.current, { autoAlpha: 0, duration: 0.1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9998]" aria-hidden="true">
      <div ref={panelTopRef} className="absolute top-0 left-0 w-full h-1/2 bg-void flex items-end justify-center pb-2 overflow-hidden">
        <span className="font-display text-2xl text-ink-high tracking-tight">Kuldeep<span className="text-signal">.</span></span>
      </div>
      <div ref={panelBottomRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-void flex items-start justify-center pt-2">
        <span ref={counterRef} className="font-mono text-sm text-ink-low tabular-nums">
          {String(count).padStart(3, '0')}%
        </span>
      </div>
    </div>
  );
}

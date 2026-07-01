import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `target` once the element enters the viewport.
 * Returns [ref, value] — attach ref to the element you want to observe.
 */
export function useCountUp(target, { duration = 1800, startOnView = true } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      animate();
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();

    function animate() {
      const start = performance.now();

      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out-expo for a satisfying decelerating count
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setValue(Math.floor(eased * target));

        if (progress < 1) requestAnimationFrame(step);
        else setValue(target);
      };

      requestAnimationFrame(step);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration, startOnView]);

  return [ref, value];
}

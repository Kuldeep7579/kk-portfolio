import { useEffect, useState } from 'react';

/**
 * Returns true once the page has been scrolled past `threshold` px.
 * Used for navbar background transition and scroll-to-top button visibility.
 */
export function useScrollPosition(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrolled, scrollY };
}

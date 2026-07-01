import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently most visible in the viewport.
 * Used to highlight the active link in the navbar.
 */
export function useActiveSection(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];
    const visibility = {};

    sectionIds.forEach((id) => {
      const el = document.getElementById(id.replace('#', ''));
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibility[id] = entry.intersectionRatio;
          const mostVisible = Object.entries(visibility).sort((a, b) => b[1] - a[1])[0];
          if (mostVisible && mostVisible[1] > 0.1) {
            setActiveId(mostVisible[0]);
          }
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
}

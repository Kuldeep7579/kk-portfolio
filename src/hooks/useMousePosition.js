import { useEffect, useState } from 'react';

/**
 * Tracks raw mouse coordinates across the viewport.
 * Used by the custom cursor and any pointer-reactive elements.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
}

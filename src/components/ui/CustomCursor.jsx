import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom cursor: a small dot with lagging glow ring.
 * Auto-disables on touch devices.
 */
export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const touchCapable = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(touchCapable);
    if (touchCapable) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);

      const target = e.target;
      setIsPointer(
        !!target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')
      );
    };

    const handleLeave = () => setHidden(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isTouch) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] ${hidden ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 hidden md:block`}>
      <motion.div
        className="absolute rounded-full bg-signal"
        style={{
          left: cursorX,
          top: cursorY,
          width: 8,
          height: 8,
          x: '-50%',
          y: '-50%',
        }}
      />
      <motion.div
        className="absolute rounded-full border border-signal/50"
        style={{
          left: ringX,
          top: ringY,
          width: isPointer ? 56 : 32,
          height: isPointer ? 56 : 32,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          width: isPointer ? 56 : 32,
          height: isPointer ? 56 : 32,
          backgroundColor: isPointer ? 'rgba(124,158,255,0.08)' : 'rgba(124,158,255,0)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </div>
  );
}

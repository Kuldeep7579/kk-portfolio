import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Glassmorphism card with a subtle 3D tilt that follows the cursor.
 * Used as the base for project cards, certification cards, testimonial cards.
 */
export default function TiltCard({ children, className = '', tiltStrength = 8, glow = true, ...props }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setTilt({
      x: (py - 0.5) * -tiltStrength,
      y: (px - 0.5) * tiltStrength,
    });
    setGlowPos({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      className={`relative glass rounded-2xl overflow-hidden group ${className}`}
      {...props}
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(124,158,255,0.15), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

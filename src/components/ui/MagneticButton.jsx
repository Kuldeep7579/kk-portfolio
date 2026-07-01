import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Wraps any button/link content with a subtle magnetic pull toward the cursor.
 * Pass `as="a"` for links, defaults to button.
 */
export default function MagneticButton({
  children,
  className = '',
  as = 'button',
  strength = 0.35,
  ...props
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const Component = motion[as] || motion.button;

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <Component
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.2 }}
      {...props}
    >
      {children}
    </Component>
  );
}

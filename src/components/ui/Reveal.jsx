import { motion } from 'framer-motion';

/**
 * Wraps children with a fade + rise reveal animation triggered on scroll into view.
 * Use `delay` to stagger multiple Reveal components in sequence.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 28,
  className = '',
  once = true,
  as = 'div',
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}

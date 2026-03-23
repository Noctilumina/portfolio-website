import { motion, useReducedMotion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}) {
  const { ref, isVisible } = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  };

  const offset = offsets[direction] || offsets.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.35, delay: delay * 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

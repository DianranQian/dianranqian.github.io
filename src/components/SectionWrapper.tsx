import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = '' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-5xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

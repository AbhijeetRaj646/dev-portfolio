import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{ y }}
    >
      {children}
    </motion.section>
  );
};
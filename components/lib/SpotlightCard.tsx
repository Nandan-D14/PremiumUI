import React from 'react';
import { cn } from '../../utils/cn';
import { useMotionValue, useMotionTemplate, motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className, 
  spotlightColor = 'rgba(255, 11, 85, 0.15)' 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-xl border border-border bg-surface overflow-hidden",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '../../utils/cn';

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
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-xl border border-border bg-surface overflow-hidden",
        className
      )}
    >
      {/*
        ⚡ Performance Optimization:
        Used useMotionValue and useMotionTemplate to update the background gradient
        directly in the DOM without triggering React re-renders on mouse move.
      */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background,
        }}
      />
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
};

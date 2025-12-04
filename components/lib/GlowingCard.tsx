import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className,
  glowColor = '#6366f1'
}) => {  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn('relative group', className)}
    >
      {/* Glow effect */}
      <div 
        className="absolute -inset-0.5 rounded-xl opacity-40 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${glowColor}, transparent)` }}
      />
      
      {/* Card content */}
      <div className="relative rounded-xl bg-surface/40 backdrop-blur-xl p-6 h-full shadow-2xl">
        {children}
      </div>
    </motion.div>
  );
};

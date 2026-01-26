import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'glow';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
  shimmer?: boolean;
  children: React.ReactNode;
}

const buttonVariants = {
  default: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-primary/40',
  destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20',
  outline: 'border-2 border-border bg-transparent hover:bg-surface text-white hover:border-primary/50',
  secondary: 'bg-surface text-white hover:bg-surface/80 border border-border hover:border-primary/20',
  ghost: 'hover:bg-surface hover:text-white text-secondary',
  link: 'text-primary underline-offset-4 hover:underline',
  glow: 'bg-primary text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:bg-primary-dark',
};

const buttonSizes = {
  default: 'h-11 px-6 py-2',
  sm: 'h-9 px-4 text-sm',
  lg: 'h-12 px-8 text-lg',
  icon: 'h-10 w-10',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', isLoading, shimmer, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(
          'relative inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {shimmer && (
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}
        <div className="relative flex items-center gap-2">
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {children}
        </div>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

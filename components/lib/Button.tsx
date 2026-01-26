import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'glow' | 'gradient';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  shape?: 'default' | 'pill' | 'square';
  isLoading?: boolean;
  shimmer?: boolean;
  children: React.ReactNode;
}

const buttonVariants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20',
  destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20',
  outline: 'border-2 border-border bg-transparent hover:bg-surface hover:text-white hover:border-primary/50 text-secondary-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-transparent hover:border-primary/20',
  ghost: 'hover:bg-accent hover:text-accent-foreground text-secondary-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
  glow: 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:bg-primary/90',
  gradient: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:from-emerald-600 hover:to-teal-600 border-0',
};

const buttonSizes = {
  default: 'h-11 px-6 py-2',
  sm: 'h-9 px-4 text-sm',
  lg: 'h-12 px-8 text-lg',
  icon: 'h-10 w-10',
};

const buttonShapes = {
  default: 'rounded-lg',
  pill: 'rounded-full',
  square: 'rounded-none',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', shape = 'default', isLoading, shimmer, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(
          'relative inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
          buttonVariants[variant],
          buttonSizes[size],
          buttonShapes[shape],
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

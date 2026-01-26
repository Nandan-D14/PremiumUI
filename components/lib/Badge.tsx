import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline' | 'glow' | 'glass';
  dot?: boolean;
  children: React.ReactNode;
}

const badgeVariants = {
  default: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary text-secondary-foreground border-border',
  success: 'bg-green-500/10 text-green-500 border-green-500/20',
  warning: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  destructive: 'bg-red-500/10 text-red-500 border-red-500/20',
  outline: 'text-foreground border-border',
  glow: 'bg-primary/10 text-primary border-primary/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
  glass: 'bg-white/5 text-white border-white/10 backdrop-blur-md shadow-sm',
};

export const Badge: React.FC<BadgeProps> = ({ 
  className, 
  variant = 'default', 
  dot = false,
  children, 
  ...props 
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300',
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="mr-1.5 flex h-2 w-2 relative">
           <span className={cn(
             "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
             variant === 'destructive' ? 'bg-red-500' : 'bg-primary'
           )}></span>
           <span className={cn(
             "relative inline-flex rounded-full h-2 w-2",
             variant === 'destructive' ? 'bg-red-500' : 'bg-primary'
           )}></span>
        </span>
      )}
      {children}
    </div>
  );
};

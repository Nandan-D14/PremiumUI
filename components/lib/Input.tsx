import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full group">
        {label && (
          <label className="block text-sm font-medium text-secondary mb-2 transition-colors group-focus-within:text-primary">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary transition-colors group-focus-within:text-primary">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              'flex h-11 w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-white placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 shadow-sm disabled:cursor-not-allowed disabled:opacity-50',
              icon && 'pl-10',
              error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

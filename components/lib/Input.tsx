import React, { useId } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-secondary mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">
              {icon}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            className={cn(
              'flex h-11 w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm text-white placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:cursor-not-allowed disabled:opacity-50',
              icon && 'pl-10',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

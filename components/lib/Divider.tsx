import React from 'react';
import { cn } from '../../utils/cn';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted' | 'gradient';
  label?: React.ReactNode;
  labelPosition?: 'left' | 'center' | 'right';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  labelPosition = 'center',
  className,
}) => {
  const lineStyles = {
    solid: 'border-border',
    dashed: 'border-border border-dashed',
    dotted: 'border-border border-dotted',
    gradient: '',
  };

  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'inline-block h-full min-h-[1em] w-px self-stretch',
          variant === 'gradient'
            ? 'bg-gradient-to-b from-transparent via-border to-transparent'
            : 'border-l',
          variant !== 'gradient' && lineStyles[variant],
          className
        )}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  if (label) {
    const labelPositionClasses = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    };

    return (
      <div
        className={cn('flex items-center w-full', labelPositionClasses[labelPosition], className)}
        role="separator"
      >
        <div
          className={cn(
            'flex-grow',
            variant === 'gradient'
              ? 'h-px bg-gradient-to-r from-transparent via-border to-border'
              : 'border-t',
            variant !== 'gradient' && lineStyles[variant],
            labelPosition === 'left' && 'max-w-[20px]',
            labelPosition === 'right' && 'flex-grow'
          )}
        />
        <span className="px-3 text-xs font-medium text-secondary uppercase tracking-wider">
          {label}
        </span>
        <div
          className={cn(
            'flex-grow',
            variant === 'gradient'
              ? 'h-px bg-gradient-to-r from-border via-border to-transparent'
              : 'border-t',
            variant !== 'gradient' && lineStyles[variant],
            labelPosition === 'right' && 'max-w-[20px]',
            labelPosition === 'left' && 'flex-grow'
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-full',
        variant === 'gradient'
          ? 'h-px bg-gradient-to-r from-transparent via-border to-transparent'
          : 'border-t',
        variant !== 'gradient' && lineStyles[variant],
        className
      )}
      role="separator"
      aria-orientation="horizontal"
    />
  );
};

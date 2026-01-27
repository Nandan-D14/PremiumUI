import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  description?: string;
  className?: string;
}

const sizeClasses = {
  sm: {
    track: 'h-5 w-9',
    thumb: 'h-4 w-4',
    translate: 'translateX(16px)',
  },
  md: {
    track: 'h-6 w-11',
    thumb: 'h-5 w-5',
    translate: 'translateX(20px)',
  },
  lg: {
    track: 'h-7 w-14',
    thumb: 'h-6 w-6',
    translate: 'translateX(28px)',
  },
};

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  description,
  className,
}) => {
  const sizeConfig = sizeClasses[size];

  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const switchControl = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={cn(
        'relative inline-flex shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        sizeConfig.track,
        checked ? 'bg-primary' : 'bg-surface border border-border',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <motion.span
        className={cn(
          'pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0',
          sizeConfig.thumb
        )}
        initial={false}
        animate={{
          x: checked ? parseInt(sizeConfig.translate.replace(/[^0-9]/g, '')) : 2,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ marginTop: '2px' }}
      />
    </button>
  );

  if (!label && !description) {
    return switchControl;
  }

  return (
    <div className="flex items-start gap-3">
      {switchControl}
      <div className="flex flex-col">
        {label && (
          <span
            className={cn(
              'text-sm font-medium',
              disabled ? 'text-secondary/50' : 'text-white'
            )}
          >
            {label}
          </span>
        )}
        {description && (
          <span className="text-xs text-secondary">{description}</span>
        )}
      </div>
    </div>
  );
};

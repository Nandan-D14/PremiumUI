import React from 'react';
import { cn } from '../../utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circle' | 'rounded' | 'square';
  status?: 'online' | 'offline' | 'away' | 'busy';
  border?: boolean;
}

const sizeClasses = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-16 w-16 text-xl',
};

const variantClasses = {
  circle: 'rounded-full',
  rounded: 'rounded-lg',
  square: 'rounded-none',
};

const statusClasses = {
  online: 'bg-green-500',
  offline: 'bg-gray-500',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
};

const statusSizeClasses = {
  xs: 'h-1.5 w-1.5',
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
  xl: 'h-4 w-4',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  fallback,
  size = 'md',
  variant = 'circle',
  status,
  border = false,
  className,
  ...props
}) => {
  const [hasError, setHasError] = React.useState(false);

  const getFallbackInitials = () => {
    if (fallback) return fallback.slice(0, 2).toUpperCase();
    if (alt) {
      const parts = alt.split(' ');
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return alt.slice(0, 2).toUpperCase();
    }
    return '??';
  };

  const showImage = src && !hasError;

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden bg-surface',
        sizeClasses[size],
        variantClasses[variant],
        border && 'ring-2 ring-border ring-offset-2 ring-offset-background',
        className
      )}
      {...props}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className={cn('h-full w-full object-cover', variantClasses[variant])}
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="font-semibold text-secondary select-none">
          {getFallbackInitials()}
        </span>
      )}
      
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-background',
            statusClasses[status],
            statusSizeClasses[size]
          )}
        />
      )}
    </div>
  );
};

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: AvatarProps['size'];
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 4,
  size = 'md',
  className,
}) => {
  const avatars = React.Children.toArray(children);
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className={cn('flex -space-x-2', className)}>
      {visible.map((child, index) => (
        <div key={index} className="relative hover:z-10 transition-transform hover:scale-105">
          {child}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            'relative inline-flex items-center justify-center bg-surface border-2 border-background font-semibold text-secondary rounded-full',
            sizeClasses[size]
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};

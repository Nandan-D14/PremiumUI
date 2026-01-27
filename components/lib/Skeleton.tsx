import React from 'react';
import { cn } from '../../utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const variantClasses = {
  text: 'rounded',
  circular: 'rounded-full',
  rectangular: 'rounded-none',
  rounded: 'rounded-lg',
};

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  className,
  style,
  ...props
}) => {
  const animationClass = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer overflow-hidden relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
    none: '',
  };

  return (
    <div
      className={cn(
        'bg-surface',
        variantClasses[variant],
        animationClass[animation],
        variant === 'text' && !height && 'h-4',
        variant === 'circular' && !width && !height && 'h-10 w-10',
        className
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style,
      }}
      {...props}
    />
  );
};

export interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  lines = 3,
  className,
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width={index === lines - 1 ? '75%' : '100%'}
        />
      ))}
    </div>
  );
};

export interface SkeletonCardProps {
  hasImage?: boolean;
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  hasImage = true,
  className,
}) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-background p-4 space-y-4',
        className
      )}
    >
      {hasImage && <Skeleton variant="rounded" height={200} width="100%" />}
      <div className="space-y-2">
        <Skeleton variant="text" width="60%" height={24} />
        <SkeletonText lines={2} />
      </div>
      <div className="flex gap-2">
        <Skeleton variant="rounded" width={80} height={32} />
        <Skeleton variant="rounded" width={80} height={32} />
      </div>
    </div>
  );
};

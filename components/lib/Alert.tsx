import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const variantClasses = {
  info: {
    container: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    icon: <Info className="h-5 w-5" />,
  },
  success: {
    container: 'bg-green-500/10 border-green-500/20 text-green-400',
    icon: <CheckCircle className="h-5 w-5" />,
  },
  warning: {
    container: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  error: {
    container: 'bg-red-500/10 border-red-500/20 text-red-400',
    icon: <AlertCircle className="h-5 w-5" />,
  },
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  icon,
  dismissible = false,
  onDismiss,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  const variantConfig = variantClasses[variant];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'relative flex gap-3 rounded-lg border p-4',
            variantConfig.container,
            className
          )}
          role="alert"
        >
          <div className="flex-shrink-0">
            {icon || variantConfig.icon}
          </div>
          <div className="flex-1 min-w-0">
            {title && (
              <h4 className="font-semibold mb-1">{title}</h4>
            )}
            <div className="text-sm opacity-90">{children}</div>
          </div>
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 hover:opacity-70 transition-opacity"
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

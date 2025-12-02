import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  onClose: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ id, message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 3000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  const icons = {
    success: <Check size={18} className="text-green-400" />,
    error: <AlertCircle size={18} className="text-red-400" />,
    info: <Info size={18} className="text-blue-400" />,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="flex items-center gap-3 w-full max-w-xs sm:max-w-sm bg-surface border border-border px-4 py-3 rounded-xl shadow-2xl pointer-events-auto backdrop-blur-md bg-opacity-90"
    >
      <div className="shrink-0">{icons[type]}</div>
      <p className="text-sm font-medium text-white flex-1">{message}</p>
      <button 
        onClick={() => onClose(id)} 
        className="text-secondary hover:text-white transition-colors"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};
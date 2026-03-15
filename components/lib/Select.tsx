import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  searchable?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  error,
  disabled = false,
  searchable = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = searchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;
    onChange?.(option.value);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      setSearchQuery('');
    } else if (event.key === 'Enter' && !isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className={cn('relative w-full', className)} ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-white mb-1.5">
          {label}
        </label>
      )}
      
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn(
          'flex w-full items-center justify-between rounded-lg border bg-surface px-4 py-2.5 text-left text-sm transition-all',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          error
            ? 'border-red-500 focus-visible:ring-red-500'
            : 'border-border hover:border-primary/50',
          disabled && 'cursor-not-allowed opacity-50',
          isOpen && 'ring-2 ring-primary ring-offset-2 ring-offset-background'
        )}
      >
        <span className={cn(selectedOption ? 'text-white' : 'text-secondary')}>
          {selectedOption ? (
            <span className="flex items-center gap-2">
              {selectedOption.icon}
              {selectedOption.label}
            </span>
          ) : (
            placeholder
          )}
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-secondary transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-surface shadow-lg overflow-hidden"
          >
            {searchable && (
              <div className="p-2 border-b border-border">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-background rounded-md px-3 py-2 text-sm text-white placeholder-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            )}
            
            <ul className="max-h-60 overflow-auto py-1">
              {filteredOptions.length === 0 ? (
                <li className="px-4 py-2 text-sm text-secondary">No options found</li>
              ) : (
                filteredOptions.map((option) => (
                  <li key={option.value}>
                    <button
                      type="button"
                      onClick={() => handleSelect(option)}
                      disabled={option.disabled}
                      className={cn(
                        'flex w-full items-center justify-between px-4 py-2 text-sm transition-colors',
                        option.disabled
                          ? 'cursor-not-allowed text-secondary/50'
                          : 'text-white hover:bg-background cursor-pointer',
                        option.value === value && 'bg-primary/10'
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {option.icon}
                        {option.label}
                      </span>
                      {option.value === value && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="mt-1.5 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

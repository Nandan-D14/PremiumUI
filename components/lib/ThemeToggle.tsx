import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 90,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center text-primary"
        >
          <Moon size={20} />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -90,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center text-amber-500"
        >
          <Sun size={20} />
        </motion.div>
      </div>
    </button>
  );
};

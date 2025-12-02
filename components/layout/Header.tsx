import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Twitter, Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Docs', path: '/docs/introduction' },
    { name: 'Components', path: '/components' },
    { name: 'Showcase', path: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden text-secondary hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-primary to-blue-500" />
            <span>Generative UI</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location.pathname.startsWith(link.path) && link.path !== '/' 
                  ? "text-white" 
                  : "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
           <a 
            href="#" 
            className="hidden sm:flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-1.5 text-xs font-medium text-white hover:bg-white/5 transition-colors"
           >
            <Github size={14} />
            <span>Star on GitHub</span>
            <span className="ml-1 text-secondary">★ 2.4k</span>
           </a>
        </div>
      </div>
    </header>
  );
};
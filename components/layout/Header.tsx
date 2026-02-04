import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Menu, X, Search } from 'lucide-react';
import { cn } from '../../utils/cn';
import { ThemeToggle } from '../lib/ThemeToggle';
import { SearchDialog } from './SearchDialog';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [stars, setStars] = useState<string | number>('0');

  useEffect(() => {
    fetch('https://api.github.com/repos/Nandan-D14/Premium-UI')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count) {
          setStars(data.stargazers_count);
        }
      })
      .catch(console.error);
  }, []);

  // Handle keyboard navigation (only for opening search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Docs', path: '/docs/introduction' },
    { name: 'Components', path: '/components' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-full items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={onMenuClick}
              className="lg:hidden text-muted-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight group">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <span className="text-primary-foreground text-sm font-bold">UI</span>
              </div>
              <span className="text-foreground">Premium UI</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname.startsWith(link.path) && link.path !== '/' 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
             <button
               onClick={() => setIsSearchOpen(true)}
               className="flex items-center gap-3 rounded-md bg-muted/50 border border-input px-4 py-2 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors group"
             >
               <Search size={14} />
               <span className="hidden sm:inline">Search...</span>
               <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 ml-1">
                 <span className="text-xs">⌘</span>K
               </kbd>
             </button>

             <ThemeToggle />

             <a 
              href="https://github.com/Nandan-D14/Premium-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm"
             >
              <Github size={14} />
              <span>Star</span>
              <span className="ml-1 bg-black/10 px-1.5 py-0.5 rounded-full text-[10px] font-mono">★ {stars}</span>
             </a>
          </div>
        </div>
      </header>

      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

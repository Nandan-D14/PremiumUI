import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Twitter, Menu, X, Search, Command, ChevronRight, FileText, Box } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Modal } from '../lib/Modal';
import { ThemeToggle } from '../lib/ThemeToggle';
import { COMPONENT_REGISTRY } from '../../data/registry';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  // Combine all searchable items
  const searchItems = useMemo(() => {
    const components = COMPONENT_REGISTRY.map(c => ({
      type: 'component',
      title: c.name,
      description: c.description,
      path: `/components/${c.slug}`,
      category: c.category
    }));

    const docs = [
      { type: 'doc', title: 'Introduction', description: 'Getting started with Premium UI', path: '/docs/introduction', category: 'Documentation' },
      { type: 'doc', title: 'Installation', description: 'How to install and use', path: '/docs/installation', category: 'Documentation' },
      { type: 'template', title: 'SaaS Landing', description: 'Complete SaaS landing page template', path: '/components/modern-saas', category: 'Templates' },
    ];

    return [...docs, ...components];
  }, []);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return searchItems.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 5); // Limit to 5 results
  }, [searchQuery, searchItems]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }

      if (!isSearchOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter' && filteredItems.length > 0) {
        e.preventDefault();
        navigate(filteredItems[selectedIndex].path);
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, filteredItems, selectedIndex, navigate]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

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

      <Modal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        title=""
        size="lg"
        showCloseButton={false}
        align="top"
        className="!bg-transparent !border-0 !shadow-none !p-0 overflow-hidden"
      >
        <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] bg-black/60 backdrop-blur-2xl">
          {/* Search Input */}
          <div className="flex items-center px-4 py-4 border-b border-white/10">
            <Search className="h-5 w-5 text-secondary/70 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="flex-1 bg-transparent text-lg text-white placeholder:text-secondary/50 focus:outline-none"
              autoFocus
            />
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="p-1 rounded-md text-secondary/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span className="text-xs font-medium">ESC</span>
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[400px] overflow-y-auto custom-scrollbar p-2">
            {!searchQuery && (
              <div className="py-12 text-center text-secondary/50">
                <Command className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <p className="text-sm">Type to search components and docs...</p>
              </div>
            )}

            {searchQuery && filteredItems.length === 0 && (
              <div className="py-12 text-center text-secondary/50">
                <p className="text-sm">No results found for "{searchQuery}"</p>
              </div>
            )}

            {filteredItems.length > 0 && (
              <div className="space-y-1">
                {filteredItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsSearchOpen(false)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3 rounded-xl transition-colors cursor-pointer",
                      index === selectedIndex ? "bg-white/10" : "hover:bg-white/5"
                    )}
                  >
                    <div className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      index === selectedIndex ? "bg-primary/20 text-primary" : "bg-white/5 text-secondary"
                    )}>
                      {item.type === 'component' ? <Box size={20} /> : <FileText size={20} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={cn(
                          "text-sm font-medium truncate",
                          index === selectedIndex ? "text-white" : "text-secondary"
                        )}>
                          {item.title}
                        </h4>
                        <span className="text-[10px] uppercase tracking-wider text-secondary/50 font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-secondary/70 truncate">
                        {item.description}
                      </p>
                    </div>
                    {index === selectedIndex && (
                      <ChevronRight size={16} className="text-secondary/50" />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {filteredItems.length > 0 && (
             <div className="px-4 py-2 border-t border-white/10 flex justify-between items-center text-[10px] text-secondary/50 bg-white/5">
               <div className="flex gap-3">
                 <span className="flex items-center gap-1">
                   <kbd className="bg-black/20 rounded px-1 py-0.5 border border-white/10">↓</kbd> 
                   <kbd className="bg-black/20 rounded px-1 py-0.5 border border-white/10">↑</kbd> 
                   navigate
                 </span>
                 <span className="flex items-center gap-1">
                   <kbd className="bg-black/20 rounded px-1 py-0.5 border border-white/10">↵</kbd> 
                   select
                 </span>
               </div>
               <span>Premium UI</span>
             </div>
          )}
        </div>
      </Modal>
    </>
  );
};
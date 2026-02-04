import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Command, ChevronRight, FileText, Box } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Modal } from '../lib/Modal';
import { COMPONENT_REGISTRY } from '../../data/registry';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter' && filteredItems.length > 0) {
        e.preventDefault();
        navigate(filteredItems[selectedIndex].path);
        onClose();
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, navigate, onClose]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
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
              onClick={onClose}
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
                    onClick={onClose}
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
  );
};

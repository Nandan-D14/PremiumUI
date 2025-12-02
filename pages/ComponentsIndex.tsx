import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPONENT_REGISTRY } from '../data/registry';
import { ArrowRight, Search, ChevronDown, Folder, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

export const ComponentsIndex: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // Track collapsed categories. Empty array means all are expanded by default.
  const [collapsedCategories, setCollapsedCategories] = useState<string[]>([]);

  const filteredComponents = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase().trim();
    if (!lowerQuery) return COMPONENT_REGISTRY;
    
    return COMPONENT_REGISTRY.filter(component =>
      component.name.toLowerCase().includes(lowerQuery) ||
      component.description.toLowerCase().includes(lowerQuery) ||
      component.category.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  // Get all unique categories from the registry to maintain order
  const allCategories = useMemo(() => {
    return Array.from(new Set(COMPONENT_REGISTRY.map(c => c.category)));
  }, []);

  const toggleCategory = (category: string) => {
    setCollapsedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  // Auto-expand all categories when searching
  useEffect(() => {
    if (searchQuery) {
      setCollapsedCategories([]);
    }
  }, [searchQuery]);

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Components</h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
          Explore our collection of beautiful, animated components designed to enhance your user interface.
        </p>

        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-secondary group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-12 py-4 border border-border rounded-2xl leading-5 bg-surface/50 backdrop-blur-sm text-white placeholder-secondary focus:outline-none focus:bg-surface focus:ring-2 focus:ring-primary/50 focus:border-primary text-base transition-all shadow-lg hover:border-primary/30"
            placeholder="Search components by name, description, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-secondary hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {filteredComponents.length > 0 ? (
        <div className="space-y-8">
          {allCategories.map(category => {
            const categoryComponents = filteredComponents.filter(c => c.category === category);
            
            // If no components match in this category, don't render the section
            if (categoryComponents.length === 0) return null;

            const isCollapsed = collapsedCategories.includes(category);

            return (
              <div key={category} className="rounded-xl border border-border bg-surface/30 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-4 sm:px-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-md bg-white/5 text-primary transition-colors",
                      !isCollapsed && "bg-primary/10 text-primary"
                    )}>
                      <Folder size={20} />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        {category}
                        <span className="text-xs font-medium text-secondary bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                          {categoryComponents.length}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className={cn("text-secondary transition-transform duration-300", isCollapsed ? "" : "rotate-180")}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {!isCollapsed && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-2 border-t border-border/50">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {categoryComponents.map((component) => (
                            <Link 
                              key={component.slug}
                              to={`/components/${component.slug}`}
                              className="group relative flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/50 h-full"
                            >
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{component.name}</h3>
                              <p className="text-secondary text-sm line-clamp-2 mb-6 flex-grow">
                                {component.description}
                              </p>
                              <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors mt-auto">
                                View Details <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                              </div>
                              
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
             <Search className="h-8 w-8 text-secondary" />
          </div>
          <p className="text-xl text-white font-medium mb-2">No components found</p>
          <p className="text-secondary mb-6">We couldn't find anything matching "{searchQuery}"</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="px-6 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};
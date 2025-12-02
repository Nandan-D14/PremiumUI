import React from 'react';
import { NavLink } from 'react-router-dom';
import { COMPONENT_REGISTRY } from '../../data/registry';
import { cn } from '../../utils/cn';
import { SidebarSection } from '../../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Group components by category
  const categories = Array.from(new Set(COMPONENT_REGISTRY.map(c => c.category)));
  
  const componentSections: SidebarSection[] = categories.map(cat => ({
    title: cat,
    items: COMPONENT_REGISTRY
      .filter(c => c.category === cat)
      .map(c => ({
        title: c.name,
        path: `/components/${c.slug}`,
      }))
  }));

  const mainSections: SidebarSection[] = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Introduction', path: '/docs/introduction' },
        { title: 'Installation', path: '/docs/installation' },
      ]
    },
    ...componentSections
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-16 bottom-0 z-40 w-64 border-r border-border bg-background transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full overflow-y-auto px-6 py-8">
          {mainSections.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-secondary/70">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => {
                        if (window.innerWidth < 1024) onClose();
                      }}
                      className={({ isActive }) => cn(
                        "block rounded-md px-3 py-2 text-sm transition-colors",
                        isActive 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "text-secondary hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};
import React from 'react';
import { NavLink } from 'react-router-dom';
import { COMPONENT_REGISTRY } from '../../data/registry';
import { cn } from '../../utils/cn';
import { SidebarSection } from '../../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Group components by category - moved outside component to prevent recalculation on every render
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

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-16 bottom-0 z-40 w-72 border-r border-border bg-background transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full overflow-y-auto px-6 py-8 custom-scrollbar">
          {mainSections.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h4 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
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
                        "group flex items-center rounded-md px-2 py-1.5 text-sm transition-colors font-medium relative",
                        isActive 
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {({ isActive }) => (
                         <>
                           <span className={cn(
                             "absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full transition-all duration-300",
                             isActive ? "bg-primary opacity-100" : "bg-transparent opacity-0 group-hover:bg-muted-foreground/30"
                           )} />
                           <span className={cn("ml-1", isActive ? "font-semibold" : "")}>
                             {item.title}
                           </span>
                         </>
                      )}
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

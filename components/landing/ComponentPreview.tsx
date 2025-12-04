import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../lib/Button';
import { Badge } from '../lib/Badge';
import { Card } from '../lib/Card';
import { Input } from '../lib/Input';

const tabs = [
  { id: 'buttons', label: 'Buttons' },
  { id: 'cards', label: 'Cards' },
  { id: 'inputs', label: 'Inputs' },
];

export const ComponentPreview = () => {
  const [activeTab, setActiveTab] = useState('buttons');

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Interactive Preview</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Try out the components directly in your browser. Switch tabs to explore.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden shadow-sm">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
           
           <AnimatePresence mode="wait">
             {activeTab === 'buttons' && (
               <motion.div 
                 key="buttons"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.2 }}
                 className="flex flex-col gap-6 items-center"
               >
                 <div className="flex gap-4 flex-wrap justify-center">
                   <Button>Default Button</Button>
                   <Button variant="secondary">Secondary</Button>
                   <Button variant="destructive">Destructive</Button>
                 </div>
                 <div className="flex gap-4 flex-wrap justify-center">
                   <Button variant="outline">Outline</Button>
                   <Button variant="ghost">Ghost</Button>
                   <Button variant="link">Link Button</Button>
                 </div>
                 <div className="flex gap-4 flex-wrap justify-center">
                   <Button size="sm">Small</Button>
                   <Button size="lg">Large Button</Button>
                   <Button isLoading>Loading</Button>
                 </div>
               </motion.div>
             )}

             {activeTab === 'cards' && (
               <motion.div 
                 key="cards"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.2 }}
                 className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl"
               >
                 <Card hover className="p-6">
                   <h3 className="text-xl font-bold text-white mb-2">Hover Card</h3>
                   <p className="text-secondary">Hover me to see the elevation effect. Great for interactive lists.</p>
                 </Card>
                 <Card className="p-6 border-primary/50 bg-primary/5">
                   <h3 className="text-xl font-bold text-primary mb-2">Active State</h3>
                   <p className="text-secondary">A card with a highlighted border style.</p>
                 </Card>
               </motion.div>
             )}

             {activeTab === 'inputs' && (
               <motion.div 
                 key="inputs"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.2 }}
                 className="w-full max-w-md space-y-6"
               >
                 <Input label="Email Address" placeholder="hello@example.com" />
                 <Input label="Password" type="password" placeholder="••••••••" />
                 <Input label="With Error" error="Invalid input value" defaultValue="Invalid" />
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

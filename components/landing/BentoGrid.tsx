import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Zap, Code, Shield, Smartphone, Monitor } from 'lucide-react';
import { cn } from '../../utils/cn';

const BentoCard = ({ title, description, icon, className, children }: { title: string, description: string, icon?: React.ReactNode, className?: string, children?: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={cn(
      "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg",
      className
    )}
  >
    <div className="flex flex-col h-full">
      <div className="mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <div className="mt-auto pt-4 relative z-10">
        {children}
      </div>
    </div>

    {/* Gradient Overlay on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </motion.div>
);

export const BentoGrid = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Everything you need to <span className="text-primary">ship faster</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete toolkit for modern web development. Carefully crafted to provide the best developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Large Card: Theme Support */}
          <BentoCard
            title="Dark & Light Mode"
            description="Built-in support for both dark and light color schemes. Automatically adapts to system preferences or user selection."
            icon={<Moon className="w-6 h-6" />}
            className="md:col-span-2 md:row-span-1"
          >
            <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg max-w-sm">
               <div className="flex-1">
                 <div className="h-2 w-20 bg-foreground/20 rounded mb-2" />
                 <div className="h-2 w-32 bg-muted-foreground/20 rounded" />
               </div>
               <div className="flex gap-2">
                 <div className="p-2 rounded-full bg-slate-100 text-slate-900 border border-slate-200"><Sun size={16} /></div>
                 <div className="p-2 rounded-full bg-slate-900 text-slate-100 border border-slate-800"><Moon size={16} /></div>
               </div>
            </div>
          </BentoCard>

          {/* Card: TypeScript */}
          <BentoCard
            title="TypeScript Ready"
            description="Fully typed components for better DX and fewer bugs."
            icon={<Code className="w-6 h-6" />}
          >
            <div className="font-mono text-xs p-3 bg-zinc-900 text-zinc-100 rounded border border-zinc-800">
               <span className="text-purple-400">interface</span> <span className="text-yellow-300">Props</span> {'{'} <br/>
               &nbsp;&nbsp;variant: <span className="text-green-400">'solid'</span> | <span className="text-green-400">'outline'</span>;<br/>
               {'}'}
            </div>
          </BentoCard>

          {/* Card: Animation */}
          <BentoCard
            title="Fluid Animations"
            description="Powered by Framer Motion for 60fps buttery smooth transitions."
            icon={<Zap className="w-6 h-6" />}
          >
            <div className="relative h-12 w-full bg-muted/50 rounded-lg overflow-hidden">
               <motion.div
                 animate={{ x: ['0%', '80%', '0%'] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-2 bottom-2 left-2 w-8 bg-primary rounded"
               />
            </div>
          </BentoCard>

          {/* Large Card: Accessibility */}
          <BentoCard
            title="Accessibility First"
            description="WAI-ARIA compliant components ensuring your app is usable by everyone. Keyboard navigation and screen reader support included."
            icon={<Shield className="w-6 h-6" />}
            className="md:col-span-2"
          >
             <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-background border border-border rounded flex items-center gap-3">
                   <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-[10px]">✓</div>
                   <span className="text-sm font-mono text-muted-foreground">aria-label</span>
                </div>
                <div className="p-3 bg-background border border-border rounded flex items-center gap-3">
                   <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-[10px]">✓</div>
                   <span className="text-sm font-mono text-muted-foreground">focus-visible</span>
                </div>
             </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

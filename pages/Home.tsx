import React from 'react';
import { Link } from 'react-router-dom';
import { ShimmerButton } from '../components/lib/ShimmerButton';
import { ComponentPreview } from '../components/landing/ComponentPreview';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/landing/Hero';
import { FeatureGrid } from '../components/landing/FeatureGrid';
import { ArrowRight, Copy, Settings, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Stats / Trusted By Section */}
      <div className="border-y border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Components', value: '50+' },
              { label: 'Downloads', value: '10k+' },
              { label: 'GitHub Stars', value: '2.5k' },
              { label: 'Open Source', value: '100%' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        {/* Feature Grid */}
        <FeatureGrid />
        
        {/* How It Works Section */}
        <div className="py-24 relative">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground mb-4">How it works</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               No npm install needed. Just copy, paste, and ship.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connecting Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

             {[
               { 
                 icon: <SearchIcon className="w-6 h-6" />, 
                 title: '1. Browse', 
                 desc: 'Explore our collection of components and choose what fits your needs.' 
               },
               { 
                 icon: <Copy className="w-6 h-6" />, 
                 title: '2. Copy', 
                 desc: 'Copy the code directly to your clipboard with a single click.' 
               },
               { 
                 icon: <Zap className="w-6 h-6" />, 
                 title: '3. Ship', 
                 desc: 'Paste into your project, customize if needed, and deploy.' 
               }
             ].map((step, i) => (
               <div key={i} className="relative flex flex-col items-center text-center z-10">
                 <div className="w-24 h-24 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center text-primary mb-6 group hover:scale-110 transition-transform duration-300">
                   <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                     {step.icon}
                   </div>
                 </div>
                 <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                 <p className="text-muted-foreground leading-relaxed max-w-xs">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Interactive Preview */}
        <div className="mt-12">
           <ComponentPreview />
        </div>

        {/* CTA Section */}
        <div className="mt-32 mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
          <h2 className="text-3xl font-bold text-foreground sm:text-5xl mb-6 tracking-tight">
            Ready to build something amazing?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Start using our components in your next project today. Open source and free to use.
          </p>
          <div className="flex justify-center">
            <Link to="/components">
              <ShimmerButton className="px-10 py-4 text-lg font-semibold shadow-2xl shadow-primary/20 rounded-full">
                Explore All Components
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Simple internal icon component for 'Search' since we didn't import it
const SearchIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
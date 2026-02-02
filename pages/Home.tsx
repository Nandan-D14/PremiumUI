import React from 'react';
import { Link } from 'react-router-dom';
import { ShimmerButton } from '../components/lib/ShimmerButton';
import { ComponentPreview } from '../components/landing/ComponentPreview';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/landing/Hero';
import { BentoGrid } from '../components/landing/BentoGrid';
import { Testimonials } from '../components/landing/Testimonials';
import { FAQ } from '../components/landing/FAQ';
import { ArrowRight, Copy, Settings, Zap, Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Grid */}
        <BentoGrid />
        
        {/* How It Works Section */}
        <div className="py-32 relative max-w-7xl mx-auto">
           <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
               Built for the <span className="text-primary">AI Era</span>
             </h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Stop wrestling with complex setups. Whether you copy the code or the prompt, our workflow is designed for speed.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {[
               { 
                 title: 'Browse', 
                 desc: 'Explore our extensive library of premium, animated components.',
                 icon: <SearchIcon className="w-8 h-8 text-primary" />,
                 gradient: 'from-blue-500/10 to-cyan-500/10',
                 border: 'group-hover:border-blue-500/50'
               },
               { 
                 title: 'Prompt',
                 desc: 'Copy the optimized AI prompt to iterate with Cursor, v0, or Bolt.',
                 icon: <Sparkles className="w-8 h-8 text-primary" />,
                 gradient: 'from-violet-500/10 to-fuchsia-500/10',
                 border: 'group-hover:border-violet-500/50'
               },
               { 
                 title: 'Ship', 
                 desc: 'Paste the code into your project and deploy. It just works.',
                 icon: <Zap className="w-8 h-8 text-primary" />,
                 gradient: 'from-emerald-500/10 to-lime-500/10',
                 border: 'group-hover:border-emerald-500/50'
               }
             ].map((step, i) => (
               <div key={i} className="group relative h-full">
                 <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 dark:group-hover:opacity-50 transition-opacity duration-500`} />
                 <div className={`relative h-full bg-card border border-border rounded-2xl p-8 flex flex-col items-start overflow-hidden transition-all duration-300 group-hover:-translate-y-2 ${step.border}`}>
                   
                   {/* Large Watermark Number */}
                   <div className="absolute -right-4 -top-4 text-9xl font-black text-foreground/5 select-none z-0">
                     0{i + 1}
                   </div>

                   <div className="relative z-10 w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                     {step.icon}
                   </div>
                   
                   <h3 className="relative z-10 text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                   <p className="relative z-10 text-muted-foreground leading-relaxed text-base">
                     {step.desc}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Interactive Preview */}
        <div className="mt-12 max-w-7xl mx-auto">
           <ComponentPreview />
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mt-24 rounded-3xl overflow-hidden border border-border bg-card p-12 md:p-24 text-center shadow-2xl">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.1)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-8">
              Ready to build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">something amazing?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Join thousands of developers building better UIs, faster. 
              Open source, free forever.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/components">
                <ShimmerButton className="px-10 py-4 text-lg font-bold shadow-2xl shadow-emerald-500/20 rounded-full">
                  Start Building Now
                </ShimmerButton>
              </Link>
            </div>
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
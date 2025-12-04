import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../lib/Button';
import { AnimatedGradient } from '../lib/AnimatedGradient';
import { SplitText } from '../lib/SplitText';

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Floating Emerald Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary backdrop-blur-sm shadow-sm hover:bg-primary/20 transition-all cursor-default animate-fade-in-up">
            <Sparkles size={14} className="text-primary fill-primary/20" />
            <span className="font-semibold tracking-wide">New Features Available</span>
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground mb-8 leading-tight animate-fade-in-up [animation-delay:100ms]">
          <SplitText text="Build faster with" />
          <span className="text-primary block mt-2 pb-2 drop-shadow-sm">Premium Components</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:200ms]"
        >
          Create stunning user interfaces in minutes with our collection of 
          beautifully animated, accessible, and easy-to-use React components.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 animate-fade-in-up [animation-delay:300ms]"
        >
          <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-medium border-primary/20 hover:bg-primary/5 hover:text-primary hover:border-primary/50 transition-all duration-300">
            View Documentation
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

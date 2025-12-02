import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Zap, Layers } from 'lucide-react';
import { TiltedCard } from '../components/lib/TiltedCard';
import { SplitText } from '../components/lib/SplitText';

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <span className="relative rounded-full bg-surface border border-border px-4 py-1.5 text-sm leading-6 text-secondary ring-1 ring-white/10 hover:ring-white/20">
              New release: <span className="font-semibold text-primary">v2.0 is out</span>
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <SplitText text="Make your React" className="block text-white" />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
               apps stand out
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary sm:text-xl">
            A collection of production-ready, animated components that you can copy and paste directly into your project. Open source and built for speed.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/components"
              className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-dark transition-all hover:scale-105"
            >
              Browse Components
            </Link>
            <Link
              to="/docs/introduction"
              className="group flex items-center rounded-full bg-surface border border-border px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Demo Grid */}
        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
           <TiltedCard className="h-64 bg-surface rounded-2xl p-6 border border-border flex flex-col justify-end group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-50" />
              <Box className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white z-10">Modern Components</h3>
              <p className="text-secondary mt-2 z-10">Built with standard React & Tailwind.</p>
           </TiltedCard>
           
           <TiltedCard className="h-64 bg-surface rounded-2xl p-6 border border-border flex flex-col justify-end group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl opacity-50" />
              <Zap className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white z-10">High Performance</h3>
              <p className="text-secondary mt-2 z-10">Optimized animations with Framer Motion.</p>
           </TiltedCard>

           <TiltedCard className="h-64 bg-surface rounded-2xl p-6 border border-border flex flex-col justify-end group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl opacity-50" />
              <Layers className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white z-10">Copy & Paste</h3>
              <p className="text-secondary mt-2 z-10">No npm install required for components.</p>
           </TiltedCard>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 opacity-20 bg-[radial-gradient(circle_at_center,#8b5cf6_0%,transparent_70%)] blur-3xl pointer-events-none" />
    </div>
  );
};
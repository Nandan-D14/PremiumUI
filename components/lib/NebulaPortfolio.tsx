import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import { NebulaSwirl } from './NebulaSwirl';

export const NebulaNavBar = () => (
  <motion.header 
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 w-full"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 overflow-hidden">
        <img src="https://i.pravatar.cc/150?u=dev" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-white font-bold text-sm leading-tight">FlowDesign</h3>
        <span className="text-[10px] bg-blue-600/20 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/30 font-medium">
          Professional Partner
        </span>
      </div>
    </div>

    {/* Floating Nav Pill */}
    <nav className="hidden md:flex bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-2xl">
      {['Work', 'Capabilities', 'Process', 'Testimonial'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`}
          className="px-5 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
        >
          {item}
        </a>
      ))}
    </nav>

    <button className="flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-full border border-white/10 bg-[#1A1A1A] hover:bg-white/10 transition-colors group">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      Hire me
    </button>
  </motion.header>
);

const NebulaHero = () => (
  <section className="relative z-10 flex flex-col items-center justify-center min-h-[800px] h-full text-center px-4 w-full">
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-6"
    >
      <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs font-medium text-gray-300">
        White-Label Webflow Development
      </span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 tracking-tight max-w-4xl leading-[1.1]"
    >
      Creative Webflow development wizard
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-gray-400 text-lg max-w-xl mb-10 font-light leading-relaxed"
    >
      Helping agencies deliver pixel-perfect Webflow websites without the overhead of an in-house team.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-col sm:flex-row items-center gap-4"
    >
      <button className="px-8 py-3.5 bg-[#1A1A1A] border border-white/10 text-white rounded-lg font-medium hover:bg-white/5 transition-all flex items-center gap-2 group">
        Work with me
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-gray-400 group-hover:text-white" />
      </button>

      <button className="px-8 py-3.5 bg-transparent text-gray-300 font-medium hover:text-white transition-colors flex items-center gap-2">
        <span className="font-bold text-blue-500 text-lg">W</span> Premium Partner
      </button>
    </motion.div>

    {/* Social Proof Section */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="mt-16 relative"
    >
      <div className="flex items-center justify-center gap-4">
        {/* Avatars */}
        <div className="flex -space-x-3">
           {[1, 2, 3].map((i) => (
             <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden grayscale hover:grayscale-0 transition-all z-10 hover:z-20 hover:scale-110">
               <img src={`https://i.pravatar.cc/150?u=\${i + 10}`} alt="Client" className="w-full h-full object-cover" />
             </div>
           ))}
        </div>
        
        <div className="text-left">
          <div className="text-white font-bold text-sm">648 successful projects</div>
          <div className="text-green-400 text-xs flex items-center gap-1 cursor-pointer hover:underline">
            Read testimonials <MoveRight size={12} />
          </div>
        </div>
      </div>

      {/* Handwritten Arrow & Text - Using SVG for better compatibility */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 mt-2 transform -rotate-6">
        <span className="font-handwriting text-gray-500 text-sm opacity-60" style={{ fontFamily: 'cursive' }}>Real projects</span>
        <svg className="w-8 h-8 text-gray-500 opacity-40 ml-4 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10c2.5-3.5 6-5 9-2s4 5 8 2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l3 2-2 3" />
        </svg>
      </div>
    </motion.div>

  </section>
);

export const NebulaPortfolio = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 relative overflow-hidden w-full">
      {/* Background Animation */}
      <NebulaSwirl />
      
      {/* Overlay gradient to darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)] pointer-events-none z-0" />

      {/* Main Content */}
      <NebulaNavBar />
      <NebulaHero />
    </div>
  );
};
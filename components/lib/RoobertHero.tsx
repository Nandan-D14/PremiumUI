import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, Sun, Moon, Download, Plus, 
  Layout, Paperclip, ArrowUp, Copy, Code, Eye, 
  Search, Lock, RotateCcw, ChevronLeft, ChevronRight,
  Maximize2, MoreHorizontal, Sparkles
} from 'lucide-react';

// --- Components ---

const BrowserWindow = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[1400px] bg-[#1E1E1E] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[90vh]">
    {/* Browser Chrome */}
    <div className="bg-[#2A2A2A] px-4 py-3 flex items-center gap-4 border-b border-white/5">
      {/* Window Controls */}
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>

      {/* Navigation Controls */}
      <div className="flex gap-4 text-gray-500">
        <div className="flex gap-2">
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
      </div>

      {/* URL Bar */}
      <div className="flex-1 flex justify-center">
        <div className="bg-[#1A1A1A] text-gray-400 text-xs px-3 py-1.5 rounded-md flex items-center gap-2 w-full max-w-md justify-center group cursor-text border border-transparent hover:border-white/10 transition-colors">
          <Lock size={10} />
          <span>aurachat.io</span>
          <RotateCcw size={10} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex gap-3 text-gray-500">
        <Plus size={16} />
        <Copy size={16} />
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-1 bg-[#050505] overflow-y-auto relative font-sans text-white scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
      {children}
    </div>
  </div>
);

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-40 border-b border-white/5 w-full">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 flex items-center justify-center font-serif text-2xl font-bold text-gray-200">
        A
      </div>
    </div>

    {/* Center Links */}
    <div className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-widest text-gray-400">
      {['FEATURES', 'CREATE', 'BROWSE', 'LEARN', 'PRICING'].map((item) => (
        <a 
          key={item} 
          href="#" 
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          {item}
          {item === 'FEATURES' && <ChevronDown size={10} />}
        </a>
      ))}
    </div>

    {/* Right Actions */}
    <div className="flex items-center gap-4">
      {/* Theme Toggle */}
      <div className="bg-[#151515] p-1 rounded-full border border-white/10 flex items-center gap-1">
        <button className="p-1.5 bg-[#252525] rounded-full text-white shadow-sm">
          <Sun size={12} />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-white transition-colors">
          <Moon size={12} />
        </button>
      </div>

      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[1px]">
        <img src="https://i.pravatar.cc/150?u=a" alt="User" className="w-full h-full rounded-full border-2 border-[#050505]" />
      </div>

      {/* Download Button */}
      <button className="bg-[#2D5BFF] hover:bg-[#2548cc] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(45,91,255,0.3)]">
        <Download size={14} />
        Download
      </button>
    </div>
  </nav>
);

interface IterationCardProps {
  title?: string;
  active?: boolean;
  gradient: string;
  content: React.ReactNode;
}

const IterationCard: React.FC<IterationCardProps> = ({ title, active = false, gradient, content }) => (
  <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
    {/* Card Toolbar */}
    <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-[#0F0F0F]">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A] group-hover:bg-red-500/50 transition-colors" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A] group-hover:bg-yellow-500/50 transition-colors" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A] group-hover:bg-green-500/50 transition-colors" />
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1.5 hover:bg-white/10 rounded text-gray-500 hover:text-white transition-colors flex items-center gap-1 text-[10px] font-medium border border-transparent hover:border-white/10">
          <Copy size={10} /> Copy
        </button>
        <button className={`px-2 py-1 rounded text-[10px] font-medium transition-colors border ${active ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-white/10 hover:text-white'}`}>
          Preview
        </button>
        <button className="p-1.5 hover:bg-white/10 rounded text-gray-500 hover:text-white transition-colors text-[10px] font-medium border border-transparent hover:border-white/10">
          <Code size={10} />
        </button>
      </div>
    </div>

    {/* Card Content Area */}
    <div className={`h-[240px] relative p-6 ${gradient} flex flex-col`}>
      {content}
    </div>
  </div>
);

export const RoobertHero = () => {
  return (
    <div className="min-h-screen bg-[#EBEBED] flex items-center justify-center p-4 md:p-8 font-sans w-full">
      <BrowserWindow>
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-20 relative z-10 flex flex-col h-full w-full">
          
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mb-24">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 tracking-tight"
             >
               Create beautiful designs
             </motion.h1>
             
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-gray-400 text-lg font-light mb-12"
             >
               Generate designs in seconds and export to HTML or Figma.
             </motion.p>

             {/* Prompt Input */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="w-full max-w-2xl bg-[#0F0F0F] border border-white/10 rounded-2xl p-4 shadow-2xl relative group focus-within:border-white/20 transition-colors"
             >
                <textarea 
                  placeholder="Create something beautiful..." 
                  className="w-full bg-transparent text-white placeholder-gray-500 resize-none h-20 outline-none text-base font-light"
                />
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                   <div className="flex items-center gap-2">
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all">
                        <Layout size={12} /> Prompt Builder
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all">
                         <Sparkles size={12} /> GPT-4.1 <ChevronDown size={10} />
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[#1A1A1A] text-xs text-gray-400 hover:text-white transition-all">
                         <Paperclip size={12} /> Attach
                      </button>
                   </div>
                   
                   <button className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors">
                      <ArrowUp size={16} />
                   </button>
                </div>
             </motion.div>
          </div>

          {/* Recent Iterations Section */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-medium text-white">Recent Iterations</h3>
               {/* Grid lines extending from header */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               
               {/* Card 1: Orbital */}
               <IterationCard 
                  active 
                  gradient="bg-gradient-to-br from-[#0F1014] to-[#1A1B23]"
                  content={
                    <>
                       <div className="flex justify-between items-start mb-auto">
                          <div className="flex items-center gap-2">
                             <div className="w-3 h-3 rounded-full border border-purple-500" />
                             <span className="text-gray-300 text-xs font-medium">Orbital</span>
                          </div>
                          <button className="text-[10px] text-gray-400 border border-white/10 px-2 py-1 rounded hover:bg-white/5">Sign In</button>
                       </div>
                       <div className="mt-8 space-y-2">
                          <h4 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                             Features that power your workflow
                          </h4>
                          <div className="flex gap-2 mt-4">
                             <div className="w-8 h-8 rounded bg-white/5 border border-white/10" />
                             <div className="w-8 h-8 rounded bg-white/5 border border-white/10" />
                          </div>
                       </div>
                    </>
                  } 
               />

               {/* Card 2: Green Abstract */}
               <IterationCard 
                  gradient="bg-gradient-to-br from-[#84CC16] to-[#EAB308]"
                  content={
                     <div className="w-full h-full relative overflow-hidden">
                        {/* Abstract Shapes simulating the image */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-xl" />
                        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-yellow-300/30 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-600/20 rounded-full blur-xl" />
                     </div>
                  } 
               />

               {/* Card 3: Platform Features */}
               <IterationCard 
                  gradient="bg-[#050505]"
                  content={
                     <>
                        <div className="flex justify-between items-start mb-auto">
                           <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full border border-blue-500" />
                              <span className="text-gray-300 text-xs font-medium">Orbital</span>
                           </div>
                           <button className="text-[10px] text-gray-400 border border-white/10 px-2 py-1 rounded hover:bg-white/5">Sign In</button>
                        </div>
                        <div className="mt-auto text-center">
                           <h4 className="text-lg font-medium text-white mb-2">
                              <span className="text-blue-400">Platform</span> features
                           </h4>
                           <p className="text-[10px] text-gray-500">Discover the tools that power thousands of teams worldwide.</p>
                           <div className="mt-4 w-full h-8 bg-blue-500/10 border border-blue-500/20 rounded-lg" />
                        </div>
                     </>
                  } 
               />

            </div>
          </div>
        </main>

        {/* Vertical Grid Lines Overlay (Decoration) */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-6 pointer-events-none flex justify-between z-0">
           <div className="w-[1px] h-full bg-white/[0.03]" />
           <div className="w-[1px] h-full bg-white/[0.03]" />
           <div className="w-[1px] h-full bg-white/[0.03]" />
           <div className="w-[1px] h-full bg-white/[0.03]" />
        </div>

      </BrowserWindow>
    </div>
  );
};
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, ChevronRight, Terminal, Activity, 
  Cpu, Shield, Zap, Globe, ArrowRight, Github, 
  Twitter, Disc
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 w-full">
    <div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 flex items-center gap-8 shadow-2xl shadow-black/50">
      <div className="pl-6 pr-2 font-bold text-white tracking-wider text-sm flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
        Nebula
      </div>
      
      <div className="hidden md:flex items-center gap-1">
        {['Product', 'Docs', 'Customers', 'Pricing'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 pl-4 pr-1">
        <button className="text-xs font-medium text-white px-4 py-2 hover:text-gray-300 transition-colors hidden sm:block">
          Sign In
        </button>
        <button className="bg-[#1A1A1A] hover:bg-[#252525] text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full border border-white/10 shadow-inner transition-all flex items-center gap-2 group">
          Request Demo
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform text-gray-400" />
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[800px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
    {/* Background Texture */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#000000] to-[#000000] z-0" />
    <div 
      className="absolute inset-0 opacity-[0.15] z-0 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
      }}
    />

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        Main release : Nebula OneShard v2.0
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-8"
      >
        Scale your protocol <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
          with smart infrastructure
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light"
      >
        The essential toolkit for deploying secure dApps. From writing your first smart contract to governing a global DAO, build it all on one unified layer.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white text-black px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center gap-2 mx-auto"
      >
        Start Building <ArrowRight size={14} />
      </motion.button>
    </div>
  </section>
);

const FeatureGrid = () => (
  <section className="relative z-10 px-4 md:px-8 max-w-[1400px] mx-auto mb-32 w-full">
    
    {/* Tab Navigation (Visual Only) */}
    <div className="flex justify-center mb-12">
       <div className="bg-black/40 backdrop-blur border border-white/10 rounded-full p-1 inline-flex">
          {['Nebula', 'Product', 'Docs', 'Customers', 'Pricing', 'Sign In'].map((tab, i) => (
             <div key={tab} className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide cursor-pointer ${i === 0 ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}>
               {tab}
             </div>
          ))}
          <div className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white text-black ml-2">Request Demo</div>
       </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Large Feature Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-7 bg-[#0C0C0C] border border-white/5 rounded-[2rem] p-10 relative overflow-hidden group"
      >
        <div className="relative z-10 max-w-md">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/5">
            <Cpu className="text-white" size={24} />
          </div>
          <h3 className="text-3xl font-medium text-white mb-6">High-Performance API Integration</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Connect to the decentralized web with Nebula's unified API surface. Designed for speed, reliability, and infinite scale. Our SDKs provide type-safe access to over 50+ protocols.
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-8" />
          <p className="text-xs text-gray-500">Instant global state access — stream events, query historical data.</p>
        </div>

        {/* Decorative Grid on Card */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent opacity-20 mask-image-fade" />
      </motion.div>

      {/* Code Window Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="lg:col-span-5 bg-[#0C0C0C] border border-white/5 rounded-[2rem] p-8 flex flex-col relative overflow-hidden"
      >
        <div className="flex items-center gap-2 mb-6">
           <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
           <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
           <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        
        <div className="font-mono text-xs text-gray-500 space-y-2 relative z-10">
           <p><span className="text-purple-400">import</span> {'{ Nebula }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@nebula-sdk/core'</span>;</p>
           <p>&nbsp;</p>
           <p><span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> Nebula({'{'}</p>
           <p>&nbsp;&nbsp;apiKey: <span className="text-green-400">'neb_live_...'</span>,</p>
           <p>&nbsp;&nbsp;network: <span className="text-green-400">'mainnet'</span></p>
           <p>{'});'}</p>
           <p>&nbsp;</p>
           <p><span className="text-gray-600">// Initialize instant sync</span></p>
           <p><span className="text-blue-400">await</span> client.sync.start();</p>
        </div>

        {/* Floating Status Badge */}
        <div className="absolute bottom-8 right-8 bg-[#151515] border border-white/10 rounded-xl p-4 w-64 shadow-2xl">
           <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase">API Status</span>
              <span className="text-[10px] text-green-500 flex items-center gap-1">
                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Systems Operational
              </span>
           </div>
           <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-300">
                 <span>JSON-RPC Gateway</span>
                 <span className="text-gray-600">14ms</span>
              </div>
              <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                 <div className="bg-green-500 w-[98%] h-full rounded-full" />
              </div>
           </div>
        </div>
      </motion.div>

      {/* Bottom Bento Row */}
      <motion.div 
        className="lg:col-span-4 bg-[#0C0C0C] border border-white/5 rounded-[2rem] p-8 min-h-[240px] flex flex-col justify-between group hover:border-white/10 transition-colors"
      >
         <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-8 bg-gray-800 rounded-md" />
            <div className="w-16 h-8 bg-gray-800 rounded-md" />
            <div className="w-10 h-8 bg-gray-800 rounded-md" />
         </div>
         <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500/20 text-orange-500 flex items-center justify-center rounded text-xs font-bold">N</div>
            <span className="text-white font-medium">Automation</span>
         </div>
      </motion.div>

      <motion.div 
        className="lg:col-span-8 bg-[#0C0C0C] border border-white/5 rounded-[2rem] p-8 min-h-[240px] relative overflow-hidden group"
      >
         {/* Center Icon */}
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-black border border-white/10 rounded-full flex items-center justify-center z-10 shadow-2xl">
               <Github className="text-white" size={32} />
            </div>
            {/* Orbiting Elements */}
            <div className="absolute w-64 h-64 border border-dashed border-white/5 rounded-full animate-spin-slow" />
            <div className="absolute w-40 h-40 border border-white/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent pointer-events-none" />
         </div>
         <div className="absolute bottom-8 left-8 flex items-center gap-3">
            <Shield className="text-gray-400" size={20} />
            <span className="text-white font-medium">Identity & Auth</span>
         </div>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-black relative w-full">
    {/* Warm Glow Background for this section */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/10 blur-[120px] pointer-events-none" />
    
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
      <div className="flex justify-center mb-12">
        <span className="px-4 py-1 rounded-full border border-orange-500/30 text-orange-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
           <span className="w-1 h-1 bg-orange-500 rounded-full" /> Testimonials
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-medium text-white text-center mb-4">
        Proven results, delivered
      </h2>
      <p className="text-gray-400 text-center mb-20 max-w-xl mx-auto">
        See how leading protocols and dApps are scaling their infrastructure with Nebula's unified layer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Stat Card 1 */}
        <div className="bg-[#0C0C0C] border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between min-h-[300px]">
           <div>
              <span className="text-6xl font-medium text-white block mb-4">14<span className="text-orange-500 text-4xl align-top">+</span></span>
              <p className="text-gray-400 text-sm">Global latency reduction on edge nodes.</p>
           </div>
           
           <div className="mt-8">
              <p className="text-gray-500 text-xs italic mb-4">"From branding to execution, the Nebula API suite is flawless. The latency on our oracle updates dropped significantly."</p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-gray-800 rounded-full" />
                 <div>
                    <div className="text-white text-xs font-bold">David Chen</div>
                    <div className="text-gray-600 text-[10px]">CTO, Chainlink</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-[#0C0C0C] border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between min-h-[300px]">
           <div>
              <span className="text-6xl font-medium text-white block mb-4 text-orange-500">12x</span>
              <p className="text-gray-400 text-sm">Increase in transaction throughput after migrating to Nebula L2 rollups.</p>
           </div>
           
           <div className="mt-8">
              <p className="text-gray-500 text-xs italic mb-4">"We needed a scalable infrastructure that didn't compromise on decentralization. Nebula delivered exactly that."</p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-gray-800 rounded-full" />
                 <div>
                    <div className="text-white text-xs font-bold">Elena Rodriguez</div>
                    <div className="text-gray-600 text-[10px]">Lead Protocol Eng, Uniswap</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Testimonial Cards Column */}
        <div className="space-y-6">
           {/* Dark Card */}
           <div className="bg-[#0C0C0C] border border-white/5 p-8 rounded-[2rem]">
              <p className="text-gray-400 text-xs leading-relaxed mb-6">
                 "Their automatic webhooks are absolute lifesavers. The team truly understands user experience and storytelling."
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-gray-800 rounded-full" />
                 <div>
                    <div className="text-white text-xs font-bold">Sarah K. Anchor</div>
                    <div className="text-gray-600 text-[10px]">Founder, Poet</div>
                 </div>
              </div>
           </div>

           {/* White Card (Highlight) */}
           <div className="bg-white text-black p-8 rounded-[2rem] relative overflow-hidden">
              <div className="absolute top-4 left-4 text-gray-200">
                 <StarIcon />
              </div>
              <p className="text-gray-800 text-xs font-medium leading-relaxed mb-6 relative z-10 mt-2">
                 "The team saved our MVP launch with a fast turnaround and incredible attention to detail. The best protocol toolset we've used."
              </p>
              <div className="flex items-center gap-3 relative z-10">
                 <div className="w-8 h-8 bg-black rounded-full" />
                 <div>
                    <div className="text-black text-xs font-bold">Jeanne Grey</div>
                    <div className="text-gray-500 text-[10px]">VP Eng, Solana</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactFooter = () => (
  <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative overflow-hidden w-full">
     {/* Grid Pattern Background */}
     <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at 0% 50%, black 0%, transparent 70%)'
        }}
     />

     <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 mb-32">
        <div>
           <h2 className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight">
              Ready to <br />
              personalize <br />
              <span className="text-orange-500">your chain?</span>
           </h2>
           <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Our service is for protocols that believe in owning a safe, scalable, and decentralized blockspace. We promise that scaling with Nebula will help you declutter your mempool.
           </p>
        </div>

        <div className="bg-transparent pt-4">
           <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                 <div className="group">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-white transition-colors">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors text-sm" placeholder="Sysadmin Operational" />
                 </div>
                 <div className="group">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-white transition-colors">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors text-sm" placeholder="" />
                 </div>
              </div>
              
              <div className="group">
                 <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-white transition-colors">Project / Protocol ID</label>
                 <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors text-sm" placeholder="" />
              </div>

              <div className="group">
                 <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-white transition-colors">Anything we should know?</label>
                 <textarea className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors text-sm h-20 resize-none" placeholder="" />
              </div>

              <div className="flex justify-end pt-4">
                 <button className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Submit Request <ArrowRight size={12} />
                 </button>
              </div>
           </form>
        </div>
     </div>

     {/* Bottom Links */}
     <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-10">
        <div className="grid grid-cols-2 gap-1 mb-4 md:mb-0">
           <div className="w-2 h-2 bg-orange-500" />
           <div className="w-2 h-2 bg-gray-700" />
           <div className="w-2 h-2 bg-gray-800" />
           <div className="w-2 h-2 bg-white" />
        </div>

        <div className="flex gap-16 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
           <div className="flex flex-col gap-4">
              <span className="text-white">About Us</span>
              <a href="#" className="hover:text-white">Mission</a>
              <a href="#" className="hover:text-white">Team</a>
              <a href="#" className="hover:text-white">Partners</a>
           </div>
           <div className="flex flex-col gap-4">
              <span className="text-white">Support</span>
              <a href="#" className="hover:text-white">Contact</a>
              <a href="#" className="hover:text-white">Docs</a>
              <a href="#" className="hover:text-white">Status</a>
           </div>
           <div className="flex flex-col gap-4">
              <span className="text-white">Social</span>
              <a href="#" className="hover:text-white flex items-center gap-2"><Twitter size={12} /> Instagram</a>
              <a href="#" className="hover:text-white flex items-center gap-2"><Github size={12} /> Github</a>
           </div>
        </div>
     </div>
  </footer>
);

// Helper Icon
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export const NebulaHero = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-orange-500/30 overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Testimonials />
      <ContactFooter />
      
      <style>{`
        .mask-image-fade {
           mask-image: linear-gradient(to right, transparent, black);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
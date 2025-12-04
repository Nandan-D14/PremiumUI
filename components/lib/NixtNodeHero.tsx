import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center py-8 px-8 md:px-12 relative z-50 w-full">
    <div className="text-white font-bold text-xl tracking-tight flex items-center gap-1">
      NixtNode
    </div>
    <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-gray-400 uppercase">
      {['Services', 'Team', 'Networks We Support'].map((item) => (
        <a key={item} href="#" className="hover:text-white transition-colors flex items-center gap-1">
          {item}
          {item === 'Networks We Support' && <ChevronDown size={12} />}
          <sup className="text-[8px] text-gray-600">0{Math.floor(Math.random() * 5) + 1}</sup>
        </a>
      ))}
    </div>
  </nav>
);

const CurvedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Main Purple Gradient Glow */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1625] via-[#2d2445] to-[#7c66b8] opacity-80" />
    
    {/* Dark Overlay for contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
    
    {/* Thin Curved Lines */}
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <motion.path 
        d="M-100,600 C200,400 600,800 1500,200" 
        fill="none" 
        stroke="rgba(255,255,255,0.1)" 
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path 
        d="M-100,200 C400,100 800,600 1500,400" 
        fill="none" 
        stroke="rgba(255,255,255,0.1)" 
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      />
       <motion.circle 
        cx="80%" cy="30%" r="300" 
        fill="none" 
        stroke="rgba(255,255,255,0.05)" 
        strokeWidth="1" 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
    </svg>

    {/* Soft Spotlights */}
    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full" />
  </div>
);

interface StatCardProps {
  title: React.ReactNode;
  subtitle: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, subtitle, className, delay = 0, children }) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`bg-[#0A0A0A] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors ${className}`}
  >
    <div className="relative z-10 flex flex-col justify-center h-full">
      {children}
      <div className="text-5xl md:text-6xl font-light text-white mb-2 tracking-tight">
        {title}
      </div>
      <p className="text-gray-500 text-xs uppercase tracking-widest">{subtitle}</p>
    </div>
    
    {/* Card Inner Glow */}
    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 blur-3xl group-hover:bg-purple-500/30 transition-all duration-500" />
  </motion.div>
);

export const NixtNodeHero = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 flex flex-col relative overflow-hidden w-full">
      <CurvedBackground />
      <Navbar />

      <main className="flex-1 relative z-10 flex flex-col justify-between px-6 md:px-12 pb-12 pt-16 max-w-[1600px] mx-auto w-full">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Headline */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl md:text-5xl font-light text-gray-500 mt-2">{'}'}</span>
                <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.1] tracking-tight">
                  NixtNode <br />
                  <span className="font-light text-gray-300">Is a Premier Web3</span> <br />
                  Infrastructure <br />
                  <div className="flex items-center gap-4">
                    <span>Pr</span>
                    <span className="relative flex items-center justify-center w-[0.8em] h-[0.8em] border border-white/20 rounded-full mx-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <motion.div 
                        className="absolute w-full h-full border border-white/20 rounded-full" 
                        style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'}}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                    </span>
                    <span>vider</span>
                  </div>
                </h1>
              </div>
            </motion.div>
          </div>

          {/* Right Description & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:items-end lg:text-right relative">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="max-w-xs mb-12 relative"
             >
               <span className="absolute -left-6 top-1 text-gray-500 text-lg">{'}'}</span>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Renowned for powering the backbone of blockchain ecosystems with our state-of-the-art validation services, RPC endpoints & IBC relayers.
               </p>
             </motion.div>

             <motion.button
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="bg-[#0F0F0F] text-white text-xs font-bold tracking-widest uppercase px-10 py-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
             >
               Get In Touch
             </motion.button>
             
             {/* Decorative arc connecting text to button area */}
             <div className="absolute top-1/2 right-full w-32 h-32 border-t border-r border-white/5 rounded-tr-full pointer-events-none hidden lg:block"></div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="mt-20 lg:mt-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
            
            {/* Card 1: Assets */}
            <StatCard 
              title={
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
                  192k
                </span>
              } 
              subtitle="Assets under management" 
              className="lg:col-span-4 h-48"
              delay={0.7}
            />

            {/* Spacer / Connection lines (Decorative) */}
            <div className="lg:col-span-1 hidden lg:flex items-center justify-center h-20">
               <div className="w-full h-[1px] bg-white/10"></div>
               <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>

            {/* Card 2: Delegators */}
            <StatCard 
              title={
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
                  34
                </span>
              } 
              subtitle="Unique delegators" 
              className="lg:col-span-4 h-64" // Taller card
              delay={0.8}
            >
              <div className="flex -space-x-3 mb-8">
                 {[1,2,3,4].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-gray-800 overflow-hidden relative group">
                      {i === 4 ? (
                        <div className="w-full h-full bg-purple-500/20 flex items-center justify-center text-[10px] text-white">+</div>
                      ) : (
                        <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="User" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                      )}
                   </div>
                 ))}
              </div>
            </StatCard>
            
            {/* Card 3: Small Profile / Extra (Visual Balance) */}
             <div className="lg:col-span-3 h-32 flex items-end">
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                  className="w-full h-full bg-[#0A0A0A] rounded-tr-[2rem] rounded-tl-[2rem] border-t border-x border-white/5 relative overflow-hidden p-6 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors"
                >
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden">
                       <img src="https://i.pravatar.cc/100?u=50" alt="Support" className="w-full h-full object-cover" />
                     </div>
                   </div>
                   <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight size={18} />
                   </button>
                </motion.div>
             </div>

          </div>
        </div>

      </main>
    </div>
  );
};
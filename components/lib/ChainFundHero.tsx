import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, Users, Leaf, Menu } from 'lucide-react';

// --- Assets / Icons (Inline SVGs for specific crypto logos) ---

const EthIcon = () => (
  <svg viewBox="0 0 32 32" className="w-12 h-12 text-white fill-current drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
    <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378 7.502-10.379z" />
  </svg>
);

const TetherIcon = () => (
  <svg viewBox="0 0 32 32" className="w-12 h-12 text-white fill-current drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
    <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.839-19.16l1.706 6.02h8.266l1.706-6.02H25V9.41H7v3.43h3.161zm5.026 6.906h1.626v7.834h-1.626v-7.834z" />
  </svg>
);

const AvaxIcon = () => (
  <svg viewBox="0 0 32 32" className="w-12 h-12 text-white fill-current drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
    <circle cx="16" cy="16" r="16" className="opacity-20" />
    <path d="M16 4L4 24h6.5l5.5-9.5 5.5 9.5H28L16 4z" />
  </svg>
);

// --- Components ---

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 md:px-12 py-6 relative z-50 w-full max-w-7xl mx-auto">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-full transform rotate-45" />
      </div>
      <span className="text-white font-bold text-xl tracking-tight">ChainFund</span>
    </div>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10">
      {['Home', 'Why Us', 'Platform', 'Assets', 'Blog'].map((item, idx) => (
        <a 
          key={item} 
          href="#" 
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            idx === 0 ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {item}
        </a>
      ))}
    </div>

    <div className="flex items-center gap-4">
      <button className="hidden md:block text-white text-sm font-medium border border-white/20 px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors">
        Contact Us
      </button>
      <button className="md:hidden text-white">
        <Menu />
      </button>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default"
  >
    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
      <Icon size={20} />
    </div>
    <div>
      <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">{desc}</p>
    </div>
  </motion.div>
);

const FloatingCrypto = ({ icon: Icon, delay, className, floatDuration = 4 }: { icon: any, delay: number, className: string, floatDuration?: number }) => (
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ 
      duration: floatDuration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: delay 
    }}
    className={`absolute ${className}`}
  >
    {/* 3D Card shape */}
    <div className="relative w-32 h-32 md:w-40 md:h-40 transform perspective-1000 preserve-3d">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#4f7aff] to-[#2563eb] rounded-[2rem] shadow-[0_20px_50px_rgba(59,130,246,0.3)] border-t border-white/30 backdrop-blur-sm flex items-center justify-center transform rotate-x-12 rotate-y-12 hover:rotate-0 transition-transform duration-500"
        style={{
          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2), 0 15px 35px rgba(0,0,0,0.5)'
        }}
      >
        <Icon />
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>
    </div>
  </motion.div>
);

const Background = () => (
  <div className="absolute inset-0 bg-[#020410] z-0 overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute top-[20%] right-[0%] w-[40%] h-[60%] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

    {/* The "God Ray" Light Beam */}
    <div className="absolute top-[-10%] right-[15%] w-[400px] h-[800px] pointer-events-none z-10 opacity-60 mix-blend-screen">
      <div 
        className="w-full h-full bg-gradient-to-b from-blue-400 via-blue-600 to-transparent blur-3xl transform -rotate-[15deg] origin-top"
        style={{
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
        }}
      />
    </div>

    {/* Grid Floor */}
    <div 
      className="absolute bottom-0 left-0 right-0 h-[40vh] z-0 opacity-20 pointer-events-none"
      style={{
        background: `
          linear-gradient(to bottom, transparent, #020410 90%),
          linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px),
          linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        transform: 'perspective(1000px) rotateX(60deg) scale(2)',
        transformOrigin: 'bottom center'
      }}
    />
  </div>
);

export const ChainFundHero = () => {
  return (
    <div className="min-h-[800px] h-full bg-[#020410] text-white font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col relative w-full">
      <Background />
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center relative z-10 pt-12 pb-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm font-medium tracking-wide mb-6 flex items-center gap-2"
            >
              <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
              | 150+ organizations |
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6"
            >
              Investing with us <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Beyond Boundaries
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md"
            >
              Simplified Asset Fractionalization with Unrivaled Market Access via ChainFund
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="group relative px-8 py-3.5 bg-blue-600 rounded-lg font-bold text-white overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </span>
            </motion.button>
          </div>

          {/* Right Content - 3D Floating Elements */}
          <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
             {/* The icons are positioned absolutely within this container to match the 'stack' look */}
             
             {/* Top Icon (ETH) */}
             <FloatingCrypto 
               icon={EthIcon} 
               className="top-0 right-[30%] z-30" 
               delay={0}
               floatDuration={5}
             />

             {/* Middle Icon (Tether) */}
             <FloatingCrypto 
               icon={TetherIcon} 
               className="top-[35%] right-[10%] z-20" 
               delay={1.5}
               floatDuration={6}
             />

             {/* Bottom Icon (Avax/Generic) */}
             <FloatingCrypto 
               icon={AvaxIcon} 
               className="bottom-[5%] right-[35%] z-10" 
               delay={0.8}
               floatDuration={5.5}
             />

             {/* Additional particles/sparkles in the light beam */}
             {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-blue-400 rounded-full blur-[1px]"
                  style={{
                    width: Math.random() * 4 + 2 + 'px',
                    height: Math.random() * 4 + 2 + 'px',
                    top: Math.random() * 80 + '%',
                    right: Math.random() * 40 + 10 + '%',
                  }}
                  animate={{ 
                    y: [0, -100, 0], 
                    opacity: [0, 1, 0] 
                  }}
                  transition={{ 
                    duration: Math.random() * 3 + 2, 
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
             ))}
          </div>
        </div>

        {/* Footer Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 border-t border-white/5 pt-8">
           <FeatureCard 
             icon={RefreshCw} 
             title="Asset Swapping" 
             desc="Direct peer-to-peer transactions with real world assets." 
             delay={0.6}
           />
           <FeatureCard 
             icon={Users} 
             title="Shared Ownership" 
             desc="Shared ownership through fractionalization of physical assets." 
             delay={0.7}
           />
           <FeatureCard 
             icon={Leaf} 
             title="Carbon Integrity" 
             desc="Reliable carbon credit transactions backed by audit trails." 
             delay={0.8}
           />
        </div>

      </main>
    </div>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, ChevronDown, Square, 
  Github, Gitlab, Framer, Slack
} from 'lucide-react';

// --- Assets / Custom Icons ---

const DiscordLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 3.96 3.96 0 0 0-.872 1.795 18.255 18.255 0 0 0-4.962 0 3.89 3.89 0 0 0-.874-1.794.075.075 0 0 0-.08-.037 19.825 19.825 0 0 0-4.887 1.515.069.069 0 0 0-.03.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
);

const PayonLogo = () => (
  <div className="flex items-center gap-2.5">
    {/* Abstract geometric logo */}
    <div className="relative w-6 h-6">
      <div className="absolute top-0 left-0 w-3 h-3 bg-[#4ADE80] rounded-sm" />
      <div className="absolute top-0 right-0 w-3 h-3 bg-[#2DD4BF] opacity-80 rounded-sm" />
      <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#2DD4BF] opacity-80 rounded-sm" />
    </div>
    <span className="text-white font-semibold text-xl tracking-tight">Payon</span>
    <span className="text-[10px] text-gray-400 align-top -mt-2">®</span>
  </div>
);

// --- Components ---

const Navbar = () => (
  <motion.nav 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="flex items-center justify-between px-6 md:px-12 py-8 relative z-50 max-w-7xl mx-auto w-full"
  >
    <PayonLogo />

    {/* Center Nav Pill */}
    <div className="hidden lg:flex items-center bg-[#1A1F2E]/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 gap-1 shadow-lg shadow-black/20">
      <button className="px-6 py-2.5 rounded-full bg-[#00E599] text-[#020510] text-sm font-bold hover:bg-[#00cca3] transition-colors shadow-lg shadow-[#00E599]/20">
        Home
      </button>
      {['Who We Serve', 'Payon Align', 'Services'].map((item) => (
        <button key={item} className="px-4 py-2 text-gray-400 text-sm font-medium hover:text-white flex items-center gap-1.5 transition-colors group">
          {item} <ChevronDown size={14} className="opacity-50 group-hover:translate-y-0.5 transition-transform" />
        </button>
      ))}
      {['Insights', 'About'].map((item) => (
        <button key={item} className="px-4 py-2 text-gray-400 text-sm font-medium hover:text-white transition-colors">
          {item}
        </button>
      ))}
    </div>

    {/* CTA */}
    <button className="hidden md:flex items-center gap-2 bg-[#00E599] text-[#020510] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#00cca3] transition-all shadow-[0_0_20px_rgba(0,229,153,0.2)] hover:shadow-[0_0_30px_rgba(0,229,153,0.4)]">
      <Phone size={16} fill="currentColor" className="mr-1" />
      Schedule a Call
    </button>
  </motion.nav>
);

const BrandLogo = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <div className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors cursor-pointer group select-none">
    <Icon className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
    <span className="font-bold text-lg md:text-xl tracking-tight">{name}</span>
  </div>
);

const Hero = () => (
  <div className="relative pt-16 pb-20 flex flex-col items-center text-center px-4 overflow-hidden min-h-[90vh]">
    
    {/* === The Planet Horizon Effect === */}
    
    {/* 1. Deep blue atmospheric glow behind the planet */}
    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[120vw] h-[600px] bg-[#0066FF]/20 blur-[150px] rounded-full pointer-events-none opacity-60" />

    {/* 2. The Planet Curve (Arc) */}
    <div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-[140vw] h-[140vw] min-w-[1200px] border-t border-blue-400/20 rounded-full pointer-events-none" />
    
    {/* 3. The Bright Horizon Light on top of the arc */}
    <div 
        className="absolute top-[218px] left-1/2 -translate-x-1/2 w-[80vw] h-[200px] bg-gradient-to-b from-[#4FA1FF]/40 via-[#2E86FF]/10 to-transparent rounded-[100%] blur-[40px] pointer-events-none" 
        style={{ mixBlendMode: 'screen' }}
    />
    
    {/* 4. Sharp white line for the horizon edge */}
    <div className="absolute top-[219px] left-1/2 -translate-x-1/2 w-[60vw] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none blur-[1px]" />

    {/* Badge */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mb-10"
    >
      <span className="inline-block px-6 py-2.5 rounded-full bg-[#1A202C]/60 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-md shadow-2xl">
        The Future Begins With Payon
      </span>
    </motion.div>

    {/* Headlines */}
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative z-10 text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 leading-[1.05]"
    >
      <span className="text-[#00E599] drop-shadow-[0_0_25px_rgba(0,229,153,0.3)]">Make payment</span> <br />
      <span className="text-white drop-shadow-xl">secure and faster</span>
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-10 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
    >
      Generate and share secure payment links with your customers on any platform, ensuring faster payment collection.
    </motion.p>

    {/* Main CTA */}
    <motion.button 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative z-10 bg-[#00E599] text-[#020510] text-lg font-bold px-12 py-5 rounded-full shadow-[0_0_50px_rgba(0,229,153,0.3)] hover:shadow-[0_0_70px_rgba(0,229,153,0.5)] transition-all"
    >
      Get Started Today
    </motion.button>

    {/* Logos Section */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative z-10 mt-32 w-full"
    >
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-10">Featured In</p>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-90">
        <div className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl hover:scale-110 transition-transform cursor-pointer"><DiscordLogo /> Discord</div>
        <BrandLogo icon={Square} name="Square" />
        <BrandLogo icon={Slack} name="slack" />
        <BrandLogo icon={Github} name="GitHub" />
        <BrandLogo icon={Gitlab} name="GitLab" />
        <BrandLogo icon={Framer} name="Framer" />
      </div>
    </motion.div>
  </div>
);

const BottomSection = () => (
  <div className="relative max-w-7xl mx-auto px-6 pb-20 mt-0 lg:-mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
    <div className="mb-10 lg:mb-20">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-medium text-white tracking-tight"
      >
        Seamless online
      </motion.h2>
    </div>
    
    {/* The Card preview at bottom right */}
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      {/* Glow behind card */}
      <div className="absolute inset-0 bg-[#00E599]/10 blur-[60px] rounded-full pointer-events-none" />
      
      {/* The Card */}
      <div className="bg-[#0A101C]/80 backdrop-blur-xl border border-white/10 rounded-t-[2.5rem] p-10 pb-0 w-full max-w-md mx-auto md:ml-auto md:mr-0 relative overflow-hidden shadow-2xl">
        
        {/* Subtle inner noise/texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        {/* Top Highlight Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="flex flex-col items-center relative z-10 pt-4">
           {/* Protected Badge */}
           <div className="bg-[#00E599] text-[#020510] text-xs font-extrabold px-6 py-2.5 rounded-full mb-8 shadow-lg shadow-[#00E599]/20 tracking-wide uppercase">
             100% Protected
           </div>
           
           <h3 className="text-3xl font-bold text-white mb-12 tracking-tight">Nayo Bank</h3>
           
           {/* Visual Filler for bottom of card */}
           <div className="w-full h-32 bg-gradient-to-b from--[#151C2A] to-[#0A101C] rounded-t-2xl border-t border-white/5 relative">
              {/* Fake UI Elements */}
              <div className="absolute top-4 left-6 w-12 h-12 rounded-full bg-white/5" />
              <div className="absolute top-6 left-24 right-6 h-3 bg-white/5 rounded-full" />
              <div className="absolute top-10 left-24 right-20 h-3 bg-white/5 rounded-full opacity-50" />
           </div>
        </div>
      </div>
    </motion.div>
  </div>
);

export const PayonHero = () => {
  return (
    <div className="min-h-screen bg-[#020510] font-sans selection:bg-[#00E599] selection:text-black overflow-x-hidden relative w-full">
      
      {/* Global Background Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {[...Array(20)].map((_, i) => (
           <div 
             key={i}
             className="absolute bg-white rounded-full opacity-0 animate-twinkle"
             style={{
               width: Math.random() * 2 + 1 + 'px',
               height: Math.random() * 2 + 1 + 'px',
               top: Math.random() * 100 + '%',
               left: Math.random() * 100 + '%',
               animationDelay: Math.random() * 5 + 's',
               animationDuration: Math.random() * 3 + 2 + 's'
             }}
           />
         ))}
      </div>

      <Navbar />
      <Hero />
      <BottomSection />

      <style>{`
        @keyframes twinkle {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 0.6; transform: scale(1); }
        }
        .animate-twinkle {
            animation-name: twinkle;
            animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};
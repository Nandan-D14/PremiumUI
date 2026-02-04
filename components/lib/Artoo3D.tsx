import React from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, Search, Twitter, Linkedin, Facebook, 
  ArrowRight, Play, ExternalLink
} from 'lucide-react';

// --- Mock Data ---

const collections = [
  { id: '01', title: 'Work Collection', active: true },
  { id: '02', title: 'Active Collection', active: false },
  { id: '03', title: 'Travel Collection', active: false },
];

const navLinks = ['Home', 'Gallery', 'Tutorials', 'About', 'Contact'];

// --- Sub-Components ---

export const SocialIcon = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <div className="group relative flex items-center justify-center">
    <span className="absolute left-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white/50">{label}</span>
    <Icon size={18} className="text-white/40 group-hover:text-white transition-colors cursor-pointer transform group-hover:-rotate-12" />
  </div>
);

export const ArtooSidebar = () => (
  <motion.div 
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="hidden lg:flex w-20 border-r border-white/10 flex-col justify-between items-center py-8 z-20 bg-[#2C343B]/50 backdrop-blur-sm h-full"
  >
    <button className="p-2 text-white/70 hover:text-white transition-colors">
      <Menu size={24} />
    </button>

    <div className="flex flex-col gap-8 mb-8">
      <SocialIcon icon={Twitter} label="Tw" />
      <SocialIcon icon={Linkedin} label="In" />
      <SocialIcon icon={Facebook} label="Fb" />
    </div>
  </motion.div>
);

export const ArtooHeader = () => (
  <motion.nav 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex justify-between items-center px-6 md:px-12 py-8 w-full"
  >
    <div className="text-2xl font-bold text-white tracking-wide">
      Artoo<span className="text-cyan-400">.</span>
    </div>

    <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/60">
      {navLinks.map((link) => (
        <a 
          key={link} 
          href="#" 
          className={`hover:text-white transition-colors relative group ${link === 'Home' ? 'text-white' : ''}`}
        >
          {link}
          {link === 'Home' && (
            <motion.div 
              layoutId="navIndicator"
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white rounded-full"
            />
          )}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/50 transition-all group-hover:w-full opacity-0 group-hover:opacity-100"></span>
        </a>
      ))}
      <Search size={18} className="cursor-pointer hover:text-white" />
    </div>

    <button className="hidden md:block px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm rounded-lg transition-all backdrop-blur-sm">
      Start work
    </button>
  </motion.nav>
);

export const ArtooHeroContent = () => (
  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-12 relative items-center h-full w-full">
    
    {/* Left: Collections */}
    <div className="lg:col-span-3 flex flex-col justify-center space-y-8 z-10 order-2 lg:order-1">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="text-white/40 text-sm font-mono mb-4 block">/01</span>
        
        {/* Progress Line */}
        <div className="w-16 h-0.5 bg-white/10 mb-6 relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-white/60" 
          />
        </div>

        <div className="space-y-4">
          {collections.map((item) => (
            <div 
              key={item.id} 
              className={`cursor-pointer transition-colors ${item.active ? 'text-white font-medium text-lg' : 'text-white/30 hover:text-white/60 text-sm'}`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Center: 3D Model */}
    <div className="lg:col-span-5 relative flex items-center justify-center h-[300px] lg:h-[500px] order-1 lg:order-2">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
      
      <motion.img 
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          ease: [0.22, 1, 0.36, 1], 
          delay: 0.2 
        }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        src="https://img.freepik.com/premium-photo/cute-elephant-3d-rendering_950002-23940.jpg?w=826" 
        width={826}
        height={472}
        alt="3D Elephant" 
        className="relative z-10 w-auto h-full max-h-[400px] object-contain drop-shadow-2xl mix-blend-normal rounded-xl"
      />
    </div>

    {/* Right: Content */}
    <div className="lg:col-span-4 flex flex-col justify-center space-y-6 z-10 order-3">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 mb-6 backdrop-blur-md">
           <Play size={10} className="fill-current" /> Explore 3D Art Creations
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Shape the Future <br /> with Artoo
        </h1>
        
        <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
          Dive into a collection of stunning 3D models and designs crafted with Artoo software, tailored for the modern digital artist.
        </p>

        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all border border-white/5 backdrop-blur-sm flex items-center gap-2 group w-fit">
          Start your work
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  </div>
);

export const ArtooFooter = () => (
  <motion.div 
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    className="bg-[#252B32]/80 backdrop-blur-md border-t border-white/5 w-full"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
      
      {/* Event 1 */}
      <div className="p-8 group hover:bg-white/5 transition-colors cursor-pointer">
        <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Events</h4>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-medium text-sm">SF - 3D Art Workshop, Aug 12</h3>
          <span className="text-xs text-white/40">5-7 PM</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/40">
           <span>Created by @darshan UI Ux Designer</span>
        </div>
      </div>

      {/* Event 2 / Promo */}
      <div className="p-8 group hover:bg-white/5 transition-colors cursor-pointer flex flex-col justify-between">
         <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Live Session</h4>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-white font-medium text-sm">Live VR Session - Aug 15</h3>
              <span className="text-xs text-white/40">6-8 PM</span>
            </div>
            <p className="text-xs text-white/40">For @Xyz tec company</p>
         </div>
      </div>

      {/* News / Featured */}
      <div className="p-6 flex items-center gap-6 group hover:bg-white/5 transition-colors cursor-pointer">
        <div className="w-16 h-16 bg-white/5 rounded-lg p-2 flex items-center justify-center border border-white/5">
           <img 
             src="https://img.freepik.com/premium-photo/3d-rendering-cactus-with-sombrero-maracas_950002-23393.jpg?w=826" 
             alt="Cactus" 
             className="w-full h-full object-cover rounded shadow-lg transform group-hover:scale-110 transition-transform"
           />
        </div>
        <div>
           <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">News</h4>
           <h3 className="text-white font-medium text-sm mb-1">Meet Artist of the Month: @Alex Chen</h3>
           <p className="text-xs text-white/40 line-clamp-2">Discover Alex's stunning 3D worlds created with Artoo. Read More...</p>
        </div>
      </div>

    </div>
  </motion.div>
);

export const Artoo3D = () => {
  return (
    <div className="min-h-screen bg-[#2C343B] font-sans overflow-hidden flex flex-col lg:flex-row selection:bg-cyan-500/30 selection:text-white relative">
      {/* Background Grid - Subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ 
             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Large background circles for depth */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <ArtooSidebar />
      
      <div className="flex-1 flex flex-col relative z-10 min-h-screen">
        <ArtooHeader />
        <ArtooHeroContent />
        <ArtooFooter />
      </div>
    </div>
  );
};

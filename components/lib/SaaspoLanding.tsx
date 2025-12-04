import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ChevronDown, ArrowRight, ExternalLink, 
  Menu, X, Check, Mail
} from 'lucide-react';

// --- Mock Data ---

const filters = [
  { name: 'Landing', count: 380 },
  { name: 'Pricing', count: 233 },
  { name: 'Product', count: 125 },
  { name: 'Blog', count: 95 },
  { name: 'About', count: 84 },
  { name: 'Customers', count: 61 },
  { name: 'Careers', count: 57 },
  { name: 'Contact', count: 44 },
  { name: 'Integrations', count: 38 },
];

const websites = [
  {
    id: 1,
    name: 'streamwork.com/',
    title: 'Transform how you review, approve and manage creative projects',
    description: 'Streamline your creative workflow together on one platform so you can save time, cut down on meetings.',
    theme: 'dark',
    accent: 'bg-yellow-400',
    layout: 'centered' 
  },
  {
    id: 2,
    name: 'localcan.com/',
    title: 'Develop your apps with .local domains',
    description: 'Public URLs for local apps. No config required.',
    theme: 'light',
    accent: 'bg-emerald-500',
    layout: 'split'
  },
  {
    id: 3,
    name: 'careerpuck.com/',
    title: 'The people-first way to hire',
    description: 'Capture your team\'s story and make authentic candidate engagement with Puck.',
    theme: 'light',
    accent: 'bg-orange-400',
    layout: 'illustration'
  },
  {
    id: 4,
    name: 'linear.app/',
    title: 'Linear is a better way to build products',
    description: 'Meet the new standard for modern software development. Streamline issues, sprints, and product roadmaps.',
    theme: 'dark',
    accent: 'bg-purple-500',
    layout: 'centered'
  },
  {
    id: 5,
    name: 'raycast.com/',
    title: 'Supercharged productivity',
    description: 'Raycast is a blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more.',
    theme: 'dark',
    accent: 'bg-red-500',
    layout: 'split'
  },
  {
    id: 6,
    name: 'cron.com/',
    title: 'The next-generation calendar for professionals',
    description: 'Time management has never been this beautiful or efficient.',
    theme: 'light',
    accent: 'bg-gray-800',
    layout: 'minimal'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 border-2 border-white rounded-[4px] flex items-center justify-center">
          <div className="w-4 h-4 border border-white rounded-[2px]"></div>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">saaspo</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
          Pages <ChevronDown size={14} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
          Stack <ChevronDown size={14} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors relative">
          Templates 
          <span className="absolute -top-3 -right-6 text-[10px] font-bold bg-[#1C3A29] text-[#4ADE80] px-1.5 py-0.5 rounded-[4px] border border-[#4ADE80]/20">NEW</span>
        </a>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Find an expert</a>
        <button className="bg-[#4ADE80] text-black font-bold px-5 py-2.5 rounded-[8px] hover:bg-[#3ec470] transition-colors shadow-[0_0_15px_rgba(74,222,128,0.3)]">
          Subscribe
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-[#0D0E12] border-b border-gray-800 p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#" className="text-white font-medium">Pages</a>
          <a href="#" className="text-white font-medium">Stack</a>
          <a href="#" className="text-white font-medium">Templates</a>
          <hr className="border-gray-800 my-2"/>
          <a href="#" className="text-gray-400">Find an expert</a>
          <button className="bg-[#4ADE80] text-black font-bold px-5 py-3 rounded-[8px] w-full">Subscribe</button>
        </motion.div>
      )}
    </nav>
  );
};

const BrowserCard = ({ website, index }: { website: any; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-[#16181D] rounded-[12px] overflow-hidden border border-gray-800/50 group hover:border-gray-700 hover:shadow-2xl transition-all duration-300"
    >
      {/* Browser Chrome */}
      <div className="bg-[#1F2229] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-red-500 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-yellow-500 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-green-500 transition-colors"></div>
        </div>
        <div className="ml-4 bg-[#16181D] px-3 py-1 rounded-[4px] text-xs text-gray-400 flex-1 truncate font-mono text-center opacity-50 group-hover:opacity-100 transition-opacity">
          {website.name}
        </div>
        <ExternalLink size={14} className="text-gray-600" />
      </div>

      {/* Browser Viewport (Mock Content) */}
      <div className={`h-[300px] p-8 relative overflow-hidden ${website.theme === 'dark' ? 'bg-[#0B0C10]' : 'bg-white'}`}>
        
        {/* Abstracted UI Layouts */}
        {website.layout === 'centered' && (
           <div className="flex flex-col items-center text-center h-full justify-center relative z-10">
             <div className={`text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full ${website.theme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
               New Feature
             </div>
             <h3 className={`text-2xl font-bold mb-3 leading-tight ${website.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
               {website.title}
             </h3>
             <p className={`text-sm mb-6 max-w-xs ${website.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
               {website.description}
             </p>
             <button className={`px-5 py-2 rounded-[8px] text-sm font-bold ${website.accent} text-white shadow-lg`}>
               Get Started
             </button>
           </div>
        )}

        {website.layout === 'split' && (
          <div className="flex flex-col h-full justify-center relative z-10">
            <div className="w-full">
               <h3 className={`text-xl font-bold mb-2 ${website.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                 {website.title}
               </h3>
               <p className={`text-xs mb-4 max-w-[200px] ${website.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                 {website.description}
               </p>
               <div className="flex gap-2">
                 <button className={`px-4 py-1.5 rounded-[6px] text-xs font-bold bg-black text-white`}>Buy $50</button>
                 <button className={`px-4 py-1.5 rounded-[6px] text-xs font-bold border border-gray-300 ${website.theme === 'dark' ? 'text-white' : 'text-black'}`}>Demo</button>
               </div>
            </div>
            {/* Decorative Element */}
            <div className={`absolute -right-12 bottom-10 w-32 h-32 rounded-[12px] opacity-20 rotate-12 ${website.accent}`}></div>
          </div>
        )}

        {website.layout === 'illustration' && (
           <div className="h-full flex flex-col relative z-10">
             <div className="flex justify-between items-center mb-8">
               <div className="font-bold text-lg text-gray-900">puck</div>
               <div className="space-x-2 text-[10px] text-gray-500 hidden sm:block">
                 <span>Overview</span>
                 <span>Product</span>
               </div>
             </div>
             <div className="flex-1 flex items-center">
               <div className="w-2/3 pr-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">The people-first way to hire</h3>
                  <button className="bg-yellow-400 px-3 py-1.5 rounded-[4px] text-xs font-bold text-gray-900 mt-2">Start Hiring</button>
               </div>
               <div className="w-1/3 bg-blue-50 h-24 rounded-[8px] border border-blue-100 flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
               </div>
             </div>
           </div>
        )}

        {website.layout === 'minimal' && (
           <div className="h-full flex flex-col items-center justify-center text-center relative z-10">
              <div className="mb-4 text-xs font-mono text-gray-400">v2.0.0 released</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">{website.title}</h3>
              <div className="w-full h-32 bg-gray-50 rounded-t-[12px] border-t border-l border-r border-gray-200 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-orange-400"></div>
                 <div className="p-2 space-y-2">
                    <div className="h-2 bg-gray-200 rounded-[4px] w-3/4 mx-auto"></div>
                    <div className="h-2 bg-gray-200 rounded-[4px] w-1/2 mx-auto"></div>
                 </div>
              </div>
           </div>
        )}
        
        {/* Subtle Background Elements */}
        <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${website.theme === 'dark' ? 'from-transparent to-white/5' : 'from-transparent to-black/5'} pointer-events-none`}></div>
      </div>
    </motion.div>
  )
}

const FilterPill = ({ name, count, active }: { name: string; count: number; active: boolean }) => (
  <button className={`
    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
    ${active 
      ? 'bg-white text-black' 
      : 'bg-[#16181D] text-gray-400 hover:text-white hover:bg-[#1F2229] border border-gray-800'}
  `}>
    {name}
    <span className={`text-xs ${active ? 'text-gray-500' : 'text-gray-600'}`}>{count}</span>
  </button>
);

export const SaaspoLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#4ADE80] selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-20 relative z-10">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          <div className="flex-1 pt-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            >
              The best SaaS Web Design Inspiration
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl"
            >
              A curated collection of the best SaaS websites on the web. Quickly find the inspiration you're looking for with our <span className="text-[#4ADE80]">page</span> & <span className="text-[#4ADE80]">stack</span> filters.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[400px] bg-[#0E0F12] border border-gray-800 rounded-[16px] p-8 flex flex-col justify-center shadow-2xl relative overflow-hidden"
          >
            {/* Subtle glow behind card */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#4ADE80] blur-[100px] opacity-10"></div>

            <h3 className="text-xl font-bold text-white mb-2 relative z-10">
              Get the best SaaS inspiration each week
            </h3>
            <p className="text-gray-500 text-sm mb-6 relative z-10">No spam. Delivered weekly.</p>
            
            <div className="relative z-10 space-y-3">
               <div className="relative">
                 <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="w-full bg-[#16181D] border border-gray-700 text-white pl-10 pr-4 py-3 rounded-[8px] focus:outline-none focus:border-[#4ADE80] transition-colors"
                 />
               </div>
               <button className="w-full bg-[#4ADE80] text-black font-bold py-3 rounded-[8px] hover:bg-[#3ec470] transition-colors">
                 Subscribe
               </button>
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <span className="text-gray-500 font-bold whitespace-nowrap mr-2 text-sm uppercase tracking-widest">// Pages</span>
            {filters.map((filter, index) => (
              <FilterPill 
                key={filter.name} 
                name={filter.name} 
                count={filter.count} 
                active={index === 0} // First one active for demo
              />
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((site, index) => (
            <BrowserCard key={site.id} website={site} index={index} />
          ))}
        </div>

        {/* Load More / Footer Element */}
        <div className="mt-20 flex justify-center">
            <button className="text-gray-500 hover:text-white flex items-center gap-2 transition-colors text-sm font-medium uppercase tracking-wider">
               View All Projects <ArrowRight size={16} />
            </button>
        </div>

      </main>
    </div>
  );
};
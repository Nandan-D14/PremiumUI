import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, Compass, Flame, Download, Settings, LogOut, 
  Search, ChevronLeft, ChevronRight, Star, Plus, Play,
  LayoutGrid, Film
} from 'lucide-react';

// --- Mock Data ---

const watchlist = [
  {
    id: 1,
    title: "Queens Gambit",
    rating: 9.1,
    genre: "Social drama",
    image: "https://images.unsplash.com/photo-1606730164287-7a5dc277c688?auto=format&fit=crop&w=400&q=80",
    tags: ["Miniseries"],
    active: true // The glowing one
  },
  {
    id: 2,
    title: "Ozark",
    rating: 8.2,
    genre: "Police drama",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=400&q=80",
    tags: ["Crime"]
  },
  {
    id: 3,
    title: "Breaking bad",
    rating: 9.1,
    genre: "Police drama",
    image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&w=400&q=80",
    tags: ["Thriller"]
  }
];

const popular = [
  { id: 4, title: "OITNB", image: "https://images.unsplash.com/photo-1621532822064-58a4497e8870?auto=format&fit=crop&w=300&q=80" },
  { id: 5, title: "Narcos", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80" },
  { id: 6, title: "Black Mirror", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80" },
];

const acclaimed = [
  { id: 1, title: "The Crown", genre: "Historical", rating: 8.2, image: "https://images.unsplash.com/photo-1533227297772-5b321855e2d6?auto=format&fit=crop&w=150&q=80" },
  { id: 2, title: "Vikings", genre: "Warlike", rating: 9.1, image: "https://images.unsplash.com/photo-1620310243673-982ce46c4f0b?auto=format&fit=crop&w=150&q=80" },
  { id: 3, title: "You", genre: "Thrillers", rating: 7.5, image: "https://images.unsplash.com/photo-1536968051755-25e229340643?auto=format&fit=crop&w=150&q=80" },
];

const bestArtist = [
  { id: 1, title: "Stranger Things", genre: "Science fiction", rating: 8.9, image: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?auto=format&fit=crop&w=150&q=80" },
  { id: 2, title: "House of cards", genre: "Thrillers", rating: 8.3, image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=150&q=80" },
];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex items-center gap-4 px-6 py-3 cursor-pointer transition-all duration-300 ${active ? 'text-[#FF4D4D] relative' : 'text-gray-400 hover:text-gray-600'}`}>
    {active && (
      <motion.div 
        layoutId="active-border" 
        className="absolute right-0 top-0 bottom-0 w-1 bg-[#FF4D4D] rounded-l-full"
      />
    )}
    <Icon size={20} strokeWidth={active ? 2.5 : 2} />
    <span className={`text-sm font-medium ${active ? 'font-bold' : ''}`}>{label}</span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex justify-between items-end mb-6">
    <h3 className="text-xl font-bold text-gray-700">{title}</h3>
    <div className="flex gap-2">
      <button className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-400 transition-colors">
        <ChevronLeft size={16} />
      </button>
      <button className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-400 transition-colors">
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
);

const MovieCard = ({ movie }: { movie: any }) => (
  <div className="relative group">
    {/* Glow effect for active card */}
    {movie.active && (
      <div className="absolute -inset-4 bg-blue-100 rounded-[2rem] blur-xl opacity-60 z-0" />
    )}
    
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative z-10 bg-white p-3 rounded-2xl shadow-sm border border-gray-50 h-full ${movie.active ? 'ring-1 ring-blue-100 shadow-xl' : ''}`}
    >
      <div className="relative h-40 rounded-xl overflow-hidden mb-3">
        <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
        <button className="absolute top-2 right-2 w-6 h-6 bg-[#FF4D4D]/90 backdrop-blur rounded flex items-center justify-center text-white hover:bg-[#FF4D4D] transition-colors">
          <Plus size={14} />
        </button>
        {movie.active && (
           <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play fill="white" className="text-white w-10 h-10" />
           </div>
        )}
      </div>
      
      <div className="px-1">
        <h4 className="font-bold text-gray-800 text-sm mb-1">{movie.title}</h4>
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
          <div className="flex items-center gap-1 text-gray-700 font-bold">
            <Star size={12} fill="#5A67D8" className="text-[#5A67D8]" /> {movie.rating}
          </div>
          <div className="flex items-center gap-1">
            <LayoutGrid size={12} /> {movie.genre}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const RightSidebarItem = ({ item }: { item: any }) => (
  <div className="flex items-center gap-3 mb-4 group cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors">
    <img src={item.image} alt={item.title} className="w-12 h-16 object-cover rounded-lg shadow-sm" />
    <div className="flex-1 min-w-0">
      <h5 className="font-bold text-gray-800 text-sm truncate">{item.title}</h5>
      <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
        <LayoutGrid size={10} /> {item.genre}
      </p>
      <div className="flex items-center gap-1 text-xs font-bold text-gray-700">
        <Star size={10} fill="#5A67D8" className="text-[#5A67D8]" /> {item.rating}
      </div>
    </div>
  </div>
);

export const UnlimiHero = () => {
  return (
    <div className="min-h-screen bg-[#F2F3F7] p-4 md:p-8 font-sans flex items-center justify-center selection:bg-[#FF4D4D]/20 w-full">
      
      {/* Main Dashboard Container */}
      <div className="w-full max-w-[1400px] h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
        
        {/* === Left Sidebar === */}
        <div className="w-64 flex-shrink-0 bg-[#F9FAFB] flex flex-col py-8 border-r border-gray-100/50">
          <div className="px-8 mb-12 flex items-center gap-3">
            <div className="w-8 h-8 text-[#1E1E1E]">
              <Film strokeWidth={2.5} />
            </div>
            <span className="text-lg font-black tracking-widest text-[#1E1E1E]">MOVIES</span>
          </div>

          <div className="flex-1">
            <div className="px-8 text-xs font-bold text-gray-400 mb-4 tracking-wider">MENU</div>
            <SidebarItem icon={Home} label="Home" active />
            <SidebarItem icon={Compass} label="Discover" />
            <SidebarItem icon={Flame} label="Top rated" />
            <SidebarItem icon={Download} label="Downloaded" />
            
            <div className="px-8 text-xs font-bold text-gray-400 mb-4 mt-8 tracking-wider">GENERAL</div>
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={LogOut} label="Log out" />
          </div>
        </div>

        {/* === Main Content === */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-gradient-to-br from-white to-[#F8F9FE] p-8 md:px-12">
          
          {/* Header */}
          <header className="flex justify-between items-center mb-10">
            <div className="flex gap-8 text-lg">
              <button className="text-gray-400 font-medium hover:text-gray-600">Movies</button>
              <button className="text-[#1E1E1E] font-bold border-b-2 border-[#1E1E1E] pb-1">Series</button>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="pl-10 pr-4 py-2 bg-white rounded-full text-sm w-48 shadow-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-600"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800" size={16} strokeWidth={3} />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-10 h-10 rounded-xl object-cover shadow-md"
              />
            </div>
          </header>

          {/* Hero Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-[280px] rounded-3xl overflow-hidden relative mb-10 group shadow-lg shadow-blue-900/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=1200&q=80" // Peaky Blinders-ish vibe
              alt="Peaky Blinders" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/40 to-transparent flex flex-col justify-center px-10">
              <span className="text-gray-300 text-sm font-medium mb-2">Season 2</span>
              <h1 className="text-4xl font-bold text-white mb-6">Peaky Blinders</h1>
              <div className="flex items-center gap-4 mb-8">
                <button className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8E53] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-[#FF4D4D]/30 hover:shadow-xl transition-all">
                  Watch now
                </button>
                <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <Plus size={20} />
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="w-64 h-1 bg-gray-600 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-[#FF4D4D] rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Watchlist */}
          <div className="mb-8">
            <SectionHeader title="Watchlist" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {watchlist.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>

          {/* Popular Series (Just images for brevity per design) */}
          <div>
             <SectionHeader title="Popular series" />
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
               {popular.map(movie => (
                 <div key={movie.id} className="relative h-48 rounded-xl overflow-hidden group">
                    <img src={movie.image} alt={movie.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <button className="absolute top-2 right-2 w-6 h-6 bg-[#FF4D4D] rounded flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Plus size={14} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-bold text-sm">{movie.title}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* === Right Sidebar === */}
        <div className="w-80 bg-white border-l border-gray-100 p-8 hidden xl:block overflow-y-auto">
          
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-700">Acclaimed</h3>
              <button className="text-xs text-[#5A67D8] font-bold hover:underline">See more</button>
            </div>
            {acclaimed.map(item => (
              <RightSidebarItem key={item.id} item={item} />
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-700">Best Artist</h3>
              <button className="text-xs text-[#5A67D8] font-bold hover:underline">See more</button>
            </div>
            {bestArtist.map(item => (
              <RightSidebarItem key={item.id} item={item} />
            ))}
          </div>

          {/* Decorative element or ad space could go here */}
          <div className="mt-8 p-6 bg-[#F8F9FE] rounded-2xl border border-gray-100 text-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-[#FF4D4D]">
               <Play fill="currentColor" size={20} />
            </div>
            <h4 className="font-bold text-gray-800 text-sm mb-1">Premium Plan</h4>
            <p className="text-xs text-gray-500 mb-4">Unlock all features</p>
            <button className="w-full py-2 bg-[#1E1E1E] text-white text-xs font-bold rounded-lg hover:bg-black transition-colors">
              Upgrade
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
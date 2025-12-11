import React from 'react';
import { 
  Home,
  Search, 
  Library,
  Plus,
  Globe, 
  ChevronLeft, 
  ChevronRight,
  Menu
} from 'lucide-react';

export const SpotifyDashboard = () => {
  return (
    <div className="h-full bg-black text-white font-sans flex flex-col overflow-hidden">

      {/* Main Layout Area */}
      <div className="flex-1 flex overflow-hidden p-2 gap-2">

        {/* Sidebar */}
        <aside className="w-[300px] hidden md:flex flex-col gap-2">
          {/* Top Nav Block */}
          <div className="bg-[#121212] rounded-lg p-6 flex flex-col gap-5">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-2xl font-bold tracking-tighter flex items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.9-9.4
-1.1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 4.1-.9 7.6-.4 10.5 1.4.3.2.4.6.2.9zm1.1-2.4c-.3.4-.8.5-1.2.3-3-1.9-7.6-2.4-11.1-1.3-.5.2-1-.1-1.2
-.5-.2-.5.1-1 .5-1.2 4.1-1.2 9.2-.7 12.7 1.5.4.1.5.7.3 1.2zm.1-2.5C15.2 9.4 8.8 9.2 5.1 10.3c-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 4.3-
1.3 11.4-1.1 15.6 1.4.5.3.7 1 .4 1.5-.3.5-1 .6-1.5.4z"/>
                  </svg>
                </div>
                Spotify
              </span>
            </div>
            <nav className="flex flex-col gap-5">
              <a href="#" className="flex items-center gap-4 text-white font-bold transition-colors">
                <Home size={24} strokeWidth={2.5} />
                Home
              </a>
              <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors font-bold">
                <Search size={24} strokeWidth={2.5} />
                Search
              </a>
            </nav>
          </div>

          {/* Library Block */}
          <div className="bg-[#121212] rounded-lg flex-1 flex flex-col overflow-hidden">
            <div className="p-4 shadow-lg z-10">
              <div className="flex items-center justify-between text-gray-400 hover:text-white transition-colors cursor-pointer mb-6"> 
                <div className="flex items-center gap-3 font-bold">
                  <Library size={24} strokeWidth={2.5} />
                  Your Library
                </div>
                <button className="hover:bg-[#1f1f1f] p-1 rounded-full transition-colors">
                  <Plus size={20} />
                </button>
              </div>

              {/* Call to Action Card */}
              <div className="bg-[#242424] p-5 rounded-lg text-left flex flex-col items-start gap-4 my-2">
                <h3 className="font-bold text-base">Create your first playlist</h3>
                <p className="text-sm font-medium text-white">It's easy, we'll help you</p>
                <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
>
                  Create playlist
                </button>
              </div>

               <div className="bg-[#242424] p-5 rounded-lg text-left flex flex-col items-start gap-4 mt-6">
                <h3 className="font-bold text-base">Let's find some podcasts to follow</h3>
                <p className="text-sm font-medium text-white">We'll keep you updated on new episodes</p>
                <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
>
                  Browse podcasts
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-auto p-6 pt-0">
               <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 px-2">
                  {['Legal', 'Privacy Center', 'Privacy Policy', 'Cookies', 'About Ads', 'Accessibility'].map((link) => (
                    <a key={link} href="#" className="text-[11px] text-gray-400 hover:underline">{link}</a>
                  ))}
                  <a href="#" className="text-[11px] text-gray-400 hover:underline">Cookies</a>
               </div>

               <button className="flex items-center gap-1 border border-gray-500 rounded-full px-3 py-1.5 text-sm font-bold hover:borde
r-white hover:scale-105 transition-all">
                  <Globe size={18} />
                  English
               </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-[#121212] rounded-lg overflow-y-auto relative no-scrollbar">

          {/* Top Bar (Sticky) */}
          <header className="sticky top-0 bg-[#121212]/95 backdrop-blur-sm z-20 px-6 py-4 flex items-center justify-between">
            <div className="flex gap-2">
              <button className="bg-black/70 rounded-full p-1.5 text-gray-400 hover:text-white cursor-not-allowed">
                <ChevronLeft size={22} />
              </button>
              <button className="bg-black/70 rounded-full p-1.5 text-gray-400 hover:text-white cursor-not-allowed">
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden lg:flex items-center gap-6 text-gray-400 font-bold text-sm tracking-wide">
                 <a href="#" className="hover:text-white hover:scale-105 transition-all">Premium</a>
                 <a href="#" className="hover:text-white hover:scale-105 transition-all">Support</a>
                 <a href="#" className="hover:text-white hover:scale-105 transition-all">Download</a>
              </div>
              <div className="w-[1px] h-6 bg-white/20 hidden lg:block"></div>
              <div className="flex items-center gap-6">
                 <button className="text-gray-400 font-bold hover:text-white hover:scale-105 transition-all">Sign up</button>
                 <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Log in</
button>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="px-6 pb-24 pt-2">

            {/* Section 1 */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold hover:underline cursor-pointer">Spotify Playlists</h2>
                <span className="text-sm font-bold text-gray-400 hover:underline cursor-pointer">Show all</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                 {/* Card 1 */}
                 <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer relative">
                    <div className="relative mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] rounded-md overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=300&auto=format&fit=crop" alt="Hit
s" className="w-full aspect-square object-cover" />
                       <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-
100 transition-all duration-300 shadow-xl">
                          <div className="w-12 h-12 bg-[#1ed760] rounded-full flex items-center justify-center text-black">
                             <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d=
"m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                          </div>
                       </div>
                    </div>
                    <h3 className="font-bold mb-2 truncate">Today's Top Hits</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">Drake on top of the Hottest 50!</p>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
                    <div className="relative mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] rounded-md overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&w=300&auto=format&fit=crop" alt="Rap
" className="w-full aspect-square object-cover" />
                        <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity
-100 transition-all duration-300 shadow-xl">
                          <div className="w-12 h-12 bg-[#1ed760] rounded-full flex items-center justify-center text-black">
                             <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d=
"m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                          </div>
                       </div>
                    </div>
                    <h3 className="font-bold mb-2 truncate">RapCaviar</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">Music from Lil Tecca, Lil Uzi Vert and Gucci Mane.</p>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
                    <div className="relative mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] rounded-md overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1499415479124-43c32433a620?q=80&w=300&auto=format&fit=crop" alt="201
0s" className="w-full aspect-square object-cover" />
                       <div className="absolute top-2 left-2 font-black text-2xl text-blue-500 drop-shadow-md bg-white/80 px-1 rounded"
>2010s</div>
                        <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity
-100 transition-all duration-300 shadow-xl">
                          <div className="w-12 h-12 bg-[#1ed760] rounded-full flex items-center justify-center text-black">
                             <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d=
"m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                          </div>
                       </div>
                    </div>
                    <h3 className="font-bold mb-2 truncate">All Out 2010s</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">The biggest songs of the 2010s.</p>
                 </div>

                 {/* Card 4 */}
                 <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
                    <div className="relative mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] rounded-md overflow-hidden grayscale contrast-125
">
                       <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=300&auto=format&fit=crop" alt="Roc
k" className="w-full aspect-square object-cover" />
                        <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity
-100 transition-all duration-300 shadow-xl">
                          <div className="w-12 h-12 bg-[#1ed760] rounded-full flex items-center justify-center text-black">
                             <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d=
"m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                          </div>
                       </div>
                    </div>
                    <h3 className="font-bold mb-2 truncate">Rock Classics</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">Rock legends & epic songs that continue to...</p>
                 </div>

                 {/* Card 5 */}
                 <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
                    <div className="relative mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] rounded-md overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=300&auto=format&fit=crop" alt="Chi
ll" className="w-full aspect-square object-cover" />
                        <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity
-100 transition-all duration-300 shadow-xl">
                          <div className="w-12 h-12 bg-[#1ed760] rounded-full flex items-center justify-center text-black">
                             <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d=
"m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                          </div>
                       </div>
                    </div>
                    <h3 className="font-bold mb-2 truncate">Chill Hits</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">Kick back to the best new and recent chill hits.</p>
                 </div>
              </div>
            </section>

             {/* Section 2 */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold hover:underline cursor-pointer">Sleep</h2>
                <span className="text-sm font-bold text-gray-400 hover:underline cursor-pointer">Show all</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                 {/* Card 1 */}
                 <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
                    <div className="relative mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] rounded-md overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=300&auto=format&fit=crop" alt="Sle
ep" className="w-full aspect-square object-cover" />
                        <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity
-100 transition-all duration-300 shadow-xl">
                          <div className="w-12 h-12 bg-[#1ed760] rounded-full flex items-center justify-center text-black">
                             <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d=
"m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                          </div>
                       </div>
                    </div>
                    <h3 className="font-bold mb-2 truncate">Sleep</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">Gentle ambient piano to help you fall asleep.</p>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
                    <div className="relative mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] rounded-md overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1531331432998-466ad77d6f83?q=80&w=300&auto=format&fit=crop" alt="Day
Dreamer" className="w-full aspect-square object-cover" />
                        <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity
-100 transition-all duration-300 shadow-xl">
                          <div className="w-12 h-12 bg-[#1ed760] rounded-full flex items-center justify-center text-black">
                             <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d=
"m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                          </div>
                       </div>
                    </div>
                    <h3 className="font-bold mb-2 truncate">DayDreamer</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">Drift away with these mesmerizing instrumentals.</p>
                 </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Bottom Banner */}
      <div className="bg-gradient-to-r from-[#AF2896] via-[#509BF5] to-[#509BF5] p-2 px-4 flex justify-between items-center cursor-poin
ter hover:brightness-105 transition-all">
        <div className="flex flex-col">
          <span className="text-[12px] font-bold tracking-widest uppercase">Preview of Spotify</span>
          <span className="text-sm font-medium">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
</span>
        </div>
        <button className="bg-white text-black rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform">
          Sign up free
        </button>
      </div>

    </div>
  );
};

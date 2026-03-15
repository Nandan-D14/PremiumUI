import React, { useState, useEffect } from 'react';
import { Pause, StopCircle } from 'lucide-react';

export const TimeTracker: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#052e16] p-6 rounded-3xl shadow-lg relative overflow-hidden text-white group">
      {/* Wavy Background Effect */}
      <div className="absolute inset-0 opacity-20">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 C20,60 40,40 60,50 C80,60 100,40 120,50 L120,100 L0,100 Z" fill="url(#grad1)" className="animate-[slideIn_3s_infinite_alternate]"/>
            <defs>
               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#4ade80', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#166534', stopOpacity:1}} />
               </linearGradient>
            </defs>
         </svg>
      </div>

      <div className="relative z-10">
        <h3 className="text-green-300 text-sm font-medium mb-4">Time Tracker</h3>
        <div className="text-4xl font-mono font-bold mb-6 tracking-wider">
          {time.toLocaleTimeString([], { hour12: false })}
        </div>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-900 hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
             <Pause size={20} fill="currentColor" />
          </button>
          <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500/80 hover:text-white transition-colors">
             <StopCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

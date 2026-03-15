import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  Circle,
  LayoutDashboard,
  FolderOpen,
  PieChart,
  Clock,
  Settings,
  Send,
  Paperclip,
  Mic,
  MoreHorizontal,
  Search,
  Plus
} from 'lucide-react';

const DOTS_ARRAY = [...Array(20)];

export const DecksIntro = () => {
  const [selectedType, setSelectedType] = useState('solo'); // 'solo' or 'team'

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans flex items-center justify-center p-4 md:p-8">
      
      {/* Main Container */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 bg-[#121212] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative min-h-[800px]">
        
        {/* Left Section: Onboarding Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-10">

          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">IdeaPilot AI</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
              <a href="#" className="hover:text-white transition-colors">Need help?</a>
              <a href="#" className="hover:text-white transition-colors">Log In</a>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex gap-2 mb-12">
             <div className="h-1 w-16 bg-white rounded-full"></div>
             <div className="h-1 w-16 bg-white/20 rounded-full"></div>
             <div className="h-1 w-16 bg-white/20 rounded-full"></div>
             <div className="h-1 w-16 bg-white/20 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-medium mb-4 leading-tight">
              Tell us more about <br /> your work
            </h1>
            <p className="text-gray-400 mb-10">
              Let's tailor the system to your needs.
            </p>

            <div className="space-y-4">
              {/* Option 1: Solo */}
              <button
                onClick={() => setSelectedType('solo')}
                className={`w-full p-5 rounded-2xl border flex items-center justify-between group transition-all duration-300 relative overflow-hidden ${
                  selectedType === 'solo'
                    ? 'border-indigo-500 bg-white/5 shadow-[0_0_30px_rgba(99,102,241,0.15)]'
                    : 'border-white/10 hover:border-white/20 bg-transparent'
                }`}
              >
                <div className="flex flex-col items-start z-10">
                   <span className="text-lg font-medium">I'm a solo <br/> entrepreneur</span>
                </div>

                {/* Avatar Stack */}
                <div className="flex -space-x-3 z-10 mr-8">
                  <div className="w-10 h-10 rounded-xl border-2 border-[#121212] overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                  </div>
                  <div className="w-10 h-10 rounded-xl border-2 border-[#121212] overflow-hidden bg-green-200">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="User" />
                  </div>
                   <div className="w-10 h-10 rounded-xl border-2 border-[#121212] overflow-hidden bg-purple-200">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" alt="User" />
                  </div>
                </div>

                {/* Radio Circle */}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center absolute right-5 top-1/2 -translate-y-1/2 ${selectedType === 'solo' ? 'border-indigo-500' : 'border-gray-600'}`}>
                   {selectedType === 'solo' && <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />}
                </div>
              </button>

              {/* Option 2: Team */}
              <button
                onClick={() => setSelectedType('team')}
                className={`w-full p-5 rounded-2xl border flex items-center justify-between group transition-all duration-300 relative overflow-hidden ${
                  selectedType === 'team'
                    ? 'border-indigo-500 bg-white/5 shadow-[0_0_30px_rgba(99,102,241,0.15)]'
                    : 'border-white/10 hover:border-white/20 bg-transparent'
                }`}
              >
                <div className="flex flex-col items-start z-10">
                   <span className="text-lg font-medium">I'm part of a <br/> team / company</span>
                </div>

                {/* Logo Stack */}
                <div className="flex -space-x-3 z-10 mr-8">
                  <div className="w-10 h-10 rounded-xl border-2 border-[#121212] flex items-center justify-center bg-pink-500 text-white font-bold text-xs">
                     <div className="w-5 h-5 bg-white/20 rotate-45"></div>
                  </div>
                  <div className="w-10 h-10 rounded-xl border-2 border-[#121212] flex items-center justify-center bg-green-500 text-white font-bold text-xs">
                     <div className="w-6 h-3 bg-white/20 rounded-full"></div>
                  </div>
                   <div className="w-10 h-10 rounded-xl border-2 border-[#121212] flex items-center justify-center bg-orange-500 text-white font-bold text-xs">
                     <div className="w-5 h-5 border-2 border-white/20 rounded-full"></div>
                  </div>
                </div>

                {/* Radio Circle */}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center absolute right-5 top-1/2 -translate-y-1/2 ${selectedType === 'team' ? 'border-indigo-500' : 'border-gray-600'}`}>
                   {selectedType === 'team' && <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />}
                </div>
              </button>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-4 mt-12">
            <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
              Back
            </button>
            <button className="px-10 py-3 rounded-full bg-[#6366F1] hover:bg-[#5558DD] transition-colors text-sm font-medium shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              Next
            </button>
          </div>
        </div>

        {/* Right Section: Visual / Mockup */}
        <div className="relative bg-[#1A1A1A] overflow-hidden flex flex-col items-center pt-20 px-8">

          {/* Background Gradient Orbs */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-[60px]" />
          <div className="absolute bottom-40 left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />

          {/* Floating Dots */}
          <div className="absolute top-32 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <div className="absolute top-24 right-32 w-3 h-3 bg-purple-500 rounded-full opacity-60" />
          <div className="absolute bottom-1/3 left-10 w-3 h-3 bg-indigo-500 rounded-full opacity-80" />
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-green-500 rounded-full" />

          {/* Header Text */}
          <div className="text-center relative z-10 mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold mb-4">
              Introducing IdeaPilot AI
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white">
              <span className="italic font-light">AI-Powered</span> Business <br />
              Model Generation
            </h2>
          </div>

          {/* Tablet Mockup */}
          <div className="w-full max-w-lg bg-[#0F0F0F] rounded-t-3xl border-t-[6px] border-x-[6px] border-[#2A2A2A] shadow-2xl relative translate-y-2 transform perspective-1000 rotate-x-6 origin-bottom scale-95 lg:scale-110 lg:translate-y-12">

            {/* Tablet Camera */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#2A2A2A] rounded-b-xl z-20 flex justify-center items-center">
               <div className="w-1.5 h-1.5 bg-[#0F0F0F] rounded-full"></div>
            </div>

            {/* Tablet Screen */}
            <div className="bg-[#121212] w-full h-[500px] rounded-t-[20px] overflow-hidden flex flex-col relative p-4">

              {/* App Header */}
              <div className="flex items-center justify-between mb-6 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                  <div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-sm transform rotate-45"></div>
                  </div>
                  IdeaPilot AI
                </div>

                <div className="flex bg-[#1E1E1E] rounded-full p-1 text-[10px] gap-1">
                  <span className="px-3 py-1 bg-white text-black rounded-full font-bold">Dashboard</span>
                  <span className="px-3 py-1 text-gray-400">Projects</span>
                  <span className="px-3 py-1 text-gray-400">Analytics</span>
                  <span className="px-3 py-1 text-gray-400">History</span>
                  <span className="px-3 py-1 text-gray-400">Settings</span>
                </div>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-12 gap-3 h-full pb-4">

                {/* Left Column: Projects */}
                <div className="col-span-4 flex flex-col gap-3">

                  {/* Active Project Card */}
                  <div className="bg-[#1E1E1E] rounded-2xl p-3 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] text-gray-400">Marketing phase</span>
                      <span className="text-[9px] bg-[#2A2A2A] px-1.5 py-0.5 rounded text-white">46%</span>
                    </div>
                    <div className="font-semibold text-xs mb-3 leading-snug">Eco-friendly cottage construction</div>
                    <div className="flex items-center justify-between">
                       <span className="text-[8px] text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">High interest</span>  
                       <div className="flex -space-x-1">
                          <div className="w-3 h-3 rounded-full bg-gray-500 border border-[#1E1E1E]"></div>
                          <div className="w-3 h-3 rounded-full bg-gray-400 border border-[#1E1E1E]"></div>
                       </div>
                    </div>
                  </div>

                  {/* Inactive Project Card */}
                  <div className="bg-[#1E1E1E]/50 border border-white/5 rounded-2xl p-3">
                     <div className="font-medium text-xs text-gray-400 mb-1">Smart home automatio...</div>
                  </div>

                   {/* Inactive Project Card */}
                   <div className="bg-[#1E1E1E]/50 border border-white/5 rounded-2xl p-3">
                     <div className="font-medium text-xs text-gray-400 mb-1">Modular housing devel...</div>
                  </div>

                  <button className="flex items-center justify-center gap-1 text-[10px] text-gray-500 mt-2 hover:text-white">    
                    <Plus size={10} /> New project
                  </button>

                  {/* Tasks Mini Grid (Bottom Left) */}
                  <div className="mt-auto bg-[#1E1E1E] rounded-2xl p-3">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-medium">Tasks</span>
                        <div className="w-3 h-3 bg-gray-700 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-white rounded-full"></div></div>
                     </div>
                     <div className="grid grid-cols-2 gap-2">
                        {/* Dot Grid Visualization */}
                        <div className="flex flex-wrap gap-0.5">
                           {DOTS_ARRAY.map((_, i) => <div key={i} className={`w-1 h-1 rounded-full ${i < 12 ? 'bg-orange-500' : 'bg-gray-700'}`}></div>)}
                           <div className="w-full text-[8px] text-gray-400 mt-1">Documents <span className="text-orange-400 ml-1">57%</span></div>
                        </div>
                        <div className="flex flex-wrap gap-0.5">
                           {DOTS_ARRAY.map((_, i) => <div key={i} className={`w-1 h-1 rounded-full ${i < 18 ? 'bg-green-500' : 'bg-gray-700'}`}></div>)}
                           <div className="w-full text-[8px] text-gray-400 mt-1">Consent <span className="text-green-400 ml-1">86%</span></div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Right Column: Chat & Content */}
                <div className="col-span-8 flex flex-col gap-3">

                  {/* Progress Header */}
                  <div className="flex items-center gap-3 bg-[#1E1E1E] rounded-xl p-2 px-3">
                     <div className="flex-1">
                        <div className="text-[8px] text-gray-400 mb-1">Overall progress</div>
                        <div className="flex items-center gap-2">
                           <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>    
                           </div>
                           <span className="text-[9px] font-bold text-green-400">100%</span>
                        </div>
                     </div>
                     <div className="flex-1">
                        <div className="text-[8px] text-gray-400 mb-1">Marketing</div>
                        <div className="flex items-center gap-2">
                           <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <div className="w-[82%] h-full bg-gray-600 rounded-full"></div>
                           </div>
                           <span className="text-[9px] font-bold text-gray-400">82%</span>
                        </div>
                     </div>
                     <div className="flex-1">
                        <div className="text-[8px] text-gray-400 mb-1">Finance</div>
                         <div className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-[8px] rounded font-medium text-center border border-orange-500/30">
                            Processing
                         </div>
                     </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 bg-[#1E1E1E] rounded-2xl p-3 relative overflow-hidden flex flex-col">
                     {/* User Message */}
                     <div className="self-end bg-[#6366F1] text-white text-[10px] px-3 py-2 rounded-2xl rounded-tr-none mb-3 max-w-[80%] shadow-lg shadow-indigo-500/20">
                        Can you suggest some topics for our content plan?
                     </div>

                     {/* AI Response */}
                     <div className="self-start bg-[#2A2A2A] text-gray-300 text-[9px] p-3 rounded-2xl rounded-tl-none mb-3 max-w-[90%] border border-white/5">
                        <div className="flex items-center gap-1.5 mb-2">
                           <div className="w-3 h-3 bg-purple-500 rounded-full flex items-center justify-center text-[6px] font-bold text-white">AI</div>
                           <span className="text-gray-400">Here are a few topics that could resonate with your audience:</span>  
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-gray-400">
                           <li>The Benefits of Eco-Friendly Cottages</li>
                           <li>Sustainable Building Materials We Use</li>
                           <li>Energy Efficiency in Our Cottages</li>
                           <li>Customer Testimonials and Experiences</li>
                        </ul>
                     </div>

                     {/* User Message 2 */}
                      <div className="self-end bg-[#6366F1] text-white text-[10px] px-3 py-2 rounded-2xl rounded-tr-none mb-3 max-w-[80%] shadow-lg shadow-indigo-500/20">
                        Great! Let's schedule them for next week. Can you generate some photos we could use?
                     </div>

                      {/* AI Response 2 (Images) */}
                     <div className="self-start bg-[#2A2A2A] text-gray-300 text-[9px] p-3 rounded-2xl rounded-tl-none mb-3 max-w-[90%] border border-white/5">
                        <div className="flex items-center gap-1.5 mb-2">
                           <div className="w-3 h-3 bg-purple-500 rounded-full flex items-center justify-center text-[6px] font-bold text-white">AI</div>
                           <span className="text-gray-400">Here are some photo ideas:</span>
                        </div>
                        <div className="flex gap-2 mt-2">
                           <div className="w-16 h-10 rounded-lg bg-green-900/50 border border-white/10 relative overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover opacity-70" alt="Cabin"/>
                           </div>
                           <div className="w-16 h-10 rounded-lg bg-green-900/50 border border-white/10 relative overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover opacity-70" alt="Cabin interior"/>
                           </div>
                            <div className="w-8 h-10 rounded-lg bg-[#333] border border-white/10 flex items-center justify-center text-[8px] text-gray-400">
                              +3
                           </div>
                        </div>
                     </div>

                     {/* Input Bar */}
                     <div className="mt-auto bg-[#121212] rounded-full p-1.5 flex items-center gap-2 border border-white/5">     
                        <button className="text-gray-500 hover:text-white pl-1"><Paperclip size={10} /></button>
                        <input type="text" placeholder="That looks good for now!" className="bg-transparent border-none outline-none text-[9px] text-gray-300 w-full placeholder-gray-600" disabled />
                        <button className="text-gray-500 hover:text-white"><Mic size={10} /></button>
                        <button className="w-5 h-5 bg-[#6366F1] rounded-full flex items-center justify-center text-white"><Send size={8} /></button>
                     </div>
                  </div>
                </div>

              </div>

              {/* Decorative Blur at Bottom of Screen */}
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none"></div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};



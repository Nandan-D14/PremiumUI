import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar as CalendarIcon, 
  BarChart2, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Search, 
  Bell, 
  MessageSquare, 
  Plus, 
  ArrowUpRight, 
  MoreHorizontal, 
  Play, 
  Code,
  Layers,
  Zap,
} from 'lucide-react';
import { TimeTracker } from './TimeTracker';

// --- Styles for Animations & Custom Backgrounds ---
const styles = `
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes growBar {
    from { height: 0; }
    to { height: var(--target-height); }
  }

  @keyframes progressFill {
    from { stroke-dashoffset: 283; }
    to { stroke-dashoffset: var(--target-offset); }
  }

  @keyframes pulse-green {
    0% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(22, 163, 74, 0); }
    100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
  }

  .animate-slide-in {
    animation: slideIn 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-bar {
    animation: growBar 1s ease-out forwards 0.3s;
  }
  
  .animate-progress {
    animation: progressFill 1.5s ease-out forwards 0.5s;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
  }

  .striped-bar {
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 4px,
      #e5e7eb 4px,
      #e5e7eb 8px
    );
  }

  /* Custom Scrollbar for the project list if needed */
  .custom-scroll::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .custom-scroll::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }
`;

const SidebarItem = ({ icon: Icon, label, active, badge }: any) => (
  <div className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-300 group ${active ? 'bg-white shadow-sm text-green-800' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'}`}>
    <div className="flex items-center gap-3">
      <Icon size={20} className={active ? 'text-green-600' : 'group-hover:text-green-500 transition-colors'} />
      <span className={`font-medium ${active ? 'text-gray-800' : ''}`}>{label}</span>
    </div>
    {badge && (
      <span className="bg-green-700 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
        {badge}
      </span>
    )}
  </div>
);

const StatCard = ({ title, value, isGreen, delay }: any) => (
  <div 
    className={`p-5 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-slide-in flex flex-col justify-between h-40 ${isGreen ? 'bg-green-800 text-white' : 'bg-white text-gray-800 border border-gray-100'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex justify-between items-start">
      <span className={`text-sm font-medium ${isGreen ? 'text-green-200' : 'text-gray-500'}`}>{title}</span>
      <div className={`p-2 rounded-full ${isGreen ? 'bg-white/20' : 'bg-gray-50'}`}>
        <ArrowUpRight size={16} className={isGreen ? 'text-white' : 'text-gray-400'} />
      </div>
    </div>
    <div>
      <h3 className="text-4xl font-bold mb-2">{value}</h3>
      <div className="flex items-center gap-2">
        <span className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${isGreen ? 'bg-green-700/50 text-green-100' : 'bg-green-50 text-green-700'}`}>
          <ArrowUpRight size={10} />
          Increased from last month
        </span>
      </div>
    </div>
  </div>
);

const ProjectItem = ({ icon: Icon, color, title, date, delay }: any) => (
  <div 
    className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer animate-slide-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={`p-3 rounded-xl ${color}`}>
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
      <p className="text-xs text-gray-400">Due date: {date}</p>
    </div>
  </div>
);

const TeamMember = ({ name, role, status, image, delay }: any) => {
  const statusColors: any = {
    'Completed': 'text-green-500 bg-green-50',
    'In Progress': 'text-yellow-600 bg-yellow-50',
    'Pending': 'text-red-500 bg-red-50'
  };

  return (
    <div 
      className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 animate-slide-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
        <div>
          <h4 className="font-bold text-sm text-gray-800">{name}</h4>
          <p className="text-xs text-gray-400 max-w-[150px] truncate">{role}</p>
        </div>
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-md ${statusColors[status] || 'text-gray-500'}`}>
        {status}
      </span>
    </div>
  );
};

export const ModernCreativeDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F4F6] p-4 lg:p-6 font-sans text-slate-800 flex overflow-hidden">
      <style>{styles}</style>
      
      {/* Sidebar */}
      <aside className="w-64 hidden lg:flex flex-col justify-between pr-6 py-2 sticky top-0 h-[95vh]">
        <div>
          <div className="flex items-center gap-2 px-3 mb-10">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              <span className="relative top-[-1px]">ᗢ</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Donezo</h1>
          </div>

          <div className="space-y-1 mb-8">
            <p className="px-3 text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Menu</p>
            <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
            <SidebarItem icon={CheckSquare} label="Tasks" badge="12+" />
            <SidebarItem icon={CalendarIcon} label="Calendar" />
            <SidebarItem icon={BarChart2} label="Analytics" />
            <SidebarItem icon={Users} label="Team" />
          </div>

          <div className="space-y-1">
            <p className="px-3 text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">General</p>
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={HelpCircle} label="Help" />
            <SidebarItem icon={LogOut} label="Logout" />
          </div>
        </div>

        {/* Download App Card */}
        <div className="bg-gradient-to-br from-green-900 to-green-700 rounded-3xl p-5 text-white relative overflow-hidden group cursor-pointer shadow-lg shadow-green-900/20">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-500/20 rounded-full -ml-10 -mb-10 blur-xl"></div>
          
          <div className="relative z-10">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3">
              <ArrowUpRight size={16} />
            </div>
            <h3 className="font-bold text-lg leading-tight mb-1">Download our Mobile App</h3>
            <p className="text-green-100 text-xs mb-4 opacity-80">Get easy in another way</p>
            <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm py-2 rounded-xl text-sm font-bold transition-all">
              Download
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-[95vh] overflow-y-auto pr-2 custom-scroll rounded-3xl">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-2xl sticky top-0 z-20 shadow-sm border border-white">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search Task" 
              className="w-full pl-10 pr-12 py-3 bg-white border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all shadow-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
              <span className="bg-gray-100 text-gray-500 text-xs p-1 rounded border border-gray-200">⌘</span>
              <span className="bg-gray-100 text-gray-500 text-xs p-1 rounded border border-gray-200">F</span>
            </div>
          </div>

          <div className="flex items-center gap-4 self-end md:self-auto">
            <button className="p-3 bg-white rounded-full text-gray-500 hover:bg-green-50 hover:text-green-600 transition-colors border border-gray-100 shadow-sm relative">
              <MessageSquare size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <button className="p-3 bg-white rounded-full text-gray-500 hover:bg-green-50 hover:text-green-600 transition-colors border border-gray-100 shadow-sm relative">
              <Bell size={20} />
              <span className="absolute top-2 right-3 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-white p-1 rounded-full transition-all border border-transparent hover:border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
              />
              <div className="hidden md:block pr-2">
                <h4 className="text-sm font-bold text-gray-800">Totok Michael</h4>
                <p className="text-xs text-gray-400">tmichael02@mail.com</p>
              </div>
            </div>
          </div>
        </header>

        <div className="animate-slide-in">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">Dashboard</h2>
              <p className="text-gray-500">Plan, prioritize, and accomplish your tasks with ease.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-green-800 hover:bg-green-900 text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-green-900/20 transition-all hover:scale-105 active:scale-95">
                <Plus size={18} />
                Add Project
              </button>
              <button className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-bold text-sm border border-gray-200 shadow-sm transition-all hover:-translate-y-0.5">
                Import Data
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Projects" value="24" isGreen={true} delay={100} />
            <StatCard title="Ended Projects" value="10" isGreen={false} delay={200} />
            <StatCard title="Running Projects" value="12" isGreen={false} delay={300} />
            <StatCard title="Pending Project" value="2" isGreen={false} delay={400} />
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-8">
            
            {/* Analytics Chart */}
            <div className="xl:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm animate-slide-in" style={{ animationDelay: '500ms' }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Project Analytics</h3>
                <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20} /></button>
              </div>
              
              <div className="h-48 flex items-end justify-between gap-2 px-2">
                {[40, 70, 55, 85, 45, 60, 50].map((height, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                     <div className="relative w-full h-32 flex items-end justify-center rounded-t-lg overflow-hidden">
                       {/* Background Bar */}
                        <div className={`w-full absolute bottom-0 rounded-t-lg transition-all duration-500 group-hover:bg-green-50 ${i % 2 !== 0 ? 'bg-transparent' : 'bg-transparent'}`}></div>
                        
                        {/* Actual Bar */}
                        <div 
                          className={`w-full max-w-[30px] rounded-full animate-bar transition-all duration-300 group-hover:scale-110 ${i === 3 ? 'bg-green-800 shadow-lg shadow-green-900/20' : i % 2 === 0 ? 'bg-green-100 striped-bar opacity-60' : 'bg-green-700'}`}
                          style={{ '--target-height': `${height}%` } as any}
                        ></div>
                     </div>
                     <span className="text-xs text-gray-400 font-medium">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminder & Project List Column */}
            <div className="space-y-6 animate-slide-in" style={{ animationDelay: '600ms' }}>
              {/* Reminder Card */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-gray-400 text-sm">Reminders</h3>
                  <Bell size={16} className="text-gray-400" />
                </div>
                <h4 className="font-bold text-lg mb-1">Meeting with Aro Company</h4>
                <p className="text-sm text-gray-400 mb-6">Time: 10:00 pm - 04:00 pm</p>
                <button className="w-full py-3 bg-green-800 hover:bg-green-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-900/20 transition-transform active:scale-95">
                  <Play size={16} fill="currentColor" />
                  Start Meeting
                </button>
              </div>

              {/* Project List */}
              <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-2 px-2">
                  <h3 className="font-bold text-lg">Project</h3>
                  <button className="text-xs font-bold px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">+ New</button>
                </div>
                <div className="space-y-1">
                  <ProjectItem icon={Code} color="bg-blue-500" title="Develop API Endpoints" date="Nov 24, 2024" delay={700} />
                  <ProjectItem icon={Layers} color="bg-teal-500" title="Onboarding Flow" date="Nov 28, 2024" delay={800} />
                  <ProjectItem icon={Zap} color="bg-yellow-500" title="Build Dashboard" date="Nov 30, 2024" delay={900} />
                </div>
              </div>
            </div>

            {/* Rightmost Column */}
            <div className="space-y-6 animate-slide-in" style={{ animationDelay: '700ms' }}>
               {/* Project Progress - Donut Chart */}
               <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <h3 className="font-bold text-lg mb-4">Project Progress</h3>
                  <div className="relative w-48 h-24 mx-auto mb-2">
                    <svg viewBox="0 0 100 50" className="w-full h-full transform overflow-visible">
                      {/* Background Path */}
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f3f4f6" strokeWidth="12" strokeLinecap="round" />
                      {/* Foreground Path */}
                      <path 
                        d="M 10 50 A 40 40 0 0 1 90 50" 
                        fill="none" 
                        stroke="#15803d" 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                        strokeDasharray="126" 
                        strokeDashoffset="126"
                        className="animate-[progressFill_1.5s_ease-out_forwards_1s]"
                        style={{ '--target-offset': '74' } as any} 
                      />
                    </svg>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                      <h2 className="text-3xl font-bold text-gray-900">41%</h2>
                      <p className="text-xs text-gray-400">Project Ended</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-green-700"></span> Completed
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-green-900"></span> In-Progress
                    </div>
                  </div>
               </div>

               {/* Time Tracker */}
               <TimeTracker />
            </div>

            {/* Team Collaboration Section (Spans 2 columns on XL) */}
            <div className="xl:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm animate-slide-in" style={{ animationDelay: '800ms' }}>
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Team Collaboration</h3>
                  <button className="text-xs font-bold px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600">
                    + Add Member
                  </button>
               </div>
               <div className="flex flex-col">
                  <TeamMember 
                    name="Alexandra Deff" 
                    role="Working on Github Project Repository" 
                    status="Completed" 
                    image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    delay={900}
                  />
                  <TeamMember 
                    name="Edwin Aderike" 
                    role="Working on Integrate User Authentication" 
                    status="In Progress" 
                    image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    delay={1000}
                  />
                  <TeamMember 
                    name="Isaac Oluwatemilorun" 
                    role="Working on Develop Search and Filter" 
                    status="Pending" 
                    image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    delay={1100}
                  />
               </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

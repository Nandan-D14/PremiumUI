import React from 'react';
import { Button } from '../components/lib/Button';
import { Badge } from '../components/lib/Badge';
import { Input } from '../components/lib/Input';
import { SpotlightCard } from '../components/lib/SpotlightCard';
import { GradientText } from '../components/lib/GradientText';
import { GlassCard } from '../components/lib/GlassCard';
import { ArrowRight, Terminal, Search, Star, Command, Copy, Check } from 'lucide-react';

export const PremiumPreview: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden relative selection:bg-emerald-500/30">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Navbar Mockup */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-black">
            P
          </div>
          <span className="font-bold text-lg">Premium UI</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Components</a>
          <a href="#" className="hover:text-white transition-colors">Templates</a>
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
        </div>

        <div className="flex items-center gap-3">
            <div className="hidden sm:block w-64">
                <Input
                    placeholder="Search components..."
                    shape="pill"
                    icon={<Search className="h-4 w-4" />}
                    className="bg-zinc-900/50 border-zinc-800"
                />
            </div>
            <Button variant="outline" size="icon" shape="pill" className="h-9 w-9 border-zinc-800 text-zinc-400 hover:text-white">
                <Star className="h-4 w-4" />
            </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 text-center px-4">

        <Badge variant="glass" className="mb-8 px-4 py-1.5 text-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            v2.0 Now Available
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
          Build <span className="text-white">Faster</span>.
          <br />
          <GradientText
            colors={['#10b981', '#34d399', '#0ea5e9', '#10b981']}
            className="font-bold"
            animationSpeed={6}
          >
            Design Better.
          </GradientText>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          A collection of premium, copy-paste components for your next React project.
          Built with Framer Motion and Tailwind CSS.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <Button variant="gradient" size="lg" shape="pill" className="group">
            Browse Components
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button variant="outline" size="lg" shape="pill" className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 group">
            <Terminal className="mr-2 h-4 w-4 text-emerald-500" />
            npm install premium-ui
            <span className="ml-4 text-zinc-600 group-hover:text-zinc-400"><Command className="h-3 w-3 inline" /> C</span>
          </Button>
        </div>

        {/* Component Showcase / Mockup */}
        <div className="w-full max-w-5xl px-4 perspective-1000">
          <SpotlightCard className="bg-zinc-900/80 border-white/10 shadow-2xl backdrop-blur-xl rounded-xl overflow-hidden" spotlightColor="rgba(16, 185, 129, 0.2)">
             <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-950/50">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="mx-auto font-mono text-xs text-zinc-500">premium-ui-demo.tsx</div>
             </div>

             <div className="p-8 grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white">Interactive Elements</h3>
                        <p className="text-sm text-zinc-400">Hover, click, and interact with these premium components.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                            <Button size="sm" variant="gradient" shape="default">Gradient</Button>
                            <Button size="sm" variant="glow" shape="default">Glow Effect</Button>
                            <Button size="sm" variant="outline" shape="default">Outline</Button>
                        </div>
                        <div className="flex items-center gap-4">
                            <Badge variant="glow">New Feature</Badge>
                            <Badge variant="success" dot>Online</Badge>
                            <Badge variant="glass">Glass Badge</Badge>
                        </div>
                    </div>

                    <div className="p-4 rounded-lg border border-white/5 bg-black/20">
                         <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono text-zinc-500">Terminal</span>
                            <Copy className="h-3 w-3 text-zinc-600 hover:text-zinc-400 cursor-pointer" />
                         </div>
                         <div className="font-mono text-sm text-emerald-400">
                            $ pnpm add premium-ui
                         </div>
                    </div>
                </div>

                <div className="relative">
                   <GlassCard className="h-full min-h-[200px] flex items-center justify-center p-6">
                      <div className="text-center space-y-4">
                         <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30">
                            <Check className="h-6 w-6 text-white" />
                         </div>
                         <div>
                            <h4 className="font-semibold text-white">Payment Successful</h4>
                            <p className="text-sm text-zinc-400">Your order has been processed.</p>
                         </div>
                         <Button size="sm" variant="secondary" className="w-full">View Receipt</Button>
                      </div>
                   </GlassCard>
                </div>
             </div>
          </SpotlightCard>
        </div>
      </main>
    </div>
  );
};

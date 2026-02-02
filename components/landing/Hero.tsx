import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '../lib/Button';
import { GradientText } from '../lib/GradientText';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 pb-20 lg:pt-32 lg:pb-32">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] bg-primary/20 blur-[120px] rounded-full opacity-30 animate-pulse-glow" />
        <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-blue-500/20 blur-[100px] rounded-full opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6">
                <Sparkles size={12} />
                <span>New Components Available</span>
                <ChevronRight size={12} className="opacity-50" />
              </span>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                Build <span className="text-primary">Stunning</span> UIs<br />
                <GradientText
                  colors={["#3b82f6", "#8b5cf6", "#10b981", "#3b82f6"]}
                  animationSpeed={6}
                  className="text-transparent bg-clip-text"
                >
                  Without the Struggle.
                </GradientText>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A premium collection of animated components built with React, Tailwind CSS, and Framer Motion.
                Beautifully designed, accessible, and ready to drop into your project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
            >
              <Link to="/components">
                <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                  Browse Components <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-base bg-background/50 backdrop-blur border-border hover:bg-muted"
                onClick={() => {
                  navigator.clipboard.writeText('npm install premium-ui');
                }}
              >
                <Terminal className="mr-2 h-5 w-5" /> npm install premium-ui
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 text-sm text-muted-foreground pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="font-semibold text-foreground">1,000+</span> developers</p>
            </motion.div>
          </div>

          {/* Right Visual (3D/Abstract) */}
          <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
            <motion.div
              style={{ y, opacity }}
              className="relative w-full max-w-lg aspect-square"
            >
              {/* Main Card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden z-20"
                animate={{
                  rotateY: [0, -5, 0],
                  rotateX: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Header */}
                <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div className="flex gap-4 mb-8">
                    <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                       <Sparkles />
                    </div>
                    <div>
                      <div className="h-4 w-24 bg-white/10 rounded mb-2" />
                      <div className="h-3 w-32 bg-white/5 rounded" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-4 w-full bg-white/5 rounded" />
                    <div className="h-4 w-5/6 bg-white/5 rounded" />
                    <div className="h-4 w-4/6 bg-white/5 rounded" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-24 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-white/5" />
                    <div className="h-24 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-white/5" />
                  </div>

                  <div className="pt-4">
                    <div className="w-full h-10 bg-primary rounded-lg shadow-lg shadow-primary/20 flex items-center justify-center text-white font-medium">
                      Start Building
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-20, 0, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-20 z-30 p-4 bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-mono font-medium text-foreground">Accessibility</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[98%]" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-32 z-30 p-4 bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="text-xl">⚡</span>
                  <span>Performance First</span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

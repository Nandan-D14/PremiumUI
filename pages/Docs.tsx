import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Code, Terminal, Check, Copy, ChevronRight, ArrowRight, Box, Layers } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '../utils/cn';

const CodeBlock = ({ code, language = 'bash' }: { code: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-border bg-[#09090b] my-4">
      <div className="absolute right-3 top-3 z-10">
        <button
          onClick={handleCopy}
          className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors backdrop-blur-sm border border-white/5"
        >
          {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="px-4 py-2 border-b border-white/5 bg-white/5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        </div>
        <span className="text-xs font-mono text-muted-foreground ml-2">{language}</span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: 'transparent',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const Step = ({ number, title, children }: { number: string, title: string, children: React.ReactNode }) => (
  <div className="relative pl-10 pb-12 last:pb-0">
    {/* Connecting Line */}
    <div className="absolute left-[11px] top-10 bottom-0 w-px bg-border last:hidden" />
    
    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
      {number}
    </div>
    
    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
      {title}
    </h3>
    <div className="text-muted-foreground">
      {children}
    </div>
  </div>
);

export const Docs: React.FC = () => {
  const location = useLocation();
  const isInstallation = location.pathname.includes('installation');

  return (
    <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6">
      <div className="mb-12 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-sm text-primary mb-4 font-medium">
          <Link to="/docs/introduction" className="hover:underline">Docs</Link>
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="text-foreground">{isInstallation ? 'Installation' : 'Introduction'}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          {isInstallation ? 'Installation' : 'Introduction'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {isInstallation 
            ? 'Get up and running with Premium UI in minutes.' 
            : 'A copy-paste component library for modern React applications.'}
        </p>
      </div>

      <div className="animate-fade-in-up">
        {isInstallation ? (
          <div className="space-y-2">
            <Step number="1" title="Install Dependencies">
              <p className="mb-4">
                Premium UI relies on a few powerful libraries to handle animations and styling. 
                Run the following command to install them:
              </p>
              <CodeBlock code="npm install framer-motion clsx tailwind-merge lucide-react" />
            </Step>

            <Step number="2" title="Configure Utility">
              <p className="mb-4">
                We use a specialized <code>cn</code> utility to handle conditional Tailwind classes safely.
                Create a new file at <code>utils/cn.ts</code> (or <code>lib/utils.ts</code>):
              </p>
              <CodeBlock 
                language="typescript" 
                code={`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`} 
              />
            </Step>

            <Step number="3" title="Setup Tailwind">
              <p className="mb-4">
                Ensure your <code>tailwind.config.js</code> includes the necessary content paths and theme extensions.
                You can copy the theme configuration from our repository if you want the exact same look.
              </p>
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm flex items-start gap-3">
                <Terminal size={18} className="shrink-0 mt-0.5" />
                <p>
                  Tip: All our components use standard Tailwind classes. You can customize the colors 
                  by extending your theme configuration.
                </p>
              </div>
            </Step>
            
            <div className="pt-8 mt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Next Steps</h3>
              <Link to="/components" className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium group">
                Browse Components <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Box size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Copy & Paste</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No huge dependencies or complex setups. Just copy the component code you need directly into your project.
                  You own the code.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Customizable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built with Tailwind CSS and Framer Motion. Every style, animation, and behavior is fully customizable via props or code.
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-foreground mb-4">Philosophy</h3>
              <p className="text-muted-foreground mb-6">
                Most component libraries are either too rigid (Bootstrap) or too unopinionated (Headless UI). 
                <strong>Premium UI</strong> sits in the middle. We provide beautiful, complex, animated components 
                that are ready to use but easy to modify.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">The "New" Aesthetic</h3>
              <p className="text-muted-foreground mb-6">
                We focus on the modern "Linear-like" or "Vercel-like" aesthetic:
              </p>
              <ul className="space-y-3 text-muted-foreground list-none pl-0">
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-primary" />
                  <span>Dark mode first design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-primary" />
                  <span>Subtle gradients and glassmorphism</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-primary" />
                  <span>Micro-interactions and fluid animations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-primary" />
                  <span>AI-Ready: Includes detailed prompts for generation</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 pt-8">
              <Link to="/docs/installation">
                <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
                  Start Installation
                </button>
              </Link>
              <Link to="/components">
                <button className="px-6 py-3 rounded-lg border border-border bg-background hover:bg-accent text-foreground font-medium transition-colors">
                  Browse Components
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Code, Terminal } from 'lucide-react';

export const Docs: React.FC = () => {
  const location = useLocation();
  const isInstallation = location.pathname.includes('installation');

  return (
    <div className="max-w-3xl mx-auto pb-20">
      <h1 className="text-4xl font-bold text-white mb-6">
        {isInstallation ? 'Installation' : 'Introduction'}
      </h1>

      <div className="prose prose-invert prose-lg">
        {isInstallation ? (
          <>
            <p className="text-secondary mb-8">
              Generative UI Lib is built on top of React, Tailwind CSS, and Framer Motion. 
              Since it's a "copy-paste" library, you don't need to install a huge package. 
              However, you need a few dependencies for the components to work.
            </p>
            
            <h3 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
              <Terminal size={24} /> 1. Install Dependencies
            </h3>
            <div className="rounded-lg bg-surface border border-border p-4 mb-8">
              <code className="text-sm font-mono text-primary">
                npm install framer-motion clsx tailwind-merge lucide-react
              </code>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
              <Code size={24} /> 2. Configure Tailwind
            </h3>
            <p className="text-secondary mb-4">
              Ensure your project is set up with Tailwind CSS. We use a utility helper to merge classes.
            </p>
            <p className="text-secondary">
              Create a file named <code className="text-primary bg-white/10 px-1 rounded">utils/cn.ts</code>:
            </p>
            <div className="rounded-lg bg-surface border border-border p-4 mt-4">
<pre className="text-sm font-mono text-gray-300">
{`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
</pre>
            </div>
          </>
        ) : (
          <>
            <p className="text-xl text-secondary mb-8">
              Beautifully designed, animated React components meant to be copied and pasted into your apps.
            </p>
            
            <p className="text-secondary mb-6">
              <strong>Generative UI Lib</strong> is not a component library you install via npm. It's a collection of self-contained components that you can copy into your project.
            </p>
            
            <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Why Copy/Paste?</h3>
            <ul className="list-disc pl-6 space-y-3 text-secondary">
              <li><strong>Full Control:</strong> The code is yours. Customize animations, styles, and behavior without fighting a library's API.</li>
              <li><strong>No Bloat:</strong> Only include what you use. Keep your bundle size small.</li>
              <li><strong>Learning Resource:</strong> See how complex animations are built using Framer Motion and Tailwind.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Inspiration</h3>
            <p className="text-secondary">
              This project is heavily inspired by amazing communities like Aceternity UI, Magic UI, and ReactBits. Our goal is to provide a specific aesthetic focused on generative, interactive, and dark-mode-first designs.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
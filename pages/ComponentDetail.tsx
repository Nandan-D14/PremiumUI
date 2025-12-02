import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { COMPONENT_REGISTRY } from '../data/registry';
import { Check, Copy, Code, Eye, Info, Settings2, RotateCcw } from 'lucide-react';
import { cn } from '../utils/cn';
import { useToast } from '../context/ToastContext';

export const ComponentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const componentData = COMPONENT_REGISTRY.find(c => c.slug === slug);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  // State for interactive demo props
  const [demoProps, setDemoProps] = useState<Record<string, any>>({});

  useEffect(() => {
    if (!componentData) return;

    // Initialize props with defaults from registry or sensible fallbacks
    const initialProps: Record<string, any> = {};
    
    componentData.props.forEach(prop => {
      if (prop.name === 'children' || prop.name === 'className') return;
      
      let value: any = prop.default;
      
      if (prop.type === 'number') {
        value = parseFloat(prop.default || '0');
      } else if (prop.type === 'boolean') {
         value = prop.default === 'true';
      }
      
      initialProps[prop.name] = value;
    });

    // Component-specific demo overrides for better initial experience
    if (componentData.slug === 'split-text') {
      initialProps.text = "Animated Text Reveal";
      initialProps.delay = 0.08;
    } else if (componentData.slug === 'spotlight-card') {
      if (!initialProps.spotlightColor) initialProps.spotlightColor = 'rgba(255, 255, 255, 0.25)';
    }

    setDemoProps(initialProps);
  }, [componentData]);

  if (!componentData) {
    return <Navigate to="/components" replace />;
  }

  const Component = componentData.component;
  const defaultProps = componentData.props.filter(p => p.default);

  const handleCopy = () => {
    navigator.clipboard.writeText(componentData.code);
    setCopied(true);
    addToast('Code copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePropChange = (name: string, value: any) => {
    setDemoProps(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
     // Re-trigger effect or manually reset (simplest is to re-run the init logic, but here we can just reload the page or simplified reset)
     // For now, let's just re-run the specific overrides we know
     const initialProps: Record<string, any> = { ...demoProps };
     componentData.props.forEach(prop => {
         if (prop.name === 'children' || prop.name === 'className') return;
         if (prop.default) {
             initialProps[prop.name] = prop.type === 'number' ? parseFloat(prop.default) : prop.default;
         }
     });
     if (componentData.slug === 'split-text') {
        initialProps.text = "Animated Text Reveal";
        initialProps.delay = 0.08;
     }
     setDemoProps(initialProps);
     addToast('Configuration reset to defaults', 'info');
  };

  const isColor = (value: string) => {
    return typeof value === 'string' && (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('hsl'));
  };

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">{componentData.name}</h1>
        <p className="text-xl text-secondary">{componentData.description}</p>
      </div>

      <div className="mb-8 flex items-center gap-4 border-b border-border">
        <button
          onClick={() => setActiveTab('preview')}
          className={cn(
            "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2",
            activeTab === 'preview' 
              ? "border-primary text-white" 
              : "border-transparent text-secondary hover:text-white"
          )}
        >
          <Eye size={16} /> Preview
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={cn(
            "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2",
            activeTab === 'code' 
              ? "border-primary text-white" 
              : "border-transparent text-secondary hover:text-white"
          )}
        >
          <Code size={16} /> Code
        </button>
      </div>

      <div className="relative rounded-xl border border-border bg-surface overflow-hidden min-h-[500px]">
        {activeTab === 'preview' ? (
          <div className="flex flex-col lg:flex-row h-full min-h-[500px]">
             {/* Preview Canvas */}
             <div className="flex-1 relative overflow-hidden bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] p-8 sm:p-12 flex items-center justify-center">
                 <div className="w-full max-w-md mx-auto z-10">
                   {componentData.slug === 'split-text' && (
                     <Component 
                       text={demoProps.text || "Animated Text Reveal"} 
                       className="text-5xl font-bold text-white text-center"
                       delay={Number(demoProps.delay)}
                     />
                   )}
                   {componentData.slug === 'spotlight-card' && (
                     <Component 
                        className="p-8 aspect-square flex flex-col justify-center items-center text-center"
                        spotlightColor={demoProps.spotlightColor}
                     >
                        <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                          <div className="h-6 w-6 bg-primary rounded-full" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Hover Me</h2>
                        <p className="text-secondary mt-2">I have a spotlight effect!</p>
                     </Component>
                   )}
                   {componentData.slug === 'tilted-card' && (
                      <div className="h-[300px] flex items-center justify-center perspective-1000">
                        <Component 
                           className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-xl border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center"
                           rotateAmplitude={Number(demoProps.rotateAmplitude)}
                           scaleOnHover={Number(demoProps.scaleOnHover)}
                        >
                          <span className="text-4xl mb-4">🧊</span>
                          <h3 className="text-2xl font-bold text-white">3D Card</h3>
                          <p className="text-indigo-200 mt-2">Tilt me with your mouse</p>
                        </Component>
                      </div>
                   )}
                 </div>
             </div>

             {/* Controls Panel */}
             <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-border bg-surface/50 backdrop-blur-sm p-6">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="font-semibold text-white flex items-center gap-2">
                      <Settings2 size={16} />
                      <span>Controls</span>
                   </h3>
                   <button 
                      onClick={handleReset}
                      className="p-1.5 rounded-md hover:bg-white/10 text-secondary hover:text-white transition-colors"
                      title="Reset to defaults"
                   >
                      <RotateCcw size={14} />
                   </button>
                </div>

                <div className="space-y-6">
                   {componentData.props.map((prop) => {
                      if (prop.name === 'children' || prop.name === 'className') return null;
                      
                      const currentValue = demoProps[prop.name] ?? '';
                      
                      return (
                        <div key={prop.name} className="space-y-2">
                           <div className="flex justify-between items-center">
                              <label className="text-xs font-medium text-secondary uppercase tracking-wider">{prop.name}</label>
                              <span className="text-[10px] font-mono text-secondary/70">{prop.type}</span>
                           </div>
                           
                           {prop.type === 'number' ? (
                              <input 
                                type="number" 
                                value={currentValue}
                                step={prop.name.includes('delay') || prop.name.includes('scale') ? "0.01" : "1"}
                                onChange={(e) => handlePropChange(prop.name, parseFloat(e.target.value))}
                                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                              />
                           ) : prop.name.toLowerCase().includes('color') ? (
                              <div className="flex gap-2">
                                 <div className="h-9 w-9 rounded-lg border border-border overflow-hidden shrink-0 relative">
                                    <input 
                                       type="color" 
                                       value={currentValue.startsWith('#') ? currentValue : '#ffffff'}
                                       onChange={(e) => handlePropChange(prop.name, e.target.value)}
                                       className="absolute inset-[-4px] w-[150%] h-[150%] cursor-pointer p-0 border-0"
                                    />
                                 </div>
                                 <input 
                                    type="text" 
                                    value={currentValue}
                                    onChange={(e) => handlePropChange(prop.name, e.target.value)}
                                    className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono"
                                 />
                              </div>
                           ) : (
                              <input 
                                type="text" 
                                value={currentValue}
                                onChange={(e) => handlePropChange(prop.name, e.target.value)}
                                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                              />
                           )}
                        </div>
                      );
                   })}
                   
                   {Object.keys(demoProps).length === 0 && (
                      <p className="text-sm text-secondary text-center py-4">
                         No editable properties available.
                      </p>
                   )}
                </div>
             </div>
          </div>
        ) : (
          <div className="relative group h-full">
            <button 
              onClick={handleCopy}
              className="absolute right-4 top-4 z-10 flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 border border-white/10 text-xs font-medium text-white hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Code</span>
                </>
              )}
            </button>
            <pre className="p-6 pt-16 overflow-x-auto text-sm font-mono text-gray-300 bg-[#0d0d0d] h-full min-h-[500px]">
              <code>{componentData.code}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Default Configuration Section - Display only if meaningful and not redundant with controls */}
      {defaultProps.length > 0 && activeTab === 'code' && (
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Info size={20} className="text-primary" />
            <h3 className="text-xl font-bold text-white">Default Configuration</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {defaultProps.map(prop => (
               <div key={prop.name} className="relative group p-4 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                     <code className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{prop.name}</code>
                     <span className="text-[10px] uppercase tracking-wider text-secondary font-medium">{prop.type}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                    {prop.default && isColor(prop.default) && (
                      <div 
                        className="h-6 w-6 rounded-md border border-white/10 shadow-sm shrink-0" 
                        style={{ background: prop.default }}
                      />
                    )}
                    <code className="text-sm text-gray-300 font-mono break-all">
                      {prop.default}
                    </code>
                  </div>
               </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white mb-6">Props</h3>
        <div className="overflow-x-auto rounded-xl border border-border bg-surface/50">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold text-white">Prop</th>
                <th className="px-6 py-4 font-semibold text-white">Type</th>
                <th className="px-6 py-4 font-semibold text-white">Default</th>
                <th className="px-6 py-4 font-semibold text-white">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {componentData.props.map((prop) => (
                <tr key={prop.name} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-primary font-medium">{prop.name}</td>
                  <td className="px-6 py-4 font-mono text-purple-300 text-xs">{prop.type}</td>
                  <td className="px-6 py-4 font-mono text-secondary text-xs">{prop.default || '-'}</td>
                  <td className="px-6 py-4 text-secondary leading-relaxed">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
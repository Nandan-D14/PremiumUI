import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { COMPONENT_REGISTRY } from '../data/registry';
import { Check, Copy, Code, Eye, Info, Settings2, RotateCcw, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { useToast } from '../context/ToastContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
    } else if (componentData.slug === 'button') {
      initialProps.variant = 'default';
      initialProps.size = 'default';
      initialProps.isLoading = false;
    } else if (componentData.slug === 'input') {
      initialProps.label = 'Email';
      initialProps.error = '';
    } else if (componentData.slug === 'badge') {
      initialProps.variant = 'default';
    } else if (componentData.slug === 'card') {
      initialProps.hover = true;
    } else if (componentData.slug === 'glowing-card') {
      initialProps.glowColor = '#8b5cf6';
    } else if (componentData.slug === 'shimmer-button') {
      initialProps.shimmerColor = 'rgba(255, 255, 255, 0.3)';
    } else if (componentData.slug === 'parallax-card') {
      initialProps.intensity = 20;
    } else if (componentData.slug === 'typewriter-text') {
      initialProps.text = "Hello, I'm a typewriter effect!";
      initialProps.speed = 50;
      initialProps.cursor = true;
    } else if (componentData.slug === 'progress') {
      initialProps.value = 75;
      initialProps.variant = 'default';
      initialProps.showLabel = true;
    } else if (componentData.slug === 'property-showcase-card') {
      initialProps.title = 'Santorini Villa';
      initialProps.description = 'Luxury villa overlooking the Aegean Sea, offering breathtaking sunset views and infinity pool for ultimate relaxation.';
      initialProps.image = 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80';
      initialProps.rating = 4.9;
      initialProps.duration = '3 Night Stay';
      initialProps.isFavorite = false;
    } else if (componentData.slug === 'accordion') {
      initialProps.allowMultiple = false;
    } else if (componentData.slug === 'tooltip') {
      initialProps.position = 'top';
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
        {componentData.category === 'Templates' && (
          <a
            href={`/#/templates/${componentData.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors text-secondary hover:text-white"
          >
            View Full Template <ArrowRight size={16} />
          </a>
        )}
      </div>

      <div className={cn(
        "relative rounded-xl border border-border bg-surface overflow-hidden",
        componentData.category === 'Templates' ? 'min-h-[800px]' : 'min-h-[500px]'
      )}>
        {activeTab === 'preview' ? (
          <div className={cn(
            "flex h-full",
            componentData.category === 'Templates' ? 'flex-col min-h-[800px]' : 'flex-col lg:flex-row min-h-[500px]'
          )}>
             {/* Preview Canvas */}
             <div className={cn(
               "relative overflow-hidden flex items-center justify-center",
               componentData.category === 'Templates' 
                 ? 'flex-1 bg-background p-0' 
                 : 'flex-1 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] p-8 sm:p-12'
             )}>
                 <div className={cn(
                   "z-10",
                   componentData.category === 'Templates' 
                     ? 'w-full h-full' 
                     : 'w-full max-w-md mx-auto'
                 )}>
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
                   {componentData.slug === 'button' && (
                     <div className="flex flex-col items-center gap-4">
                       <Component 
                         variant={demoProps.variant || 'default'} 
                         size={demoProps.size || 'default'} 
                         isLoading={demoProps.isLoading}
                         onClick={() => alert('Button clicked!')}
                       >
                         Click Me
                       </Component>
                       <p className="text-sm text-secondary">Try changing the variant and size in the controls</p>
                     </div>
                   )}
                   {componentData.slug === 'input' && (
                     <div className="w-full space-y-2">
                       <Component 
                         label={demoProps.label || 'Email'} 
                         placeholder="Enter your email"
                         error={demoProps.error}
                       />
                       <p className="text-sm text-secondary">Try adding an error message in the controls</p>
                     </div>
                   )}
                   {componentData.slug === 'badge' && (
                     <div className="flex flex-col items-center gap-4">
                       <div className="flex flex-wrap gap-3 justify-center">
                         <Component variant={demoProps.variant || 'default'}>Badge</Component>
                       </div>
                       <p className="text-sm text-secondary">Try different variants in the controls</p>
                     </div>
                   )}
                   {componentData.slug === 'card' && (
                     <div className="w-full space-y-4">
                       <Component hover={demoProps.hover}>
                         <div className="p-6">
                           <h3 className="text-xl font-bold text-white mb-2">Card Title</h3>
                           <p className="text-secondary">This is a card component with customizable content.</p>
                         </div>
                       </Component>
                       <p className="text-sm text-secondary text-center">Toggle hover effect in controls</p>
                     </div>
                   )}
                   {componentData.slug === 'glowing-card' && (
                     <div className="w-full">
                       <Component glowColor={demoProps.glowColor || '#8b5cf6'}>
                         <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                           <span className="text-2xl">✨</span>
                         </div>
                         <h3 className="text-xl font-bold text-white">Glowing Card</h3>
                         <p className="text-secondary mt-2">Hover to see the glow effect</p>
                       </Component>
                     </div>
                   )}
                   {componentData.slug === 'shimmer-button' && (
                     <div className="flex flex-col items-center gap-4">
                       <Component shimmerColor={demoProps.shimmerColor}>
                         Shimmer Button
                       </Component>
                       <p className="text-sm text-secondary">Watch the shimmer animation</p>
                     </div>
                   )}
                   {componentData.slug === 'parallax-card' && (
                     <div className="w-full">
                       <Component intensity={Number(demoProps.intensity) || 20}>
                         <h3 className="text-xl font-bold text-white mb-2">Parallax Card</h3>
                         <p className="text-secondary">Move your mouse to see the 3D effect</p>
                       </Component>
                     </div>
                   )}
                   {componentData.slug === 'typewriter-text' && (
                     <div className="flex flex-col items-center gap-4 w-full">
                       <Component 
                         text={demoProps.text || "Hello, I'm a typewriter effect!"} 
                         speed={Number(demoProps.speed) || 50}
                         cursor={demoProps.cursor !== false}
                         className="text-2xl font-bold text-white text-center"
                       />
                       <p className="text-sm text-secondary">Adjust speed in controls</p>
                     </div>
                   )}
                   {componentData.slug === 'progress' && (
                     <div className="space-y-4 w-full">
                       <Component 
                         value={Number(demoProps.value) || 75} 
                         variant={demoProps.variant || 'default'}
                         showLabel={demoProps.showLabel !== false}
                       />
                       <p className="text-sm text-secondary text-center">Adjust value and variant in controls</p>
                     </div>
                   )}
                   {componentData.slug === 'property-showcase-card' && (
                     <div className="w-full max-w-sm mx-auto">
                       <Component 
                         title={demoProps.title || 'Santorini Villa'}
                         description={demoProps.description || 'Luxury villa overlooking the Aegean Sea, offering breathtaking sunset views and infinity pool for ultimate relaxation.'}
                         image={demoProps.image || 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'}
                         rating={Number(demoProps.rating) || 4.9}
                         duration={demoProps.duration || '3 Night Stay'}
                         isFavorite={demoProps.isFavorite || false}
                         onFavoriteClick={() => alert('Favorite toggled!')}
                         onReserveClick={() => alert('Reserve clicked!')}
                       />
                     </div>
                   )}
                   {componentData.slug === 'animated-gradient' && (
                     <div className="w-full">
                       <Component className="p-8 rounded-xl">
                         <h3 className="text-2xl font-bold text-white mb-2">Animated Gradient</h3>
                         <p className="text-white/80">Watch the colors flow</p>
                       </Component>
                     </div>
                   )}
                   {componentData.slug === 'tabs' && (
                     <div className="w-full">
                       <Component 
                         tabs={[
                           { id: '1', label: 'Overview', content: <div className="p-4 text-white">Overview content goes here. This tab shows general information.</div> },
                           { id: '2', label: 'Details', content: <div className="p-4 text-white">Details content goes here. This tab shows detailed information.</div> },
                           { id: '3', label: 'Settings', content: <div className="p-4 text-white">Settings content goes here. This tab shows configuration options.</div> },
                         ]}
                         defaultTab="1"
                       />
                     </div>
                   )}
                   {componentData.slug === 'accordion' && (
                     <div className="w-full space-y-4">
                       <Component 
                         items={[
                           { id: '1', title: 'What is this component?', content: 'This is an accordion component that can expand and collapse content sections.' },
                           { id: '2', title: 'How do I use it?', content: 'Simply pass an array of items with id, title, and content properties.' },
                           { id: '3', title: 'Can multiple items be open?', content: 'Yes! Set the allowMultiple prop to true to allow multiple sections to be open at once.' },
                         ]}
                         allowMultiple={demoProps.allowMultiple}
                       />
                       <p className="text-sm text-secondary text-center">Click sections to expand/collapse</p>
                     </div>
                   )}
                   {componentData.slug === 'modal' && (
                     <div className="text-center">
                       <p className="text-secondary mb-4">Modal component requires state management.</p>
                       <p className="text-sm text-secondary">Check the code tab for usage examples.</p>
                     </div>
                   )}
                   {componentData.slug === 'tooltip' && (
                     <div className="flex flex-col items-center gap-6">
                       <Component content="This is a tooltip" position={demoProps.position || 'top'}>
                         <button className="px-4 py-2 bg-primary rounded-lg text-white">
                           Hover me
                         </button>
                       </Component>
                       <p className="text-sm text-secondary">Hover over the button to see the tooltip</p>
                     </div>
                   )}
                   {componentData.slug === 'gandom-dashboard' && (
                     <div className="w-full h-[800px] bg-[#0F121C] rounded-xl overflow-hidden border border-gray-800">
                        <Component />
                     </div>
                   )}
                   {componentData.slug === 'modern-saas' && (
                     <div className="w-full h-[800px] overflow-y-auto rounded-xl border border-border bg-background">
                        <Component />
                     </div>
                   )}
                   {componentData.slug === 'saaspo-landing' && (
                     <div className="w-full h-[800px] overflow-y-auto rounded-xl border border-border bg-background">
                        <Component />
                     </div>
                   )}
                   {componentData.slug === 'decrypted-text' && (
                     <div className="flex flex-col items-center gap-4">
                        <Component 
                          text={demoProps.text || "ACCESS GRANTED"} 
                          speed={Number(demoProps.speed) || 50}
                          animateOn={demoProps.animateOn || 'hover'}
                          className="text-4xl font-bold text-green-500"
                        />
                        <p className="text-sm text-secondary">Hover or refresh to see animation</p>
                     </div>
                   )}
                   {componentData.slug === 'gradient-text' && (
                     <div className="flex flex-col items-center gap-4">
                        <Component 
                          colors={demoProps.colors}
                          animationSpeed={Number(demoProps.animationSpeed) || 3}
                          className="text-5xl font-bold"
                        >
                          Gradient Text
                        </Component>
                     </div>
                   )}
                   {componentData.slug === 'glass-card' && (
                     <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center rounded-xl overflow-hidden">
                        <Component 
                          opacity={Number(demoProps.opacity) || 0.1}
                          blur={Number(demoProps.blur) || 10}
                          className="p-8 max-w-sm text-white"
                        >
                          <h3 className="text-xl font-bold mb-2">Glassmorphism</h3>
                          <p className="text-white/70">A beautiful frosted glass effect with noise texture.</p>
                        </Component>
                     </div>
                   )}
                   {componentData.slug === 'dock' && (
                     <div className="w-full h-full min-h-[200px] flex items-end justify-center pb-10">
                        <Component items={[
                          { icon: <div className="w-6 h-6 bg-white/20 rounded-full" />, label: 'Finder' },
                          { icon: <div className="w-6 h-6 bg-white/20 rounded-full" />, label: 'Launchpad' },
                          { icon: <div className="w-6 h-6 bg-white/20 rounded-full" />, label: 'Safari' },
                          { icon: <div className="w-6 h-6 bg-white/20 rounded-full" />, label: 'Messages' },
                          { icon: <div className="w-6 h-6 bg-white/20 rounded-full" />, label: 'Mail' },
                        ]} />
                     </div>
                   )}
                   {componentData.slug === 'star-border' && (
                     <div className="flex flex-col items-center gap-4">
                        <Component 
                          color={demoProps.color || 'white'} 
                          speed={demoProps.speed || '6s'}
                        >
                          <div className="px-8 py-4 text-white">
                            Star Border
                          </div>
                        </Component>
                     </div>
                   )}
                   {!['split-text', 'spotlight-card', 'tilted-card', 'button', 'input', 'badge', 'card', 'glowing-card', 'shimmer-button', 'parallax-card', 'typewriter-text', 'progress', 'property-showcase-card', 'animated-gradient', 'tabs', 'accordion', 'modal', 'tooltip', 'modern-saas', 'gandom-dashboard', 'saaspo-landing', 'decrypted-text', 'gradient-text', 'glass-card', 'dock', 'star-border'].includes(componentData.slug) && (
                     <div className="text-center text-secondary">
                       <p className="mb-4">Preview not available for this component.</p>
                       <p className="text-sm">Check the code tab for usage examples.</p>
                     </div>
                   )}
                 </div>
             </div>

             {/* Controls Panel - Hidden for Templates */}
             {componentData.category !== 'Templates' && (
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
             )}
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
            <SyntaxHighlighter language="tsx" style={atomDark} customStyle={{ 
              height: '100%', 
              minHeight: '500px', 
              borderRadius: '0 0 0.75rem 0.75rem', 
              padding: '1.5rem', 
              fontSize: '0.875rem', 
              backgroundColor: '#0d0d0d', 
              color: '#f8f8f2' 
            }}>
              {componentData.code}
            </SyntaxHighlighter>
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
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Globe, Code, Layout } from 'lucide-react';
import { GlowingCard } from '../lib/GlowingCard';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed with zero runtime overhead. Built for performance first.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Type Safe',
    description: 'Written in TypeScript with strict type checking for robust applications.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Responsive',
    description: 'Looks great on any device, from mobile phones to large desktop screens.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Accessible',
    description: 'Follows WAI-ARIA guidelines to ensure your site is usable by everyone.',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Clean Code',
    description: 'Well-structured, commented, and easy to understand source code.',
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Modern Design',
    description: 'Beautifully crafted components following the latest design trends.',
  }
];

export const FeatureGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Everything you need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our library provides all the essential building blocks for your next great project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group h-full rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-300 ease-out">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground flex-1">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

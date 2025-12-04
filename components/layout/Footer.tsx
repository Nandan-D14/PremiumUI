import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Send } from 'lucide-react';
import { Button } from '../lib/Button';
import { Input } from '../lib/Input';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const links = {
    Product: [
      { name: 'Components', href: '/components' },
      { name: 'Templates', href: '/components/modern-saas' },
      { name: 'Documentation', href: '/docs/introduction' },
      { name: 'Changelog', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Legal', href: '#' },
    ],
    Social: [
      { name: 'GitHub', icon: Github, href: 'https://github.com/Nandan-D14/Premium-UI' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ]
  };

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <span className="text-primary-foreground text-sm font-bold">UI</span>
              </div>
              <span className="text-foreground">Premium UI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building the next generation of user interfaces with React, Tailwind, and Framer Motion. 
              Open source and free to use.
            </p>
            <div className="flex gap-4">
              {links.Social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-full"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              {links.Product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {links.Company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-foreground font-semibold mb-6">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest updates and new components directly in your inbox.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background border border-input rounded-md py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <Button className="w-full" size="sm">
                Subscribe <Send className="ml-2 h-3 w-3" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Premium UI Library. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

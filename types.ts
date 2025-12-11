import React from 'react';

export interface RouteItem {
  title: string;
  path: string;
  element?: React.ReactNode;
  category?: string;
  isNew?: boolean;
}

export interface ComponentDoc {
  slug: string;
  name: string;
  description: string;
  component: React.ComponentType<any>;
  code: string;
  category: 'Text Animations' | 'UI Components' | '3D & Interactive' | 'Forms' | 'Layout' | 'Templates' | 'Backgrounds';
  props: PropDefinition[];
}

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface SidebarSection {
  title: string;
  items: RouteItem[];
}
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Home } from './pages/Home';
import { ComponentDetail } from './pages/ComponentDetail';
import { ComponentsIndex } from './pages/ComponentsIndex';
import { Docs } from './pages/Docs';
import { TemplateRenderer } from './pages/TemplateRenderer';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Hide sidebar on homepage and templates for full width
  const isHome = location.pathname === '/' || location.pathname.startsWith('/templates/');

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Header 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        isMenuOpen={isSidebarOpen} 
      />
      
      <div className="flex pt-16">
        {!isHome && (
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />
        )}
        
        <main className={`flex-1 min-w-0 ${!isHome ? 'lg:pl-72' : ''}`}>
          <div className={`mx-auto ${isHome ? 'px-0' : 'px-4 sm:px-6 lg:px-8 py-10'}`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/components" element={<ComponentsIndex />} />
              <Route path="/components/:slug" element={<ComponentDetail />} />
              <Route path="/templates/:slug" element={<TemplateRenderer />} />
              <Route path="/docs/introduction" element={<Docs />} />
              <Route path="/docs/installation" element={<Docs />} />
            </Routes>
          </AppLayout>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
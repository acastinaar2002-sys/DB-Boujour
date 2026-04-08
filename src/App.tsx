import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, FileText, Languages, Globe } from 'lucide-react';
import Dashboard from './components/Dashboard';
import EnglishReport from './components/EnglishReport';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'report'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* French Flag Styled Header */}
      <div className="h-2 w-full flex">
        <div className="h-full w-1/3 bg-fr-blue" />
        <div className="h-full w-1/3 bg-white" />
        <div className="h-full w-1/3 bg-fr-red" />
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="bg-fr-blue p-2 rounded-xl shadow-lg shadow-blue-200">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tighter text-fr-blue block leading-none">Bonjour!</span>
                <span className="text-xs font-bold text-fr-red uppercase tracking-widest">Français</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                  activeTab === 'dashboard' 
                    ? "bg-fr-blue text-white shadow-lg shadow-blue-100 scale-105" 
                    : "text-slate-500 hover:text-fr-blue hover:bg-white"
                )}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('report')}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                  activeTab === 'report' 
                    ? "bg-fr-blue text-white shadow-lg shadow-blue-100 scale-105" 
                    : "text-slate-500 hover:text-fr-blue hover:bg-white"
                )}
              >
                <FileText className="w-4 h-4" />
                Report
              </button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <Globe className="w-4 h-4" />
                <span>EN | FR</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {activeTab === 'dashboard' ? <Dashboard /> : <EnglishReport />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded-lg">
                <Languages className="w-5 h-5 text-fr-blue" />
              </div>
              <span className="font-black text-slate-900">Bonjour!Français</span>
            </div>
            <p className="text-slate-400 text-sm font-medium">
              © 2026 Bonjour!Français - Data Science Division. 
              Alexis Castillo • Jose Muñoz
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-1 bg-fr-blue rounded-full" />
              <div className="w-8 h-1 bg-slate-200 rounded-full" />
              <div className="w-8 h-1 bg-fr-red rounded-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

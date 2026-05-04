import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VitalityBackground from './components/VitalityBackground';

function App() {
  const [activeTab, setActiveTab] = useState<'status' | 'intelligence'>('status');

  return (
    <main className="min-h-screen w-full relative overflow-hidden flex items-center justify-center">
      {/* Stitch-Elite Interactivity: Breathing Background */}
      <VitalityBackground />

      <div className="center-command max-w-6xl w-full px-6 py-12 space-y-12">
        {/* Elite Top Navigation - Aligned with SkyBound */}
        <header className="flex justify-between items-end border-b border-primary/20 pb-4 px-2 w-full">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-m3-m flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">eco</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Stitch: Bio-Intelligence</p>
              <h1 className="text-3xl font-black text-on-surface tracking-tighter uppercase">DoriNutri Elite</h1>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-widest text-on-surface-variant">
             <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Bio-Link: Synchronized</span>
             </div>
          </div>
        </header>

        {/* Main Vitality Widget - Perfectly Centered */}
        <div className="vitality-widget w-full max-w-4xl space-y-12 relative group overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-9xl text-primary">biotech</span>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center md:items-end space-y-8 md:space-y-0">
              <div className="text-center md:text-left space-y-2">
                 <h2 className="text-7xl font-black text-on-surface leading-none tracking-tighter">
                    Your Health <br />
                    <span className="text-primary italic serif">Horizon.</span>
                 </h2>
                 <p className="text-on-surface-variant font-bold text-xs uppercase tracking-[0.3em]">Operational Metabolism 2026</p>
              </div>

              {/* Quick Action Widget - Aligned with SkyBound Flight Search */}
              <div className="bg-primary text-on-primary p-8 rounded-[2rem] shadow-2xl flex items-center space-x-6 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                 <div className="text-right">
                    <p className="text-2xl font-black leading-none">1,420</p>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-70">Remaining kcal</p>
                 </div>
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined font-black">add</span>
                 </div>
              </div>
           </div>

           {/* Curated Propositions: Aligned with SkyBound */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-outline/10">
              {[
                { icon: 'target', label: 'Precision', desc: 'Metabolic tracking calibrated to 0.1g.' },
                { icon: 'auto_awesome', label: 'Predictive', desc: 'Generative meal intelligence based on bio-data.' },
                { icon: 'universal_currency', label: 'Unified', desc: 'Seamless synchronization across your ecosystem.' }
              ].map((prop, i) => (
                <div key={i} className="space-y-2 px-4 border-l border-primary/20">
                   <div className="flex items-center space-x-2">
                      <span className="material-symbols-outlined text-primary text-sm">{prop.icon}</span>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface">{prop.label}</h3>
                   </div>
                   <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed">{prop.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Status Footer */}
        <footer className="flex justify-between items-center w-full px-4 text-[9px] font-mono text-on-surface-variant opacity-40 uppercase tracking-[0.6em]">
          <p>STATION: VITALITY_OMEGA</p>
          <p>PROTOCOL: STITCH_ELITE_2.1</p>
        </footer>
      </div>
    </main>
  );
}

export default App;

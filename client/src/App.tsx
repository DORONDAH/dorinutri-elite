import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VitalityBackground from './components/VitalityBackground';
import ElitePass from './components/ElitePass';
import MealSegments from './components/MealSegments';

interface VitalityData {
  consumed: { calories: number; protein: number; carbs: number; fat: number };
  targets: { calories: number; protein: number; carbs: number; fat: number };
  segments: any[];
  insights: any[];
}

function App() {
  const [data, setData] = useState<VitalityData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Phase 4: Intelligence Sync - Connect to the Elite Vitality Gateway
    const fetchVitality = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/vitality');
        const json = await response.json();
        setData(json.data);
      } catch (err) {
        console.error('Vitality synchronization failed');
      } finally {
        setIsLoading(false);
      }
    };
    fetchVitality();
  }, []);

  if (isLoading || !data) {
    return (
      <div className="min-h-screen bg-[#050705] flex flex-col items-center justify-center space-y-6">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-primary font-black text-xs uppercase tracking-[0.5em]">Synchronizing Bio-Link</p>
      </div>
    );
  }

  const progress = (data.consumed.calories / data.targets.calories) * 100;

  return (
    <main className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-24">
      <VitalityBackground />

      <div className="center-command max-w-6xl w-full px-6 space-y-12 z-10">
        {/* Elite Top Navigation */}
        <header className="flex justify-between items-end border-b border-primary/20 pb-4 px-2 w-full">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-m3-m flex items-center justify-center shadow-lg shadow-primary/5">
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

        {/* Main Vitality Widget */}
        <div className="vitality-widget w-full max-w-4xl space-y-12 relative group overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-9xl text-primary">biotech</span>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center md:items-end space-y-8 md:space-y-0">
              <div className="text-center md:text-left space-y-2">
                 <h2 className="text-7xl font-black text-on-surface leading-none tracking-tighter">
                    Your Vitality <br />
                    <span className="text-primary italic serif">Horizon.</span>
                 </h2>
                 <p className="text-on-surface-variant font-bold text-xs uppercase tracking-[0.3em]">Operational Metabolism 2026</p>
              </div>

              <div className="bg-primary text-on-primary p-8 rounded-[2rem] shadow-2xl flex items-center space-x-6 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                 <div className="text-right">
                    <p className="text-3xl font-black leading-none font-mono">
                      {Math.max(0, data.targets.calories - data.consumed.calories)}
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-70">Remaining kcal</p>
                 </div>
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined font-black text-2xl">add</span>
                 </div>
              </div>
           </div>

           {/* Curated Propositions */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-outline/10">
              {data.insights.map((insight, i) => (
                <div key={i} className="md:col-span-3 bg-primary/5 p-6 rounded-3xl border border-primary/10 flex items-start space-x-4">
                   <span className="material-symbols-outlined text-primary">auto_awesome</span>
                   <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-widest text-on-surface">{insight.title}</h4>
                      <p className="text-xs text-on-surface-variant font-medium leading-relaxed">{insight.message}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* High-Density Discovery Grid: Aligned with 'Curated Destinations' */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
           <div className="lg:col-span-2 space-y-8">
              <div className="flex justify-between items-end px-4">
                 <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">Daily Segments</h3>
                 <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{data.segments.length} records found</span>
              </div>
              <MealSegments segments={data.segments} />
           </div>

           <div className="lg:col-span-1 space-y-8">
              <div className="flex justify-between items-end px-4">
                 <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">Elite Tier</h3>
              </div>
              <ElitePass />
           </div>
        </div>

        {/* Status Footer */}
        <footer className="flex justify-between items-center w-full px-4 text-[9px] font-mono text-on-surface-variant opacity-40 uppercase tracking-[0.6em] pointer-events-none">
          <p>© 2026 STITCH-ELITE PROTOCOL</p>
          <p>SYNC_STATUS: ENCRYPTED</p>
        </footer>
      </div>
    </main>
  );
}

export default App;

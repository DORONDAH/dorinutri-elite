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
        <p className="text-primary font-black text-[10px] uppercase tracking-[0.5em]">Syncing Intelligence...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full relative overflow-x-hidden flex items-center justify-center py-32 bg-[#050705]">
      <VitalityBackground />

      {/* THE DOSSIER STANDARD - Aligned with sasd.png */}
      <div className="z-10 w-full max-w-4xl px-6 space-y-16 text-center">

        {/* 1. The Manifestation Hero */}
        <header className="space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[10rem] leading-none drop-shadow-[0_0_50px_rgba(0,200,83,0.3)]"
          >
            🥑
          </motion.div>
          <div className="space-y-2">
            <p className="text-[11px] font-black text-primary uppercase tracking-[0.6em]">Vitality Manifested</p>
            <h2 className="text-7xl md:text-8xl font-black text-on-surface serif italic tracking-tighter">Your Health Horizon</h2>
          </div>
        </header>

        {/* 2. The Strategic Profile */}
        <section className="space-y-4 px-12">
          <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">Strategic Profile</h3>
          <p className="text-2xl font-medium text-on-surface-variant leading-relaxed serif italic">
            "Your biological signatures indicate a high-density metabolic optimization.
            You are currently operating at <span className="text-on-surface font-black">{(data.consumed.calories / data.targets.calories * 100).toFixed(0)}%</span> of your professional target."
          </p>
        </section>

        {/* 3. Architectural Traits (Daily Segments) */}
        <section className="space-y-10">
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">Architectural Traits</h3>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Verified by Stitch Intelligence 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.segments.map(segment => (
              <div key={segment.id} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-2xl text-left space-y-4 shadow-xl group hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                <div className="space-y-1">
                  <h4 className="font-black text-sm uppercase tracking-widest text-on-surface">{segment.type}: {segment.food}</h4>
                  <p className="text-lg font-mono font-black text-primary">{segment.kcal} <span className="text-[10px] opacity-40 uppercase">kcal</span></p>
                </div>
                <p className="text-[10px] text-on-surface-variant font-bold leading-relaxed uppercase tracking-wider">
                  Validated metabolic segment synchronization complete.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. The Intelligence Pass */}
        <section className="space-y-8 pt-8">
          <div className="flex flex-col items-center space-y-2">
             <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">The Arcana Pass</h3>
             <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Elite Membership</p>
          </div>
          <ElitePass />
        </section>

        {/* Footer Protocol */}
        <footer className="pt-12">
          <p className="text-[10px] font-mono text-on-surface-variant opacity-30 uppercase tracking-[0.6em]">
            Powered by Google Stitch • Dossier Standard 2026
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;

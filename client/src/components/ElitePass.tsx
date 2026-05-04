import React from 'react';
import { motion } from 'framer-motion';

const ElitePass: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-primary/10 border border-primary/20 p-10 rounded-[3.5rem] space-y-4 shadow-2xl relative group cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
        <span className="material-symbols-outlined text-primary text-7xl">military_tech</span>
      </div>
      <div className="relative z-10 space-y-4">
        <div className="space-y-1">
          <h3 className="text-3xl font-black serif italic tracking-tight text-on-surface">DoriNutri Elite</h3>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Priority Intelligence</p>
        </div>
        <p className="text-xs font-bold leading-relaxed text-on-surface-variant max-w-xs">
          Synchronize your biological data with the Global Consciousness and unlock predictive metabolic modeling.
        </p>
        <div className="pt-4 flex justify-between items-center">
           <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050705] bg-surface-container-high overflow-hidden">
                   <div className="w-full h-full bg-primary/20 animate-pulse" />
                </div>
              ))}
           </div>
           <button className="px-8 py-4 bg-primary text-on-primary rounded-full font-black text-[10px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/20">
              Enter Tier
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ElitePass;

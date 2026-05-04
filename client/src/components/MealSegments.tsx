import React from 'react';
import { motion } from 'framer-motion';

interface Segment {
  id: string;
  type: string;
  food: string;
  kcal: number;
  p: number;
}

interface MealSegmentsProps {
  segments: Segment[];
}

const MealSegments: React.FC<MealSegmentsProps> = ({ segments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {segments.map((segment) => (
        <motion.div
          key={segment.id}
          whileHover={{
            scale: 1.02,
            rotateX: -2,
            rotateY: 2,
            z: 20
          }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
          className="bg-surface-container/40 backdrop-blur-2xl border border-outline/10 rounded-[2.5rem] p-8 space-y-6 shadow-xl relative group cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{segment.type}</span>
              <h4 className="text-2xl font-black text-on-surface serif italic">{segment.food}</h4>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-m3-m flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">restaurant_menu</span>
            </div>
          </div>

          <div className="flex space-x-6 relative z-10 border-t border-outline/10 pt-6">
            <div className="space-y-0.5">
              <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">Metabolic Fuel</p>
              <p className="text-xl font-mono font-black text-on-surface glow-text">{segment.kcal} <span className="text-xs opacity-40">kcal</span></p>
            </div>
            <div className="w-px h-10 bg-outline/10" />
            <div className="space-y-0.5">
              <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">Protein Density</p>
              <p className="text-xl font-mono font-black text-primary glow-text">{segment.p} <span className="text-xs opacity-40">g</span></p>
            </div>
          </div>

          {/* Interactive Inspection Indicator */}
          <div className="pt-2 flex justify-end">
            <span className="text-[8px] font-black text-primary uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">
               Inspect Segment
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MealSegments;

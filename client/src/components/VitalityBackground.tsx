import React, { useEffect, useState } from 'react';

const VitalityBackground: React.FC = () => {
  const [pulse, setPulse] = useState(1);

  useEffect(() => {
    // Phase 2: Heartbeat Logic - Pulse the UI background at biological speed
    let direction = 1;
    const interval = setInterval(() => {
      setPulse(prev => {
        if (prev > 1.2) direction = -1;
        if (prev < 1) direction = 1;
        return prev + (0.002 * direction);
      });
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050705]">
      {/* JS-Driven Breathing Mesh */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 opacity-60"
        style={{
          background: `
            radial-gradient(at 0% 0%, rgba(0, 200, 83, ${0.15 * pulse}) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(185, 246, 202, ${0.1 * pulse}) 0px, transparent 50%)
          `
        }}
      />
      {/* 4K Visual Overlay */}
      <div className="absolute inset-0 bg-vitality-hero bg-cover bg-center mix-blend-overlay opacity-30" />
      <div className="absolute inset-0 bio-mesh z-0" />
    </div>
  );
};

export default VitalityBackground;

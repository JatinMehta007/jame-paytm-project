"use client";
import { useRef } from "react";
import { useAnimationFrame } from "motion/react";

export default function RotatingCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((time) => {
    if (!cardRef.current) return;
    
   
    const rotateY = (time / 20) % 360; 
    const rotateX = Math.sin(time / 1000) * 5; 
    
    cardRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });

  return (
    
    <div 
      ref={cardRef} 
      className="w-[250px] h-[400px] border-2  border-green-300 bg-blue-300 p-6 rounded-2xl shadow-2xl flex flex-col justify-between"
      style={{ 
        transformStyle: "preserve-3d",
        background: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)" 
      }}
    >
      <div className="flex justify-between items-start">
        <div className="w-10 h-8 bg-yellow-400/90 rounded-md shadow-inner" />
        <p className="font-bold text-blue-900">BANK</p>
      </div>

      <div className="space-y-4">
         <p className="text-blue-900/50 text-xs font-mono uppercase tracking-widest">Digital Nomad Card</p>
         <p className="text-xl font-mono text-blue-900">**** **** **** 1234</p>
      </div>

      <div className="flex justify-between items-end">
        <div>
           <p className="text-[10px] text-blue-900/60 uppercase">Card Holder</p>
           <p className="text-sm font-bold text-blue-900">XYZ ABC</p>
        </div>
        <div className="text-right">
           <p className="text-[10px] text-blue-900/60 uppercase">Expiry</p>
           <p className="text-sm font-bold text-blue-900">12/30</p>
        </div>
      </div>
    </div>
  );
}
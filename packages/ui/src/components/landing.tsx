// packages/ui/src/component/LandingPage.tsx
"use client";

import RotatingCard from "./rotatecard";
import { CardStackDemo } from "./slider";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center text-8xl pt-10   font-title text-blue-800 bg-blue-500/90 relative overflow-x-hidden">
      <div className="flex flex-col items-center z-10">
      <h1 className=" font-bold font-title ">SEND AND SPEND</h1>
      <p className="text-gray-600  ">MONEY WORLDWIDE</p>
      <button className="mt-6 text-2xl px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </button>
      {/* <RotatingCard></RotatingCard> */}
      <img src="./image.png" alt="loog"  className="w-[80%] rounded-3xl mt-10"/>
      </div>

      <div className="relative z-10 flex flex-col items-center mt-20">
    <img src="./globe.png" alt="globe"  className=" h-[600px] object-contain w-auto drop-shadow-[0_80px_40px_rgba(0,0,0,0.5)] animate-bounce "/>
       <div className="mt-40">
      <CardStackDemo></CardStackDemo>
       </div>
       
       <div className="h-[500px] w-[1200px] rounded-3xl top-56  -z-10 bg-blue-800 absolute ">
       <span className="text-2xl  text-center block text-blue-100 opacity-30 mt-40">🚀 Coming Soon</span>
       <span className="p-10 text-center block text-blue-100 opacity-50">
       Send & Spend Money Worldwide
       </span>
       <span className="text-3xl  text-center block text-blue-100 opacity-50">Fast, secure international payments with one global card.</span>

       </div>
      </div>
      <div className="">
       <RotatingCard></RotatingCard>
      </div>
      
    </div>
  );
}
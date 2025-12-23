// packages/ui/src/component/LandingPage.tsx
"use client";

import { motion } from "motion/react";
import RotatingCard from "./rotatecard";
import { CardStackDemo } from "./slider";
import { LampContainer } from "./UI/lamp";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center h-screen text-8xl pt-10   font-title text-green-600 bg-gradient-to-b from-blue-600/90 via-blue-700 to-slate-950  overflow-x-hidden relative">
      <div className="absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
       style={{ backgroundImage: "url('/noise.png')" }} />
      <div className="flex flex-col items-center z-10">
      <h1 className=" font-bold font-title rounded-2xl h-24 bg-black/50  ">SEND AND SPEND</h1>
      <p className="text-green-600 rounded-2xl bg-black/60 h-24 ">MONEY WORLDWIDE</p>
      {/* <p className="bg-white/80 rounded-sm w-72 h-10 absolute"></p> */}
      <button className="mt-6 text-2xl px-4 py-2 bg-blue-800 text-white/80 border-8 border-green-600 rounded-full hover:bg-blue-700 ">
        Get Started
      </button>
      {/* <RotatingCard></RotatingCard> */}
      <img src="./image.png" alt="loog"  className="w-[70%] rounded-3xl mt-10"/>
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


      <div className="relative ml-40 z-20  self-start">
    <RotatingCard />
  </div>
  <div className="relative ml-40 z-10 -mt-[500px] w-full flex justify-start">
    <div className="-ml-[100px]">
      <LampContainer className="opacity-80">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeInOut",
          }}
          className="mt-20 ml-[180px] bg-gradient-to-br from-yellow-200 to-amber-500 py-4 bg-clip-text text-left text-5xl font-bold tracking-tight text-transparent md:text-7xl absolute top-1/2 left-0 whitespace-nowrap"
        >
          Build lamps <br /> the right way
        </motion.h1>
      </LampContainer>
</div>

    <div className="flex flex-col mt-20 ">
    <p className="">Your digital card</p>
    <p className="text-gray-300"> <span className="text-white/30">Built for a</span> borderless world</p>
    <div className="  w-32 text-center
  rounded-full border border-white/20 px-4 py-1
  text-xs uppercase tracking-widest text-white/60
  backdrop-blur-md">
  Coming Soon
    </div>
    </div>
  </div>
{/* FOOTER */}
<footer className="relative z-10 mt-40 w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-blue-100">

    {/* Brand */}
    <div>
      <h3 className="text-lg font-semibold text-white">Jame</h3>
      <p className="mt-2 text-blue-200/70">
        Send and spend money worldwide with one global digital card.
      </p>
    </div>

    {/* Links */}
    <div className="flex flex-col gap-2">
      <span className="font-medium text-white">Product</span>
      <a href="#" className="hover:text-white transition">Features</a>
      <a href="#" className="hover:text-white transition">Pricing</a>
      <a href="#" className="hover:text-white transition">Security</a>
    </div>

    {/* Trust */}
    <div className="flex flex-col gap-2">
      <span className="font-medium text-white">Trust & Legal</span>
      <span className="text-blue-200/70">🔒 Bank-grade security</span>
      <span className="text-blue-200/70">🌍 Used in 120+ countries</span>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-white/10 py-4 text-center text-xs text-blue-200/60">
    © {new Date().getFullYear()} Jame. All rights reserved.
  </div>
</footer>
    </div>
  );
}
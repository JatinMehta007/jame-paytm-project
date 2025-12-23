"use client"
import { LampContainer } from "@repo/ui/lamp";
import { motion } from "motion/react";
import RotatingCard from "./RotateCard";

export function LampSection(){
    return (
        <div className=""> 
        <div className="relative ml-40 z-20  self-start">
  <RotatingCard></RotatingCard>
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
  
              </div>
      
    </div>
    )
}
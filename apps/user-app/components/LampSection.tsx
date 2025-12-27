"use client"
import { LampContainer } from "@repo/ui/lamp";
import { motion } from "motion/react";
import RotatingCard from "./RotateCard";

export function LampSection(){
    return (
        <div className="overflow-x-hidden"> 
        <div className="relative ml-0 md:ml-20 lg:ml-52 z-20 self-start flex justify-center md:justify-start px-4 md:px-0  mt-12">
  <RotatingCard></RotatingCard>
   </div>
    <div className="relative ml-0 md:ml-10 lg:ml-20 z-10 -mt-[200px] md:-mt-[400px] lg:-mt-[500px] w-full flex justify-center md:justify-start">
      <div className="-ml-0 md:-ml-[50px] lg:-ml-[100px]">
        <LampContainer className="opacity-80">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.4,
                duration: 1,
                ease: "easeInOut",
            }}
            className="mt-10 md:mt-20 ml-0 md:ml-[50px] lg:ml-[180px] bg-gradient-to-br from-yellow-200 to-amber-500 py-2 md:py-4 bg-clip-text text-left text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight text-transparent absolute top-1/2 left-0 whitespace-nowrap"
            >
            Build lamps <br /> the right way
          </motion.h1>
        </LampContainer>
  </div>
  
              </div>
      
    </div>
    )
}
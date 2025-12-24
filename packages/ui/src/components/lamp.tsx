"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils"; 

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative left-0 flex h-[800px]  overflow-hidden  w-[700px] rounded-md z-0 rotate-180 ",
        className
      )}
    >
      <div className="relative flex  flex-1 scale-y-125 items-center justify-center isolate z-0  ">
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" inset-auto z-30 h-20 w-36 blur-3xl -translate-y-[5.5rem]  bg-neutral-50"
        ></motion.div>

        <motion.div
          initial={{ width: "20rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-20 blur-2xl bg-neutral-50 w-2 -translate-y-[1.5rem] "
        ></motion.div>
        <motion.div
          initial={{ width: "24rem" }}
          whileInView={{ width: "24rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-20 blur-3xl bg-neutral-50 w-2 translate-y-[2rem]  "
        ></motion.div>
          {/* <p className="text-lg text-black rotate-180 absolute ">Coming Soon</p> */}
        <motion.div
          initial={{ width: "28rem" }}
          whileInView={{ width: "28rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-20 blur-2xl bg-neutral-50 w-2 translate-y-[6rem]  "
        ></motion.div>
        <div className="absolute inset-auto  z-40 blur-2xl h-10 w-48 -translate-y-[9rem]  bg-neutral-50 "></div>

        <div className="absolute inset-auto  z-40 blur-2xl h-10 w-40 -translate-y-[10rem]  bg-neutral-50 "></div>

        <div className="absolute inset-auto  z-40 blur-2xl h-10 w-28 -translate-y-[11rem]  bg-neutral-50 "></div>

        <div className="absolute inset-auto  z-40 blur-2xl h-10 w-16 -translate-y-[12rem]  bg-neutral-50 "></div>
      </div>

    </div>
  );
};

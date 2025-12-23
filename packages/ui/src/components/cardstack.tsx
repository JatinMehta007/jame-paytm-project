"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRef } from "react";
import { useAnimationFrame } from "motion/react";
let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  credit: string,
  bank: string, 
  name1: string;
  designation1: string;
  content: React.ReactNode;
  color: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  const cardRef = useRef<HTMLDivElement>(null);

  // 2. useAnimationFrame hook setup karein
  useAnimationFrame((time) => {
    if (!cardRef.current) return;
    const rotateY = (time / 20) % 360; 
    const rotateX = Math.sin(time / 1000) * 10; 
    cardRef.current.style.transform = `perspective(1000px) rotateY(${rotateX}deg) rotateY(${rotateX}deg)`;
  });

  return (

    <div className="relative bottom-[700px] text-base h-60 w-60 md:h-60 md:w-96 " ref={cardRef} style={{
      // transformOrigin: "top center",
      transformStyle : "preserve-3d"
    }} >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className={`absolute h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between     ${card.color}`}
            style={{
              transformOrigin: "top center",
              transformStyle : "preserve-3d"
            }} 
         
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="flex justify-between">
              <p className=" font-medium text-white ">
                {card.credit}
              </p>
              <p className="text-white font-normal  flex justify-between">
                {card.bank}
              </p>
              </div>

              <p className="w-8 h-7 my-5 rounded-sm bg-yellow-400/80 "></p>

            <div className="font-normal text-white ">
              {card.content}
            </div>

            <div className="flex justify-between">
              <div>
              <p className="text-white font-medium">
                {card.name}
              </p>
              <p className="text-white font-normal  flex  justify-between">
                {card.designation}
              </p>
              </div>

              <div>

              <p className="text-white font-medium  ">
                {card.name1}
              </p>
              <p className="text-white font-normal flex justify-between">
                {card.designation1}
              </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

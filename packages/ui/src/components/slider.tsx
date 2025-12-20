"use client";
import { CardStack } from "./UI/cardstack";
import { cn } from "../lib/utils"; 
export function CardStackDemo() {
  return (
    <div className=" flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    color : "bg-gradient-to-br from-red-600 via-neutral-950 to-red-900",
    credit:  "Credit card",
    bank : "XYZ Bank",
    name: "Card Holder",
    designation: "XYZ ABC",
    name1:"EXPIRY",
    designation1:"11/36",
    content: (
      <Highlight>
       XXXX XXXX XXXX XXXX
      </Highlight>
      
    ),
  },
  {
    id: 1,
    color: "bg-gradient-to-br from-blue-800 via-neutral-950 to-blue-800",
    credit:  "Credit card",
    bank : "XYZ Bank",
    name: "Card Holder",
    designation: "XYZ ABC",
    name1:"EXPIRY",
    designation1:"11/36",
    content: (
        <Highlight>
        XXXX XXXX XXXX XXXX
       </Highlight>
    ),
  },
  {
    id: 2,
    color : "bg-gradient-to-br from-purple-600 via-neutral-950 to-purple-800",
    credit:  "Credit card",
    bank : "XYZ Bank",
    name: "Card Holder",
    designation: "XYZ ABC",
    name1:"EXPIRY",
    designation1:"11/36",
    content: (
        <Highlight>
        XXXX XXXX XXXX XXXX
       </Highlight>
    ),
  },
];

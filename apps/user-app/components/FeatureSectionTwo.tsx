import { CardStackDemo } from "@repo/ui/slider";
import { CardStack } from "@repo/ui/cardstack";
import { Highlight } from "@repo/ui/highlight";


export default function GlobeSection() {
  return (
    <div className="     ">
         <div className="relative z-10 flex flex-col items-center mt-20">
    <img src="./globe.png" alt="globe"  className=" h-[600px] object-contain w-auto drop-shadow-[0_80px_40px_rgba(0,0,0,0.5)] animate-bounce "/>
       <div className="mt-40">
      
      {/* <Lamp */}
       </div>
       <CardStackDemo>
          <CardStack items={CARDS} />
        </CardStackDemo>
       <div className="h-[500px] w-[1200px] rounded-3xl top-56  -z-10 bg-blue-800 absolute ">
       <span className="text-2xl  text-center block text-blue-100 opacity-30 mt-40">🚀 Coming Soon</span>
       <span className="p-10 text-center block text-blue-100 opacity-50">
       Send & Spend Money Worldwide
       </span>
       <span className="text-3xl  text-center block text-blue-100 opacity-50">Fast, secure international payments with one global card.</span>

       </div>
      </div>
    </div>
  );
}


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

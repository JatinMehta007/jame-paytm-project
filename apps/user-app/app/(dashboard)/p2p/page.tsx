import { getServerSession } from "next-auth";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { P2PTransactions } from "../../../components/P2PTransactions";


async function getP2PTransactions(){
   const session = await getServerSession(authOptions);
   const txns = await prisma.p2pTransfer.findMany({
      where : {
         fromUserId :  Number(session?.user?.id)
      }
   });
   return txns.map(t=>({
      time    : t.timestamp,
      amount  : t.amount,
   }))
}

export default async function (){

   const transactions = await getP2PTransactions();

     return <div className="flex flex-col md:flex-row md:pl-0 lg:pl-28 px-4 md:px-0">
      <div className="text-2xl md:text-4xl mb-4 md:mb-8 font-bold">
        <SendCard/>   
        
      </div>
      <div className="pt-4 md:pt-[202px] md:pl-10 w-full md:w-auto">
      <P2PTransactions transactions={transactions} />
      
      </div>
     </div>
}
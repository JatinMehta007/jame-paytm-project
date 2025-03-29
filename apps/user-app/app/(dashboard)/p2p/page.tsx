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
      time:t.timestamp,
      amount: t.amount,
   }))
}

export default async function (){

   const transactions = await getP2PTransactions();

     return <div className=" flex pl-28">
      <div className="text-4xl text-[#6a51a6]  mb-8 font-bold">
        <SendCard/>   
        
      </div>
      <div className="pt-[202px]  pl-10 ">
      <P2PTransactions transactions={transactions} />
      
      </div>
     </div>
}
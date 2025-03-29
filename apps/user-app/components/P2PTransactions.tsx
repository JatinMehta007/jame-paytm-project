import { Card } from "@repo/ui/card"

export const P2PTransactions=({
    transactions
}:{
    transactions:{
      time   : Date,
      amount : number,
    }[]
})=>{
    if(!transactions.length){
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
              No Recent Transactions
            </div>
        </Card>
    }

    return <Card title="Recent Transactions">
            <div className="w-96 h-[230px] overflow-auto space-y-4  pr-3  ">
            {transactions.map(t => <div className="flex justify-between  border-b pb-2 ">
                <div>
                    <div className="text-base pt-1">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                    </div>
                    <div className="text-right items-center flex">
                    + Rs {t.amount / 100}
                    </div>
                     </div> )}
            </div>

    </Card>
}
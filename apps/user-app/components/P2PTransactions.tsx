import { Card } from "@repo/ui/card"

export const P2PTransactions=({
    transactions
}:{
    transactions:{
      time:Date,
      amount : number,
      status : string,
      provider : string
    }[]
})=>{
    if(!transactions.length){
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
              No Recent Transactions
            </div>
        </Card>
    }
}
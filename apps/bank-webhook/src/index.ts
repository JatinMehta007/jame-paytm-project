import { OnRampTransaction } from './../../../node_modules/.prisma/client/index.d';
import { db } from '@repo/db/client';

import express from "express";

const app = express();

app.post("/hdfcWebhook",async (req ,res)=>{
     const paymentInformation={
        token : req.body.token,
        userId : req.body.user_identifier,
        amount: req.body.amount,
     };
     db.balance.update({
        where :{
            userId :paymentInformation.userId
        }, 
        data:{ 
            amount:{
                increment : paymentInformation.amount 
            }
        }

     });
    
    await db.OnRampTransaction.update({
        where:{
            token: paymentInformation.token,
        },
        data:{
            status :"Success"
        }
     })
     res.status(411).json({
        message : "captured"
     })

})
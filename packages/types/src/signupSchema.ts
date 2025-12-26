import z from "zod";

export const signupSchema = z.object({
    name : z
     .string()
     .min(2,{message : "Name is required"})
     .max(100, {message : "Name must be in 100 chracters"}),

     email : z
       .string()
       .min(1,{message : "Email is required"})
       .email({message : "Invalid Email address"}),

    phoneNumber : z
        .string()
        .nonempty({message : "Phone number is required"})
        .trim()
        .regex(/^\d{10}$/, "Phone number must be in a 10 digits"),
    
    password : z
        .string()    
        .min(4,{message : "Password must be at least 4 characters long"})
       
})
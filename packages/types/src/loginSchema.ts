import { z } from "zod";

export const loginSchema = z.object({
    phoneNumber : z
      .string()
      .nonempty("Phone number is required")
      .trim()
      .regex(/^\d{10}$/,"Phone number must be exactly 10 digits"),

    password : z
       .string()
       .nonempty("Password is required")
       .min(4,"Password must be in 4 character long"),
})
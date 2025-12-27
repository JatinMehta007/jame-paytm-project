"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {signupSchema} from "@repo/types/signupSchema";
import axios from "axios";
import { cn } from "../../../../packages/ui/lib/utils";
import { Label } from "@repo/ui/label";
import { Input }  from "@repo/ui/input";
import {Spinner} from "@repo/ui/spinner";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function Signup(){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword]  = useState(false);
    // const [error, setError] = useState("");
    const [validationErrors, setValidationErrors] = useState<any>(null); // For displaying validation errors

    const handleSignup = async ()=>{
        // setError("");
        setValidationErrors(null)

        const result = signupSchema.safeParse({
            name,
            email,
            phoneNumber,
            password
        })

        if(!result.success){
            setValidationErrors(result.error.format());
            console.log(result.error.format());
            return;
        }

        try{
          setIsLoading(true);
            const response = await axios.post("/api/user",{
                name,
                email,
                phoneNumber,
                password
            });
            toast.success("Account created successfully");
            router.push("/login");
        } catch(error : any){
            if(error.response && error.response.status === 400){
                toast.error("Phone number is already exist");
            } else{
                console.log("Error while creating a account", error);
                toast.error("Something went wrong. Please try again later");
            }
        } finally{
          setIsLoading(false);
        }
    };
    
    if(isLoading){
       // Render the spinner as a full-page overlay
       return (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      );
    }

    return (
        <div className="shadow-input relative top-6 mx-auto w-full max-w-md rounded-none md:rounded-2xl p-4 md:p-8 bg-black px-4 md:px-8 border-8 border-green-600 ring-8 ring-blue-600/80 ring-inset">
      <h2 className="text-lg md:text-xl text-center font-bold text-neutral-200">
        Welcome to <span className="text-green-600 font-title ">Jame</span>
      </h2>
      <p className="mt-2 max-w-sm text-sm md:text-base text-center text-neutral-300">
      Already have an account? <a href="/login" className="text-green-600 font-black">Login</a>
      </p>
 
      <div className="my-8">
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input className="bg-zinc-800 text-white shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-neutral-600"  id="firstname" placeholder="Jatin" type="text" value={name} onChange={(e)=>{
                setName(e.target.value)
            }} />{validationErrors?.name && <p className="text-red-600">{validationErrors.name._errors[0]}</p>}
          </LabelInputContainer>
        </div>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input className="bg-zinc-800 text-white shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-neutral-600"  id="email" placeholder="programmer@gmail.com" type="email" value={email} onChange={(e)=>{
            setEmail(e.target.value)    
          }} />{validationErrors?.email && <p className="text-red-600">{validationErrors.email._errors[0]}</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
          className="bg-zinc-800 text-white shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-neutral-600" 
            id="phoneNumber"
            placeholder="88245XXXXX"
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
                setPhoneNumber(e.target.value);
            }}
          />
          {validationErrors?.phoneNumber && <p className="text-red-600">{validationErrors.phoneNumber._errors[0]}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 relative">
          <Label htmlFor="password" >Password</Label>
          <Input className="bg-zinc-800 text-white shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-neutral-600" id="password" placeholder="••••••••" 
              type={showPassword ? "text" : "password"} value={password} onChange={(e)=>{
            setPassword(e.target.value) 
          }}/>
          
          <span
           onClick={() => setShowPassword((prev) => !prev)}
             className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>

          {validationErrors?.password && <p className="text-red-600">{validationErrors.password._errors[0]}</p>}
        </LabelInputContainer>
 
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
          type="submit"
          onClick={handleSignup}
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
 
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </div>
    </div>
      );
    }

     
const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
  };
   
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex w-full flex-col space-y-2", className)}>
        {children}
      </div>
    );
  };
 
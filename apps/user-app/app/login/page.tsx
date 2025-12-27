"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginSchema } from "@repo/types/loginSchema";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { Spinner } from "@repo/ui/spinner";
import { cn } from "../../../../packages/ui/lib/utils";
import { Label } from "@repo/ui/label";
import { Input }  from "@repo/ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function Login(){
    const router = useRouter();
    
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password , setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]  = useState("");

    const handleLogin = async () => {
      setError("");
  
      const validationResult = loginSchema.safeParse({ phoneNumber, password });

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      if (firstError) {
        setError(firstError.message);
      } else {
        setError("An unknown validation error occurred.");
      }
      return;
    }
  
      try {
        setIsLoading(true);
  
        const res = await signIn("credentials", {
          phone: phoneNumber,
          password,
          redirect: false,
        });
  
        if (res?.error) {
          setError("Invalid phone number or password");
          return;
        }
  
        toast.success("Logged in successfully");
        router.push("/dashboard");
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
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
      <div className="flex justify-center w-screen min-h-screen text-white items-center px-4 py-8 ">
        <div className="w-full max-w-md bg-black rounded-lg shadow-lg border-8 border-green-600 ring-8 ring-blue-600/80 ring-inset">
          <div className="text-center text-lg md:text-xl font-black my-5 px-4">
            Welcome to <span className="text-green-600 font-title">Jame</span> 
          </div>
          <div className="text-center px-4">
Create an Account? <a href="/signup" className="text-green-600 font-black">Signup</a>
          </div>
          <div className="p-6 md:p-10 relative">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">PhoneNumber</Label>
            <Input 
          className="bg-zinc-800 text-white shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-neutral-600" 
            id="phoneNumber" type="text" placeholder="88245XXXXX" value={phoneNumber} onChange={(e)=>{
              setPhoneNumber(e.target.value)
            }}></Input>
          </LabelInputContainer>


          <LabelInputContainer className="mb-4">
  <Label htmlFor="password">Password</Label>

  <div className="relative">
    <Input
      id="password"
      type={showPassword ? "text" : "password"}
      placeholder="••••••••"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="bg-zinc-800 text-white pr-10 shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-neutral-600"
    />

    <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
</LabelInputContainer>
          {error && (
  <p className="text-red-500 text-sm mb-3 text-center">
    {error}
  </p>
)}
          <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
          type="submit"
          onClick={handleLogin}
        >
          Sign in &rarr;
          <BottomGradient />
        </button>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </div>

          </div>

      </div>
    )
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

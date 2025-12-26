
import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: any,
    onSignout: any
}
// this is the appbar to user create user or login 
export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between bg-white/10 items-center px-4 ">
        <div className="text-lg flex  justify-center  items-center">
            <img src="/images/logos.svg" alt="Logo" className="h-[40px] "/>
            <p className="items-center flex pl-1 text-2xl  font-title text-green-600">Jame</p>
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}
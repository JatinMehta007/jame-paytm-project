
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
    return <div className="flex justify-between bg-white/90 items-center px-2 md:px-4 py-2">
        <div className="text-base md:text-lg flex justify-center items-center">
            <img src="/images/logos.svg" alt="Logo" className="h-[30px] md:h-[40px]"/>
            <p className="items-center flex pl-1 text-xl md:text-2xl font-title text-green-600">Jame</p>
        </div>
        <div className="flex flex-col justify-center">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}
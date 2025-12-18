
import { Button } from "./button";
// import logo  from "../../images/logo.png";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}
// this is the appbar to user create user or login 
export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b px-4 bg-white">
        <div className="text-lg flex  justify-center  items-center">
            <img src="/images/logo.png" alt="Logo" className="h-[40px] "/>
            <p className="justify-center items-center flex pl-1">Jame</p>
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}
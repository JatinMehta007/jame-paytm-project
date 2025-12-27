"use client"
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

export function AppbarClient() {
  const session = useSession();
  const router = useRouter();

  return (
   <div>
     <Appbar
      user={session.data?.user}
      onSignin={() => router.push("/signup")}
      onSignout={async () => {
        await signOut({ redirect: false });
        router.push("/");
      }}
    />
   </div>
  );
}

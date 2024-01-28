"use client";

import { createContext, useEffect, useState } from "react";
import { type User, signInWithPopup, signOut, GoogleAuthProvider, getAuth } from "firebase/auth";
import { auth, provider } from "@/lib/firebaseConfig";
import { redirect } from "next/navigation";

export const UserContext = createContext<
    | {
          user: User | undefined;
          userToken: string | undefined;
          handleSignIn: () => Promise<void>;
          handleLogout: () => Promise<void>;
      }
    | undefined
>(undefined);

export default function ChatProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | undefined>();
    const [userToken, setUserToken] = useState<string | undefined>();
    const [hasJustLoggedIn, setHasJustLoggedIn] = useState<boolean>(false);

    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            if (result) {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (credential) {
                    setUser(result.user);
                    setUserToken(credential.accessToken);
                    setHasJustLoggedIn(true);
                } else {
                    alert("No credentials returned from the sign-in attempt.");
                }
            }
        } catch {}
    };

    const handleLogout = async () => {
        const userAuth = getAuth();
        await signOut(userAuth);
    };

    useEffect(() => {
        if (hasJustLoggedIn) {
            console.log("true");
            redirect("/dashboard/");
        }
    }, [setHasJustLoggedIn, setHasJustLoggedIn]);

    // useEffect(() => {
    //     console.log("User effect triggered: ", user);
    //     if (user) {
    //         redirect("/dashboard/");
    //     } else {
    //         redirect("/");
    //     }
    // }, [user]);

    return (
        <UserContext.Provider value={{ user, userToken, handleSignIn, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}

"use client";

import { createContext, useEffect, useState } from "react";
import { type User, signInWithPopup, signOut, GoogleAuthProvider, getAuth } from "firebase/auth";
import { auth, getUserData, provider } from "@/lib/firebaseConfig";
import { redirect } from "next/navigation";

import type GroupChat from "@/lib/GroupChat";
import { useRouter } from "next/router";

export const UserContext = createContext<
    | {
          user: User | undefined;
          userToken: string | undefined;
          handleSignIn: () => Promise<void>;
          handleLogout: () => Promise<void>;
          userData: GroupChat<WhatsappMessage>[];
      }
    | undefined
>(undefined);

export default function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | undefined>();
    const [userToken, setUserToken] = useState<string | undefined>();
    const [userData, setUserData] = useState<GroupChat<WhatsappMessage>[]>([]);

    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            if (result) {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (credential) {
                    if (!result.user) {
                        alert("no user");
                        return;
                    }

                    localStorage.setItem("user", JSON.stringify(result.user));
                    localStorage.setItem("userToken", JSON.stringify(credential.accessToken));

                    setUser(result.user);
                    setUserToken(credential.accessToken);

                    const userData = await getUserData(result.user.uid);

                    setUserData(userData);
                } else {
                    alert("No credentials returned from the sign-in attempt.");
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        const userAuth = getAuth();

        localStorage.removeItem("user");

        await signOut(userAuth);

        window.location.reload();
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        const userToken = localStorage.getItem("userToken");
        if (user) {
            const userJson = JSON.parse(user);
            setUser(userJson);

            setUserToken;

            getUserData(userJson.uid).then((userData) => {
                setUserData(userData);
            });
        }
    }, []);

    // useEffect(() => {
    //     console.log("User effect triggered: ", user);
    //     if (user) {
    //         redirect("/dashboard/");
    //     } else {
    //         redirect("/");
    //     }
    // }, [user]);

    return (
        <UserContext.Provider value={{ user, userToken, handleSignIn, handleLogout, userData }}>
            {children}
        </UserContext.Provider>
    );
}

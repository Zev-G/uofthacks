"use client";

import { useCallback, useEffect, useState } from "react";
import { redirect } from "next/navigation";

import GroupChat from "@/lib/GroupChat";
import "./main.css";
import "./retro.css";
import useChat from "./hooks/useChat";
import RetroButton from "@/components/RetroButton";
import GuideModal from "@/components/GuideModal";
import useUser from "./hooks/useUser";
import { addChatData } from "@/lib/firebaseConfig";
import Link from "next/link";

export default function Home() {
    const [showGuide, setShowGuide] = useState<boolean>(false);
    const [shallRedirect, setShallRedirect] = useState<boolean>(false);

    const { setGroupChat } = useChat();
    const { handleSignIn, user } = useUser();

    const handleFileDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            const file = event.dataTransfer.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const content = e.target?.result as ArrayBuffer;
                    const decoder = new TextDecoder("utf-8", { fatal: false, ignoreBOM: true });
                    const gc = GroupChat.fromExport<WhatsappGroup>(decoder.decode(content));

                    if (user !== undefined) {
                        addChatData(user.uid, gc.name, content).then(() => {
                            console.log("added ");
                            setGroupChat(gc);
                            setShallRedirect(true);
                        });
                    } else {
                        setGroupChat(gc);
                        setShallRedirect(true);
                    }
                };
                reader.readAsArrayBuffer(file);
            }
        },
        [setGroupChat, setShallRedirect, user]
    );

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (shallRedirect) {
            redirect("/wrapped/");
        }
    }, [shallRedirect]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="flex flex-col items-center">
                <div className="flex w-full justify-end cursor-pointer">
                    <div
                        className="flex justify-center items-center w-8 h-8 rounded bg-black bg-opacity-40 text-gray-200 font-mono"
                        onClick={() => setShowGuide(true)}
                    >
                        i
                    </div>
                </div>
                <h1 className="title_text retro-text">Once Upon a Chat</h1>
                <div
                    className="w-2/3 h-36 border-2 border-black border-dashed opacity-30 rounded justify-center flex items-center text-gray-800 bg-gray-400"
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                >
                    Drop your file here
                </div>
            </div>
            <span className="mono pt-2 pb-4 opacity-50">or</span>
            {user ? (
                <Link href="/dashboard" className="big-button">
                    Dashboard
                </Link>
            ) : (
                <RetroButton onClick={handleSignIn}>Login / Signup</RetroButton>
            )}
            {showGuide && <GuideModal setShowGuide={setShowGuide} />}
        </main>
    );
}

// function getRandomColor(seed: string) {
//     const random = seededRandom(seed);

//     // Generate random color components
//     const h = Math.floor(random() * 256);

//     // Convert to a CSS color string
//     return `hsl(${h}, 67%, 43%)`;
// }

// function stringToSeed(str: string) {
//     // Simple hash function to convert a string into a seed.
//     let hash = 0;
//     for (let i = 0; i < str.length; i++) {
//         const char = str.charCodeAt(i);
//         hash = (hash << 5) - hash + char;
//         hash = hash & hash; // Convert to 32bit integer
//     }
//     return hash;
// }

// function seededRandom(seed: string | null) {
//     const a = 1664525;
//     const c = 1013904223;
//     const m = 2 ** 32;

//     // Creating a closure to hold the state of the seed
//     let state = seed ? stringToSeed(seed) : Math.floor(Math.random() * m);
//     return function () {
//         state = (a * state + c) % m;
//         return state / m;
//     };
// }

"use client";

import "@/app/retro.css";
import "@/app/main.css";
import GroupChatSegment from "@/components/GroupChatSegment";
import GroupChat from "@/lib/GroupChat";
import GroupChatCard from "@/components/GroupChatCard";
import useChat from "../hooks/useChat";
import useUser from "../hooks/useUser";
import { useEffect } from "react";
import Link from "next/link";

export default function Dashboard() {
    const { userData: groupChats, user } = useUser();

    if (!groupChats) {
        throw new Error("This error will never be thrown, hopefully.");
    }

    return (
        <main>
            <div className="flex flex-col p-10 w-screen h-screen space-y-10">
                <div>
                    <h1 className="retro-text text-5xl font-mono">
                        Welcome {user?.providerData[0].displayName}!
                    </h1>
                </div>
                <div className="flex justify-evenly space-x-10">
                    <div className="flex w-1/2 flex-col items-center space-y-5 p-5">
                        <div>
                            <h1 className="text-2xl font-mono">Groupchats</h1>
                        </div>
                        <div className="items-center space-y-5 w-full flex-grow">
                            {groupChats.map(
                                (groupChat: GroupChat<WhatsappGroup>, index: number) => {
                                    return (
                                        <div key={index} className="w-full">
                                            <GroupChatCard groupChat={groupChat} />
                                        </div>
                                    );
                                }
                            )}
                        </div>

                        <Link href="/" className="big-button">
                            Back
                        </Link>
                    </div>
                    <div className="flex w-1/2 flex-col items-center space-y-5 p-5">
                        <div>
                            <h1 className="text-2xl font-mono">Saved Moments</h1>
                        </div>
                        <div className="items-center max-h-[70vh] pt-1 pr-5 pl-2 nice-vertical-scroll flex flex-col space-y-10">
                            {groupChats.map(
                                (groupChat: GroupChat<WhatsappGroup>, index: number) => {
                                    return (
                                        <div key={index} className="w-full">
                                            <GroupChatSegment
                                                groupChat={groupChat}
                                                start={0}
                                                end={10}
                                                showSave={false}
                                                title="Those first moments"
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

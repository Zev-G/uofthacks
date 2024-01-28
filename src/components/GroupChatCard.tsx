"use client";

import GroupChat from "@/lib/GroupChat";
import "@/app/retro.css";
import { PiArrowFatRightFill } from "react-icons/pi";
import useChat from "@/app/hooks/useChat";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function GroupChatCard({ groupChat }: { groupChat: GroupChat<any> }) {

    const [clicked, setClicked] = useState(false);

    const { setGroupChat } = useChat();

    useEffect(() => {
        if (clicked) {
            setClicked(false)
            redirect("/wrapped");
        }
    })

    return (
        <div
            className="retro-shadow-orange w-full h-10 flex items-center justify-between text-black p-4 bg-orange-100 rounded cursor-pointer"
            onClick={() => {
                setGroupChat(groupChat);
                setClicked(true);
            }}
        >
            <span>{groupChat.name}</span>
            <PiArrowFatRightFill />
        </div>
    );
}

"use client";

import GroupChat from "@/lib/GroupChat";
import { createContext, useState } from "react";

export const ChatContext = createContext<
    | {
          groupChat?: GroupChat<WhatsappGroup>;
          setGroupChat: (groupChat: GroupChat<WhatsappGroup>) => void;
      }
    | undefined
>(undefined);

export default function ChatProvider({ children }: { children: React.ReactNode }) {
    const [groupChat, setGroupChat] = useState<GroupChat<WhatsappGroup> | undefined>();

    return (
        <ChatContext.Provider value={{ groupChat, setGroupChat }}>{children}</ChatContext.Provider>
    );
}

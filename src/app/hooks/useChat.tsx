import { useContext } from "react";
import { ChatContext } from "@/providers/ChatProvider";

export default function useChat() {
    const context = useContext(ChatContext);

    if (!context) {
        throw new Error("useChat not used under ChatProvider");
    }

    return context
}

import { useContext } from "react";

export default function useGroupChat() {
    return useContext(GroupChatContext);
}
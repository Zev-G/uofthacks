import { useContext } from "react";
import { UserContext } from "@/providers/UserProvider";

export default function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser not used under UserProvider");
    }

    return context;
}

import GroupChat from "@/lib/GroupChat";
import MessageView from "./MessageView";
import { FaShareFromSquare } from "react-icons/fa6";
import { auth } from "@/lib/firebaseConfig";
import RetroButtonSmall from "./RetroButtonSmall";

export default function GroupChatSegment({
    groupChat,
    title,
    start,
    end,
    showSave
}: {
    groupChat: GroupChat<WhatsappGroup>;
    title: string;
    start: number;
    end: number;
    showSave: boolean
}) {
    const messages = groupChat.messages.slice(start, end);

    let chats = [];
    for (let i = 0; i < messages.length; i++) {
        let message = messages[i];
        if (message.flags.includes("image omitted")) {
            start = i;
            while (i < messages.length && message.flags.includes("image omitted")) {
                i++;
                message = messages[i];
            }
            i--;
            chats.push(
                <div
                    key={i}
                    className={`text-slate-600 ${
                        i + 1 < messages.length ? "-m-2" : "-mt-2 pb-2"
                    } flex justify-center`}
                >
                    {i - start + 1} image message{i - start + 1 > 1 ? "s" : ""}
                </div>
            );
        } else {
            chats.push(<MessageView key={i} message={message} color={getRandomColor(message.author.name)} />);
        }
    }

    return (
        <div className="flex flex-col gap-y-3 bg-slate-800 rounded bordershadow retro-shadow-message">
            <div className="border-b border-b-slate-600 text-slate-400 p-1 pb-2 m-3 mb-0 flex justify-between items-center">
                <div>{title}</div>
                <div className="flex items-center gap-x-2 text-sm">
                    {showSave && <RetroButtonSmall text="Save"/>}
                    <FaShareFromSquare />
                </div>
            </div>
            <div className="nice-vertical-scroll h-[40vh]">{chats}</div>
        </div>
    );
}

export function getRandomColor(seed: string) {
    const random = seededRandom(seed);

    // Generate random color components
    const h = Math.floor(random() * 256);

    // Convert to a CSS color string
    return `hsl(${h}, 67%, 43%)`;
}

function stringToSeed(str: string) {
    // Simple hash function to convert a string into a seed.
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function seededRandom(seed: string | null) {
    const a = 1664525;
    const c = 1013904223;
    const m = 2 ** 32;

    // Creating a closure to hold the state of the seed
    let state = seed ? stringToSeed(seed) : Math.floor(Math.random() * m);
    return function () {
        state = (a * state + c) % m;
        return state / m;
    };
}

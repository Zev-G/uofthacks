import { type RefObject, useEffect, useRef } from "react";

import GroupChatSegment from "./GroupChatSegment";
import type GroupChat from "@/lib/GroupChat";

type SectionProps = {
    groupChat: GroupChat<WhatsappGroup>;
    appendToSectionRefs: (ref: RefObject<HTMLDivElement>) => void;
};

export default function Section({ groupChat, appendToSectionRefs }: SectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        appendToSectionRefs(ref);
    }, [appendToSectionRefs, ref]);

    return (
        <div
            ref={ref}
            className="w-screen h-[100vh] flex flex-col items-center gap-y-10"
            id="section_1"
        >
            <div>
                <h1 className="text-6xl pt-20 font-serif retro-text">See where it all began</h1>
                <div className="w-full border-4 opacity-70 border-white squigglevision"></div>
            </div>
            <div className="text-sm w-1/2 max-h-10">
                <GroupChatSegment
                    groupChat={groupChat}
                    title={groupChat.name + "'s first conversation"}
                    start={0}
                    end={groupChat.findFirstConversationEnd()}
                />
            </div>
        </div>
    );
}

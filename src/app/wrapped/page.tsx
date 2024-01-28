"use client";

import "@/app/main.css";
import "@/app/retro.css";
import GroupChatSegment from "@/components/GroupChatSegment";
import useChat from "../hooks/useChat";
import SquiggleVisionSvg from "@/components/SquiggleVisionSvg";

import ReactWordCloud, { Word } from "react-wordcloud";
import { RefObject, useRef, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { TbRosetteNumber1 } from "react-icons/tb";
import { TbRosetteNumber2 } from "react-icons/tb";
import { TbRosetteNumber3 } from "react-icons/tb";
import { TbRosetteNumber4 } from "react-icons/tb";
import { TbRosetteNumber5 } from "react-icons/tb";
import { FaShareFromSquare } from "react-icons/fa6";
import { redirect } from "next/navigation";
import RetroButton from "@/components/RetroButton";
import html2canvas from "html2canvas";

export default function Wrapped() {
    const { groupChat } = useChat();

    if (!groupChat) {
        redirect("/");
    }

    const topFive = groupChat!.topNAuthors(5);

    const words = groupChat!.topNWords(100);

    const [arrowIsDownBad, setArrowIsDownBad] = useState(false);
    const buttonContent = arrowIsDownBad ? <FaAngleDoubleDown /> : "Start!";

    const sections = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    const [curSection, setCurSection] = useState(0);

    const scrollToNextPart = () => {
        setCurSection((prevSection) => {
            const nextSection = prevSection + 1;
            if (nextSection >= sections.length) {
                return prevSection; // Prevent incrementing beyond available sections
            }
            const section = sections[nextSection].current;
            if (!section || !sections[0]) {
                return prevSection; // No further action if the section is not found
            }
            setArrowIsDownBad(true);
            let sectionPixel = section.offsetTop;
            sections[0]!.current!.scrollTo({
                top: sectionPixel,
                behavior: "smooth",
            });
            return nextSection; // Update curSection to the next section
        });
    };

    const share = async () => {
        if (curSection >= sections.length) {
            return;
        }

        const section = sections[curSection].current;

        if (section) {
            const canvas = await html2canvas(section, {
                useCORS: true,
                backgroundColor: "#503c3c",
            });

            canvas.toBlob(async (blob) => {
                if (blob && navigator.share) {
                    const file = new File([blob], "screenshot.png", { type: "image/png" });
                    try {
                        await navigator.share({
                            title: "Share Screenshot",
                            text: "Check out this screenshot.",
                            files: [file],
                        });
                    } catch (error) {
                        console.error("Sharing failed", error);
                    }
                }
            });
        }
    };

    const callbacks = {
        onWordClick: console.log,
        onWordMouseOver: console.log,
        getWordTooltip: word => word.text
    }
    const options = {
        colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
        enableTooltip: true,
        deterministic: false,
        fontFamily: "times",
        fontSizes: [5, 120],
        fontStyle: "normal",
        fontWeight: "normal",
        rotations: 3,
        rotationAngles: [0, 0],
        scale: "sqrt",
        spiral: "archimedean",
        transitionDuration: 1000
    };
    const size = [800, 400];

    return (
        <main className="flex flex-col items-center">
            <div ref={sections[0]} className="w-screen h-screen nice-vertical-scroll">
                <div className="w-screen h-[100vh] flex flex-col items-center gap-y-10">
                    <div className="flex items-center flex-col">
                        <h1 className="text-4xl font-serif pt-20">Delve Into</h1>
                        <h1 className="text-6xl font-serif retro-text">{groupChat.name}</h1>
                        <div className="w-full border-4 opacity-70 border-white squigglevision"></div>
                    </div>
                    <div className="flex flex-col gap-y-5 text-sm w-1/2 max-h-10">
                        <div className="flex p-4 text-xl gap-x-2 items-center bg-orange-100 retro-shadow-orange text-black rounded">
                            <FaMessage className="" />
                            {groupChat.messages.length} messages from
                        </div>
                        <div className="flex p-4 text-xl gap-x-2 items-center bg-red-100 retro-shadow-red text-black rounded">
                            <IoPerson />
                            {groupChat.countAuthors()} members over
                        </div>
                        <div className="flex p-4 text-xl gap-x-2 items-center bg-blue-100 retro-shadow-blue text-black rounded">
                            <FaClock />
                            {groupChat.getAgeInDays()} days
                        </div>
                    </div>
                </div>

                <div
                    ref={sections[1]}
                    className="w-screen h-[100vh] flex flex-col items-center gap-y-10"
                    id="section_1"
                >
                    <div>
                        <h1 className="text-6xl pt-20 font-serif retro-text">
                            See where it all began
                        </h1>
                        <div className="w-full border-4 opacity-70 border-white squigglevision"></div>
                    </div>
                    <div className="text-sm w-1/2 max-h-10">
                        <GroupChatSegment
                            groupChat={groupChat}
                            title={groupChat.name + "'s first conversation"}
                            start={0}
                            end={groupChat.findFirstConversationEnd()}
                            showSave={true}
                        />
                    </div>
                </div>

                <div
                    ref={sections[2]}
                    className="w-screen h-[150vh] flex flex-col items-center gap-y-10"
                >
                    <div>
                        <h1 className="text-6xl pt-20 font-serif retro-text">
                            Most memorable moments
                        </h1>
                        <div className="w-full border-4 opacity-70 border-white squigglevision"></div>
                    </div>
                    <div className="text-sm w-1/2 max-h-10 flex flex-col gap-y-10">
                        <GroupChatSegment
                            groupChat={groupChat}
                            title={groupChat.name + "'s memorable moment"}
                            start={180 - 10}
                            end={180 + 10}
                            showSave={true}
                        />
                        <GroupChatSegment
                            groupChat={groupChat}
                            title={groupChat.name + "'s memorable moment"}
                            start={300 - 10}
                            end={300 + 10}
                            showSave={true}
                        />
                    </div>
                </div>

                <div
                    ref={sections[3]}
                    className="w-screen h-[100vh] flex flex-col items-center gap-y-10"
                >
                    <div>
                        <h1 className="text-6xl pt-20 font-serif retro-text">Top messagers</h1>
                        <div className="w-full border-4 opacity-70 border-white squigglevision"></div>
                    </div>
                    <div className="flex flex-col gap-y-5 text-sm w-1/2 max-h-10">
                        <div className="flex p-4 text-xl gap-x-2 justify-between bg-orange-100 retro-shadow-orange text-black rounded">
                            <div className="flex gap-x-2 items-center">
                                <TbRosetteNumber1 className="" />
                                {topFive[0].person.name}
                            </div>
                            <span className="text-zinc-600">{topFive[0].count}</span>
                        </div>
                        <div className="flex p-4 text-xl gap-x-2 justify-between bg-orange-100 retro-shadow-red text-black rounded">
                            <div className="flex gap-x-2 items-center">
                                <TbRosetteNumber2 className="" />
                                {topFive[1].person.name}
                            </div>
                            <span className="text-zinc-600">{topFive[1].count}</span>
                        </div>
                        <div className="flex p-4 text-xl gap-x-2 justify-between bg-orange-100 retro-shadow-red text-black rounded">
                            <div className="flex gap-x-2 items-center">
                                <TbRosetteNumber3 className="" />
                                {topFive[2].person.name}
                            </div>
                            <span className="text-zinc-600">{topFive[2].count}</span>
                        </div>
                        <div className="flex p-4 text-xl gap-x-2 justify-between bg-orange-100 retro-shadow-blue text-black rounded">
                            <div className="flex gap-x-2 items-center">
                                <TbRosetteNumber4 className="" />
                                {topFive[3].person.name}
                            </div>
                            <span className="text-zinc-600">{topFive[3].count}</span>
                        </div>
                        <div className="flex p-4 text-xl gap-x-2 justify-between bg-orange-100 retro-shadow-blue text-black rounded">
                            <div className="flex gap-x-2 items-center">
                                <TbRosetteNumber5 className="" />
                                {topFive[4].person.name}
                            </div>
                            <span className="text-zinc-600">{topFive[4].count}</span>
                        </div>
                    </div>
                </div>

                <div
                    ref={sections[4]}
                    className="w-screen h-[100vh] flex flex-col items-center gap-y-10"
                >
                    <div>
                        <h1 className="text-6xl pt-20 font-serif retro-text">Top words</h1>
                        <div className="w-full border-4 opacity-70 border-white squigglevision"></div>
                    </div>
                    <div className="text-8xl wordcloud-wrapper">
                        <ReactWordCloud words={words} callbacks={callbacks} options={options} />
                    </div>
                </div>
            </div>

            <div className="flex gap-x-5 absolute start-container">
                <button className="start-button big-button" onClick={share}>
                    <FaShareFromSquare />
                </button>
                <button
                    className="start-button big-button"
                    onClick={scrollToNextPart}
                    id="scroll_button"
                >
                    {buttonContent}
                </button>
            </div>

            <SquiggleVisionSvg />

            {/* <div className="min-h-[85vh] flex flex-col justify-between items-center">
                <div className="overflow-scroll w-full">
                    <h1 className="text-6xl pt-20 font-serif retro-text">See your best moments</h1>
                    <div className="w-full border-4 opacity-70 border-white squigglevision"></div>
                </div>
                <div>
                    <button className="big-button">Start !</button>
                </div>
            </div> */}
        </main>
    );
}

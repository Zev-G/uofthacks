"use client";

import { useEffect, useState } from "react";
import GroupChat from "@/lib/GroupChat";
import Image from "next/image";
import "./main.css";

export default function Home() {
    const [showGuide, setShowGuide] = useState<boolean>(false);
    const [fileContent, setFileContent] = useState<string | null>(null);

    const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as ArrayBuffer;
                const decoder = new TextDecoder('utf-8', { fatal: false, ignoreBOM: true });
                setFileContent(decoder.decode(content));
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="flex flex-col items-center">
                <span className="info_icon" onClick={() => setShowGuide(true)}>
                    Info
                </span>
                <h1 className="title_text">Retro Chat</h1>
                <div
                    className="w-2/3 h-36 border-2 border-black border-dashed opacity-30 rounded justify-center flex items-center text-gray-800 bg-gray-400"
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                >
                    Drop your file here
                </div>
            </div>
            <span className="mono pt-2 pb-4 opacity-50">or</span>
            <button className="retro_button">Login / Signup</button>
            {showGuide && <GuideModal setShowGuide={setShowGuide} />}
            {fileContent && (
                <div>{JSON.stringify(GroupChat.fromExport<WhatsappGroup>(fileContent))}</div>
            )}
        </main>
    );
}

type GuideModalProps = {
    setShowGuide: (show: boolean) => void;
};

function GuideModal({ setShowGuide }: GuideModalProps) {
    return (
        <div className="modal_background" onClick={() => setShowGuide(false)}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <h2>How to use Retro Chat</h2>
                {"1. Drag a file into the drop zone above."}
                <button onClick={() => setShowGuide(false)}>Close</button>
            </div>
        </div>
    );
}

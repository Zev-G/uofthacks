import Message from "@/lib/Message";

import React from "react";

function getRandomColor() {
    const colors = ["red", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export default function MessageView({
    message,
    color,
}: {
    message: Message<WhatsappMessage>;
    color: string;
}) {
    const randomColor = getRandomColor();
    return (
        <div className="flex p-4 gap-x-3">
            <div className={`rounded min-w-8 min-h-8 h-8`} style={{ backgroundColor: color }} />
            <div>
                <div className="flex items-center text-lg gap-x-2">
                    <div>{message.author.name}</div>
                    <div className="text-gray-500 text-base">
                        {message.date.toLocaleTimeString([], {
                            hour: "numeric",
                            minute: "2-digit",
                        })}
                    </div>
                </div>
                <div>{message.text}</div>
            </div>
        </div>
    );
}

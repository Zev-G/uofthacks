import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./main.css";
import ChatProvider from "@/providers/ChatProvider";
import UserProvider from "@/providers/UserProvider";
import Profile from "@/components/Profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Once Upon a Chat",
    description: "Analyze your chat history",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex flex-col flex-grow`}>
                <UserProvider>
                    <ChatProvider>
                        <Profile />
                        {children}
                        <div className="blob-cont">
                            <div className="yellow blob"></div>
                            <div className="red blob"></div>
                            <div className="green blob"></div>
                        </div>
                    </ChatProvider>
                </UserProvider>
            </body>
        </html>
    );
}

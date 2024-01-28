import "@/app/retro.css";
import { ReactNode } from "react";

type RetroButtonProps = {
    children: ReactNode;
    onClick: () => void | Promise<void>;
};

export default function RetroButton({ children, onClick }: RetroButtonProps) {
    return (
        <button className="big-button" onClick={onClick}>
            {children}
        </button>
    );
}

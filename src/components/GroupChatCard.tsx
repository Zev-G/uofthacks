import GroupChat from "@/lib/GroupChat"
import '@/app/retro.css';
import { PiArrowFatRightFill } from "react-icons/pi";


export default function GroupChatCard({ groupChat }: { groupChat: GroupChat<any> }) {
    return (
        <div className='retro-shadow-orange w-full h-10 flex items-center justify-between text-black p-4 bg-orange-100 rounded cursor-pointer'>
            <span>{ groupChat.name }</span>
            <PiArrowFatRightFill />
        </div>
    )
}
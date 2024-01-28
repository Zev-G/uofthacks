import '@/app/retro.css';
import '@/app/main.css';
import GroupChat from '@/lib/GroupChat';
import GroupChatSegment from '@/components/GroupChatSegment';

export default function Board() {

    // const gc = GroupChat.fromExport(lol);

    return (
        <main className='flex w-screen h-screen items-center justify-center'>
            <div className="flex flex-wrap w-[90vw] min-h-[100vh] mt-[5vh] retro-shadow-orange rounded-xl dotted-bg p-5 gap-2">
                <div className='w-1/2'>
                    <GroupChatSegment groupChat={gc} start={0} end={10} title='Those first moments'/>
                </div>
                {/* <div className='w-1/3'>
                    <GroupChatSegment groupChat={gc} start={0} end={10} title='Those first moments'/>
                </div>
                <div className='w-1/3'>
                    <GroupChatSegment groupChat={gc} start={0} end={10} title='Those first moments'/>
                </div>
                <div className='w-1/3'>
                    <GroupChatSegment groupChat={gc} start={0} end={10} title='Those first moments'/>
                </div> */}
            </div>
        </main>
    )
}

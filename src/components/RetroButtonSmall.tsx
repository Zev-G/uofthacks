import '@/app/retro.css'

export default function RetroButton({text}: {text: string}) {
    return (
        <button className='small-button'>
            {text}
        </button>
    )
}
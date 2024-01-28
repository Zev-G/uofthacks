type GuideModalProps = {
    setShowGuide: (show: boolean) => void;
};

export default function GuideModal({ setShowGuide }: GuideModalProps) {
    return (
        <div className="modal_background" onClick={() => setShowGuide(false)}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <h2>How to use Once Upon A Chat:</h2>
                1. Drag a file into the drop zone above.
                2. Cherish your past moments!
                <button onClick={() => setShowGuide(false)}>Close</button>
            </div>
        </div>
    );
}

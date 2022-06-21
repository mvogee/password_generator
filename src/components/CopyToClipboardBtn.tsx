import { useRef } from 'react';
import '../styles/CopyToClipboard.css';

type props = {
    generatedPw: string;
}

const CopyToClipboardBtn = ({generatedPw} : props) => {
    const confirmation = useRef <HTMLParagraphElement>(null!);
    const copyTxt = () => {
        navigator.clipboard.writeText(generatedPw);
        confirmation.current.style.display = "block";
        setTimeout(() => { confirmation.current.style.display = "none";}, 3000);
    };
    return (
        <div className="copyToClipboardBtn">
            <p ref={confirmation} className="copyConfirmation">Copied!</p>
            <button type="button" onClick={copyTxt}>Copy to Clipboard</button>
        </div>
    );
}

export default CopyToClipboardBtn;
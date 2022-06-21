import {useState} from 'react';

type props = {
    generatedPw: string;
}

const CopyToClipboardBtn = ({generatedPw} : props) => {
    const [msg, setMsg] = useState("");
    const copyTxt = () => {
        navigator.clipboard.writeText(generatedPw);
        setMsg("copied.");
        setTimeout(() => {setMsg("")}, 5000);
    };
    return (
        <div className="copyToClipboardBtn">
            <p className="copyConfirmation">{msg}</p>
            <button type="button" onClick={copyTxt}>Copy to Clipboard</button>
        </div>
    );
}

export default CopyToClipboardBtn;
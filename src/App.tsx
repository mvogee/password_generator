import React from 'react';
import {useState, useRef} from 'react';
import PwOptions from './components/PwOptions';
import createPw from './tsx/createPw';
import NumberSlider from './components/NumberSlider';
import CopyToClipboardBtn from './components/CopyToClipboardBtn';
import PasswordDisplay from './components/PasswordDisplay';
import './App.css';

const App = () => {
    let [generatedPw, setGeneratedPw] = useState("");
    const includeNumbers = useRef(true);
    const includeSpecial = useRef(false);
    const includeUpperCase = useRef(true);
    let [passwordLength, setPasswordLength] = useState(15);

    const generateBtn = () => {
        setGeneratedPw(createPw(includeNumbers.current, includeSpecial.current, includeUpperCase.current, passwordLength));
    };

    return (
    <div className="App">
            <PasswordDisplay generatedPw={generatedPw}/>
            <CopyToClipboardBtn generatedPw={generatedPw}/>
            <PwOptions
                includeNumbers={includeNumbers}
                includeSpecial={includeSpecial}
                includeUpperCase={includeUpperCase}
            />
            <NumberSlider passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
            <button className="generateBtn" type="button" onClick={generateBtn}>Generate New Password</button>
        </div>
    );
};

export default App;

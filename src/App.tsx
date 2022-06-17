import React from 'react';
import {useState, useRef} from 'react';
import PwOptions from './components/PwOptions';
import './App.css';

const App: React.FC = () => {
    let [generatedPw, setGeneratedPw] = useState("Your password will generate here");
    let includeNumbers = useRef(true);
    let includeSpecial = useRef(false);
    let includeUpperCase = useRef(true);
    let passwordLength = useRef(15);
  return (
    <div className="App">
            <p>{generatedPw}</p>
            <PwOptions
                includeNumbers={includeNumbers}
                includeSpecial={includeSpecial}
                includeUpperCase={includeUpperCase}
            />
            <button className="generateBtn" type="button">Generate New Password</button>
        </div>
    );
}

export default App;

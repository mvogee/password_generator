import React from 'react';
import '../styles/PwOptions.css'

type props = {
    includeNumbers: React.MutableRefObject<boolean>;
    includeUpperCase: React.MutableRefObject<boolean>;
    includeSpecial: React.MutableRefObject<boolean>;
}

const PwOptions = ({ includeNumbers, includeUpperCase, includeSpecial}: props) => {
    const upperCaseChange = () => {
        includeUpperCase.current = !includeUpperCase.current;
    }
    const numbersChange = () => {
        includeNumbers.current = !includeNumbers.current;
    }
    const specialCharactersChange = () => {
        includeSpecial.current = !includeSpecial.current;
    }

    return (
        <div className="PwOptions-Container">
            <div className="PwOption-CheckBoxes">
                <label>
                    <input id="uppercase" className="optionsCheckBox" type="checkbox" onChange={upperCaseChange} defaultChecked/>
                    - Uppercase: ABC
                </label>
                <label>
                    <input id="numbers" type="checkbox" onChange={numbersChange} defaultChecked/>
                    - Numbers: 123
                </label>
                <label>
                    <input id="special" type="checkbox" onChange={specialCharactersChange} />
                    - Special Characters: ?!@#_
                </label>
            </div>
        </div>
    );
};


export default PwOptions;

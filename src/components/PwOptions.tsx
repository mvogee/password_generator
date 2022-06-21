import React from 'react';

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
                    Uppercase ABC:
                    <input id="uppercase" className="optionsCheckBox" type="checkbox" onChange={upperCaseChange} defaultChecked/>
                </label>
                <label>
                    Numbers 123:
                    <input id="numbers" type="checkbox" onChange={numbersChange} defaultChecked/>
                </label>
                <label>
                    Special Characters ?!@#_:
                    <input id="special" type="checkbox" onChange={specialCharactersChange} />
                </label>
            </div>
        </div>
    );
};


export default PwOptions;

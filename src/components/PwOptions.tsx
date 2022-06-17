import React from 'react';

type props = {
    includeNumbers: React.MutableRefObject<boolean>;
    includeUpperCase: React.MutableRefObject<boolean>;
    includeSpecial: React.MutableRefObject<boolean>;
}

const PwOptions = ({ includeNumbers, includeUpperCase, includeSpecial}: props) => {
    console.log(includeNumbers.current, includeUpperCase.current);

    const upperCaseChange = () => {
        includeUpperCase.current = !includeUpperCase.current;
        console.log(includeUpperCase.current);
    }
    const numbersChange = () => {
        includeNumbers.current = !includeNumbers.current;
        console.log(includeNumbers.current);
    }
    const specialCharactersChange = () => {
        includeSpecial.current = !includeSpecial.current;
        console.log(includeSpecial.current);
    }

    return (
        <div className="PwOptions-Container">
            <div className="PwOption-CheckBoxes">
                <label>
                    Uppercate letters:
                    <input id="uppercase" className="optionsCheckBox" type="checkbox" onChange={upperCaseChange} defaultChecked/>
                </label>
                <label>
                    Nubers:
                    <input id="numbers" type="checkbox" onChange={numbersChange} defaultChecked/>
                </label>
                <label>
                    Special Charactrrs:
                    <input id="special" type="checkbox" onChange={specialCharactersChange} />
                </label>
            </div>
        </div>
    );
};


export default PwOptions;

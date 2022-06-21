import React from 'react';

type props = {
    passwordLength: number;
    setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
}

const NumberSlider = ({ passwordLength, setPasswordLength } : props) => {
    const lengthChange = (event : React.FormEvent<HTMLInputElement>) => {
        setPasswordLength(parseInt(event.currentTarget.value));
    }
    return (
        <div className="numberSlider">
            <p>Length: {passwordLength}</p>
            <input type="range" max={100} min={8} defaultValue={15} onChange={lengthChange}></input>
        </div>
    );
}

export default NumberSlider;
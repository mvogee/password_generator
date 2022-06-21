import React from 'react';
import '../styles/NumberSlider.css';

type props = {
    passwordLength: number;
    setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
}

const NumberSlider = ({ passwordLength, setPasswordLength } : props) => {

    const lengthChange = (event : React.FormEvent<HTMLInputElement>) => {
        setPasswordLength(parseInt(event.currentTarget.value));
        let target = event.currentTarget;
        const min = parseInt(target.min);
        const max = parseInt(target.max);
        const val = parseInt(target.value);
        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    }
    return (
        <div className="numberSlider">
            <label>
                Length: {passwordLength}
            </label>
                <input className="slider" type="range" max={64} min={8} defaultValue={15} onChange={lengthChange}></input>
        </div>
    );
}

export default NumberSlider;
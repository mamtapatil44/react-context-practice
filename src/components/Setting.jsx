import React, { useState } from 'react'

const Setting = () => {
    const [selectedOption, setSelectedOption] = useState("light");

    const handleRadioChange = (option) => {
        setSelectedOption(option);
    };
    
    return (
        <div className='flex flex-col gap-2'>
            <h4>Select Theme:</h4>
            {
            
            ["light", "dark"].map((option => <label key={option}>
                <input className='mx-2 ' type='radio' value={option} checked={selectedOption === option} 
                onChange={() => handleRadioChange(option)} /> {option}
            </label>))
        }</div>
    )
}

export default Setting;
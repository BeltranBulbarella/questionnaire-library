import React, {useState} from 'react';
import {Question, Validation} from "../types";

interface TextInputProps extends Question {
    validation?: Validation;
}

export const TextInput: React.FC<TextInputProps> = ({question, onSelected, validation}) => {
    const [value, setValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        if (onSelected) {
            onSelected(newValue);
        }
    };

    return (
        <div>
            <label>{question}</label>
            <input type="text" value={value} onChange={handleInputChange}/>
        </div>
    );
}


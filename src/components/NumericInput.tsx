import React, { useState } from 'react';
import { Question } from "../types";

interface NumericInputProps extends Question {}

const NumericInput: React.FC<NumericInputProps> = ({question, onSelected}) => {
    const [value, setValue] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.valueAsNumber;
        setValue(newValue);

        if (onSelected) {
            onSelected(newValue);
        }
    };

    return (
        <div>
            <label>{question}</label>
            <input type="number" value={value ?? ''} onChange={handleInputChange} />
        </div>
    );
}
export default NumericInput;

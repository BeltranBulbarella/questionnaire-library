import React, {ChangeEvent, FC, useState} from 'react';
import {Question} from "../types/types";
import {handleNumericInputValidation, NumericValidation} from "../utils/validation";

interface NumericInputProps extends Question {
    validation?: NumericValidation;
}

const NumericInput: FC<NumericInputProps> = ({question, onSelected, validation}) => {

    const [value, setValue] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.valueAsNumber;
        setValue(newValue);

        const error = handleNumericInputValidation(newValue, validation);
        setErrorMessage(error);

        if (onSelected) {
            onSelected(newValue);
        }
    }

    return (
        <div>
            <label><p>{question}</p></label>
            <input type="number" value={value ?? ''} onChange={handleInputChange}/>
            <button onClick={() => console.log('submit')}>Submit</button>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}

        </div>
    );
}
export default NumericInput;

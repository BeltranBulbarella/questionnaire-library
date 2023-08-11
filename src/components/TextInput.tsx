import React, {useState} from 'react';
import {Question} from "../types/types";
import {handleTextInputValidation, InputValidation} from "../utils/validation";

export interface TextInputProps<CustomValidations = {}> extends Question {
    validation?: InputValidation<CustomValidations>;
}

const TextInput: React.FC<TextInputProps> = ({question, onSelected, validation}) => {

    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        const error = handleTextInputValidation(newValue, validation);
        setErrorMessage(error);

        if (onSelected) {
            onSelected(newValue);
        }
    };

    return (
        <div>
            <label><p>{question}</p></label>
            <input type="text" value={value} onChange={handleInputChange}/>
            <button onClick={() => console.log('1')}>Submit</button>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    );
}

export default TextInput;



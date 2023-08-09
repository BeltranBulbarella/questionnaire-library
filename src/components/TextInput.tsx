import React, {useState} from 'react';
import {Validation} from "../types";
import {handleTextInputValidation} from "../utils/validation";

interface TextInputProps {
    question: string;
    validation?: Validation;
}

const TextInput: React.FC<TextInputProps> = ({question, validation}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: any) => {
        const val = e.target.value;
        setValue(val);

        // If there's validation for this input, then handle it
        if (validation) {
            const validationError = handleTextInputValidation(val, validation);
            setError(validationError);
        }
    };

    return (
        <div>
            <label>{question}</label>
            <input type="text" value={value} onChange={handleInputChange}/>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </div>
    );
}

export default TextInput;


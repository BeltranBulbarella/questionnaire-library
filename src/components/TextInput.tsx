import React, {useEffect, useState} from 'react';
import {Question} from "../types/types";
import {handleTextInputValidation, InputValidation} from "../utils/validation";
import {getRenderConfig} from "../config";

export interface TextInputProps<CustomValidations = {}> extends Question {
    validation?: InputValidation<CustomValidations>;
    preSelectedAnswer?: string;
    handleNext: () => void;
    handlePrev: () => void;
}

const TextInput: React.FC<TextInputProps> = ({question, onSelected, validation, preSelectedAnswer, handleNext, handlePrev}) => {
    const { Input = "input", Button = "button", Label = "label", Text = "p", Div = "div" } = getRenderConfig();

    const [value, setValue] = useState(preSelectedAnswer ?? '');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        const error = newValue ? handleTextInputValidation(newValue, validation) : "Input cannot be empty";
        setErrorMessage(error);

        const isCurrentInputValid = !error;
        if (onSelected) {
            onSelected(newValue, isCurrentInputValid, handleNext, handlePrev);
        }
    };
    useEffect(() => {
        const initialError = value ? handleTextInputValidation(value, validation) : "Input cannot be empty";
        setErrorMessage(initialError);

        const isInitialInputValid = !initialError;
        if (onSelected) {
            onSelected(value, isInitialInputValid, handleNext, handlePrev);
        }
    }, []);



    return (
        <Div>
            <Label><Text>{question}</Text></Label>
            <Input type="text" value={value} onChange={handleInputChange} />
            <Button onClick={() => console.log('submit')} disabled={value === ''}>Submit</Button>
            {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        </Div>
    );
}

export default TextInput;


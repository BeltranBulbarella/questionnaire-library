import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Question} from "../types/types";
import {handleNumericInputValidation, NumericValidation} from "../utils/validation";
import {getRenderConfig} from "../config";
import {buttonStyle, errorMessageStyle, inputStyle} from "../styles/CommonComponentStyles";

interface NumericInputProps extends Question {
    validation?: NumericValidation;
    preSelectedAnswer?: number;
    handleNext: () => void;
    handlePrev: () => void;
}

const NumericInput: FC<NumericInputProps> = ({question, onSelected, validation, preSelectedAnswer, handleNext, handlePrev}) => {
    const {Input = "input", Button = "button", Label = "label", Text = "p", Div = "div", ErrorText = 'p'} = getRenderConfig();

    const [value, setValue] = useState<number | null>(preSelectedAnswer ?? null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.valueAsNumber;
        setValue(newValue);

        const error = !isNaN(newValue) ? handleNumericInputValidation(newValue, validation) : "Input cannot be empty";
        setErrorMessage(error);
        const isCurrentInputValid = !error;

        if (onSelected) {
            onSelected(newValue, isCurrentInputValid, handleNext, handlePrev);
        }
    }

    useEffect(() => {
        const initialError = (value !== null && !isNaN(value)) ?
            handleNumericInputValidation(value, validation) : "Input cannot be empty";

        setErrorMessage(initialError);

        const isInitialInputValid = !initialError;
        if (onSelected) {
            onSelected(value, isInitialInputValid, handleNext, handlePrev);
        }
    }, []);


    return (
        <Div style={{ padding: '20px' }}>
            <Label style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}><Text>{question}</Text></Label>
            <Input type="number" value={value ?? ''} onChange={handleInputChange} style={inputStyle}/>
            <Button onClick={() => console.log('submit')} disabled={value === null} style={buttonStyle}>Submit</Button>
            {errorMessage && <ErrorText style={errorMessageStyle}>{errorMessage}</ErrorText>}
        </Div>
    );
}
export default NumericInput;

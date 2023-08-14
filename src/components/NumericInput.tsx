import React, {ChangeEvent, FC, useState} from 'react';
import {Question} from "../types/types";
import {handleNumericInputValidation, NumericValidation} from "../utils/validation";
import {getRenderConfig} from "../config";

interface NumericInputProps extends Question {
    validation?: NumericValidation;
}

const NumericInput: FC<NumericInputProps> = ({question, onSelected, validation}) => {
    const { Input = "input", Button = "button", Label = "label", Text = "p", Div = "div" } = getRenderConfig();

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
        <Div>
            <Label><Text>{question}</Text></Label>
            <Input type="number" value={value ?? ''} onChange={handleInputChange}/>
            <Button onClick={() => console.log('submit')}>Submit</Button>
            {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
        </Div>
    );
}
export default NumericInput;

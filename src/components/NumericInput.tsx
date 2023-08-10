import React, {ChangeEvent, FC, useState} from 'react';
import {Question} from "../types/types";
import {DefaultDiv, DefaultInput, DefaultLabel} from "./defaultRenderers";
import {getRenderConfig} from "../config";
import {handleNumericInputValidation, NumericValidation} from "../utils/validation";

interface NumericInputProps extends Question {
    validation?: NumericValidation;
}

const NumericInput: FC<NumericInputProps> = ({question, onSelected, validation}) => {
    const renderers = getRenderConfig();
    const InputComponent = renderers.Input || DefaultInput;
    const DivComponent = renderers.Div || DefaultDiv;
    const LabelComponent = renderers.Label || DefaultLabel

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
        <DivComponent>
            <LabelComponent>{question}</LabelComponent>
            <InputComponent type="number" value={value ?? ''} onChange={handleInputChange}/>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </DivComponent>
    );
}
export default NumericInput;

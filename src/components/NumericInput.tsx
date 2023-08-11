import React, {ChangeEvent, FC, useState} from 'react';
import {Question} from "../types/types";
import {DefaultButton, DefaultDiv, DefaultInput, DefaultLabel} from "./defaultRenderers";
import {getRenderConfig} from "../config";
import {handleNumericInputValidation, NumericValidation} from "../utils/validation";

interface NumericInputProps extends Question {
    validation?: NumericValidation;
}

const NumericInput: FC<NumericInputProps> = ({question, onSelected, validation}) => {
    const renderers = getRenderConfig();
    const InputComponent = renderers.Input || DefaultInput;
    const DivComponent = renderers.Div || DefaultDiv;
    const LabelComponent = renderers.Label || DefaultLabel;
    const ButtonComponent = renderers.Button || DefaultButton;


    const [value, setValue] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.valueAsNumber;
        setValue(newValue);

        const error = handleNumericInputValidation(newValue, validation);
        setErrorMessage(error !== null ? error : 'no error');

        if (onSelected) {
            onSelected(newValue);
        }
    }

    return (
        <DivComponent>
            <LabelComponent><p>{question}</p></LabelComponent>
            <InputComponent type="number" value={value ?? ''} onChange={handleInputChange}/>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            <ButtonComponent onClick={() => console.log('submit')}>Submit</ButtonComponent>

        </DivComponent>
    );
}
export default NumericInput;

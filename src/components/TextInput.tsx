import React, {useState} from 'react';
import {Question} from "../types/types";
import {getRenderConfig} from "../config";
import {DefaultButton, DefaultDiv, DefaultInput, DefaultLabel} from "./defaultRenderers";
import {handleTextInputValidation, InputValidation} from "../utils/validation";

interface TextInputProps<CustomValidations = {}> extends Question {
    validation?: InputValidation<CustomValidations>;
}

const TextInput: React.FC<TextInputProps> = ({question, onSelected, validation}) => {
    const renderers = getRenderConfig();
    const InputComponent = renderers.Input || DefaultInput;
    const DivComponent = renderers.Div || DefaultDiv;
    const LabelComponent = renderers.Label || DefaultLabel;
    const ButtonComponent = renderers.Button || DefaultButton;


    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        const error = handleTextInputValidation(newValue, validation);
        setErrorMessage(error !== null ? error : 'no error');

        if (onSelected) {
            onSelected(newValue);
        }
    };

    return (
        <DivComponent>
            <LabelComponent><p>{question}</p></LabelComponent>
            <InputComponent type="text" value={value} onChange={handleInputChange}/>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            <ButtonComponent onClick={() => console.log('1')}>Submit</ButtonComponent>
        </DivComponent>
    );
}

export default TextInput;



import React, {useState} from 'react';
import {Question} from "../types/types";
import {handleTextInputValidation, InputValidation} from "../utils/validation";
import {getRenderConfig} from "../config";

export interface TextInputProps<CustomValidations = {}> extends Question {
    validation?: InputValidation<CustomValidations>;
}

const TextInput: React.FC<TextInputProps> = ({question, onSelected, validation}) => {
    const { Input = "input", Button = "button", Label = "label", Text = "p", Div = "div" } = getRenderConfig();

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
        <Div>
            <Label><Text>{question}</Text></Label>
            <Input type="text" value={value} onChange={handleInputChange} />
            <Button onClick={() => console.log('1')}>Submit</Button>
            {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        </Div>
    );
}

export default TextInput;



import React, {FC, useState} from 'react';
import { Question } from "../types/types";
import {getRenderConfig} from "../config";
import {DefaultButton, DefaultDiv} from "./defaultRenderers";

interface MultipleChoiceProps extends Question {
    options: string[];
}

const MultipleChoice: FC<MultipleChoiceProps> = ({question, options, onSelected}) => {
    const renderers = getRenderConfig();
    const DivComponent = renderers.Div || DefaultDiv;
    const ButtonComponent = renderers.Button || DefaultButton;

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleOptionToggle = (option: string) => {
        const newSelectedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter(opt => opt !== option)
            : [...selectedOptions, option];

        setSelectedOptions(newSelectedOptions);

        if (onSelected) {
            onSelected(newSelectedOptions);
        }
    };

    return (
        <DivComponent>
            {question}
            {options.map((option) => (
                <ButtonComponent
                    key={option}
                    onClick={() => handleOptionToggle(option)}
                    style={{ backgroundColor: selectedOptions.includes(option) ? 'lightblue' : undefined }}>
                    {option}
                </ButtonComponent>
            ))}
        </DivComponent>
    );
}
export default MultipleChoice;

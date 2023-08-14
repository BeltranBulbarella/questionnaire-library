import React, {FC, useState} from 'react';
import { Question } from "../types/types";
import {getRenderConfig} from "../config";

interface MultipleChoiceProps extends Question {
    options?: string[];
}

const MultipleChoice: FC<MultipleChoiceProps> = ({question, options, onSelected}) => {
    const { Button = "button", Div = "div" } = getRenderConfig();


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
        <Div>
            {question}
            {options?.map((option) => (
                <Button
                    key={option}
                    onClick={() => handleOptionToggle(option)}
                    style={{ backgroundColor: selectedOptions.includes(option) ? 'lightblue' : undefined }}>
                    {option}
                </Button>
            ))}
        </Div>
    );
}
export default MultipleChoice;

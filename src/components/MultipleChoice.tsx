import React, {FC, useEffect, useState} from 'react';
import { Question } from "../types/types";
import {getRenderConfig} from "../config";

interface MultipleChoiceProps extends Question {
    options?: string[];
    preSelectedAnswer?: string[];
    handleNext: () => void;
    handlePrev: () => void;
}

const MultipleChoice: FC<MultipleChoiceProps> = ({question, options, onSelected, preSelectedAnswer, handleNext, handlePrev}) => {
    const { Button = "button", Div = "div" } = getRenderConfig();

    const [selectedOptions, setSelectedOptions] = useState<string[]>(preSelectedAnswer ?? []);

    const isValidInitially = !!preSelectedAnswer && preSelectedAnswer.length > 0;

    useEffect(() => {
        if (onSelected) {
            onSelected(preSelectedAnswer, isValidInitially, handleNext, handlePrev);
        }
    }, []);

    const handleOptionToggle = (option: string) => {
        const newSelectedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter(opt => opt !== option)
            : [...selectedOptions, option];

        setSelectedOptions(newSelectedOptions);
        if (onSelected) {
            const isValid = newSelectedOptions.length > 0;
            onSelected(newSelectedOptions, isValid, handleNext, handlePrev);
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

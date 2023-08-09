import React, { useState } from 'react';
import { Question } from "../types";

interface MultipleChoiceProps extends Question {
    options: string[];
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({question, options, onSelected}) => {
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
        <div>
            {question}
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => handleOptionToggle(option)}
                    style={{ backgroundColor: selectedOptions.includes(option) ? 'lightblue' : undefined }}>
                    {option}
                </button>
            ))}
        </div>
    );
}

import React, {FC} from 'react';
import {Question} from "../types/types";
import {getRenderConfig} from "../config";

interface BooleanInputProps extends Question {
    preSelectedAnswer?: any;
    handleNext: () => void;
    handlePrev: () => void;
}

const BooleanInput: FC<BooleanInputProps> = ({question, onSelected, preSelectedAnswer, handleNext, handlePrev}) => {
    const { Button = "button",  Div = "div" } = getRenderConfig();
    const options = ['True', 'False'];

    const handleOptionClick = (option: string) => {
        if (onSelected) {
            onSelected(option, true, handleNext, handlePrev);
        }
    };

    return (
        <Div>
            {question}
            {options?.map((option) => (
                <Button
                    key={option}
                    onClick={() => {
                        handleOptionClick(option);
                    }}
                    style={{ backgroundColor: option === preSelectedAnswer ? 'lightblue' : undefined }}>
                    {option}
                </Button>
            ))}

        </Div>
    );
}

export default BooleanInput;


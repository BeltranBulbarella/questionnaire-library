import React, {FC} from 'react';
import {Question} from "../types/types";
import {getRenderConfig} from "../config";
import {buttonStyle, selectedButtonStyle} from "../styles/CommonComponentStyles";

interface BooleanInputProps extends Question {
    preSelectedAnswer?: any;
    handleNext: () => void;
    handlePrev: () => void;
}

const BooleanInput: FC<BooleanInputProps> = ({question, onSelected, preSelectedAnswer, handleNext, handlePrev}) => {
    const { Button = "button",  Div = "div" , Text= 'p'} = getRenderConfig();
    const options = ['True', 'False'];

    const handleOptionClick = (option: string) => {
        if (onSelected) {
            onSelected(option, true, handleNext, handlePrev);
        }
    };

    return (
        <Div style={{ padding: '20px' }}>
            <Text style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>{question}</Text>
            {options?.map((option) => (
                <Button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    style={option === preSelectedAnswer ? selectedButtonStyle : buttonStyle}>
                    {option}
                </Button>
            ))}
        </Div>
    );
}

export default BooleanInput;



import React, {FC, useEffect} from 'react';
import {Question} from "../types/types";
import {getRenderConfig} from "../config";
import {buttonStyle} from "../styles/CommonComponentStyles";

interface SingleChoiceProps extends Question {
    options?: string[];
    preSelectedAnswer?: any;
    handleNext: () => void;
    handlePrev: () => void;

}

export const SingleChoice: FC<SingleChoiceProps> = ({
                                                        question,
                                                        options,
                                                        onSelected,
                                                        preSelectedAnswer,
                                                        handleNext,
                                                        handlePrev
                                                    }) => {
    const {Button = "button", Text = "p", Div = "div"} = getRenderConfig();

    const handleOptionClick = (option: string) => {
        if (onSelected) {
            onSelected(option, true, handleNext, handlePrev);
        }
    };

    useEffect(() => {
        if (preSelectedAnswer) {
            handleOptionClick(preSelectedAnswer)
        }
    }, []);

    const selectedButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'lightblue'
    };

    return (
        <Div style={{padding: '20px'}}>
            <Text style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '15px'}}>{question}</Text>
            {options?.map((option) => (
                <Button
                    key={option}
                    onClick={() => {
                        handleOptionClick(option);
                    }}
                    style={option === preSelectedAnswer ? selectedButtonStyle : buttonStyle}>
                    {option}
                </Button>
            ))}
        </Div>
    );
}

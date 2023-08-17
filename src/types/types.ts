import {
    FC,
} from "react";
import {InputValidation, NumericValidation} from "../utils/validation";

export enum QuestionType {
    SINGLECHOICE = 'SINGLECHOICE',
    MULTIPLECHOICE = 'MULTIPLECHOICE',
    TEXTINPUT = 'TEXTINPUT',
    NUMBERINPUT = 'NUMBERINPUT',
    BOOLEANINPUT = 'BOOLEANINPUT',
    SLIDER = 'SLIDER',
}

export interface Question {
    type: QuestionType;
    question: string;
    onSelected?: (answer: any, isValid: boolean, handleNext: () => void, handlePrev: () => void) => void;
    options?: string[];
    validation?: NumericValidation | InputValidation;
}

export interface CustomComponents {
    singleChoice?: FC<Question>;
    multipleChoice?: FC<Question>;
    textInput?: FC<Question>;
    numericInput?: FC<Question>;
    booleanInput?: FC<Question>;
    statusBar?: FC<any>;
}

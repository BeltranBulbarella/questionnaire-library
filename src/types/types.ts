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
}

export interface Question {
    type: QuestionType;
    question: string;
    onSelected?: (answer: any) => void;
    options?: string[];
    validation?: NumericValidation | InputValidation;
}

export interface CustomComponents {
    singleChoice?: FC<Question>;
    multipleChoice?: FC<Question>;
    textInput?: FC<Question>;
    numericInput?: FC<Question>;
    booleanInput?: FC<Question>;
}

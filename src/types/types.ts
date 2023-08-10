import {
    ButtonHTMLAttributes,
    FC,
    HTMLAttributes,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    ReactElement,
    ReactNode
} from "react";
import {InputValidation, NumericValidation} from "../utils/validation";

export enum QuestionType {
    SINGLECHOICE = 'SINGLECHOICE',
    MULTIPLECHOICE = 'MULTIPLECHOICE',
    TEXTINPUT = 'TEXTINPUT',
    NUMERIINPUT = 'NUMERIINPUT',
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
    singleChoice?: FC;
    multipleChoice?: FC;
    textInput?: FC;
    numericInput?: FC;
    booleanInput?: FC;
}

export type RenderInput = (props: InputHTMLAttributes<HTMLInputElement>, children?: ReactNode) => ReactElement;
export type RenderButton = (props: ButtonHTMLAttributes<HTMLButtonElement>, children: ReactNode) => ReactElement;
export type RenderText = (children: string) => ReactElement;
export type RenderDiv = (props: HTMLAttributes<HTMLDivElement>, children?: ReactNode) => ReactElement;
export type RenderLabel = (props: LabelHTMLAttributes<HTMLLabelElement>, children?: ReactNode) => ReactElement;

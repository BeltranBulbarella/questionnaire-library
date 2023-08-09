export enum QuestionType {
    SINGLECHOICE = 'SINGLECHOICE',
    MULTIPLECHOICE = 'MULTIPLECHOICE',
    TEXTINPUT = 'TEXTINPUT',
    NUMERIINPUT = 'NUMERIINPUT',
    BOOLEANINPUT = 'BOOLEANINPUT',
}

export interface Validation {
    minLength?: number;
    maxLength?: number;
    regex?: RegExp;
    custom?: (value: any) => string | null; // If returns string, that's the error message. If null, then validation passed.
}

export interface Question {
    type: QuestionType;
    question: string;
    onSelected?: (answer: any) => void;
    options?: string[];
}

export interface CustomComponents {
    singleChoice?: React.FC;
    multipleChoice?: React.FC;
    textInput?: React.FC;
    numericInput?: React.FC;
    booleanInput?: React.FC;
}

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
    options?: string[]; // For single/multiple choice
}

export interface CustomComponents {
    singleChoice?: React.FC;
    multipleChoice?: React.FC;
    textInput?: React.FC;
    numericInput?: React.FC;
    booleanInput?: React.FC;
}

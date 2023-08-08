// type of questions that the library supports
export enum QuestionType {
    SINGLECHOICE = 'SINGLECHOICE',
    MULTIPLECHOICE = 'MULTIPLECHOICE',
    TEXTINPUT = 'TEXTINPUT',
    NUMERIINPUT = 'NUMERIINPUT',
    BOOLEANINPUT = 'BOOLEANINPUT',
}

export interface Question {
    question: string;
    type: QuestionType;
    onAnswer: (answer: any) => void;
}

export interface BooleanQuestion extends Question {
    type: QuestionType.BOOLEANINPUT;
}

export interface MultipleChoiceQuestion extends Question {
    type: QuestionType.MULTIPLECHOICE;
    choices: string[];
}

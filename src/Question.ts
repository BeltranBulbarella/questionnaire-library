// type of questions that the library supports
export enum QuestionType {
    TrueFalse = 'TRUE_FALSE',
    MultipleChoice = 'MULTIPLE_CHOICE',
    StringInput = 'STRING_INPUT',
    NumberInput = 'NUMBER_INPUT',
    //add more types here
}

export interface Question {
    question: string;
    type: QuestionType;
    onAnswer: (answer: any) => void;
}

export interface TrueFalseQuestion extends Question {
    type: QuestionType.TrueFalse;
}

export interface MultipleChoiceQuestion extends Question {
    type: QuestionType.MultipleChoice;
    choices: string[];
}

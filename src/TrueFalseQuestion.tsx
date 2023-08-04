import {QuestionComponentsConfig} from "./QuestionComponentsConfig";

interface TrueFalseQuestionProps {
    question: string;
    subHeader?: string;
    onAnswer: (answer: any) => void;
    config?: QuestionComponentsConfig;
}

export const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({ question, subHeader, onAnswer, config }) => {
    const Button = config?.Button || 'button';
    const Text = config?.Text || 'p';

    return (
        <div>
            <Text>{question}</Text>
            {subHeader && <Text>{subHeader}</Text>}
            <Button onClick={() => onAnswer(true)}>True</Button>
            <Button onClick={() => onAnswer(false)}>False</Button>
        </div>
    );
};

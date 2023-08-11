import {Questionnaire} from "../Questionnaire";
import {QuestionType} from "../types/types";

export const DemoDefault: React.FC = () => {
    const questions = [
        {
            type: QuestionType.SINGLECHOICE,
            question: 'Pick a color:',
            options: ['Red', 'Green', 'Blue'],
            onSelected: (answer: any) =>
                console.log('Answer from SingleChoice: ', answer),
        },
    ];

    return (
        <div>
            <Questionnaire questions={questions}/>
        </div>
    );
};

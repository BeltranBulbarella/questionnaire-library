import React from 'react';
import {Question, QuestionType} from './types';
import SingleChoice from './components/SingleChoice';
import {getCustomComponents} from "./config";

// Import other default components...

interface Props {
    questions: Question[];
}

const Questionnaire: React.FC<Props> = ({questions}) => {
    const customComponents = getCustomComponents();

    return (
        <div>
            {questions.map((q, index) => {
                switch (q.type) {
                    case QuestionType.SINGLECHOICE:
                        const Component = customComponents.singleChoice || SingleChoice;
                        return <Component key={index} {...q} />;
                    // Implement other question types similarly...
                    default:
                        return null;
                }
            })}
        </div>
    );
}

export default Questionnaire;

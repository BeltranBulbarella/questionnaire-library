import React from 'react';
import {Question, QuestionType} from './types';
import SingleChoice from './components/SingleChoice';
import {getCustomComponents} from "./config";
import TextInput from "./components/TextInput";

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

                    case QuestionType.TEXTINPUT:
                        const Component2 = customComponents.textInput || TextInput;
                        return <Component2 key={index} {...q} />;

                    default:
                        return null;
                }
            })}
        </div>
    );
}

export default Questionnaire;

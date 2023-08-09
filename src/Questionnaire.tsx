import React from 'react';
import {Question, QuestionType} from './types';
import {getCustomComponents, setCustomComponents} from "./config";
import BooleanInput from "./components/BooleanInput";
import SingleChoice from "./components/SingleChoice";
import MultipleChoice from "./components/MultipleChoice";
import TextInput from "./components/TextInput";
import NumericInput from "./components/NumericInput";

interface Props {
    questions: Question[];
}

export const Questionnaire: React.FC<Props> = ({questions}) => {
    const customComponents = getCustomComponents();

    return (
        <div>
            {questions.map((q, index) => {
                switch (q.type) {
                    case QuestionType.SINGLECHOICE:
                        const SingleChoiceComponent = customComponents.singleChoice || SingleChoice;
                        return <SingleChoiceComponent key={index} {...q} />;

                    case QuestionType.MULTIPLECHOICE:
                        const MultipleChoiceComponent = customComponents.multipleChoice || MultipleChoice;
                        return <MultipleChoiceComponent key={index} {...q} />;

                    case QuestionType.TEXTINPUT:
                        const TextInputComponent = customComponents.textInput || TextInput;
                        return <TextInputComponent key={index} {...q} />;

                    case QuestionType.NUMERIINPUT:
                        const NumericInputComponent = customComponents.numericInput || NumericInput;
                        return <NumericInputComponent key={index} {...q} />;

                    case QuestionType.BOOLEANINPUT:
                        const BooleanInputComponent = customComponents.booleanInput || BooleanInput;
                        return <BooleanInputComponent key={index} {...q} />;

                    default:
                        return null;
                }
            })}
        </div>
    );
}

export {setCustomComponents, getCustomComponents};


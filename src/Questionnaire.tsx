import React, {useState, useCallback} from 'react';
import {Question, QuestionType} from './types/types';
import {getCustomComponents, setCustomComponents} from "./config";
import BooleanInput from "./components/BooleanInput";
import SingleChoice from "./components/SingleChoice";
import MultipleChoice from "./components/MultipleChoice";
import TextInput from "./components/TextInput";
import NumericInput from "./components/NumericInput";

interface Props {
    questions: Question[];
    renderNavButtons?: boolean;  // This prop controls rendering of navigation buttons
}

export const Questionnaire: React.FC<Props> = ({questions, renderNavButtons = false}) => {
    const customComponents = getCustomComponents();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); // To manage currently visible question

    // Event handler to move to next question based on user input
    const moveToNextQuestion = useCallback(() => {
        if (activeQuestionIndex < questions.length - 1) {
            setActiveQuestionIndex(prev => prev + 1);
        }
    }, [activeQuestionIndex, questions.length]);

    // Handlers for next and previous buttons
    const handleNextClick = useCallback(() => moveToNextQuestion(), [moveToNextQuestion]);
    const handlePrevClick = useCallback(() => {
        if (activeQuestionIndex > 0) {
            setActiveQuestionIndex(prev => prev - 1);
        }
    }, [activeQuestionIndex]);

    // Get the current active question based on index
    const activeQuestion = questions[activeQuestionIndex];

    let CurrentComponent;
    switch (activeQuestion.type) {
        case QuestionType.SINGLECHOICE:
            CurrentComponent = customComponents.singleChoice || SingleChoice;
            break;
        case QuestionType.MULTIPLECHOICE:
            CurrentComponent = customComponents.multipleChoice || MultipleChoice;
            break;
        case QuestionType.TEXTINPUT:
            CurrentComponent = customComponents.textInput || TextInput;
            break;
        case QuestionType.NUMERIINPUT:
            CurrentComponent = customComponents.numericInput || NumericInput;
            break;
        case QuestionType.BOOLEANINPUT:
            CurrentComponent = customComponents.booleanInput || BooleanInput;
            break;
        default:
            CurrentComponent = null;
    }

    return (
        <div>
            {/* Render the current active question */}
            {CurrentComponent && <CurrentComponent {...activeQuestion} onSelected={moveToNextQuestion}/>}

            {/* Conditional rendering of navigation buttons based on prop */}
            {renderNavButtons && (
                <div>
                    {activeQuestionIndex > 0 && <button onClick={handlePrevClick}>Previous</button>}
                    {activeQuestionIndex < questions.length - 1 && <button onClick={handleNextClick}>Next</button>}
                </div>
            )}
        </div>
    );
}

export {setCustomComponents, getCustomComponents};



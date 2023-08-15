import React, {useState} from 'react';
import {Question, QuestionType} from './types/types';
import {getCustomComponents, getRenderConfig} from "./config";
import BooleanInput from "./components/BooleanInput";
import {SingleChoice} from "./components/SingleChoice";
import MultipleChoice from "./components/MultipleChoice";
import TextInput, {TextInputProps} from "./components/TextInput";
import NumericInput from "./components/NumericInput";

interface QuestionnaireProps {
    questions: Question[];
    navButtons?: boolean;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({questions, navButtons}) => {
    const {PrevButton = "button", NextButton = 'button'} = getRenderConfig();

    const customComponents = getCustomComponents();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];
    const [answers, setAnswers] = useState<any[]>([]);
    const [isValid, setIsValid] = useState<boolean>(false);

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleAnswerSelected = (answer: any, isAnswerValid: boolean, handleNext: () => void, handlePrev: () => void) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answer;
        setAnswers(newAnswers);
        setIsValid(isAnswerValid);

        if (currentQuestion.onSelected) {
            currentQuestion.onSelected(answer, isAnswerValid, handleNext, handlePrev);
        }
    };


    const isNextButtonDisabled = () => {
        if (currentQuestionIndex === questions.length - 1) {
            return true;
        }
        return !isValid;

    };

    return (
        <div>
            {(() => {
                const commonProps = {
                    ...currentQuestion,
                    onSelected: (answer: any, isValid: boolean) => handleAnswerSelected(answer, isValid, handleNext, handlePrev),
                    preSelectedAnswer: answers[currentQuestionIndex],
                };
                switch (currentQuestion.type) {
                    case QuestionType.SINGLECHOICE:
                        const SingleChoiceComponent = customComponents.singleChoice || SingleChoice;
                        return <SingleChoiceComponent {...commonProps} />;

                    case QuestionType.MULTIPLECHOICE:
                        const MultipleChoiceComponent = customComponents.multipleChoice || MultipleChoice;
                        return <MultipleChoiceComponent {...commonProps}  />;

                    case QuestionType.TEXTINPUT:
                        const TextInputComponent = customComponents.textInput || TextInput;
                        if (currentQuestion.type === QuestionType.TEXTINPUT) {
                            return <TextInputComponent {...commonProps as unknown as TextInputProps}  />;
                        }
                        break;

                    case QuestionType.NUMBERINPUT:
                        const NumericInputComponent = customComponents.numericInput || NumericInput;
                        return <NumericInputComponent {...commonProps}  />;

                    case QuestionType.BOOLEANINPUT:
                        const BooleanInputComponent = customComponents.booleanInput || BooleanInput;
                        return <BooleanInputComponent {...commonProps}  />;

                    default:
                        return null;
                }
            })()}

            {navButtons &&
                <>
                    <PrevButton onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</PrevButton>
                    <NextButton onClick={handleNext} disabled={isNextButtonDisabled()}>Next</NextButton>
                </>
            }
        </div>
    );
}



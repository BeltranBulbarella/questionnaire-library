import React, {useEffect, useState} from 'react';
import {Question, QuestionType} from './types/types';
import {getCustomComponents, getRenderConfig} from "./config";
import BooleanInput from "./components/BooleanInput";
import {SingleChoice} from "./components/SingleChoice";
import MultipleChoice from "./components/MultipleChoice";
import TextInput from "./components/TextInput";
import NumericInput from "./components/NumericInput";
import {StatusBar} from "./components/StatusBar";

interface QuestionnaireProps {
    questions: Question[];
    navButtons?: boolean;
    statusBar?: boolean;
    savedAnswers?: any[];  // this is where you will get the saved answers
    onAnswersUpdate?: (answers: any[]) => void;  // this will send the answers back to the user
}

type ComponentMapType = {
    [key in QuestionType]?: React.FC<any>;  // The `any` type here is a generic placeholder. It would be better to replace it with a more specific type if possible.
};

export const Questionnaire: React.FC<QuestionnaireProps> = ({
                                                                questions,
                                                                navButtons,
                                                                savedAnswers,
                                                                onAnswersUpdate,
                                                                statusBar
                                                            }) => {
    const {PrevButton = "button", NextButton = 'button', Div = 'div'} = getRenderConfig();

    const customComponents = getCustomComponents();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const currentQuestion = questions[currentQuestionIndex];
    const [answers, setAnswers] = useState<any[]>(savedAnswers || []);
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        if (onAnswersUpdate) {
            onAnswersUpdate(answers);
        }
    }, [answers, onAnswersUpdate]);


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

    const isPrevButtonDisabled = () => {
        return currentQuestionIndex === 0;
    }

    const componentMap: ComponentMapType = {
        [QuestionType.SINGLECHOICE]: customComponents.singleChoice || SingleChoice,
        [QuestionType.MULTIPLECHOICE]: customComponents.multipleChoice || MultipleChoice,
        [QuestionType.TEXTINPUT]: customComponents.textInput || TextInput,
        [QuestionType.NUMBERINPUT]: customComponents.numericInput || NumericInput,
        [QuestionType.BOOLEANINPUT]: customComponents.booleanInput || BooleanInput,
    };

    return (
        <Div>
            {(() => {
                const Component = componentMap[currentQuestion.type];
                if (!Component) return null;

                const commonProps = {
                    ...currentQuestion,
                    onSelected: (answer: any, isValid: boolean) => handleAnswerSelected(answer, isValid, handleNext, handlePrev),
                    preSelectedAnswer: answers[currentQuestionIndex],
                    handleNext: handleNext,
                    handlePrev: handlePrev
                };

                return <Component {...commonProps} />;
            })()}

            {navButtons &&
                <>
                    <PrevButton onClick={handlePrev} disabled={isPrevButtonDisabled()}>Prev</PrevButton>
                    <NextButton onClick={handleNext} disabled={isNextButtonDisabled()}>Next</NextButton>
                </>
            }
            {statusBar &&
                (customComponents.statusBar
                    ? <customComponents.statusBar/>
                    : <StatusBar current={currentQuestionIndex} total={questions.length}/>)
            }
        </Div>
    );
}

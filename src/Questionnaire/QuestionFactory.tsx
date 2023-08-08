import React from 'react';
import {Question, QuestionType} from './Question';

// This setup allows users to pass their own components for specific question types,
// while still providing default components for any types they don't specify.

export type CustomComponentConfig = {
    [K in QuestionType]?: React.ComponentType<{ question: Question }>;
};

// render the appropriate question component based on the type of the question
export const QuestionFactory = (question: Question, config?: CustomComponentConfig) => {
    const QuestionComponent = config ? config[question.type] : undefined;
    return QuestionComponent ? <QuestionComponent question={question} /> : <></>;
//     add custom default component
};


import React from 'react';
import {Question} from './Question';
import {CustomComponentConfig, QuestionFactory} from './QuestionFactory';
import {QuestionComponentsConfig} from "./QuestionComponentsConfig";

export interface QuestionComponentProps {
    question: Question;
    config?: QuestionComponentsConfig; // the config with custom Button and Text
    customComponents?: CustomComponentConfig; // the config with custom question components
}

// wrapper that takes a question, a config for button and text components, and a custom component config

export const QuestionComponent: React.FC<QuestionComponentProps> = ({ question, config, customComponents }) => {
    return <div>{QuestionFactory(question, customComponents)}</div>;
};

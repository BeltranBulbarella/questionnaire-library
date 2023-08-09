import React from 'react';
import { Question } from "../types";

interface BooleanInputProps extends Question {}

export const BooleanInput: React.FC<BooleanInputProps> = ({question, onSelected}) => {
    return (
        <div>
            {question}
            <button onClick={() => onSelected && onSelected(true)}>True</button>
            <button onClick={() => onSelected && onSelected(false)}>False</button>
        </div>
    );
}

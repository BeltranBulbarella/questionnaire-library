import React, {FC} from 'react';
import {Question} from "../types/types";

interface BooleanInputProps extends Question {

}

const BooleanInput: FC<BooleanInputProps> = ({question, onSelected}) => {

    return (
        <div>
            {question}
            <button onClick={() => onSelected && onSelected(true)}>True</button>
            <button onClick={() => onSelected && onSelected(false)}>False</button>

        </div>
    );
}

export default BooleanInput;

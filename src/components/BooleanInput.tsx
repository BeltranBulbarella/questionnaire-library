import React, {FC} from 'react';
import {Question} from "../types/types";
import {getRenderConfig} from "../config";

interface BooleanInputProps extends Question {

}

const BooleanInput: FC<BooleanInputProps> = ({question, onSelected}) => {
    const { Button = "button",  Div = "div" } = getRenderConfig();

    return (
        <Div>
            {question}
            <Button onClick={() => onSelected && onSelected(true)}>True</Button>
            <Button onClick={() => onSelected && onSelected(false)}>False</Button>

        </Div>
    );
}

export default BooleanInput;

import React, {FC} from 'react';
import {Question} from "../types/types";
import {getRenderConfig} from "../config";
import {DefaultButton, DefaultDiv} from "./defaultRenderers";

interface BooleanInputProps extends Question {

}

const BooleanInput: FC<BooleanInputProps> = ({question, onSelected}) => {
    const renderers = getRenderConfig();
    const DivComponent = renderers.Div || DefaultDiv;
    const ButtonComponent = renderers.Button || DefaultButton;

    return (
        <DivComponent>
            {question}
            <ButtonComponent onClick={() => onSelected && onSelected(true)}>True</ButtonComponent>
            <ButtonComponent onClick={() => onSelected && onSelected(false)}>False</ButtonComponent>

        </DivComponent>
    );
}

export default BooleanInput;

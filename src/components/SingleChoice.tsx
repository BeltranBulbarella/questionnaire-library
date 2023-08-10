import React, {FC} from 'react';
import {Question} from "../types/types";
import {getRenderConfig} from "../config";
import {DefaultButton, DefaultDiv} from "./defaultRenderers";

interface SingleChoiceProps extends Question {
    options?: string[];
    goToNext?: () => void;
    goToPrev?: () => void;
    renderNavButtons?: boolean;

}


const SingleChoice: FC<SingleChoiceProps> = ({question, options, onSelected, renderNavButtons, goToNext, goToPrev}) => {
    const renderers = getRenderConfig();
    const ButtonComponent = renderers.Button || DefaultButton;
    const DivComponent = renderers.Div || DefaultDiv;


    const handleOptionClick = (option: string) => {
        if (onSelected) {
            onSelected(option);
        }
    };

    return (
        <DivComponent>
            {question}
            {options.map((option) => (
                <ButtonComponent
                    key={option}
                    onClick={() => {
                        handleOptionClick(option);
                        if (!renderNavButtons) goToNext && goToNext();
                    }}
                >
                    {option}
                </ButtonComponent>
            ))}
            {renderNavButtons && (
                <>
                    <ButtonComponent onClick={goToPrev}>Prev</ButtonComponent>
                    <ButtonComponent onClick={goToNext}>Next</ButtonComponent>
                </>
            )}
        </DivComponent>
    );
}
export default SingleChoice;
// regex: "/{d+}",
// minLength: 8.


// const singleChoice = useSingleChoice({
//     initialValue: ,
//     options: [],
//     onChange: (answer) => console.log(answer),
//     // ... mil cosas mas como blur, focus, validatio
// });

// const form = useForm({
//   schema: {
//     color: {
//         question: "Which color do you like?",
//         options: ["Red", "Blue", "Green"]
//     },
//     name: {
//         question: "Describe your favorite book"
//     },
//   },
//     onSubmit: (values) => console.log(values),
// })// <div>
//         //     <select value={form.color.value} onSelect={form.color.onChange} options={form.colo.options}/>
//         //     <input label={form.name.question} />
//         // </div>

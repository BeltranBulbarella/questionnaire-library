import React, {FC} from 'react';
import {Question} from "../types/types";
import {getRenderConfig} from "../config";

interface SingleChoiceProps extends Question {
    options?: string[];
    preSelectedAnswer?: any;
    handleNext: () => void;
    handlePrev: () => void;

}

export const SingleChoice: FC<SingleChoiceProps> = ({ question, options, onSelected, preSelectedAnswer, handleNext, handlePrev }) => {
    const { Button = "button", Text = "p", Div = "div" } = getRenderConfig();

    const handleOptionClick = (option: string) => {
        if (onSelected) {
            onSelected(option, true, handleNext, handlePrev);
        }
    };

    return (
        <Div>
            <Text>{question}</Text>
            {options?.map((option) => (
                <Button
                    key={option}
                    onClick={() => {
                        handleOptionClick(option);
                    }}
                    style={{ backgroundColor: option === preSelectedAnswer ? 'lightblue' : undefined }}>
                    {option}
                </Button>
            ))}
        </Div>
    );
}

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

import React from 'react';
import {Question} from "../types";

interface SingleChoiceProps extends Question {
    options?: string[];
}

const SingleChoice: React.FC<SingleChoiceProps> = ({question, options, onSelected}) => {
    const handleOptionClick = (option: string) => {
        if (onSelected) {
            onSelected(option);
        }
    };

    return (
        <div>
            {question}
            {options.map((option) => (
                <button key={option} onClick={() => handleOptionClick(option)}>
                    {option}
                </button>
            ))}
        </div>
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

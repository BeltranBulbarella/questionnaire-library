import React from 'react';

const SingleChoice: React.FC<{ question: string, options: string[] }> = ({question, options}) => {
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
    // })

    return (
        <div>
            <h3>{question}</h3>
            {options.map(option => (
                <button key={option}>{option}</button>
            ))}
        </div>
        // <div>
        //     <select value={form.color.value} onSelect={form.color.onChange} options={form.colo.options}/>
        //     <input label={form.name.question} />
        // </div>
    );
}

export default SingleChoice;

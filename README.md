# Questionnaire Library

A React and TypeScript library designed for efficiently managing questions within a questionnaire. From simple
true/false questions to multiple-choice or input types like string and number, this library aims to handle them all and
even more.

## Features:

- **Extendable**: Built with extensibility in mind, allowing you to add more question types as needed.
- **Scalable**: Whether you have a handful of questions or thousands, this library is optimized for performance.
- **Customizable**: Offers a suite of customization options to match your UI/UX needs.
- **Reusable**: Crafted with best coding practices, making it completely reusable across different projects.
- **Default & Custom Components**: While the library provides default implementations for various components, it's
  flexible enough to accept custom components from the user.

## Installation

```bash
npm install questionnaire-library
```

# Components and Utilities

## Question Types:

- **SINGLECHOICE**: Allows selection of a single option.
- **MULTIPLECHOICE**:: Enables multiple option selections.
- **TEXTINPUT**: Accepts a text input.
- **NUMBERINPUT**: Accepts a numeric input.
- **BOOLEANINPUT**: Accepts a true or false response.

# How to use

## 1. Define Your Questions

Using the predefined question types, define the set of questions for your questionnaire. Each question will have a type and optionally other attributes like options for choices or validation for input validation.

Here's a sample question setup:
```js 
const questions = [
    {
        type: QuestionType.SINGLECHOICE,
        question: 'Pick a color:',
        options: ['Red', 'Green', 'Blue'],
        onSelected: (answer: any) =>
            console.log('Answer from SingleChoice: ', answer),
    },
];
```

## 2. Implement Validation (Optional)

If you want to have input validations, the library provides built-in utilities for that purpose. You can use predefined validations or define custom validation logic.

For instance:
```js 
const questions = [
  {
    type: QuestionType.TEXTINPUT,
    question: 'Pick a color:',
    onSelected: (answer: any) =>
            console.log('Answer from TextInput: ', answer),
    validation: {
      minLength: 2,
      maxLength: 50
    }
  },
];
```

## 3. Use custom components (Optional)

Using the library, you have the flexibility to either employ inline component logic or utilize your custom components. This provides a higher level of customization in terms of design and functionality for your specific needs.

Use setCustomComponents to provide your own components.

For instance:
```js 
setCustomComponents({
  textInput: (props: Question) => {
    return (
            <div>
              <p>{props.question}</p>
              <input/>
              <button>Submit</button>
            </div>
    );
  },
  multipleChoice: (props: Question) => <MultipleChoiceComponent type={props.type} question={props.question} options={props.options}/>
});
```

## 4. Using the Questionnaire

For inputs that require validation:

```js 
import {Questionnaire} from "../Questionnaire";

<Questionnaire questions={questions}/>

```
Simply import the Questionnaire component and pass your questions array to it.

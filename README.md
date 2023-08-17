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

## Interfaces and Enums

### `QuestionType` Enum

```js
export enum QuestionType {
  SINGLECHOICE = 'SINGLECHOICE',
  MULTIPLECHOICE = 'MULTIPLECHOICE',
  TEXTINPUT = 'TEXTINPUT',
  NUMBERINPUT = 'NUMBERINPUT',
  BOOLEANINPUT = 'BOOLEANINPUT',
}
```

### `Question` Interface

```js
export interface Question {
  type: QuestionType;
  question: string;
  onSelected?: (answer: any, isValid: boolean, handleNext: () => void, handlePrev: () => void) => void;
  options?: string[];
  validation?: NumericValidation | InputValidation;
}
```

### `QuestionnaireProps` Interface
```js
interface QuestionnaireProps {
    questions: Question[];
    navButtons?: boolean;
    statusBar?: boolean;
    savedAnswers?: any[]; 
    onAnswersUpdate?: (answers: any[]) => void; 
}
```

### `RenderConfig` Interface
```js
export interface RenderConfig {
  Input?: FC<any>;
  Button?: FC<any>;
  Label?: FC<any>;
  Div?: FC<any>;
  Text?: FC<any>;
  PrevButton?: FC<any>;
  NextButton?: FC<any>;
  ErrorText?: FC<any>;
  StatusBarContainer?: FC<any>;
  ProgressBar?: FC<any>;
  StatusText?: FC<any>;
}
```

### Validation Types
```js
export type NumericValidation<CustomValidations = CustomValidationMap> = CustomValidations & {
  max?: number;
  min?: number;
  onlyPositiveNumbers?: boolean;
  phoneNum?: boolean;
  isWholeNumber?: boolean;
  custom?: (value: any) => string | null;
};

export type InputValidation<CustomValidations = CustomValidationMap> = CustomValidations & {
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
  custom?: (value: any) => string | null;
}
```


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

For instance with default validation:
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

Example with custom validation: 

```js 
const questions = [
  {
    type: QuestionType.NUMBERINPUT,
    question: 'Pick a color:',
    onSelected: (answer: any) =>
            console.log('Answer from NumberInput: ', answer),
    validation: {
      min: 1,
      max: 150,
      custom: (value: number) => {
        if (value % 2 !== 0) {
          return 'Please enter an even number.';
        }
        return null;
      }
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

## 4. Use custom elements (Optional)

In this library, you have the flexibility to use your own custom components, overriding the default ones, allowing for more customization to cater to various design or functionality needs.

Use setCustomComponents to provide your own components.

For instance:
```js 
const CustomInput = (props: any) => <input {...props} style={{border: '2px solid green'}}/>;
const CustomButton = (props: any) => <button {...props} style={{backgroundColor: 'blue', color: 'white'}}/>;

export const DemoCustomRenderComponents: React.FC = () => {
    // Set custom renderers
    setRenderConfig({
        Input: CustomInput,
        Button: CustomButton,
        // ... others if needed
    });
}
```

## 5. Using the Questionnaire

To utilize the Questionnaire component, you have two primary methods:


### 1. Direct Rendering
For standard inputs without the need for manual navigation:

```js 
import {Questionnaire} from "../Questionnaire";

<Questionnaire questions={questions} />

```
Simply import the Questionnaire component and pass your questions array to it.

### 2. Custom Navigation with onSelected Callback

For scenarios where you want to control the flow based on user's input or other conditions, you can utilize the `handleNext()` and `handlePrev()` functions provided by the `onSelected` callback.

```js
const questions = [
  {
    type: QuestionType.SINGLECHOICE,
    question: 'Pick a color:',
    options: ['Red', 'Green', 'Blue'],
    onSelected: (answer: any, isValid: boolean, handleNext: () => void, handlePrev: () => void) => {
      console.log('Answer from SingleChoice: ', answer);
      if (isValid && answer === 'Green') {
        handleNext();  // Move to the next question if the answer is "Green" and valid
      } else if (isValid) {
        alert('Please choose Green.');
      } else {
        alert('Please provide a valid answer.');
      }
    }
  }
]
```

### 3. Optional Navigation Buttons

If you want to provide users with a direct way to navigate between questions without relying on the logic within the `onSelected` callback, you can use the optional `navButtons` prop.
This buttons can be customized using the `setRenderConfig` function.

```js
<Questionnaire questions={questions} navButtons/>
```


When you pass the `navButtons` prop, the component will render "Prev" and "Next" buttons, allowing users to move between questions easily.

Remember, while the `navButtons` offer manual navigation, you can still combine it with custom logic from the `onSelected` callback for a hybrid approach.

### 4. Optional Status Bar

The Questionnaire also offers an optional status bar, which visually informs users about their progress. This status bar can be customized, or you can choose to use your own.

To use the default status bar:

```js
<Questionnaire questions={questions} statusBar/>
```

If you wish to customize the status bar, the following props can be set when using the setRenderConfig function:

StatusBarContainer: Customize the container holding the status bar elements.

ProgressBar: Use your own progress bar component.

StatusText: Provide a custom component to display the status text (like "Question 3 of 5").
For example:

```js
const CustomStatusBarContainer = (props: any) => <div {...props} style={{border: '2px solid green'}}/>;
const CustomProgressBar = (props: any) => <div {...props} style={{backgroundColor: 'blue', color: 'white'}}/>;
const CustomStatusText = (props: any) => <div {...props} style={{color: 'red'}}/>;

setRenderConfig({
    StatusBarContainer: CustomStatusBarContainer,
    ProgressBar: CustomProgressBar,
    StatusText: CustomStatusText,
});
```

If you wish to use your own custom status bar, you can use the `setCustomComponents` function to provide your own custom components.

```js
setCustomComponents({
  statusBar: (props: any) => <CustomStatusBar {...props} />
});
```


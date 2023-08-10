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

## Components:

- TextInput: For accepting text input.
- SingleChoice: For single option selection.
- NumericInput: For numeric input.
- MultipleChoice: For multiple option selections.

# Utilities:

## Validation Handlers:

- handleTextInputValidation: Validates text input based on the provided rules.
- handleNumericInputValidation: Validates numeric input based on the provided rules.

## Render Configuration:

- setRenderConfig: Allows setting custom rendering configurations.
- getRenderConfig: Retrieves the current render configuration.

## Custom Components Configuration:

- setCustomComponents: Allows setting custom components for specific questionnaire items.
- getCustomComponents: Retrieves the current custom components configuration.

# How to use

## 1. Define Your Questions

Create an array of question objects:

```js 
const questions = [
  {
    type: QuestionType.TEXTINPUT,
    question: "What is your name?",
  },
  {
    type: QuestionType.SINGLECHOICE,
    question: "Pick a fruit",
    options: ["Apple", "Banana", "Cherry"],
  },
  // ... more questions
];
```

## 2. Apply Custom Renderers (Optional)

If you wish to customize how components render, define your custom rendering functions and set them:

```js 
const customRenderers = {
  Input: (props, children) => <CustomInput {...props}>{children}</CustomInput>,
  // ... other custom renderers
};

setRenderConfig(customRenderers);
```

## 3. Utilize Components in Your App

Now, you can use the provided components to render your questions:

```js 
import { TextInput, SingleChoice } from 'path_to_questionnaire_library';

function QuestionnaireComponent() {
  // Implement your logic here
  // Example:
  return (
          <div>
            {questions.map(question => {
              switch (question.type) {
                case QuestionType.TEXTINPUT:
                  return <TextInput {...question} />;
                case QuestionType.SINGLECHOICE:
                  return <SingleChoice {...question} />;
                      // ... handle other question types
              }
            })}
          </div>
  );
}
```

## 4. Implement Validation (Optional)

For inputs that require validation:

```js 
const questionsWithValidation = [
  {
    type: QuestionType.TEXTINPUT,
    question: "What is your email?",
    validation: {
      regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    },
  },
  {
    type: QuestionType.NUMERIINPUT,
    question: "How old are you?",
    validation: {
      min: 1,
      max: 130,
      onlyPositiveNumbers: true,
    },
  },
  // ... more questions
];
```
Then, the TextInput and NumericInput components will automatically validate the user's input and display relevant error messages based on the provided validation rules.

# Notes
- Remember to handle the **`onSelected`** callback to capture user input or selections.
- For navigation within a questionnaire, utilize the **`goToNext`**, **`goToPrev`**, and **`renderNavButtons`** props where necessary.
- To achieve maximum flexibility, you can provide custom components for different question types using the **`setCustomComponents`** function.

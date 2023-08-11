import {setCustomComponents} from "../config";
import {Questionnaire} from "../Questionnaire";

const MyCustomSingleChoice: React.FC = (props) => {
    return (
        <div>
            {/* Implement your custom logic and rendering */}
        </div>
    );
};

export const DemoFullCustomComponents: React.FC = () => {
    // Set the custom component
    setCustomComponents({
        singleChoice: MyCustomSingleChoice,
        // ... others if needed
    });

    const questions = [
        // ... your questions
    ];

    return (
        <div>
            <Questionnaire questions={questions}/>
        </div>
    );
};

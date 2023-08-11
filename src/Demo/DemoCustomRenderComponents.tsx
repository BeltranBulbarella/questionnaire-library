import {setRenderConfig} from "../config";
import {Questionnaire} from "../Questionnaire";

const CustomInput = (props) => <input {...props} style={{border: '2px solid green'}}/>;
const CustomButton = (props) => <button {...props} style={{backgroundColor: 'blue', color: 'white'}}/>;

export const DemoCustomRenderComponents: React.FC = () => {
    // Set custom renderers
    setRenderConfig({
        Input: CustomInput,
        Button: CustomButton,
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

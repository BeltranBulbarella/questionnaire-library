import React, {ReactElement, ReactNode} from 'react';

interface RenderProps {
    children: ReactNode;

    [key: string]: any; // You can define any other props that your components might need
}
interface BooleanQuestionProps {
    question: string;
    onAnswer: (answer: boolean) => void;
    config?: {
        Button?: (props: RenderProps) => ReactElement;
        Text?: (props: RenderProps) => ReactElement;
    };
    customStyles?: {
        container?: React.CSSProperties;
        text?: React.CSSProperties;
        button?: React.CSSProperties;
    };
    topSlot?: ReactNode;
    middleSlot?: ReactNode;
    bottomSlot?: ReactNode;
}

export const BooleanQuestion: React.FC<BooleanQuestionProps> = ({
                                                                    question,
                                                                    onAnswer,
                                                                    config,
                                                                    customStyles,
                                                                    topSlot,
                                                                    middleSlot,
                                                                    bottomSlot,
                                                                }) => {
    // Using config for custom components or default if not provided
    const Button = config?.Button || ((props) => <button style={customStyles?.button} {...props} />);
    const Text = config?.Text || ((props) => <p style={customStyles?.text} {...props} />);

    return (
        <div style={customStyles?.container}>
            {topSlot || <Text>{question}</Text>}
            {middleSlot || (
                <>
                    <Button onClick={() => onAnswer(true)}>True</Button>
                    <Button onClick={() => onAnswer(false)}>False</Button>
                </>
            )}
            {bottomSlot}
        </div>
    );
};
// Users can provide custom components via the config prop.
// Users can customize the styles of the default components via the customStyles prop.
// Users can replace parts of the layout by providing content for the topSlot, middleSlot, and bottomSlot.
// This structure provides a good balance of flexibility and simplicity for users.
// They can either quickly style the default components or replace them entirely, as needed.

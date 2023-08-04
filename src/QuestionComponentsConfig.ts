export interface QuestionComponentsConfig {
    Button?: React.ComponentType<ButtonProps>;
    Text?: React.ComponentType<TextProps>;
}

//define the props that your library expects the components to accept
// to allow users to customize components

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

interface TextProps {
    children: React.ReactNode;
}

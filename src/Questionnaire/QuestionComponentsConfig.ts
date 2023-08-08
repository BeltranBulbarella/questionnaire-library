export interface QuestionComponentsConfig {
    Button?: React.ComponentType<CustomButtonProps>;
    Text?: React.ComponentType<CustomTextProps>;
}

//define the props that your library expects the components to accept
// to allow users to customize components

interface CustomButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    customProps?: any;
}

interface CustomTextProps {
    children: React.ReactNode;
    customProps?: any;
}

import {getRenderConfig} from "../config";
import {statusBarContainerStyle} from "../styles/CommonComponentStyles";

interface StatusBarProps {
    current: number;
    total: number;
}

export const StatusBar: React.FC<StatusBarProps> = ({current, total}) => {
    const percentage = ((current + 1) / total) * 100;

    const {StatusBarContainer = 'div', ProgressBar = 'div', StatusText = 'span'} = getRenderConfig();

    return (
        <StatusBarContainer style={statusBarContainerStyle}>
            <ProgressBar style={{width: `${percentage}%`, backgroundColor: 'blue', height: '20px'}}/>
            <StatusText style={{marginLeft: '10px'}}>{current + 1} / {total}</StatusText>
        </StatusBarContainer>
    );
}

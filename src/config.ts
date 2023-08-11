import {CustomComponents} from "./types/types";


let customComponents: CustomComponents = {};

export const setCustomComponents = (components: CustomComponents) => {
    customComponents = components;
}

export const getCustomComponents = (): CustomComponents => {
    return customComponents;
}

export interface RenderConfig {
    // Input?: RenderInput;
    // Button?: RenderButton;
    // Text?: RenderText;
    // Div?: RenderDiv;
    // Label?: RenderLabel;

}

let renderConfig: RenderConfig = {};

export const setRenderConfig = (config: RenderConfig) => {
    renderConfig = config;
}

export const getRenderConfig = (): RenderConfig => {
    return renderConfig;
}

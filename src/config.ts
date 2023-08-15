import {FC} from 'react';

import {CustomComponents} from "./types/types";

let customComponents: CustomComponents = {};

export const setCustomComponents = (components: CustomComponents) => {
    customComponents = components;
}

export const getCustomComponents = (): CustomComponents => {
    return customComponents;
}

export interface RenderConfig {
    Input?: FC<any>;
    Button?: FC<any>;
    Label?: FC<any>;
    Div?: FC<any>;
    Text?: FC<any>;
    PrevButton?: FC<any>;
    NextButton?: FC<any>;
}

let renderConfig: RenderConfig = {};

export const setRenderConfig = (config: RenderConfig) => {
    renderConfig = config;
}

export const getRenderConfig = (): RenderConfig => {
    return renderConfig;
}


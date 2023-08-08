import {CustomComponents} from "./types";


let customComponents: CustomComponents = {};

export const setCustomComponents = (components: CustomComponents) => {
    customComponents = components;
}

export const getCustomComponents = (): CustomComponents => {
    return customComponents;
}

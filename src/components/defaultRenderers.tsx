import React from 'react';
import {RenderInput, RenderLabel, RenderButton} from "../types/types";

export const DefaultButton: RenderButton = (props, children) => <button {...props}>{children}</button>;
export const DefaultInput: RenderInput = (props) => <input {...props} />;
export const DefaultDiv: RenderInput = (props) => <div {...props} />;
export const DefaultLabel: RenderLabel = (props, children) => <label {...props}>{children}</label>;

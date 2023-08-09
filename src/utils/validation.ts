import {Validation} from "../types";

export const handleTextInputValidation = (value: string, validation: Validation | undefined): string | null => {
    if (!validation) return null;

    if (validation.minLength && value.length < validation.minLength) {
        return `Minimum length is ${validation.minLength}`;
    }

    if (validation.maxLength && value.length > validation.maxLength) {
        return `Maximum length is ${validation.maxLength}`;
    }

    if (validation.regex && !validation.regex.test(value)) {
        return `Input doesn't match the required pattern.`;
    }

    if (validation.custom) {
        return validation.custom(value);
    }

    return null; // No validation errors
}

export type CustomValidationMap = {
    [key: string]: any; // or a more specific type if you can narrow it down
};

export type NumericValidation<CustomValidations = CustomValidationMap> = CustomValidations & {
    max?: number;
    min?: number;
    onlyPositiveNumbers?: boolean;
    phoneNum?: boolean;
    isWholeNumber?: boolean;
};

export const handleNumericInputValidation = <CustomValidations = {}>(
    value: number | null,
    validation: NumericValidation<CustomValidations> | undefined
): string | null => {
    if (!validation || value === null) return null;

    if (validation.min && value < validation.min) {
        return `Minimum value is ${validation.min}`;
    }

    if (validation.max && value > validation.max) {
        return `Maximum value is ${validation.max}`;
    }

    if (validation.onlyPositiveNumbers && value < 0) {
        return `Only positive numbers are allowed.`;
    }

    if (validation.phoneNum && !/^\d{10}$/.test(String(value))) {
        return `Input should be a 10-digit phone number.`;
    }

    if (validation.isWholeNumber && !Number.isInteger(value)) {
        return `Only whole numbers are allowed.`;
    }

    return null; // No validation errors
}

export type InputValidation<CustomValidations = CustomValidationMap> = CustomValidations & {
    minLength?: number;
    maxLength?: number;
    regex?: RegExp;
    custom?: (value: any) => string | null;
}

export const handleTextInputValidation = <CustomValidations = {}>(
    value: string,
    validation: InputValidation<CustomValidations> | undefined
): string | null => {
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

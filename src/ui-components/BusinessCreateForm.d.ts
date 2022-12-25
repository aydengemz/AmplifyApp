/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessCreateFormInputValues = {
    name?: string;
    money?: number;
    workers?: number;
    isOpen?: boolean;
};
export declare type BusinessCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    money?: ValidationFunction<number>;
    workers?: ValidationFunction<number>;
    isOpen?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessCreateFormOverridesProps = {
    BusinessCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    money?: FormProps<TextFieldProps>;
    workers?: FormProps<TextFieldProps>;
    isOpen?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BusinessCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessCreateFormInputValues) => BusinessCreateFormInputValues;
    onSuccess?: (fields: BusinessCreateFormInputValues) => void;
    onError?: (fields: BusinessCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BusinessCreateFormInputValues) => BusinessCreateFormInputValues;
    onValidate?: BusinessCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessCreateForm(props: BusinessCreateFormProps): React.ReactElement;

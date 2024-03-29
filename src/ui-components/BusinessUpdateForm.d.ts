/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Business } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessUpdateFormInputValues = {
    name?: string;
    money?: number;
    workers?: number;
    isOpen?: boolean;
};
export declare type BusinessUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    money?: ValidationFunction<number>;
    workers?: ValidationFunction<number>;
    isOpen?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessUpdateFormOverridesProps = {
    BusinessUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    money?: FormProps<TextFieldProps>;
    workers?: FormProps<TextFieldProps>;
    isOpen?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BusinessUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    business?: Business;
    onSubmit?: (fields: BusinessUpdateFormInputValues) => BusinessUpdateFormInputValues;
    onSuccess?: (fields: BusinessUpdateFormInputValues) => void;
    onError?: (fields: BusinessUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BusinessUpdateFormInputValues) => BusinessUpdateFormInputValues;
    onValidate?: BusinessUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessUpdateForm(props: BusinessUpdateFormProps): React.ReactElement;

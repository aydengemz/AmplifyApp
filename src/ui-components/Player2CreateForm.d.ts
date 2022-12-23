/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Player2CreateFormInputValues = {
    username?: string;
    clicks?: number;
};
export declare type Player2CreateFormValidationValues = {
    username?: ValidationFunction<string>;
    clicks?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Player2CreateFormOverridesProps = {
    Player2CreateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    clicks?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Player2CreateFormProps = React.PropsWithChildren<{
    overrides?: Player2CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Player2CreateFormInputValues) => Player2CreateFormInputValues;
    onSuccess?: (fields: Player2CreateFormInputValues) => void;
    onError?: (fields: Player2CreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: Player2CreateFormInputValues) => Player2CreateFormInputValues;
    onValidate?: Player2CreateFormValidationValues;
} & React.CSSProperties>;
export default function Player2CreateForm(props: Player2CreateFormProps): React.ReactElement;

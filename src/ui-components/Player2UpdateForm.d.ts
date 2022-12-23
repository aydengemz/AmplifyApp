/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Player2 } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Player2UpdateFormInputValues = {
    username?: string;
    clicks?: number;
};
export declare type Player2UpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    clicks?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Player2UpdateFormOverridesProps = {
    Player2UpdateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    clicks?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Player2UpdateFormProps = React.PropsWithChildren<{
    overrides?: Player2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    player2?: Player2;
    onSubmit?: (fields: Player2UpdateFormInputValues) => Player2UpdateFormInputValues;
    onSuccess?: (fields: Player2UpdateFormInputValues) => void;
    onError?: (fields: Player2UpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: Player2UpdateFormInputValues) => Player2UpdateFormInputValues;
    onValidate?: Player2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Player2UpdateForm(props: Player2UpdateFormProps): React.ReactElement;

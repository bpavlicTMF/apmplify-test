/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, CardProps, CheckboxFieldProps, RadioProps, SliderFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component1OverridesProps = {
    Component1?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Radio?: PrimitiveOverrideProps<RadioProps>;
    SliderField?: PrimitiveOverrideProps<SliderFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Component1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component1OverridesProps | undefined | null;
}>;
export default function Component1(props: Component1Props): React.ReactElement;

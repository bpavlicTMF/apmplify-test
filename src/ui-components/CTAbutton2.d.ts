/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CTAbutton2OverridesProps = {
    CTAbutton2?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CTAbutton2Props = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: CTAbutton2OverridesProps | undefined | null;
}>;
export default function CTAbutton2(props: CTAbutton2Props): React.ReactElement;

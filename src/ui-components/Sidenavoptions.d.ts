/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidenavoptionsOverridesProps = {
    Sidenavoptions?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4250"?: PrimitiveOverrideProps<FlexProps>;
    "Open Digital Framework (ODF)"?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SidenavoptionsProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: SidenavoptionsOverridesProps | undefined | null;
}>;
export default function Sidenavoptions(props: SidenavoptionsProps): React.ReactElement;

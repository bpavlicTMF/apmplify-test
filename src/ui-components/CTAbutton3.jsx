/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function CTAbutton3(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Button: { color: "rgba(255,255,255,1)" },
        CTAbutton3: { backgroundColor: "rgba(26,39,70,1)" },
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { Button: {}, CTAbutton3: {} },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(26,39,70,1)"
      borderRadius="52px"
      padding="14px 29px 14px 29px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "CTAbutton3")}
      {...rest}
    >
      <Text
        fontFamily="Gotham"
        fontSize="14px"
        fontWeight="700"
        color="rgba(26,39,70,1)"
        textTransform="uppercase"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Button"
        {...getOverrideProps(overrides, "Button")}
      ></Text>
    </Flex>
  );
}

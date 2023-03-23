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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Sidenavoptions(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Open Digital Framework (ODF)": {},
        Vector: {},
        "Frame 4250": {},
        Sidenavoptions: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Open Digital Framework (ODF)": {},
        Vector: {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 5.6572265625,
            height: 8.485992431640625,
          },
        },
        "Frame 4250": {},
        Sidenavoptions: { backgroundColor: "rgba(210,212,218,1)" },
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="267px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="12px 12px 12px 12px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Sidenavoptions")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 4250")}
      >
        <Text
          fontFamily="Gotham"
          fontSize="14px"
          fontWeight="400"
          color="rgba(26,39,70,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="237.34px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Open Digital Framework (ODF) "
          {...getOverrideProps(overrides, "Open Digital Framework (ODF)")}
        ></Text>
        <Icon
          width="8.49px"
          height="5.66px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 5.6572265625,
            height: 8.48602294921875,
          }}
          paths={[
            {
              d: "M4.243 5.657L0 1.414L1.415 0L4.243 2.829L7.071 0L8.486 1.414L4.243 5.657Z",
              fill: "rgba(131,142,147,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </Flex>
    </Flex>
  );
}

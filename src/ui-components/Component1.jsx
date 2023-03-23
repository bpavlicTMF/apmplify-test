/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Card,
  CheckboxField,
  Radio,
  SliderField,
  View,
} from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="833px"
      height="593px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component1")}
      {...rest}
    >
      <Card
        width="833px"
        height="593px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        variation="default"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <Badge
        width="283px"
        height="121px"
        position="absolute"
        top="10.79%"
        bottom="68.8%"
        left="9%"
        right="57.02%"
        size="default"
        variation="default"
        children="Badge"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <CheckboxField
        width="unset"
        height="unset"
        position="absolute"
        top="14.84%"
        bottom="80.1%"
        left="53.3%"
        right="31.45%"
        label="Checkbox "
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
      <Radio
        width="289px"
        height="130px"
        position="absolute"
        top="40.47%"
        bottom="37.61%"
        left="10.68%"
        right="54.62%"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        children="Radio Button"
        {...getOverrideProps(overrides, "Radio")}
      ></Radio>
      <SliderField
        width="401px"
        height="121px"
        position="absolute"
        top="62.39%"
        bottom="17.2%"
        left="5.16%"
        right="46.7%"
        label="Label"
        defaultValue="50"
        isDisabled={false}
        labelHidden={false}
        isValueHidden={false}
        size="Default"
        {...getOverrideProps(overrides, "SliderField")}
      ></SliderField>
      <Button
        width="260px"
        height="96px"
        position="absolute"
        top="75.72%"
        bottom="8.09%"
        left="54.74%"
        right="14.05%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Default Button"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}

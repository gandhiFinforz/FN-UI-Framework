import { StoryFn, Meta } from "@storybook/react";
import FNOtpInput, { FNOtpInputProps } from "./FNOtpInput";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
export default {
  title: "Components/Form/OtpInput",
  component: FNOtpInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    disabled: { control: "boolean" },
    mask: { control: "boolean" },
    readonly: { control: "boolean" },
    integerOnly: { control: "boolean" },
    variant: { control: { type: "select", options: ["outlined", "filled"] } },
    length: { control: "number" },
    helpText: { control: "text" },
  },
} as Meta;

const Template: StoryFn<FNOtpInputProps> = (args) => <FNOtpInput {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Enter OTP",
  length: 6,
  helpText: "Please enter the OTP sent to your mobile number",
};

export const Disabled = Template.bind({});
Disabled.args = {
  length: 6,
  disabled: true,
};

export const WithMask = Template.bind({});
WithMask.args = {
  length: 6,
  mask: true,
};

export const WithOutMask = Template.bind({});
WithOutMask.args = {
  length: 6,
  mask: false,
};

export const Readonly = Template.bind({});
Readonly.args = {
  length: 6,
  readonly: true,
};

export const IntegerOnly = Template.bind({});
IntegerOnly.args = {
  length: 6,
  integerOnly: true,
};

export const StringValuesAllowed = Template.bind({});
StringValuesAllowed.args = {
  length: 6,
  integerOnly: false,
};

export const VariantOutlined = Template.bind({});
VariantOutlined.args = {
  label: "Enter OTP",
  length: 6,
  variant: "outlined",
};

export const VariantFilled = Template.bind({});
VariantFilled.args = {
  length: 6,
  variant: "filled",
};

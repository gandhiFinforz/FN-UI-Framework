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
    value: {
      control: "text",
      description:
        "The value of the input field. This is the text that the user enters or that is set programmatically.",
    },
    label: {
      control: "text",
      description:
        "The label for the input field. This is typically displayed above or next to the input field to indicate what the user should enter.",
    },
    disabled: {
      control: "boolean",
      description:
        "If set to true, the input field will be disabled, meaning it cannot be interacted with or focused. Disabled fields typically appear grayed out.",
    },
    mask: {
      control: "boolean",
      description:
        "If set to true, the input field will use a mask to control what type of input is allowed. This can be used for formatted input like phone numbers or dates.",
    },
    readonly: {
      control: "boolean",
      description:
        "If set to true, the input field will be read-only. The user can see the field's value but cannot modify it.",
    },
    integerOnly: {
      control: "boolean",
      description:
        "If set to true, the input field will only accept integer values. This can be used to restrict input to whole numbers only.",
    },
    variant: {
      control: { type: "select", options: ["outlined", "filled"] },
      description:
        "The visual style of the input field. `outlined` typically means the field has a border around it, while `filled` means the field has a background color that makes it look filled.",
    },
    length: {
      control: "number",
      description:
        "The maximum length of the input field. This restricts the number of characters that can be entered.",
    },
    helpText: {
      control: "text",
      description:
        "The help text associated with the input field. This is typically displayed below the field to provide additional information or instructions to the user.",
    },
  },
} as Meta;

const Template: StoryFn<FNOtpInputProps> = (args) => <FNOtpInput {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Enter OTP",
  length: 6
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

import { StoryFn, Meta } from "@storybook/react";
import FNPhoneInput, { FNPhoneInputProps } from "./FNPhoneInput";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "react-phone-input-2/lib/style.css";

export default {
  title: "Components/Form/PhoneInput",
  component: FNPhoneInput,
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
    readonly: {
      control: "boolean",
      description:
        "If set to true, the input field will be read-only. The user can see the field's value but cannot modify it.",
    },
    variant: {
      control: { type: "select", options: ["outlined", "filled"] },
      description:
        "The visual style of the input field. `outlined` typically means the field has a border around it, while `filled` means the field has a background color that makes it look filled.",
    },
    helpText: {
      control: "text",
      description:
        "The help text associated with the input field. This is typically displayed below the field to provide additional information or instructions to the user.",
    },
    placeholder: {
      control: "text",
      description:
        "The placeholder text for the input field. This is the text displayed when the input field is empty.",
    },
    inputProps: {
      control: "object",
      description:
        "Additional props to be passed to the input element, such as `required` and `id`.",
    },
    showHelpText: {
      control: "boolean",
      description:
        "If set to true, the help text will be displayed below the input field.",
    },
  },
} as Meta;

const Template: StoryFn<FNPhoneInputProps> = (args) => (
  <FNPhoneInput {...args} />
);

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Enter Phone Number",
  value: "",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "",
  disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
  value: "",
  readonly: true,
};

export const VariantOutlined = Template.bind({});
VariantOutlined.args = {
  label: "Enter Phone Number",
  value: "",
  variant: "outlined",
};

export const VariantFilled = Template.bind({});
VariantFilled.args = {
  value: "",
  variant: "filled",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  value: "",
  placeholder: "Enter your phone number",
};

export const WithHelpText = Template.bind({});
WithHelpText.args = {
  value: "",
  helpText: "Please enter your phone number.",
  showHelpText: true,
};

export const WithInputProps = Template.bind({});
WithInputProps.args = {
  value: "",
  inputProps: {
    required: true,
    id: "phone-input",
  },
};

export const FullExample = Template.bind({});
FullExample.args = {
  label: "Enter Phone Number",
  value: "",
  disabled: false,
  readonly: false,
  variant: "outlined",
  helpText: "Please enter your phone number.",
  placeholder: "Enter your phone number",
  inputProps: {
    required: true,
    id: "phone-input",
  },
  showHelpText: true,
};

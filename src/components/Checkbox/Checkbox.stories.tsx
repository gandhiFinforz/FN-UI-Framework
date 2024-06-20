import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import FNCheckbox, { PrimeCheckboxProps } from "./Checkbox";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"
export default {
  title: "Components/Checkbox",
  component: FNCheckbox,
  argTypes: {
    label: { control: "text", description: "Label for the checkbox." },
    tooltip: { control: "text", description: "Content of the tooltip." },
    tooltipOptions: {
      control: "object",
      description: "Configuration of the tooltip.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled.",
    },
    invalid: {
      control: "boolean",
      description: "Whether the checkbox is in an invalid state.",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked.",
    },
    name: {
      control: "text",
      description: "Name attribute of the checkbox input.",
    },
    value: {
      control: "text",
      description: "Value attribute of the checkbox input.",
    },
    required: {
      control: "boolean",
      description: "Whether the checkbox is required.",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the checkbox is read-only.",
    },
    icon: { control: "text", description: "Name of the icon for checkbox." },
    inputId: {
      control: "text",
      description: "ID attribute of the checkbox input.",
    },
  },
} as Meta;

const Template: StoryFn<PrimeCheckboxProps> = (args) => (
  <FNCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Remember Me",
  checked: false,
  labelClassName:'ml-2',
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Remember Me",
  checked: true,
  labelClassName:'ml-2',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  checked: false,
  disabled: true,
  labelClassName:'ml-2',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: "Invalid Checkbox",
  checked: false,
  invalid: true,
  labelClassName:'ml-2',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Checkbox with Tooltip",
  checked: false,
  tooltip: "Check this box",
  tooltipOptions: { position: "top" },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Checkbox with Icon",
  checked: false,
  icon: "pi pi-check", 
  labelClassName:'ml-2',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: "Read-only Checkbox",
  checked: false,
  readOnly: true,
  labelClassName:'ml-2',
};

export const Required = Template.bind({});
Required.args = {
  label: "Required Checkbox",
  checked: false,
  required: true,
  labelClassName:'ml-2',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  label: "Custom Style Checkbox",
  checked: false,
  labelClassName:'ml-2 font-semibold text-blue-500',
};

export const LargeCheckbox = Template.bind({});
LargeCheckbox.args = {
  label: "Large Checkbox",
  checked: false,
  className: 'ml-2 text-lg',
  labelClassName:'ml-2 text-lg',
};
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import FNCheckbox, { PrimeCheckboxProps } from "./Checkbox";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

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
    styleForLabel: {
      control: "object",
      description: "Style object for the label of checkbox.",
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
  styleForLabel: { marginLeft: "8px" },

};

export const Checked = Template.bind({});
Checked.args = {
  label: "Remember Me",
  checked: true,
  styleForLabel: { marginLeft: "8px" },

};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  checked: false,
  disabled: true,
  styleForLabel: { marginLeft: "8px" },

};

export const Invalid = Template.bind({});
Invalid.args = {
  label: "Invalid Checkbox",
  checked: false,
  invalid: true,
  styleForLabel: { marginLeft: "8px" },

};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Checkbox with Tooltip",
  checked: false,
  tooltip: "Check this box",
  tooltipOptions: { position: "top" },
  styleForLabel: { marginLeft: "8px" },

};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Checkbox with Icon",
  checked: false,
  icon: "pi pi-check", 
  styleForLabel: { marginLeft: "8px" },

};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: "Read-only Checkbox",
  checked: false,
  readOnly: true,
  styleForLabel: { marginLeft: "8px" },

};

export const Required = Template.bind({});
Required.args = {
  label: "Required Checkbox",
  checked: false,
  required: true,
  styleForLabel: { marginLeft: "8px" },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  label: "Custom Style Checkbox",
  checked: false,
  styleForLabel: { marginLeft: "10px", fontWeight: "bold", color: "blue" },
};

export const LargeCheckbox = Template.bind({});
LargeCheckbox.args = {
  label: "Large Checkbox",
  checked: false,
  styleForLabel: { fontSize: "1.2rem" },
};

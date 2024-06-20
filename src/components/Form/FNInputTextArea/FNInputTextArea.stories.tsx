import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css"; // import theme
import FNTextArea, { FNTextAreaProps } from "./FNInputTextArea";

export default {
  title: "Components/Form/TextArea",
  component: FNTextArea,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the text area field.",
    },
    className: {
      control: "text",
      description: "Custom CSS class name for styling the component.",
    },
    disabled: {
      control: "boolean",
      description: "When true, the component is disabled.",
    },
    invalid: {
      control: "boolean",
      description:
        "When true, applies the invalid state style to the component.",
    },
    keyfilter: {
      control: "text",
      description: "Defines the format of the keys to block.",
    },
    tooltip: {
      control: "text",
      description: "Content of the tooltip.",
    },
    tooltipOptions: {
      control: "object",
      description: "Configuration options for the tooltip.",
    },
    unstyled: {
      control: "boolean",
      description: "When true, removes component related styles in the core.",
    },
    validateOnly: {
      control: "boolean",
      description:
        "When true, input is validated internally against the regular expression instead of blocking keys.",
    },
    value: {
      control: "text",
      description: "The value of the text area field.",
    },
    variant: {
      control: { type: "select", options: ["filled", "outlined"] },
      description: "Specifies the variant of the text area field.",
    },
    pt: {
      control: "object",
      description: "Attributes to pass to DOM elements inside the component.",
    },
    ptOptions: {
      control: "object",
      description: "Configuration options for passthrough (pt).",
    },
  },
} as Meta;

const Template: StoryFn<FNTextAreaProps> = (args) => (
  <FNTextArea {...args} />
);

/**
 * Default story: Renders the TextAreaField with default props.
 */
export const Default = Template.bind({});
Default.args = {
  label: "Description",
  className: "default-class",
};

/**
 * WithValue story: Renders the TextAreaField with an initial value.
 */
export const WithValue = Template.bind({});
WithValue.args = {
  label: "Description",
  value: "Initial Value",
  className: "default-class",
};

/**
 * Invalid story: Renders the TextAreaField in an invalid state.
 */
export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
  className: "default-class",
};

/**
 * Disabled story: Renders the TextAreaField in a disabled state.
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  className: "default-class",
};

/**
 * WithClassName story: Renders the TextAreaField with a custom class name.
 */
export const WithClassName = Template.bind({});
WithClassName.args = {
  className: "custom-textarea",
};

/**
 * WithTooltip story: Renders the TextAreaField with a tooltip.
 */
export const WithTooltip = Template.bind({});
WithTooltip.args = {
  tooltip: "Enter description here",
  tooltipOptions: { position: "top" },
  className: "default-class",
};

/**
 * Unstyled story: Renders the TextAreaField without additional styles.
 */
export const Unstyled = Template.bind({});
Unstyled.args = {
  unstyled: true,
  className: "",
};

/**
 * WithKeyFilter story: Renders the TextAreaField with a key filter to allow only numbers.
 */
export const WithKeyFilter = Template.bind({});
WithKeyFilter.args = {
  keyfilter: /[0-9]/,
  className: "default-class",
};

/**
 * ValidateOnly story: Renders the TextAreaField with validateOnly prop enabled.
 */
export const ValidateOnly = Template.bind({});
ValidateOnly.args = {
  validateOnly: true,
  keyfilter: /[0-9]/,
  className: "default-class",
};

/**
 * WithVariant story: Renders the TextAreaField with the "filled" variant.
 */
export const WithVariant = Template.bind({});
WithVariant.args = {
  variant: "filled",
  className: "default-class",
};

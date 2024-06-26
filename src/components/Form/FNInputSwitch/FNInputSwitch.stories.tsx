import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FNInputSwitch, { FNInputSwitchProps } from './FNInputSwitch';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css'; // import theme

export default {
  title: "Components/Form/InputSwitch",
  component: FNInputSwitch,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the input switch.",
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
      description: "When true, applies the invalid state style to the component.",
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
    checked: {
      control: "boolean",
      description: "The checked state of the input switch.",
    },
    helpText: {
      control: "text",
      description: "Helper text displayed below the input switch.",
    },
    onChange: {
      action: "changed",
      description: "Callback function to handle the change event.",
    },
    onBlur: {
      action: "blurred",
      description: "Callback function to handle the blur event.",
    },
  },
} as Meta;

const Template: StoryFn<FNInputSwitchProps> = (args) => <FNInputSwitch {...args} />;

/**
 * Default story: Renders the FNInputSwitch with default props.
 */
export const Default = Template.bind({});
Default.args = {
  label: 'Default Input Switch',
  className: 'default-class',
  checked: false,
};

/**
 * Checked story: Renders the FNInputSwitch in a checked state.
 */
export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked Input Switch',
  className: 'default-class',
  checked: true,
};

/**
 * Invalid story: Renders the FNInputSwitch in an invalid state.
 */
export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
  className: 'default-class',
};

/**
 * Disabled story: Renders the FNInputSwitch in a disabled state.
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  className: 'default-class',
};

/**
 * WithClassName story: Renders the FNInputSwitch with a custom class name.
 */
export const WithClassName = Template.bind({});
WithClassName.args = {
  className: 'custom-input-switch',
};

/**
 * WithTooltip story: Renders the FNInputSwitch with a tooltip.
 */
export const WithTooltip = Template.bind({});
WithTooltip.args = {
  tooltip: 'This is a tooltip',
  tooltipOptions: { position: 'top' },
  className: 'default-class',
};

/**
 * Unstyled story: Renders the FNInputSwitch without additional styles.
 */
export const Unstyled = Template.bind({});
Unstyled.args = {
  unstyled: true,
  className: '',
};

/**
 * WithHelpText story: Renders the FNInputSwitch with helper text.
 */
export const WithHelpText = Template.bind({});
WithHelpText.args = {
  helpText: 'This is some helper text',
  className: 'default-class',
};

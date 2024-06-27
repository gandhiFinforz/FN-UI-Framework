import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FNInputNumber, { FNInputNumberProps } from './FNInputNumber';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';

export default {
  title: "Components/Form/InputNumber",
  component: FNInputNumber,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the input field.",
    },
    type: {
      control: {
        type: "select",
        options: [
          "ceil", "floor", "expand", "trunc", 
          "halfCeil", "halfFloor", "halfExpand", 
          "halfTrunc", "halfEven"
        ],
      },
      description: "Rounding mode for the input number.",
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
    size: {
      control: "number",
      description: "Specifies the size of the input field.",
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
    value: {
      control: "number",
      description: "The value of the input field.",
    },
    variant: {
      control: {
        type: "select",
        options: ["filled", "outlined"],
      },
      description: "Specifies the variant of the input field.",
    },
    pt: {
      control: "object",
      description: "Attributes to pass to DOM elements inside the component.",
    },
    ptOptions: {
      control: "object",
      description: "Configuration options for passthrough (pt).",
    },
    helpText: {
      control: "text",
      description: "Help text to display below the input field.",
    },
    minFractionDigits: {
      control: "number",
      description: "Minimum number of fraction digits to show.",
    },
    locale: {
      control: "text",
      description: "Locale for number formatting.",
    },
    inputId: {
      control: "text",
      description: "ID for the input element.",
    },
    mode: {
      control: {
        type: "select",
        options: ["decimal", "currency"],
      },
      description: "Input mode for number formatting.",
    },
    currency: {
      control: "text",
      description: "Currency code for currency formatting.",
    },
    suffix: {
      control: "text",
      description: "Suffix to display after the value.",
    },
    prefix: {
      control: "text",
      description: "Prefix to display before the value.",
    },
    min: {
      control: "number",
      description: "Minimum value allowed.",
    },
    max: {
      control: "number",
      description: "Maximum value allowed.",
    },
    buttonLayout: {
      control: {
        type: "select",
        options: ["horizontal", "vertical", "stacked"],
      },
      description: "Layout of increment and decrement buttons.",
    },
  },
} as Meta;

const Template: StoryFn<FNInputNumberProps> = (args) => <FNInputNumber {...args} />;

/**
 * Default story: Renders the FNInputNumber with default props.
 */
export const Default = Template.bind({});
Default.args = {
  label: 'inputNumber.label',
  className: 'default-class',
};

/**
 * WithValue story: Renders the FNInputNumber with an initial value.
 */
export const WithValue = Template.bind({});
WithValue.args = {
  label: 'inputNumber.label',
  value: 123,
  className: 'default-class',
};

/**
 * Invalid story: Renders the FNInputNumber in an invalid state.
 */
export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
  className: 'default-class',
};

/**
 * Disabled story: Renders the FNInputNumber in a disabled state.
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  className: 'default-class',
};

/**
 * WithClassName story: Renders the FNInputNumber with a custom class name.
 */
export const WithClassName = Template.bind({});
WithClassName.args = {
  className: 'custom-input',
};

/**
 * WithSize story: Renders the FNInputNumber with a specified size.
 */
export const WithSize = Template.bind({});
WithSize.args = {
  size: 5,
  className: 'default-class',
};

/**
 * WithTooltip story: Renders the FNInputNumber with a tooltip.
 */
export const WithTooltip = Template.bind({});
WithTooltip.args = {
  tooltip: 'inputNumber.tooltip',
  tooltipOptions: { position: 'top' },
  className: 'default-class',
};

/**
 * Unstyled story: Renders the FNInputNumber without additional styles.
 */
export const Unstyled = Template.bind({});
Unstyled.args = {
  unstyled: true,
  className: '',
};

/**
 * WithMinAndMax story: Renders the FNInputNumber with min and max values.
 */
export const WithMinAndMax = Template.bind({});
WithMinAndMax.args = {
  min: 0,
  max: 100,
  className: 'default-class',
};

/**
 * WithCurrencyMode story: Renders the FNInputNumber in currency mode.
 */
export const WithCurrencyMode = Template.bind({});
WithCurrencyMode.args = {
  mode: 'currency',
  currency: 'USD',
  className: 'default-class',
};

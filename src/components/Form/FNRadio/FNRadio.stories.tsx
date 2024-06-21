import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Formik, Field, FieldProps } from 'formik';
import RadioField, { RadioFieldProps } from '../FNRadio/FNRadio'; // Adjust the import path accordingly

export default {
  title: 'Components/Form/RadioField',
  component: RadioField,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: 'text',
      description: 'Optional CSS class to apply to the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    name: {
      control: 'text',
      description: 'The name of the radio group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    options: {
      control: 'object',
      description: 'The options for the radio group',
      table: {
        type: { summary: 'Array<{ value: string, label: string, disabled?: boolean, tooltip?: string, variant?: string }>' },
        defaultValue: { summary: '[]' },
      },
    },
    variant: {
      control: 'radio',
      options: ['outlined', 'filled'],
      description: 'The variant of the radio buttons',
      table: {
        type: { summary: '"outlined" | "filled"' },
        defaultValue: { summary: 'outlined' },
      },
    },
    inputRef: {
      control: 'object',
      description: 'Reference to the underlying input element',
      table: {
        type: { summary: 'Ref<HTMLInputElement>' },
        defaultValue: { summary: 'null' },
      },
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip text for the radio group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    tooltipOptions: {
      control: 'object',
      description: 'Options for customizing the tooltip',
      table: {
        type: { summary: 'TooltipOptions' },
        defaultValue: { summary: '{}' },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Whether the radio button should auto-focus',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    inputId: {
      control: 'text',
      description: 'ID for the input element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the input is invalid',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    unstyled: {
      control: 'boolean',
      description: 'Whether to remove default styles',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    initialValue: {
      control: 'text',
      description: 'The initial value of the radio group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },

} as Meta;

interface TemplateProps extends RadioFieldProps {
  initialValue: string;
}

const Template: StoryFn<TemplateProps> = (args) => (
  <Formik
    initialValues={{ [args.name]: args.initialValue || '' }}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {() => (
      <form>
        <Field name={args.name}>
          {({ field, form, meta }: FieldProps) => (
            <RadioField {...args} field={field} form={form} meta={meta} />
          )}
        </Field>
      </form>
    )}
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  initialValue: '',
};

export const DisabledOption = Template.bind({});
DisabledOption.args = {
  name: 'option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2', disabled: true },
    { value: 'option3', label: 'Option 3' },
  ],
  initialValue: '',
};

export const WithTooltips = Template.bind({});
WithTooltips.args = {
  name: 'option',
  options: [
    { value: 'option1', label: 'Option 1', tooltip: 'This is option 1' },
    { value: 'option2', label: 'Option 2', tooltip: 'This is option 2' },
    { value: 'option3', label: 'Option 3', tooltip: 'This is option 3' },
  ],
  initialValue: '',
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  name: 'option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  initialValue: 'option2',
};

export const OutlinedVariant = Template.bind({});
OutlinedVariant.args = {
  name: 'option',
  options: [
    { value: 'option1', label: 'Option 1', variant: 'outlined' },
    { value: 'option2', label: 'Option 2', variant: 'outlined' },
    { value: 'option3', label: 'Option 3', variant: 'outlined' },
  ],
  initialValue: '',
};

export const FilledVariant = Template.bind({});
FilledVariant.args = {
  name: 'option',
  options: [
    { value: 'option1', label: 'Option 1', variant: 'filled' },
    { value: 'option2', label: 'Option 2', variant: 'filled' },
    { value: 'option3', label: 'Option 3', variant: 'filled' },
  ],
  initialValue: '',
};

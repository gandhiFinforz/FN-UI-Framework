import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Formik, Field } from 'formik';
import { useField } from 'formik';
import FNRadioField, { RadioFieldProps } from './FNRadio'; // Adjust the import path accordingly

export default {
  title: 'Components/Form/RadioField',
  component: FNRadioField,
  tags: ["autodocs"],
  argTypes: {
    className: { control: 'text' },
    name: { control: 'text' },
    options: {
      control: 'object',
      defaultValue: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ],
      description: 'Options for the radio buttons',
      table: {
        type: {
          summary: 'OptionRadioProps[]',
          detail: `
            interface OptionRadioProps {
              value: string;
              label: string;
              disabled?: boolean;
              autoFocus?: boolean;
              checked?: boolean;
              children?: string;
              inputId?: string;
              inputRef?: Ref<HTMLInputElement>;
              invalid?: boolean;
              pt?: RadioButtonPassThroughOptions;
              ptOptions?: PassThroughOptions;
              readonly?: boolean;
              required?: boolean;
              tooltip?: string | any;
              tooltipOptions?: TooltipOptions;
              unstyled?: boolean;
              variant?: "outlined" | "filled";
            }
          `
        }
      }
    },
    initialValue: { control: 'text' },
    helpText: { control: 'text' },
    error: { control: 'text' }
  }
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
          {({ field, form, meta }: any) => (
            <FNRadioField
              {...args}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={meta.touched && meta.error ? meta.error : ''}
            />
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



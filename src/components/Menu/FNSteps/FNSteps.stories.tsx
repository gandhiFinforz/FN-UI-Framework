import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FNSteps, { StepsProps } from './FNSteps';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css'; // import theme

export default {
  title: 'Components/Menu/Steps',
  component: FNSteps,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom CSS class name for styling the component.',
    },
    model: {
      control: 'object',
      description: 'Array of steps to be displayed in the Steps component.',
    },
    initialIndex: {
      control: 'number',
      description: 'Initial index of the active step.',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback function when a step is selected.',
    },
    readOnly: {
      control: 'boolean',
      description: 'When true, the steps are read-only and cannot be interacted with.',
    },
  },
} as Meta;

const Template: StoryFn<StepsProps> = (args) => <FNSteps {...args} />;

/**
 * Default story: Renders the StepsMenu with default props.
 */
export const Default = Template.bind({});
Default.args = {
  className: 'default-steps-class',
  model: [
    { label: 'Step 1', icon: 'pi pi-check' },
    { label: 'Step 2', icon: 'pi pi-check' },
    { label: 'Step 3', icon: 'pi pi-check' },
  ],
  initialIndex: 0,
};

/**
 * WithInitialIndex story: Renders the StepsMenu with an initial active index.
 */
export const WithInitialIndex = Template.bind({});
WithInitialIndex.args = {
  className: 'initial-index-steps-class',
  model: [
    { label: 'Step 1', icon: 'pi pi-check' },
    { label: 'Step 2', icon: 'pi pi-check' },
    { label: 'Step 3', icon: 'pi pi-check' },
  ],
  initialIndex: 1,
};

/**
 * ReadOnly story: Renders the StepsMenu in a read-only state.
 */
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  className: 'readonly-steps-class',
  model: [
    { label: 'Step 1', icon: 'pi pi-check' },
    { label: 'Step 2', icon: 'pi pi-check' },
    { label: 'Step 3', icon: 'pi pi-check' },
  ],
  initialIndex: 0,
  readOnly: true,
};

/**
 * WithCustomClassName story: Renders the StepsMenu with a custom class name.
 */
export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  className: 'custom-steps-class',
  model: [
    { label: 'Step 1', icon: 'pi pi-check' },
    { label: 'Step 2', icon: 'pi pi-check' },
    { label: 'Step 3', icon: 'pi pi-check' },
  ],
  initialIndex: 0,
};

/**
 * WithDisabledSteps story: Renders the StepsMenu with some steps disabled.
 */
export const WithDisabledSteps = Template.bind({});
WithDisabledSteps.args = {
  className: 'disabled-steps-class',
  model: [
    { label: 'Step 1', icon: 'pi pi-check', disabled: true },
    { label: 'Step 2', icon: 'pi pi-check' },
    { label: 'Step 3', icon: 'pi pi-check' },
  ],
  initialIndex: 1,
};

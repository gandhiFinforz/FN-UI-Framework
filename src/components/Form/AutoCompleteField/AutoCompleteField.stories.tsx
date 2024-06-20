import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AutoCompleteField, { AutoCompleteFieldProps } from "./AutoCompleteField";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";

export default {
  title: "Components/Form/AutoCompleteField",
  component: AutoCompleteField,
  tags: ["autodocs"],
  argTypes: {
    appendTo: {
      control: "text",
      description:
        "DOM element instance where the overlay panel should be mounted.",
    },
    autoFocus: {
      control: "boolean",
      description:
        "Specifies that the component should automatically get focus on load.",
    },
    autoHighlight: {
      control: "boolean",
      description: "Highlights the first item in the list by default.",
    },
    className: {
      control: "text",
      description: "Custom CSS class name for styling the component.",
    },
    delay: {
      control: "number",
      description: "Delay between keystrokes to wait before sending a query.",
    },
    disabled: {
      control: "boolean",
      description: "Specifies that the component should be disabled.",
    },
    dropdown: {
      control: "boolean",
      description: "Displays a button next to the input field when enabled.",
    },
    dropdownAriaLabel: {
      control: "text",
      description: "ARIA label for the dropdown button.",
    },
    dropdownAutoFocus: {
      control: "boolean",
      description:
        "Focus the input field when the dropdown button is clicked if enabled.",
    },
    dropdownIcon: {
      control: "object",
      description: "Icon of the dropdown.",
    },
    dropdownMode: {
      control: { type: "select", options: ["blank", "current"] },
      description: "Specifies the behavior dropdown button.",
    },
    emptyMessage: {
      control: "text",
      description: "Text to display when there is no data.",
    },
    field: {
      control: "text",
      description: "Field of a suggested object to resolve and display.",
    },
    forceSelection: {
      control: "boolean",
      description:
        "Clears the manual input if it does not match the suggestions.",
    },
    id: {
      control: "text",
      description: "Unique identifier of the element.",
    },
    inputClassName: {
      control: "text",
      description: "Style class of the input field.",
    },
    inputId: {
      control: "text",
      description: "Identifier of the input element.",
    },
    inputRef: {
      control: "object",
      description: "Reference of the input element.",
    },
    inputStyle: {
      control: "object",
      description: "Inline style of the input field.",
    },
    invalid: {
      control: "boolean",
      description:
        "Specifies that the component should have invalid state style.",
    },
    itemTemplate: {
      control: "object",
      description: "Template of a list item.",
    },
    loadingIcon: {
      control: "object",
      description: "Icon of the loader.",
    },
    maxLength: {
      control: "number",
      description: "Maximum number of characters to initiate a search.",
    },
    minLength: {
      control: "number",
      description: "Minimum number of characters to initiate a search.",
    },
    multiple: {
      control: "boolean",
      description: "Specifies if multiple values can be selected.",
    },
    name: {
      control: "text",
      description: "Name of the input element.",
    },
    optionGroupChildren: {
      control: "text",
      description:
        "Property name or getter function that refers to the children options of option group.",
    },
    optionGroupLabel: {
      control: "text",
      description:
        "Property name or getter function to use as the label of an option group.",
    },
    optionGroupTemplate: {
      control: "object",
      description: "Template of an option group item.",
    },
    panelClassName: {
      control: "text",
      description: "Style class of the overlay panel element.",
    },
    panelFooterTemplate: {
      control: "object",
      description: "Template of the panel footer.",
    },
    panelStyle: {
      control: "object",
      description: "Inline style of the overlay panel element.",
    },
    placeholder: {
      control: "text",
      description: "Hint text for the input field.",
    },
    pt: {
      control: "object",
      description: "Attributes to pass to DOM elements inside the component.",
    },
    ptOptions: {
      control: "object",
      description:
        "Used to configure passthrough (pt) options of the component.",
    },
    readOnly: {
      control: "boolean",
      description: "Specifies that the input cannot be typed.",
    },
    removeTokenIcon: {
      control: "object",
      description: "Icon of the remove chip element in multiple mode.",
    },
    required: {
      control: "boolean",
      description:
        "Specifies that an input field must be filled out before submitting the form.",
    },
    scrollHeight: {
      control: "text",
      description: "Maximum height of the suggestions panel.",
    },
    selectedItemTemplate: {
      control: "object",
      description: "Template of a selected item.",
    },
    selectionLimit: {
      control: "number",
      description: "Number of maximum options that can be selected.",
    },
    showEmptyMessage: {
      control: "boolean",
      description: "Whether to show the empty message or not.",
    },
    size: {
      control: "number",
      description: "Size of the input field.",
    },
    style: {
      control: "object",
      description: "Inline style of the component.",
    },
    tabIndex: {
      control: "number",
      description: "Index of the element in tabbing order.",
    },
    tooltip: {
      control: "text",
      description: "Content of the tooltip.",
    },
    tooltipOptions: {
      control: "object",
      description: "Configuration of the tooltip.",
    },
    transitionOptions: {
      control: "object",
      description: "The properties of CSSTransition can be customized.",
    },
    type: {
      control: "text",
      description: "Type of the input element.",
    },
    unstyled: {
      control: "boolean",
      description: "Removes component related styles in the core.",
    },
    value: {
      control: "text",
      description: "Value of the component.",
    },
    variant: {
      control: { type: "select", options: ["filled", "outlined"] },
      description: "Specifies the input variant of the component.",
    },
    virtualScrollerOptions: {
      control: "object",
      description: "Whether to use the virtualScroller feature.",
    },
  },
} as Meta;

const Template: StoryFn<AutoCompleteFieldProps> = (args) => (
  <AutoCompleteField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  suggestions: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
  placeholder: "Select an option",
  field: "label",
};

export const WithValue = Template.bind({});
WithValue.args = {
  value:1,
  suggestions: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
  placeholder: "Select an option",
  field: "label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  suggestions: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
  placeholder: "Select an option",
  field:"label",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  tooltip: "This is a tooltip",
  suggestions: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
  placeholder: "Select an option",
  field: "label",
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
  suggestions: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
  placeholder: "Select options",
  field: "label",
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  dropdown: true,
  suggestions: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
  placeholder: "Select an option",
  field: "label",
};

export const WithLoadingIcon = Template.bind({});
WithLoadingIcon.args = {
  loadingIcon: "pi pi-spinner",
  suggestions: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
  placeholder: "Select an option",
  field: "label",
};

export const WithItemTemplate = Template.bind({});
WithItemTemplate.args = {
  itemTemplate: (item) => <div className="text-green-500"> {item.label}</div>,
  suggestions: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
  placeholder: "Select an option",
  field: "label",
};

export const WithPanelFooterTemplate = Template.bind({});
WithPanelFooterTemplate.args = {
  panelFooterTemplate: () => <div className="p-2">Footer Content</div>,
  suggestions: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
  placeholder: "Select an option",
  field: "label",
};

export const WithVirtualScroller = Template.bind({});
WithVirtualScroller.args = {
  virtualScrollerOptions: { itemSize: 38 },
  suggestions: Array.from({ length: 1000 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: i + 1,
  })),
  placeholder: "Select an option",
  field: "label",
};

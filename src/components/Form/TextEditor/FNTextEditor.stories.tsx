import { Meta, StoryFn } from "@storybook/react";
import FNTextEditor, { FNTextEditorProps } from "./FNTextEditor";

export default {
  title: "Components/Form/FNTextEditor",
  component: FNTextEditor,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "The content value of the editor",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the editor is read-only",
    },
    height: {
      control: "text",
      description: "Height of the editor",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the editor container",
    },
    onTextChange: {
      action: "textChange",
      description: "Callback function triggered when the text changes",
    },
  },
} as Meta;

const Template: StoryFn<FNTextEditorProps> = (args) => (
  <FNTextEditor {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "Default text",
  readOnly: false,
  height: "320px",
  className: "",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: "Read-only text",
  readOnly: true,
  height: "320px",
  className: "",
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  value: "Text with custom height",
  readOnly: false,
  height: "500px",
  className: "",
};
export const WithHeaderTemplate = Template.bind({});
WithHeaderTemplate.args = {
  value: "Text with Custom header template",
  readOnly: false,
  height: "320px",
  className: "",
  headerTemplate: (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="Bold"></button>
      <button className="ql-italic" aria-label="Italic"></button>
      <button className="ql-underline" aria-label="Underline"></button>
    </span>
  ), // Provide a header template
};

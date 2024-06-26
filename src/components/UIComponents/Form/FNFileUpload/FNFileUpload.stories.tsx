import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import FNFileUpload, { FNFileUploadProps } from "./FNFileUpload";

export default {
  title: "Components/Form/FileUpload",
  component: FNFileUpload,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Custom CSS class name for the component.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the file upload input when set to true.",
    },
    unstyled: {
      control: "boolean",
      description: "Removes default styling when set to true.",
    },
    value: {
      control: "text",
      description: "Initial value of the file input.",
    },
    variant: {
      control: {
        type: "select",
        options: ["filled", "outlined"],
      },
      description: "Defines the style variant of the component.",
    },
    name: {
      control: "text",
      defaultValue: "file",
      description: "Name attribute for the file input.",
    },
    url: {
      control: "text",
      description: "URL to which the files will be uploaded.",
    },
    multiple: {
      control: "boolean",
      description: "Allows selection of multiple files when set to true.",
    },
    accept: {
      control: "text",
      description: "Specifies the types of files that the server accepts.",
    },
    auto: {
      control: "boolean",
      description: "Automatically uploads files upon selection when set to true.",
    },
    maxFileSize: {
      control: "number",
      description: "Maximum file size in bytes that can be uploaded.",
    },
    emptyTemplate: {
      control: "text",
      description: "Template to display when no files are uploaded.",
    },
    label: {
      control: "text",
      description: "Label for the file upload component.",
    },
    helpText: {
      control: "text",
      description: "Additional help text displayed below the input.",
    },
    uploadLabel: {
      control: "text",
      description: "Label for the upload button.",
    },
    progressBarTemplate: {
      control: "text",
      description: "Custom template for the progress bar.",
    },
    previewWidth: {
      control: "number",
      description: "Width of the file preview thumbnail in pixels.",
    },
    pt: {
      control: "object",
      description: "PassThrough options for customization.",
    },
    ptOptions: {
      control: "object",
      description: "Additional PassThrough options.",
    },
    mode: {
      control: {
        type: "select",
        options: ["basic", "advanced"],
      },
      description: "Defines the upload mode, either basic or advanced.",
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
      description: "Specifies the size of the file input.",
    },
  },
} as Meta;

const Template: StoryFn<FNFileUploadProps> = (args: any) => (
  <FNFileUpload {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Please upload your files here",
  mode: "basic",
};

export const Advanced = Template.bind({});
Advanced.args = {
  label: "Please upload your files here",
  mode: "advanced",
};
export const Auto = Template.bind({});
Auto.args = {
  label: "Please upload your files here",
  mode: "advanced",
  auto:true,
};
export const Accept = Template.bind({});
Accept.args = {
  label: "Please upload your files here",
  mode: "advanced",
  accept: "image/*",
};

export const SingleImage = Template.bind({});
SingleImage.args = {
  label: "Please upload your files here",
  mode: "advanced",
  multiple: false,
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: "Please upload your files here",
  mode: "advanced",
  multiple: true,
};

export const MaxFileSize = Template.bind({});
MaxFileSize.args = {
  label: "Please upload your files here",
  mode: "advanced",
  multiple: true,
  maxFileSize: 1000000, // 1MB
};

export const HelpText = Template.bind({});
HelpText.args = {
  label: "Please upload your files here",
  mode: "advanced",
  multiple: true,
  helpText: "Please upload your files here",
};

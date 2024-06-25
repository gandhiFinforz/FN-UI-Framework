import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import FNConfirmDialog, { FNConfirmDialogProps } from "./FNConfirmDialog";
import { Button } from "primereact/button";

export default {
  title: "Components/Panel/ConfirmDialog",
  component: FNConfirmDialog,
  tags: ["autodocs"],
  argTypes: {
    header: { control: "text", description: "Header of the dialog" },
    message: {
      control: "text",
      description: "Message to be displayed in the dialog",
    },
    visible: { control: "boolean", description: "Visibility of the dialog" },
    acceptLabel: {
      control: "text",
      description: "Label for the accept button",
    },
    rejectLabel: {
      control: "text",
      description: "Label for the reject button",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the dialog",
    },
    width: { control: "text", description: "Width of the dialog" },
    height: { control: "text", description: "Height of the dialog" },
    position: { control: "text", description: "Position of the dialog" },
    accept: {
      action: "accept",
      description: "Function to call when the accept button is clicked",
    },
    reject: {
      action: "reject",
      description: "Function to call when the reject button is clicked",
    },
  },
} as Meta;

const Template: StoryFn<FNConfirmDialogProps> = (args) => {
  const [visible, setVisible] = useState(args.visible);

  const handleAccept = () => {
    setVisible(false);
    args.accept?.();
  };

  const handleReject = () => {
    setVisible(false);
    args.reject?.();
  };

  const handleClick = () => setVisible(true);

  return (
    <>
      <Button label="Show ConfirmDialog" onClick={handleClick} />
      <FNConfirmDialog
        {...args}
        visible={visible}
        accept={handleAccept}
        reject={handleReject}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  header: "Delete Confirmation",
  message: "Are you sure you want to delete this record?",
  visible: false,
};

export const CustomButtonName = Template.bind({});
CustomButtonName.args = {
  header: "Confirmation",
  message: "Do you want to proceed with this action?",
  visible: false,
  acceptLabel: "Proceed",
  rejectLabel: "Cancel",
  className: "",
};

export const CustomPositionChange = Template.bind({});
CustomPositionChange.args = {
  header: "Confirmation",
  message: "This popup will open from top left!..",
  visible: false,
  acceptLabel: "Proceed",
  rejectLabel: "Cancel",
  position: "top-left",
};
export const CustomWidthHieghtSet = Template.bind({});
CustomWidthHieghtSet.args = {
  header: "Confirmation",
  message: "Custom Width and Height Set",
  visible: false,
  acceptLabel: "Proceed",
  rejectLabel: "Cancel",
  position: "top-left",
  width: "400px",
  height: "300px",
};

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import FNDialog, { FNDialogProps } from "./FNDialog";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default {
  title: "Components/Panel/FNDialog",
  component: FNDialog,
  tags: ["autodocs"],
  argTypes: {
    header: {
      control: "text",
      description: "The header of the dialog.",
    },
    content: {
      control: "text",
      description: "The content of the dialog.",
    },
    visible: {
      control: "boolean",
      description: "Controls the visibility of the dialog.",
    },
    footerButtons: {
      control: "object",
      description: "Array of button objects to be rendered in the footer.",
    },
    className: {
      control: "text",
      description: "CSS class name for the dialog.",
    },
    style: {
      control: "object",
      description: "Inline styles for the dialog.",
    },
  },
} as Meta;

const Template: StoryFn<FNDialogProps> = (args) => {
  const [visible, setVisible] = React.useState(args.visible);

  const handleHide = () => {
    setVisible(false);
    if (args.onHide) args.onHide();
  };

  const handleButtonClick = (onClick: () => void) => {
    onClick();
    handleHide();
  };
  const footerButtons = args.footerButtons || [];

  return (
    <>
      <Button label="Show Dialog" onClick={() => setVisible(true)} />
      <FNDialog
        {...args}
        visible={visible}
        onHide={handleHide}
        footerButtons={footerButtons.map((button) => ({
          ...button,
          onClick: () => handleButtonClick(button.onClick),
        }))}
      />
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  header: "Basic Dialog",
  content: "This is a basic dialog with default settings.",
  visible: false,
  footerButtons: [
    {
      label: "Close",
      icon: "pi pi-times",
      onClick: () => {},
      className: "p-button-text",
    },
  ],
};

export const WithMultipleButtons = Template.bind({});
WithMultipleButtons.args = {
  header: "Dialog with Multiple Buttons",
  content: "This dialog has multiple buttons in the footer.",
  visible: false,
  footerButtons: [
    {
      label: "Cancel",
      icon: "pi pi-times",
      onClick: () => {},
      className: "p-button-text",
    },
    {
      label: "Confirm",
      icon: "pi pi-check",
      onClick: () => {},
    },
  ],
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  header: "Custom Class Dialog",
  content: "This dialog has a custom CSS class applied.",
  visible: false,
  className: "my-custom-dialog",
  footerButtons: [
    {
      label: "OK",
      icon: "pi pi-check",
      onClick: () => {},
    },
  ],
};

export const WithStyledContent = Template.bind({});
WithStyledContent.args = {
  header: "Styled Content Dialog",
  content: <div style={{ color: "red" }}>This is styled content.</div>,
  visible: false,
  footerButtons: [
    {
      label: "Close",
      icon: "pi pi-times",
      onClick: () => {},
      className: "p-button-text",
    },
  ],
};

export const PersistentVisibility = Template.bind({});
PersistentVisibility.args = {
  header: "Persistent Visibility Dialog",
  content: "This dialog's visibility is controlled externally.",
  visible: true,
  footerButtons: [
    {
      label: "Close",
      icon: "pi pi-times",
      onClick: () => {},
      className: "p-button-text",
    },
  ],
};

export const NoFooterButtons = Template.bind({});
NoFooterButtons.args = {
  header: "No Footer Buttons Dialog",
  content: "This dialog has no footer buttons.",
  visible: false,
};

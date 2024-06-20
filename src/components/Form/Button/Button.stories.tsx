import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FNButton, { PrimeButtonProps } from './Button';
import 'primereact/resources/themes/saga-blue/theme.css'; // import theme
import 'primereact/resources/primereact.min.css';          // import styles
import 'primeicons/primeicons.css';

export default {
  title: "Components/Form/Button",
  component: FNButton,
  tags: ["autodocs"],
  argTypes: {
    badge: { control: "text", description: "Value of the badge." },
    badgeClassName: {
      control: "text",
      description: "Style class of the badge.",
    },
    icon: {
      control: "text",
      description: "Name of the icon or JSX.Element for icon.",
    },
    iconPos: {
      control: { type: "select", options: ["left", "top", "bottom", "right"] },
      description: "Position of the icon.",
    },
    label: { control: "text", description: "Text of the button." },
    link: {
      control: "boolean",
      description: "Add a link style to the button.",
    },
    loading: {
      control: "boolean",
      description: "Display loading icon of the button.",
    },
    loadingIcon: {
      control: "text",
      description: "Name of the loading icon or JSX.Element for loading icon.",
    },
    outlined: {
      control: "boolean",
      description: "Add a border class without a background initially.",
    },
    plain: {
      control: "boolean",
      description:
        "Add a plain textual class to the button without a background initially.",
    },
    pt: {
      control: "object",
      description:
        "Uses to pass attributes to DOM elements inside the component.",
    },
    ptOptions: {
      control: "object",
      description: "Used to configure passthrough options of the component.",
    },
    raised: {
      control: "boolean",
      description: "Add a shadow to indicate elevation.",
    },
    rounded: {
      control: "boolean",
      description: "Add a circular border radius to the button.",
    },
    severity: {
      control: {
        type: "select",
        options: ["success", "help", "warning", "secondary", "info", "danger"],
      },
      description: "Defines the style of the button.",
    },
    size: {
      control: { type: "select", options: ["small", "large"] },
      description: "Defines the size of the button.",
    },
    text: {
      control: "boolean",
      description:
        "Add a textual class to the button without a background initially.",
    },
    tooltip: { control: "text", description: "Content of the tooltip." },
    tooltipOptions: {
      control: "object",
      description: "Configuration of the tooltip.",
    },
    unstyled: {
      control: "boolean",
      description:
        "When enabled, it removes component related styles in the core.",
    },
    visible: {
      control: "boolean",
      description:
        "When present, it specifies that the element should be visible.",
    },
  },
} as Meta;

const Template: StoryFn<PrimeButtonProps> = (args) => <FNButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Submit',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Save',
  icon: 'pi pi-check',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading',
  loading: true,
};

export const LinkStyle = Template.bind({});
LinkStyle.args = {
  label: 'Link Button',
  link: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined Button',
  outlined: true,
};

export const PlainText = Template.bind({});
PlainText.args = {
  label: 'Plain Text Button',
  plain: true,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: 'Small Button',
  size: 'small',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  label: 'Large Button',
  size: 'large',
};

export const SecondaryStyle = Template.bind({});
SecondaryStyle.args = {
  label: 'Secondary Button',
  severity: 'secondary',
};

export const WarningStyleRounded = Template.bind({});
WarningStyleRounded.args = {
  label: 'Warning Button',
  severity: 'warning',
  rounded: true,
};

export const InfoStyleDisabled = Template.bind({});
InfoStyleDisabled.args = {
  label: 'Info Button',
  severity: 'info',
  disabled: true,
};

export const DangerStyleWithIcon = Template.bind({});
DangerStyleWithIcon.args = {
  label: 'Danger Button',
  severity: 'danger',
  icon: 'pi pi-times',
};

export const CustomTooltip = Template.bind({});
CustomTooltip.args = {
  label: 'Button with Tooltip',
  tooltip: 'Click to perform an action',
  tooltipOptions: { position: 'bottom' },
};

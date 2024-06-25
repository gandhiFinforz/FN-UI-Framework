import { Meta, StoryFn } from "@storybook/react";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import FNTabs, { FNTab, FNTabsProps } from "./FNTab";

export default {
  title: "Components/Form/Tabs",
  component: FNTabs,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Custom CSS class name for styling the component.",
    },
    tabClassName: {
      control: "text",
      description: "Custom CSS class name for styling each tab.",
    },
    size: {
      control: { type: "select", options: ["sm", "md", "lg"] },
      description: "Specifies the size of the tabs.",
    },
    unstyled: {
      control: "boolean",
      description: "When true, removes component-related styles in the core.",
    },
    iconPosition: {
      control: { type: "select", options: ["right", "left"] },
      description: "Specifies the position of the icon in the tab header.",
    },
    disabled: {
      control: "boolean",
      description: "When true, the component is disabled.",
    },
    scrollable: {
      control: "boolean",
      description: "When true, the tabs are scrollable.",
    },
    closable: {
      control: "boolean",
      description: "When true, the tabs are closable.",
    },
    tabs: {
      control: "object",
      description:
        "Array of tab objects containing header, content, and other properties.",
    },
  },
} as Meta;

const Template: StoryFn<FNTabsProps> = (args) => <FNTabs {...args} />;

const scrollableTabs: FNTab[] = Array.from({ length: 15 }, (_, i) => ({
  header: `Tab ${i + 1}`,
  content: <p>Content for Tab {i + 1}</p>,
}));
const defaultTabs: FNTab[] = [
  {
    header: "Tab 1",
    content: <p>Content for Tab 1</p>,
  },
  {
    header: "Tab 2",
    content: <p>Content for Tab 2</p>,
  },
  {
    header: "Tab 3",
    content: <p>Content for Tab 3</p>,
  },
];
const disabledTabs: FNTab[] = [
  {
    header: "Tab 1",
    content: <p>Content for Tab 1</p>,
  },
  {
    header: "Tab 2 (Disabled)",
    content: <p>Content for Tab 2</p>,
    disabled: true,
  },
  {
    header: "Tab 3",
    content: <p>Content for Tab 3</p>,
  },
];
const tabWithIcon = [
  { header: "Tab 1", content: <div>Content 1</div>, icon: "pi pi-user" },
  { header: "Tab 2", content: <div>Content 2</div>, icon: "pi pi-calendar" },
  { header: "Tab 3", content: <div>Content 3</div>, icon: "pi pi-cog" },
];
const customHeaderTabs: FNTab[] = [
  {
    header: "Tab 1",
    content: <p>Content for Tab 1</p>,
    headerTemplate: (options) => (
      <div
        className="flex align-items-center gap-2 p-3"
        style={{ cursor: "pointer" }}
        onClick={options.onClick}
      >
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
        />
        <span className="font-bold white-space-nowrap">Amy Elsner</span>
      </div>
    ),
  },
  {
    header: "Tab 2",
    content: <p>Content for Tab 2</p>,
    headerTemplate: (options) => (
      <div
        className="flex align-items-center gap-2 p-3"
        style={{ cursor: "pointer" }}
        onClick={options.onClick}
      >
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
          shape="circle"
        />
        <span className="font-bold white-space-nowrap">Onyama Limba</span>
      </div>
    ),
  },
  {
    header: "Tab 3",
    content: <p>Content for Tab 3</p>,
    headerTemplate: (options) => (
      <div
        className="flex align-items-center gap-2 p-3"
        style={{ cursor: "pointer" }}
        onClick={options.onClick}
      >
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png"
          shape="circle"
        />
        <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
        <Badge value="2" />
      </div>
    ),
  },
];

export const Default = Template.bind({});
Default.args = {
  tabs: defaultTabs,
};
export const DisabledTabs = Template.bind({});
DisabledTabs.args = {
  tabs: disabledTabs,
};
export const TabWithIcon = Template.bind({});
TabWithIcon.args = {
  tabs: tabWithIcon,
};
export const TabWithIconPosition = Template.bind({});
TabWithIconPosition.args = {
  tabs: tabWithIcon,
  iconPosition: "right",
};

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  tabs: customHeaderTabs,
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  tabs: scrollableTabs,
  scrollable: true,
};

export const ClosableTabs = Template.bind({});
ClosableTabs.args = {
  tabs: scrollableTabs.map((tab) => ({ ...tab, closable: true })),
  closable: true,
};

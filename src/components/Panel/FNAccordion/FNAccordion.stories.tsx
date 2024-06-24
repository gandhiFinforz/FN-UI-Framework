import { StoryFn, Meta } from "@storybook/react";
import FNAccordion, { FNAccordionProps } from "./FNAccordion";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
export default {
  title: "Components/Panel/FNAccordion",
  component: FNAccordion,
  tags: ["autodocs"],
  argTypes: {
    tabs: { control: { disable: false } },
  },
} as Meta;

const Template: StoryFn<FNAccordionProps> = (args) => <FNAccordion {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  tabs: [
    { header: "Header 1", content: "Content for the first tab" },
    { header: "Header 2", content: "Content for the second tab" },
    {
      header: "Header 3",
      content: "Content for the third tab",
      disabled: true,
    },
  ],
};

export const SingleAccordion = Template.bind({});
SingleAccordion.args = {
  tabs: [{ header: "Single Tab", content: "Content of the single tab" }],
  multiple: false,
};

export const CustomIconsAccordion = Template.bind({});
CustomIconsAccordion.args = {
  tabs: [
    { header: "Header 1", content: "Content for the first tab" },
    { header: "Header 2", content: "Content for the second tab" },
  ],
  expandIcon: "pi pi-chevron-right",
  collapseIcon: "pi pi-chevron-down",
};

export const StyledAccordion = Template.bind({});
StyledAccordion.args = {
  tabs: [
    { header: "Header 1", content: "Content for the first tab" },
    { header: "Header 2", content: "Content for the second tab" },
  ],
  className: "border-round border-solid p-2",
};

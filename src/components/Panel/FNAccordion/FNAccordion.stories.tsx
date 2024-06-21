// FNAccordion.stories.tsx

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import FNAccordion, { FNAccordionProps } from "./FNAccordion";

export default {
  title: "Components/Panel/FNAccordion",
  component: FNAccordion,
  argTypes: {
    tabs: { control: { disable: true } },
  },
} as Meta;

const Template: StoryFn<FNAccordionProps> = (args) => <FNAccordion {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  tabs: [
    { header: "Header 1", content: "Content of tab 1" },
    { header: "Header 2", content: "Content of tab 2" },
    { header: "Header 3", content: "Content of tab 3", disabled: true },
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
    { header: "Header 1", content: "Content of tab 1" },
    { header: "Header 2", content: "Content of tab 2" },
  ],
  expandIcon: "pi pi-chevron-right",
  collapseIcon: "pi pi-chevron-down",
};

export const StyledAccordion = Template.bind({});
StyledAccordion.args = {
  tabs: [
    { header: "Header 1", content: "Content of tab 1" },
    { header: "Header 2", content: "Content of tab 2" },
  ],
  style: { border: "1px solid #ccc", borderRadius: "8px", padding: "10px" },
};

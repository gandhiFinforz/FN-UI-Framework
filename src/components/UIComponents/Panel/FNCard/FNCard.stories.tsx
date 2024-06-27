import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FNCard, { FNCardProps } from "./FNCard";

export default {
  title: "Components/Panel/Card",
  component: FNCard,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Used to get the child elements of the component.",
    },
    footer: {
      control: "text",
      description:
        "Footer of the card. Can be a ReactNode or a function that returns a ReactNode.",
    },
    header: {
      control: "text",
      description:
        "Header of the card. Can be a ReactNode or a function that returns a ReactNode.",
    },
    subTitle: {
      control: "text",
      description:
        "Secondary title of the card. Can be a ReactNode or a function that returns a ReactNode.",
    },
    title: {
      control: "text",
      description:
        "Title of the card. Can be a ReactNode or a function that returns a ReactNode.",
    },
    unstyled: {
      control: "boolean",
      description:
        "When enabled, it removes component related styles in the core.",
    },
  },
} as Meta;

const Template: StoryFn<FNCardProps> = (args) => (
  <FNCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  subTitle: "Card Subtitle",
  children: "Card content goes here.",
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: "Card Title",
  subTitle: "Card Subtitle",
  children: "Card content goes here.",
  footer: "Footer content goes here.",
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  header: "Header content goes here.",
  title: "Card Title",
  subTitle: "Card Subtitle",
  children: "Card content goes here.",
};

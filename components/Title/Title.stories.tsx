import { ComponentMeta, ComponentStory } from "@storybook/react";

import Title from "./Title";

export default {
  title: "Atoms/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Main = Template.bind({});
Main.args = {
  name: "Bolly is Cute Dog",
  type: "main",
};

export const Sub = Template.bind({});
Sub.args = {
  name: "TTochi is Cute Cat",
  type: "sub",
};

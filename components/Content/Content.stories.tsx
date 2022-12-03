import { ComponentMeta, ComponentStory } from "@storybook/react";

import Content from "./Content";

export default {
  title: "Atoms/Content",
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const Main = Template.bind({});
Main.args = {
  title: "TTochi is cute cat",
  content:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
  type: "main",
};

export const Sub = Template.bind({});
Sub.args = {
  title: "Ride a mountain",
  content: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  type: "sub",
};

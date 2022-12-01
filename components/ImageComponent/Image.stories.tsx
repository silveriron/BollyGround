import { ComponentMeta, ComponentStory } from "@storybook/react";

import Image from "./Image";

export default {
  title: "Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Large = Template.bind({});
Large.args = {
  width: 460,
  height: 300,
  src: "/img/bolly.jpeg",
  alt: "bolly",
};

export const Medium = Template.bind({});
Medium.args = {
  width: 420,
  height: 340,
  src: "/img/bolly.jpeg",
  alt: "bolly",
};

export const Small = Template.bind({});
Small.args = {
  width: 230,
  height: 160,
  src: "/img/bolly.jpeg",
  alt: "bolly",
};

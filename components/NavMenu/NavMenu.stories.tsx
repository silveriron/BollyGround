import { ComponentMeta, ComponentStory } from "@storybook/react";

import NavMenu from "./NavMenu";

export default {
  title: "Atoms/NavMenu",
  component: NavMenu,
} as ComponentMeta<typeof NavMenu>;

const Template: ComponentStory<typeof NavMenu> = (args) => (
  <NavMenu {...args} />
);

export const Home = Template.bind({});
Home.args = {
  isActive: true,
  name: "Home",
  href: "/",
  isDark: false,
};

export const About = Template.bind({});
About.args = {
  isActive: false,
  name: "About",
  href: "/about",
  isDark: false,
};

export const Story = Template.bind({});
Story.args = {
  isActive: false,
  name: "Story",
  href: "/story",
  isDark: false,
};

export const Ground = Template.bind({});
Ground.args = {
  isActive: false,
  name: "Ground",
  href: "/ground",
  isDark: false,
};

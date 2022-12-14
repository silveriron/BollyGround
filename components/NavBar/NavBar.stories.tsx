import { ComponentMeta, ComponentStory } from "@storybook/react";

import NavBar from "./NavBar";

export default {
  title: "UI/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar />;

export const Default = Template.bind({});
Default.parameters = {
  nextRouter: {
    path: "/about",
  },
};

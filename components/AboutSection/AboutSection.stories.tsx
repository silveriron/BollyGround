import { ComponentMeta, ComponentStory } from "@storybook/react";

import AboutSection from "./AboutSection";
import { aboutData } from "../../data/intro";
export default {
  title: "Template/About Section",
  component: AboutSection,
} as ComponentMeta<typeof AboutSection>;


const Template: ComponentStory<typeof AboutSection> = (args) => (
  <AboutSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  aboutData: aboutData,
};

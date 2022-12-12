import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DummyData } from "../../data/mainPage";

import StorySection from "./StorySection";

export default {
    title: 'Template/Story Section',
    component: StorySection,
} as ComponentMeta<typeof StorySection>

const Template: ComponentStory<typeof StorySection> = (args) => <StorySection {...args}/>

export const Default = Template.bind({})
Default.args = {
    posts: DummyData.posts
}
import { ComponentMeta, ComponentStory } from "@storybook/react";

import StoryDetail from "./StoryDetail";
import { DummyData } from "../../data/mainPage";

export default {
    title: "UI/StoryDetail",
    component: StoryDetail
} as ComponentMeta<typeof StoryDetail>

const Template: ComponentStory<typeof StoryDetail> = args => <StoryDetail {...args} />

export const Default = Template.bind({});
Default.args = {
    post: DummyData.posts[0]
}
import { ComponentMeta, ComponentStory } from "@storybook/react";

import StoryPage from "./StoryPage";
import { DummyData } from "../../data/mainPage";

export default {
    title: 'Pages/Story Page',
    component: StoryPage,
} as ComponentMeta<typeof StoryPage>

const Template: ComponentStory<typeof StoryPage> = args => <StoryPage {...args} />

export const Default = Template.bind({});
Default.args = {
    posts: DummyData.posts
}


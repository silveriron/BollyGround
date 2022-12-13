import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DummyData } from "../../data/mainPage";

import PostItem from "./PostItem";

export default {
    title: 'UI/PostItem',
    component: PostItem
} as ComponentMeta<typeof PostItem>

const Template: ComponentStory<typeof PostItem> = (args) => <PostItem {...args} />

export const Default = Template.bind({});
Default.args = {
    post: DummyData.posts[0],
}

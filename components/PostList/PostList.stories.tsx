import { ComponentMeta, ComponentStory } from "@storybook/react";

import PostList from "./PostList";
import { DummyData } from "../../data/mainPage";

export default {
    title: 'UI/PostList',
    component: PostList,
} as ComponentMeta<typeof PostList>

const Template: ComponentStory<typeof PostList> = args => <PostList {...args} />

export const Default = Template.bind({});
Default.args = {
    posts: DummyData.posts
    ,
    size: 'nomal'
}

export const Search = Template.bind({});
Search.args = {
    posts: DummyData.posts,
    size: "large"
}
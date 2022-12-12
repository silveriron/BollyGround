import { ComponentMeta, ComponentStory } from "@storybook/react";

import PostItem from "./PostItem";

export default {
    title: 'UI/ArticleItem',
    component: PostItem
} as ComponentMeta<typeof PostItem>

const Template: ComponentStory<typeof PostItem> = (args) => <PostItem {...args} />

export const Default = Template.bind({});
Default.args = {
    title: 'Ride a mountain',
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
    thumbnail: '/img/thumbnail.png',
    timeStamp: '3 Days ago'
}

import { ComponentMeta, ComponentStory } from "@storybook/react";

import ArticleItem from "./ArticleItem";

export default {
    title: 'UI/ArticleItem',
    component: ArticleItem
} as ComponentMeta<typeof ArticleItem>

const Template: ComponentStory<typeof ArticleItem> = (args) => <div style={{maxWidth: "460px"}}><ArticleItem {...args} /></div>

export const Default = Template.bind({});
Default.args = {
    title: 'Ride a mountain',
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
    thumbnail: '/img/thumbnail.png',
    timeStamp: '3 Days ago'
}

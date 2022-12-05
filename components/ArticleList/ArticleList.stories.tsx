import { ComponentMeta, ComponentStory } from "@storybook/react";

import ArticleList from "./ArticleList";

export default {
    title: 'UI/articleList',
    component: ArticleList,
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = args => <ArticleList {...args} />

export const Default = Template.bind({});
Default.args = {
    articles: [
        {
            title: 'Ride a mountain',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
            thumbnail: '/img/thumbnail.png',
            timeStamp: '3 Days ago'
        },
        {
            title: 'Ride a mountain2',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
            thumbnail: '/img/thumbnail.png',
            timeStamp: '3 Days ago'
        },
        {
            title: 'Ride a mountain3',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
            thumbnail: '/img/thumbnail.png',
            timeStamp: '3 Days ago'
        }
    ]
}
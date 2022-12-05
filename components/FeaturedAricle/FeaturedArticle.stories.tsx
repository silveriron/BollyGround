import { ComponentMeta, ComponentStory } from "@storybook/react";

import FeaturedArticle from "./FeaturedArticle";

export default {
    title: 'UI/FeaturedArticle',
    component: FeaturedArticle,
} as ComponentMeta<typeof FeaturedArticle>

const Template: ComponentStory<typeof FeaturedArticle> = args => <FeaturedArticle {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Ride a mountain',
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    thumbnail: '/img/featured.png',
    timeStamp: '3 Days ago'
}
import { ComponentMeta, ComponentStory } from "@storybook/react";

import FeaturedPost from "./FeaturedPost";

export default {
    title: 'UI/FeaturedArticle',
    component: FeaturedPost,
} as ComponentMeta<typeof FeaturedPost>

const Template: ComponentStory<typeof FeaturedPost> = args => <FeaturedPost {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Ride a mountain',
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    thumbnail: '/img/featured.png',
    timeStamp: '3 Days ago'
}
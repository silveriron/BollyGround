import { ComponentMeta, ComponentStory } from "@storybook/react";

import RecommendItem from "./RecommendItem";

export default {
    title: 'UI/Recommend Item',
    component: RecommendItem
} as ComponentMeta<typeof RecommendItem>

const Template: ComponentStory<typeof RecommendItem> = args => <RecommendItem {...args} />

export const Default = Template.bind({});
Default.args = {
    title: "Ride a mountain",
    thumbnail: '/img/featured.png',
    timeStamp: '5 days ago'
}
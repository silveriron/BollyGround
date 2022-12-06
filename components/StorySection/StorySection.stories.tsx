import { ComponentMeta, ComponentStory } from "@storybook/react";

import StorySection from "./StorySection";

export default {
    title: 'Template/Story Section',
    component: StorySection,
} as ComponentMeta<typeof StorySection>

const Template: ComponentStory<typeof StorySection> = (args) => <StorySection {...args}/>

export const Default = Template.bind({})
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
        },
        {
            title: 'Ride a mountain',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
            thumbnail: '/img/featured.png',
            timeStamp: '3 Days ago',
            featured: true
        }
    ]
}
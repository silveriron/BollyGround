import { ComponentMeta, ComponentStory } from "@storybook/react";

import Carousel from "./Carousel";

export default {
    title: 'carousel',
    component: Carousel,
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = args => <Carousel {...args}/>

export const Default = Template.bind({})
Default.args = {
    items: [
        {
            src: '/img/carouselimage.png',
            alt: 'run dog',
        },
        {
            src: '/img/test.png',
            alt: 'run dog2'
        },
        {
            src: '/img/test2.png',
            alt: 'sleep dog'
        },
    ]
}


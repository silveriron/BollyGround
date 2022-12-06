import { ComponentMeta, ComponentStory } from "@storybook/react";

import IntroPhoto from "./IntroPhoto";
import { photoData } from "../../data/intro";

export default {
    title: 'UI/Intro Photo',
    component: IntroPhoto,
} as ComponentMeta<typeof IntroPhoto>

const Template: ComponentStory<typeof IntroPhoto> = args => <IntroPhoto {...args} />

export const Bolly = Template.bind({});
Bolly.args = {
    photos: photoData.bolly
}

export const TTochi = Template.bind({});
TTochi.args = {
    photos: photoData.ttochi
}


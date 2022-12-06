import { ComponentMeta, ComponentStory } from "@storybook/react";

import AboutPhoto from "./AboutPhoto";
import { photoData } from "../../data/intro";

export default {
    title: 'UI/About Photo',
    component: AboutPhoto,
} as ComponentMeta<typeof AboutPhoto>

const Template: ComponentStory<typeof AboutPhoto> = args => <AboutPhoto {...args} />

export const Bolly = Template.bind({});
Bolly.args = {
    photos: photoData.bolly
}

export const TTochi = Template.bind({});
TTochi.args = {
    photos: photoData.ttochi
}


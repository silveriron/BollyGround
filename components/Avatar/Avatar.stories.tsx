import { ComponentMeta, ComponentStory } from "@storybook/react";

import {Avatar} from "@mui/material"

export default {
    title: 'Atoms/Avatar',
    component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Large = Template.bind({});
Large.args = {
    alt: 'avartar',
    src: '/img/avatar.png',
    sx: {width: 56, height: 56},
}

export const Default = Template.bind({});
Default.args = {
    alt: 'avartar',
    src: '/img/avatar.png',
    sx: {width: 44, height: 44}
}

export const Small = Template.bind({});
Small.args = {
    alt: 'avartar',
    src: '/img/avatar.png',
    sx: {width: 36, height: 36},
}


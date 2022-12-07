import { ComponentMeta, ComponentStory } from "@storybook/react";

import {TextField} from '@mui/material'

export default {
    title: 'Atoms/Input',
    component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />

export const Outline = Template.bind({})
Outline.args = {
    id: 'outlined-basic',
    label: 'Search',
    variant: 'outlined',
}

export const Fill = Template.bind({})
Fill.args = {
    id: 'filled-basic',
    label: 'Search',
    variant: 'filled',
}
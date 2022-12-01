import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "@mui/material/Button"

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args)  => <Button {...args}>{args.children}</Button>

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    children: 'Button',
    variant: 'contained',
}


export const Outline = Template.bind({});
Outline.args = {
    children: "Button",
    color: "primary",
    variant: 'outlined',
}

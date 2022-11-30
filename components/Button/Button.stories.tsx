import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args  => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
    name: 'Click Me',
}

export const redButton = Template.bind({});
redButton.args = {
    name: 'Red',
    style: {backgroundColor: 'red', border: 'none', color: 'white'}
}

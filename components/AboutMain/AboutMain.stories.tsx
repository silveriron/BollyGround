import { ComponentMeta, ComponentStory } from "@storybook/react";

import AboutMain from "./AboutMain";

export default {
    title: 'UI/About Main Content',
    component: AboutMain,
} as ComponentMeta<typeof AboutMain>

const Template: ComponentStory<typeof AboutMain> = args => <AboutMain {...args} />

export const Bolly = Template.bind({})
Bolly.args = {
    category: 'bolly'
}

export const TTochi = Template.bind({})
TTochi.args = {
    category: 'ttochi'
}

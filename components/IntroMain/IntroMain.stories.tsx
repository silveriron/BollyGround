import { ComponentMeta, ComponentStory } from "@storybook/react";

import IntroMain from "./IntroMain";

export default {
    title: 'UI/Intro Main Content',
    component: IntroMain,
} as ComponentMeta<typeof IntroMain>

const Template: ComponentStory<typeof IntroMain> = args => <IntroMain {...args} />

export const Bolly = Template.bind({})
Bolly.args = {
    category: 'bolly'
}

export const TTochi = Template.bind({})
TTochi.args = {
    category: 'ttochi'
}

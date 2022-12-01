import { ComponentMeta, ComponentStory } from '@storybook/react'

import MainTitle from './MainTitle'

export default {
    title: 'MainTitle',
    component: MainTitle,
} as ComponentMeta<typeof MainTitle>

const Template: ComponentStory<typeof MainTitle> = args => <MainTitle {...args} />

export const Main = Template.bind({})
Main.args = {
    name: 'Bolly is Cute Dog'
}
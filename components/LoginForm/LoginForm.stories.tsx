import { ComponentMeta, ComponentStory } from "@storybook/react";

import LoginForm from "./LoginForm";

export default {
    title: 'UI/Login form',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm />

export const Default = Template.bind({}) 
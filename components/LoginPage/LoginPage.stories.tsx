import { ComponentMeta, ComponentStory } from "@storybook/react";

import LoginPage from "./LoginPage";

export default {
    title: 'Pages/Login page',
    component: LoginPage
} as ComponentMeta<typeof LoginPage>

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage/>

export const Default = Template.bind({})
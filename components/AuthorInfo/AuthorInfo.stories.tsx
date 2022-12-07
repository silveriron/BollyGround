import { ComponentMeta, ComponentStory } from "@storybook/react";

import AuthorInfo from "./AuthorInfo";

export default {
    title: 'UI/Author info',
    component: AuthorInfo
} as ComponentMeta<typeof AuthorInfo>

const Template: ComponentStory<typeof AuthorInfo> = args => <AuthorInfo />

export const Default = Template.bind({})
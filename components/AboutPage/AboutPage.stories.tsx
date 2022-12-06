import { ComponentMeta, ComponentStory } from "@storybook/react";

import AboutPage from "./AboutPage";

export default {
    title: 'Pages/About Page',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = args => <AboutPage />

export const Default = Template.bind({})

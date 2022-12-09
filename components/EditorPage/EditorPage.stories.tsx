import { ComponentMeta, ComponentStory } from "@storybook/react";

import EditorPage from "./EditorPage";

export default {
    title: 'Pages/Editor Page',
    component: EditorPage,
} as ComponentMeta<typeof EditorPage>

const Template: ComponentStory<typeof EditorPage> = () => <EditorPage />

export const Default = Template.bind({})
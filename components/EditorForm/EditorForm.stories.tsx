import { ComponentMeta, ComponentStory } from "@storybook/react";

import EditorForm from "./EditorForm";

export default {
    title: 'UI/Editor form',
    component: EditorForm,
} as ComponentMeta<typeof EditorForm>

const Template: ComponentStory<typeof EditorForm> = () => <EditorForm />

export const Default = Template.bind({})
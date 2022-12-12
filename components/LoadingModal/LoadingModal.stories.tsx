import { ComponentMeta, ComponentStory } from "@storybook/react";

import LoadingModal from "./LoadingModal";

export default {
    title: 'UI/LoadingModal',
    component: LoadingModal
} as ComponentMeta<typeof LoadingModal>

const Template: ComponentStory<typeof LoadingModal> = args => <LoadingModal {...args}/>

export const Default = Template.bind({});
Default.args = {
    isLoading: true
}
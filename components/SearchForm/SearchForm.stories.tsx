import { ComponentMeta, ComponentStory } from "@storybook/react";

import SearchForm from "./SearchForm";

export default {
    title: 'UI/SearchForm',
    component: SearchForm,
} as ComponentMeta<typeof SearchForm>

const Template: ComponentStory<typeof SearchForm> = args => <SearchForm />

export const Default = Template.bind({});

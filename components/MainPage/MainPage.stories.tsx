import { ComponentMeta, ComponentStory } from "@storybook/react";

import MainPage from "./MainPage";
import { DummyData } from "../../data/mainPage";


export default {
    title: 'Pages/Main Page',
    component: MainPage
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = args => <MainPage {...args} />

export const Default = Template.bind({});
Default.args = DummyData

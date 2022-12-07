import { ComponentMeta, ComponentStory } from "@storybook/react";

import AuthorInfo from "./AuthorInfo";
import { DummyData } from "../../data/mainPage";

export default {
    title: 'UI/Author info',
    component: AuthorInfo
} as ComponentMeta<typeof AuthorInfo>

const Template: ComponentStory<typeof AuthorInfo> = args => <AuthorInfo {...args} />

export const Default = Template.bind({})
Default.args = {
    author: DummyData.articles[0].author,
    timestamp: DummyData.articles[0].timeStamp
}

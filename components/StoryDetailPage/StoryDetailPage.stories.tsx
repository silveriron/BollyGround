import { ComponentMeta, ComponentStory } from "@storybook/react";

import StoryDetailPage from "./StoryDetailPage";
import { DummyData } from "../../data/mainPage";

export default {
    title: 'Pages/Story detail page',
    component: StoryDetailPage
} as ComponentMeta<typeof StoryDetailPage>

const Template: ComponentStory<typeof StoryDetailPage> = args => <StoryDetailPage {...args} />

export const Default = Template.bind({})
Default.args = {
    article: DummyData.articles[0],
    recommend: DummyData.articles
}
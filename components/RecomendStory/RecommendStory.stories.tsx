import { ComponentMeta, ComponentStory } from "@storybook/react";

import RecomendStory from "./RecommendStory";
import {DummyData} from '../../data/mainPage'

export default {
    title: 'UI/Recommend Story',
    component: RecomendStory
} as ComponentMeta<typeof RecomendStory>

const Template: ComponentStory<typeof RecomendStory> = args => <RecomendStory {...args} />

export const Default = Template.bind({});
Default.args = {
    articles:DummyData.articles
}
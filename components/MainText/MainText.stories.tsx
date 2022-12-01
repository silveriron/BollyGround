import { ComponentMeta, ComponentStory } from "@storybook/react";

import MainText from "./MainText";

export default {
    title: 'MainText',
    component: MainText,
} as ComponentMeta<typeof MainText>

const Template: ComponentStory<typeof MainText> = args => <MainText {...args} />

export const Main = Template.bind({});

Main.args = {
    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'
}
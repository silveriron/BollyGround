import { ComponentMeta, ComponentStory } from "@storybook/react";

import GroundSection from "./GroundSection";

export default {
    title: 'Template/Ground Section',
    component: GroundSection
} as ComponentMeta<typeof GroundSection>

const Template: ComponentStory<typeof GroundSection> = args => <GroundSection {...args} />

export const Default = Template.bind({})
Default.args = { 
  items: [
    {
      src: "/img/carouselimage.png",
      alt: "run dog",
    },
    {
      src: "/img/test.png",
      alt: "run dog2",
    },
    {
      src: "/img/test2.png",
      alt: "sleep dog",
    },
  ],
}

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import ToggleAbout from "./ToggleAbout";

export default {
    title: 'UI/Toggle About',
    component: ToggleAbout,
} as ComponentMeta<typeof ToggleAbout>

const Template: ComponentStory<typeof ToggleAbout> = () => {
    const [isBolly, setIsBolly] = useState(true)
    const changeState = (type: string) => {
        if (type === 'bolly') {
            setIsBolly(true);
        } else {
            setIsBolly(false)
        }
    }
    return <ToggleAbout isBolly={isBolly} changeState={changeState}/>
} 
    
export const Default = Template.bind({})
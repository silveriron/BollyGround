import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import ToggleIntro from "./ToggleIntro";

export default {
    title: 'UI/Toggle Intro',
    component: ToggleIntro,
} as ComponentMeta<typeof ToggleIntro>

const Template: ComponentStory<typeof ToggleIntro> = () => {
    const [isBolly, setIsBolly] = useState(true)
    const changeState = (type: string) => {
        if (type === 'bolly') {
            setIsBolly(true);
        } else {
            setIsBolly(false)
        }
    }
    return <ToggleIntro isBolly={isBolly} changeState={changeState}/>
} 
    
export const Default = Template.bind({})
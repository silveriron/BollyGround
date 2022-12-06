import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as IntroMainStories from '../IntroMain.stories'

const {Bolly} = composeStories(IntroMainStories)

test('render img, title and content', () => {
    render(<Bolly/>)

    const img = screen.getByRole('img');
    const title = screen.getByRole('heading')
})


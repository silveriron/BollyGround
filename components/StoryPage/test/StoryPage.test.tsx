import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react"; 

import * as StoryPageStories from '../StoryPage.stories'

const { Default } = composeStories(StoryPageStories)

test('render searchForm, article list', () => {
    render(<Default/>)

    expect(screen.getByRole('textbox'))
    expect(screen.getByRole('button'))
})
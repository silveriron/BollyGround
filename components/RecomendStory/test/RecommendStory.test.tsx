import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as RecommendStoryStories from '../RecommendStory.stories'

const { Default } = composeStories(RecommendStoryStories)

test('render story list', () => {
    render(<Default />)

    expect(screen.getAllByRole('heading')).toHaveLength(5)
    expect(screen.getAllByRole('img')).toHaveLength(4)
})
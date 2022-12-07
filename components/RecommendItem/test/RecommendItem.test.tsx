import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as RecommendItemStories from '../RecommendItem.stories'

const { Default } = composeStories(RecommendItemStories)

test('render items contains thumbnail, title, timestamp', () => {
    render(<Default/>)

    expect(screen.getByRole('img'))
    expect(screen.getByRole('heading'))
    expect(screen.getByText(/days/i))
})
import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as StoryDetailStories from '../StoryDetail.stories'

const { Default } = composeStories(StoryDetailStories)

test('render title, content', () => {
    render(<Default/>)

    expect(screen.getByRole('heading'));
    expect(screen.getByText(/Lorem/i));
})


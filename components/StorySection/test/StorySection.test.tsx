import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as StorySectionStories from '../StorySection.stories'

const {Default} = composeStories(StorySectionStories)

test('render Story section, 4 articles', () => {
    render(<Default/>)

    const title = screen.getAllByRole('heading')

    expect(title).toHaveLength(4);
})

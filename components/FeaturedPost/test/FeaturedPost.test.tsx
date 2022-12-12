import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as FeaturedPostStories from '../FeaturedPost.stories'

const { Default } = composeStories(FeaturedPostStories)

test('render Featured Post', () => {
    render(<Default/>)

    const thumbnail = screen.getByRole('img');
    const title = screen.getByRole('heading');
    const desc = screen.getByText(/popular/i);
    const timeStamp = screen.getByText(/ago/i);

    expect(thumbnail).not.toBe(null);
    expect(title).not.toBe(null);
    expect(desc).not.toBe(null);
    expect(timeStamp).not.toBe(null);
})
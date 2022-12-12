import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as PostItemStories from '../PostItem.stories'

const { Default } = composeStories(PostItemStories)

test('render thumbnail, title, description, timestamp', () => {
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
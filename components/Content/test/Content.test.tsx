import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as ContentStories from '../Content.stories'

const {Main} = composeStories(ContentStories)

test('render content', () => {
    render(<Main/>)

    const title = screen.getByRole('heading');
    const text = screen.getByText(/popular/i)

    expect(title).not.toBe(null);
    expect(text).not.toBe(null);
})
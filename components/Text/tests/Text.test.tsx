import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as TextStories from '../Text.stories'

const { Main } = composeStories(TextStories)

test('main text', () => {
    render(<Main/>);

    expect(screen.getByText(/popular/i))
})
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as MainTextStories from '../MainText.stories'

const { Main } = composeStories(MainTextStories)

test('main text', () => {
    render(<Main/>);

    expect(screen.getByText(/popular/i))
})
import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as InputStories from '../Input.stories'

const { Outline } = composeStories(InputStories)

test('render input', () => {
    render(<Outline/>)

    expect(screen.getByRole('textbox'))
})
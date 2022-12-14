import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStories } from "@storybook/testing-react";

import * as ToggleAboutStories from '../ToggleAbout.stories'

const { Default } = composeStories(ToggleAboutStories)

test('render two button, toggle', () => {
    render(<Default/>)

    const bollyButton = screen.getByRole('button', {name: /bolly/i})
    const ttochiButton = screen.getByRole('button', {name: /ttochi/i})
})
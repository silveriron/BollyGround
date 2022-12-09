import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as EditorFormStories from '../EditorForm.stories'

const { Default } = composeStories(EditorFormStories)

test('render editor form', () => {
    render(<Default/>)

    const titleInput = screen.getByRole('textbox', {name: /title/i})
    const descInput = screen.getByRole('textbox', {name: /description/i})
    const thumbnailInput = screen.getByLabelText(/thumbnail/i)
    const contentInput = screen.getByRole('textbox', {name: /content/i})

    expect(titleInput)
    expect(descInput)
    expect(thumbnailInput)
    expect(contentInput)
})
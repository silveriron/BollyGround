import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as SearchFormStories from '../SearchForm.stories'

const {Default} = composeStories(SearchFormStories)

test('render input and button', () => {
    render(<Default/>)

    expect(screen.getByRole('textbox'))
    expect(screen.getByRole('button'))
})
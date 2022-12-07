import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as AuthorInfoStories from '../AuthorInfo.stories'

const { Default } = composeStories(AuthorInfoStories)

test('render author info component contains avatar, name, timestamp', () => {
    render(<Default />)

    expect(screen.getByRole('img'))
    expect(screen.getByText(/peter/i))
    expect(screen.getByText(/days/i))
})
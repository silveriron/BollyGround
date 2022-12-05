import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as GroundSectionStories from '../GroundSection.stories'

const { Default} = composeStories(GroundSectionStories)

test('render Ground Section', () => {
    render(<Default/>)

    const logo = screen.getAllByRole('link', {name: /bolly/i})
    const contactUs = screen.getAllByRole('link', {name: /contact/i})

    expect(logo).not.toBe(null)
    expect(contactUs).not.toBe(null)
})
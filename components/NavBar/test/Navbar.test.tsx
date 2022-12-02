import { getAllByRole, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as NavBarStories from '../NavBar.stories'

const {Default} = composeStories(NavBarStories)

test('render NavMenu', () => {
    render(<Default/>)

    const navMenu = screen.getAllByRole('link');

    expect(navMenu).toHaveLength(4);
})
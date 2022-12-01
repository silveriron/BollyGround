import { render, screen } from "@testing-library/react";
import {composeStories} from '@storybook/testing-react'

import * as NavMenuStories from '../NavMenu.stories'

const {Home} = composeStories(NavMenuStories)


test('menu appears', () => {
    render(<Home/>);

    expect(screen.getByRole('link', {name: /home/i}))
})
import {render, screen} from "@testing-library/react"
import { composeStories } from "@storybook/testing-react"

import * as MainTitleStories from '../MainTitle.stories' 

const {Main} = composeStories(MainTitleStories)

test('Main', () => {
    render(<Main/>)

    expect(screen.getByRole('heading', {name: /bolly/i}))
})
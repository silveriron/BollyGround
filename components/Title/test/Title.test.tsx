import {render, screen} from "@testing-library/react"
import { composeStories } from "@storybook/testing-react"

import * as TitleStories from '../Title.stories' 

const {Main} = composeStories(TitleStories)

test('Main', () => {
    render(<Main/>)

    expect(screen.getByRole('heading', {name: /bolly/i}))
})
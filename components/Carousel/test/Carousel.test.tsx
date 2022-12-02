import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { composeStories } from "@storybook/testing-react";

import * as CarouselStories from '../Carousel.stories'

const {Default} = composeStories(CarouselStories)

test('render test', async () => {
    render(<Default/>)

    const carouselImage = screen.getByRole('img')
    expect(carouselImage).not.toBe(null)
})

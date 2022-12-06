import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as IntroPhotoStories from '../IntroPhoto.stories'

const { Bolly } = composeStories(IntroPhotoStories)

test('render image', () => {
    render(<Bolly />)

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(4);
})
import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as AboutPhotoStories from '../AboutPhoto.stories'

const { Bolly } = composeStories(AboutPhotoStories)

test('render image', () => {
    render(<Bolly />)

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(4);
})